import React__default, { useCallback, useState, useRef, useEffect } from 'react';
import { S as SceneView } from './SceneView-0dbbd709.js';
import { u as useAdapter } from './StableGuidRngProvider-c9a58eb4.js';
import { c6 as memoizeFunction, c7 as mergeStyleSets, bX as useTheme, cf as ActionButton, G as GlobeTheme, eh as hexToColor4, ei as rgb2hsv, ej as rgb2hex, ek as hsv2rgb } from './Interfaces-8fb2a33a.js';
import { s as styleInject, B as BaseComponent } from './BaseComponent-cb0a4bca.js';
import { w as withErrorBoundary } from './ErrorBoundary-350d7d3a.js';

var css_248z = ".cb-adt-3dglobe-wrapper {\n  height: 100%;\n  width: 100%; }\n";
styleInject(css_248z);

var ModelLabelClassPrefix = 'cb-model-label';
var classNames = {
    badge: ModelLabelClassPrefix + "-badge"
};
var getStyles = memoizeFunction(function (theme) {
    return mergeStyleSets({
        badge: [
            classNames.badge,
            {
                borderRadius: 25,
                background: theme.semanticColors.buttonBackground,
                padding: '8px 16px',
                border: "1px solid " + theme.palette.neutralLight,
                color: theme.semanticColors.bodyText,
                width: 'fit-content'
            }
        ]
    });
});

var ModelLabel = function (_a) {
    var label = _a.label, id = _a.id, onLabelClick = _a.onLabelClick;
    var theme = useTheme();
    var styles = getStyles(theme);
    var onClick = useCallback(function () {
        if (onLabelClick && id) {
            onLabelClick(id);
        }
    }, [onLabelClick]);
    return (React__default.createElement(ActionButton, { onClick: onClick, className: styles.badge }, label));
};

var blues = ['#174576', '#276EB5']; // Sea and darkest color - rest are interpolated
var yellows = ['#8C7E25', '#C0A03D'];
var greys = ['#464241', '#6E6E6E']; // greys are calculated in code
var ADT3DGlobe = function (_a) {
    var adapter = _a.adapter, onSceneClick = _a.onSceneClick, _b = _a.globeTheme, globeTheme = _b === void 0 ? GlobeTheme.Blue : _b;
    var _c = useState([]), markers = _c[0], setMarkers = _c[1];
    var _d = useState([]), coloredMeshes = _d[0], setColoredMeshes = _d[1];
    var sceneRef = useRef(null);
    var config = useAdapter({
        adapterMethod: function () { return adapter.getScenesConfig(); },
        refetchDependencies: [adapter]
    });
    var onLabelClick = useCallback(function (id) {
        var _a, _b, _c, _d;
        if (id) {
            var scene = (_d = (_c = (_b = (_a = config.adapterResult.result) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.configuration) === null || _c === void 0 ? void 0 : _c.scenes) === null || _d === void 0 ? void 0 : _d.find(function (scene) { return (scene === null || scene === void 0 ? void 0 : scene.id) === id; });
            if (scene) {
                onSceneClick(scene);
            }
        }
    }, [config.adapterResult.result]);
    useEffect(function () {
        var _a, _b, _c;
        var markers = [];
        var scenes = (_c = (_b = (_a = config.adapterResult.result) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.configuration) === null || _c === void 0 ? void 0 : _c.scenes;
        if (scenes) {
            for (var _i = 0, scenes_1 = scenes; _i < scenes_1.length; _i++) {
                var scene = scenes_1[_i];
                if (scene.latitude && scene.longitude) {
                    markers.push(createMarker(scene));
                }
            }
            setMarkers(markers);
        }
    }, [config.adapterResult.result]);
    var createMarker = function (scene) {
        var id = 'cb-label-' + scene.id;
        var marker = {
            scene: scene,
            id: id,
            latitude: scene.latitude || 0,
            longitude: scene.longitude || 0,
            name: scene.displayName || 'Unknown',
            allowGrouping: true,
            UIElement: (React__default.createElement(ModelLabel, { id: scene.id, label: scene.displayName, onLabelClick: function (id) { return onLabelClick(id); } }))
        };
        return marker;
    };
    var updateTheme = function (scene) {
        var _a;
        sceneRef.current = sceneRef.current || scene;
        if (sceneRef.current) {
            var mi = [];
            var colors = blues;
            switch (globeTheme) {
                case GlobeTheme.Blue:
                    colors = blues;
                    break;
                case GlobeTheme.Yellow:
                    colors = yellows;
                    break;
                case GlobeTheme.Grey:
                    colors = greys;
                    break;
            }
            var ct = -2;
            var baseColor = hexToColor4(colors[1]);
            var baseHSV = rgb2hsv(baseColor.r, baseColor.g, baseColor.b);
            for (var _i = 0, _b = sceneRef.current.meshes; _i < _b.length; _i++) {
                var mesh = _b[_i];
                if ((_a = mesh === null || mesh === void 0 ? void 0 : mesh.name) === null || _a === void 0 ? void 0 : _a.startsWith('Region')) {
                    ct += 2;
                    if (ct >= 14) {
                        ct = 1;
                    }
                    if (globeTheme === GlobeTheme.Grey) {
                        var n = Math.floor((ct / 13) * 100 + 100);
                        var color = rgb2hex(n, n, n);
                        mi.push({ meshId: mesh.id, color: '#' + color });
                    }
                    else {
                        var s = (ct / 13) * 62 + 12;
                        var col = hsv2rgb(baseHSV.h, s, 100);
                        var color = rgb2hex(col.r, col.g, col.b);
                        mi.push({ meshId: mesh.id, color: '#' + color });
                    }
                }
                else if (mesh.name.startsWith('Sea')) {
                    mi.push({ meshId: mesh.id, color: colors[0] });
                }
            }
            setColoredMeshes(mi);
        }
    };
    useEffect(function () {
        updateTheme(null);
    }, [globeTheme]);
    return (React__default.createElement(BaseComponent, { isLoading: config.isLoading && config.adapterResult.hasNoData(), adapterResults: [config.adapterResult] },
        React__default.createElement("div", { className: "cb-adt-3dglobe-wrapper" },
            React__default.createElement(SceneView, { modelUrl: "Globe", markers: markers, onSceneLoaded: updateTheme, coloredMeshItems: coloredMeshes }))));
};
var ADT3DGlobe$1 = withErrorBoundary(ADT3DGlobe);

export { ADT3DGlobe$1 as A };
//# sourceMappingURL=ADT3DGlobe-b0bb51df.js.map
