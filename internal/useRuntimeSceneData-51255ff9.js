import { useState, useEffect } from 'react';
import { e3 as createSeededGUID, bw as createGUID, a6 as DEFAULT_REFRESH_RATE_IN_MILLISECONDS, cr as deepCopy, bp as ViewerConfigUtility, bo as __spreadArray, bq as getDebugLogger } from './Interfaces-8fb2a33a.js';
import { h as useStableGuidRng, u as useAdapter } from './StableGuidRngProvider-c9a58eb4.js';
import { s as shouldShowVisual, h as hasBadge } from './VisualRuleUtils-57055cf0.js';

var useGuid = function () {
    var stableGuidRng = useStableGuidRng();
    var guid = useState(stableGuidRng ? createSeededGUID(stableGuidRng) : createGUID())[0];
    return guid;
};

var debugLogging = false;
var logDebugConsole = getDebugLogger('useRuntimeSceneData', debugLogging);
var useRuntimeSceneData = function (adapter, sceneId, scenesConfig, 
/** Optional array of layer Ids to apply SceneVisual behavior filtering */
selectedLayerIds) {
    if (selectedLayerIds === void 0) { selectedLayerIds = null; }
    var _a = useState(''), modelUrl = _a[0], setModelUrl = _a[1];
    var _b = useState(DEFAULT_REFRESH_RATE_IN_MILLISECONDS), pollingInterval = _b[0], setPollingInterval = _b[1];
    var _c = useState(null), lastRefreshTime = _c[0], setLastRefreshTime = _c[1];
    var _d = useState([]), sceneVisuals = _d[0], setSceneVisuals = _d[1];
    var _e = useState([]), sceneBadges = _e[0], setSceneBadges = _e[1];
    var sceneData = useAdapter({
        adapterMethod: function (args) {
            var _a;
            setLastRefreshTime(Date.now());
            return adapter.getSceneData(sceneId, scenesConfig, selectedLayerIds, (_a = args === null || args === void 0 ? void 0 : args.isManualRefresh) !== null && _a !== void 0 ? _a : false);
        },
        refetchDependencies: [sceneId, scenesConfig, selectedLayerIds],
        isLongPolling: true,
        pollingIntervalMillis: pollingInterval
    });
    /**
     * After getting ADT3DViewerData (including scene visuals along with 3d model URL) from adapter, parse it to
     * update the colored meshes ids based on run expressions in behaviors against the returned ADT twin property data
     *  */
    useEffect(function () {
        var _a, _b;
        if ((_b = (_a = sceneData === null || sceneData === void 0 ? void 0 : sceneData.adapterResult) === null || _a === void 0 ? void 0 : _a.result) === null || _b === void 0 ? void 0 : _b.data) {
            var sceneVisuals_1 = deepCopy(sceneData.adapterResult.result.data.sceneVisuals);
            if (selectedLayerIds) {
                var behaviorIdsInSelectedLayers_1 = ViewerConfigUtility.getBehaviorIdsInSelectedLayers(scenesConfig, __spreadArray([], selectedLayerIds), sceneId);
                // Apply layer filtering to behaviors - splice out behaviors not in selected layers
                sceneVisuals_1.forEach(function (sv) {
                    var filteredBehaviors = sv.behaviors.filter(function (b) {
                        return behaviorIdsInSelectedLayers_1.includes(b.id);
                    });
                    sv.behaviors = filteredBehaviors;
                });
            }
            var twinIds_1 = new Set();
            var badgeVisuals_1 = [];
            // for each scene visual retrieve the colored mesh ids and update it in the scene visual
            // if they are triggered by the element's behaviors and currently active
            sceneVisuals_1.forEach(function (sceneVisual) {
                var _a;
                sceneVisual.coloredMeshItems = [];
                for (var twinId in sceneVisual.twins) {
                    twinIds_1.add(sceneVisual.twins[twinId].$dtId);
                }
                (_a = sceneVisual.behaviors) === null || _a === void 0 ? void 0 : _a.forEach(function (behavior) {
                    var _a;
                    (_a = behavior.visuals) === null || _a === void 0 ? void 0 : _a.forEach(function (visual) {
                        if (!ViewerConfigUtility.isVisualRule(visual)) {
                            return;
                        }
                        visual.valueRanges.forEach(function (condition) {
                            var _a;
                            // Check if visual will be shown, then determine if it is a badge or coloring
                            if (shouldShowVisual(visual.valueRangeType, sceneVisual.twins, visual.valueExpression, condition.values)) {
                                if (hasBadge(condition)) {
                                    var badge = buildBadgeVisual(sceneVisual, behavior, condition.visual.iconName, condition.visual.color);
                                    badgeVisuals_1.push(badge);
                                }
                                else {
                                    (_a = sceneVisual.element.objectIDs) === null || _a === void 0 ? void 0 : _a.forEach(function (meshId) {
                                        var coloredMesh = {
                                            meshId: meshId,
                                            color: condition.visual.color
                                        };
                                        sceneVisual.coloredMeshItems.push(coloredMesh);
                                    });
                                }
                            }
                        });
                    });
                });
            });
            var groupedBadges_1 = [];
            badgeVisuals_1.forEach(function (badge) {
                // create first group
                if (groupedBadges_1.length === 0) {
                    groupedBadges_1.push({
                        id: badge.sceneViewBadge.meshId +
                            badge.sceneViewBadge.id,
                        element: badge.sceneVisual.element,
                        behaviors: badge.sceneVisual.behaviors,
                        twins: badge.sceneVisual.twins,
                        meshId: badge.sceneViewBadge.meshId,
                        badges: [badge.sceneViewBadge]
                    });
                }
                else {
                    var group = groupedBadges_1.find(function (ga) { return ga.meshId === badge.sceneViewBadge.meshId; });
                    // add to existing group
                    if (group) {
                        group.id += badge.sceneViewBadge.id;
                        group.badges.push(badge.sceneViewBadge);
                    }
                    else {
                        // create new group
                        groupedBadges_1.push({
                            id: badge.sceneViewBadge.meshId +
                                badge.sceneViewBadge.id,
                            element: badge.sceneVisual.element,
                            behaviors: badge.sceneVisual.behaviors,
                            twins: badge.sceneVisual.twins,
                            meshId: badge.sceneViewBadge.meshId,
                            badges: [badge.sceneViewBadge]
                        });
                    }
                }
            });
            // fetch the config
            var pollingConfig = ViewerConfigUtility.getPollingConfig(scenesConfig, sceneId);
            var computeInterval = function (twinCount, pollingConfig) {
                var fastestPossibleRefreshRateSeconds = twinCount * 500; // 2 twin/second
                var actualRefreshRateSeconds = pollingConfig.minimumPollingFrequency
                    ? Math.max(fastestPossibleRefreshRateSeconds, pollingConfig.minimumPollingFrequency)
                    : fastestPossibleRefreshRateSeconds;
                logDebugConsole('debug', "Computing refresh rate. FastestPossible: " + fastestPossibleRefreshRateSeconds + ". (Twins: " + twinCount + ") Actual: " + actualRefreshRateSeconds + ". Config: ", pollingConfig);
                return actualRefreshRateSeconds;
            };
            setPollingInterval(computeInterval(twinIds_1.size, pollingConfig));
            setModelUrl(sceneData.adapterResult.result.data.modelUrl);
            setSceneVisuals(sceneVisuals_1);
            setSceneBadges(groupedBadges_1);
        }
    }, [
        pollingInterval,
        sceneData.adapterResult.result,
        sceneId,
        scenesConfig,
        selectedLayerIds
    ]);
    return {
        modelUrl: modelUrl,
        sceneVisuals: sceneVisuals,
        sceneBadges: sceneBadges,
        isLoading: sceneData.isLoading,
        triggerRuntimeRefetch: function () {
            return sceneData.callAdapter({ isManualRefresh: true });
        },
        lastRefreshTime: lastRefreshTime,
        nextRefreshTime: lastRefreshTime + pollingInterval
    };
};
function buildBadgeVisual(sceneVisual, behavior, iconName, color) {
    var _a;
    var meshId = (_a = sceneVisual.element.objectIDs) === null || _a === void 0 ? void 0 : _a[0];
    var sceneViewBadge = {
        id: behavior.id,
        meshId: meshId,
        color: color,
        icon: iconName
    };
    return {
        sceneVisual: sceneVisual,
        sceneViewBadge: sceneViewBadge
    };
}

export { useRuntimeSceneData as a, useGuid as u };
//# sourceMappingURL=useRuntimeSceneData-51255ff9.js.map
