import { V as ViewerObjectStyle, ar as DefaultViewerModeObjectColor, aV as ViewerThemeStorageKey, bq as getDebugLogger, bS as useTranslation, au as ViewerModeBackgroundColors, as as ViewerModeObjectColors, bp as ViewerConfigUtility, cr as deepCopy, bk as __assign, dy as HEADER_BUTTON_HEIGHT, bY as FontSizes, b_ as styled, b$ as classNamesFunction, bX as useTheme, bV as IconButton, ca as css, d8 as Image, c2 as Stack, c6 as memoizeFunction, c7 as mergeStyleSets, cb as FocusZone, c as CameraInteraction, cp as Callout, cH as DirectionalHint, e1 as VIEWER_CAMERA_CONTROLS_BOTTOM_OFFSET, e2 as BUILDER_CAMERA_CONTROLS_BOTTOM_OFFSET, bK as __rest, aU as SelectedCameraInteractionKey, J as ADT3DAddInEventData, s as ADT3DAddInEventTypes } from './Interfaces-8fb2a33a.js';
import React__default, { useContext, useReducer, useMemo, useState, useEffect, useRef, useCallback } from 'react';
import { w as withErrorBoundary } from './ErrorBoundary-350d7d3a.js';
import { B as BaseComponent } from './BaseComponent-cb0a4bca.js';
import { c as createCustomMeshItems, S as SceneView, s as showFpsCounter } from './SceneView-0dbbd709.js';
import { f as fn } from './immer.esm-8bf4cc8a.js';

var img$2 = "data:image/svg+xml,%3csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M28 8.89062V25.1094L15 31.625L2 25.1094V8.89062L15 2.375L28 8.89062ZM15 4.625L5.23438 9.5L15 14.375L24.7656 9.5L15 4.625ZM4 23.875L14 28.8906V16.125L4 11.1094V23.875ZM26 23.875V11.1094L16 16.125V28.8906L26 23.875Z' fill='%2350E6FF'/%3e%3cpath d='M28 8.89062H28.8V8.39673L28.3585 8.17543L28 8.89062ZM28 25.1094L28.3585 25.8246L28.8 25.6033V25.1094H28ZM15 31.625L14.6415 32.3402L15 32.5199L15.3585 32.3402L15 31.625ZM2 25.1094H1.2V25.6033L1.64154 25.8246L2 25.1094ZM2 8.89062L1.64154 8.17543L1.2 8.39673V8.89062H2ZM15 2.375L15.3585 1.6598L15 1.48014L14.6415 1.6598L15 2.375ZM15 4.625L15.3573 3.90923L15 3.73086L14.6427 3.90923L15 4.625ZM5.23438 9.5L4.87706 8.78423L3.44323 9.5L4.87706 10.2158L5.23438 9.5ZM15 14.375L14.6427 15.0908L15 15.2691L15.3573 15.0908L15 14.375ZM24.7656 9.5L25.1229 10.2158L26.5568 9.5L25.1229 8.78423L24.7656 9.5ZM4 23.875H3.2V24.3687L3.64134 24.5901L4 23.875ZM14 28.8906L13.6413 29.6057L14.8 30.1869V28.8906H14ZM14 16.125H14.8V15.6313L14.3587 15.4099L14 16.125ZM4 11.1094L4.35866 10.3943L3.2 9.81314V11.1094H4ZM26 23.875L26.3587 24.5901L26.8 24.3687V23.875H26ZM26 11.1094H26.8V9.81314L25.6413 10.3943L26 11.1094ZM16 16.125L15.6413 15.4099L15.2 15.6313V16.125H16ZM16 28.8906H15.2V30.1869L16.3587 29.6057L16 28.8906ZM27.2 8.89062V25.1094H28.8V8.89062H27.2ZM27.6415 24.3942L14.6415 30.9098L15.3585 32.3402L28.3585 25.8246L27.6415 24.3942ZM15.3585 30.9098L2.35846 24.3942L1.64154 25.8246L14.6415 32.3402L15.3585 30.9098ZM2.8 25.1094V8.89062H1.2V25.1094H2.8ZM2.35846 9.60582L15.3585 3.0902L14.6415 1.6598L1.64154 8.17543L2.35846 9.60582ZM14.6415 3.0902L27.6415 9.60582L28.3585 8.17543L15.3585 1.6598L14.6415 3.0902ZM14.6427 3.90923L4.87706 8.78423L5.59169 10.2158L15.3573 5.34077L14.6427 3.90923ZM4.87706 10.2158L14.6427 15.0908L15.3573 13.6592L5.59169 8.78423L4.87706 10.2158ZM15.3573 15.0908L25.1229 10.2158L24.4083 8.78423L14.6427 13.6592L15.3573 15.0908ZM25.1229 8.78423L15.3573 3.90923L14.6427 5.34077L24.4083 10.2158L25.1229 8.78423ZM3.64134 24.5901L13.6413 29.6057L14.3587 28.1755L4.35866 23.1599L3.64134 24.5901ZM14.8 28.8906V16.125H13.2V28.8906H14.8ZM14.3587 15.4099L4.35866 10.3943L3.64134 11.8245L13.6413 16.8401L14.3587 15.4099ZM3.2 11.1094V23.875H4.8V11.1094H3.2ZM26.8 23.875V11.1094H25.2V23.875H26.8ZM25.6413 10.3943L15.6413 15.4099L16.3587 16.8401L26.3587 11.8245L25.6413 10.3943ZM15.2 16.125V28.8906H16.8V16.125H15.2ZM16.3587 29.6057L26.3587 24.5901L25.6413 23.1599L15.6413 28.1755L16.3587 29.6057Z' fill='%234C5EFB'/%3e%3cpath d='M3.2 10.4L14.4 16V29.6L3.2 24V10.4Z' fill='%2350E6FF'/%3e%3cpath d='M16 16L26.4 10.4V24L16 28.8V16Z' fill='%2350E6FF'/%3e%3cpath d='M15.2 4L24.8 9.6L15.2 14.4L4.8 9.6L15.2 4Z' fill='%2350E6FF'/%3e%3c/svg%3e";

var img$1 = "data:image/svg+xml,%3csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M28 8.89062V25.1094L15 31.625L2 25.1094V8.89062L15 2.375L28 8.89062ZM15 4.625L5.23438 9.5L15 14.375L24.7656 9.5L15 4.625ZM4 23.875L14 28.8906V16.125L4 11.1094V23.875ZM26 23.875V11.1094L16 16.125V28.8906L26 23.875Z' fill='%2350E6FF'/%3e%3cpath d='M3.2 10.4L14.4 16V29.6L3.2 24V10.4Z' fill='%2350E6FF' fill-opacity='0.3'/%3e%3cpath d='M16 16L26.4 10.4V24L16 28.8V16Z' fill='%2350E6FF' fill-opacity='0.3'/%3e%3cpath d='M15.2 4L24.8 9.6L15.2 14.4L4.8 9.6L15.2 4Z' fill='%2350E6FF' fill-opacity='0.3'/%3e%3c/svg%3e";

var img = "data:image/svg+xml,%3csvg width='26' height='30' viewBox='0 0 26 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M26 6.89062V23.1094L13 29.625L0 23.1094V6.89062L13 0.375L26 6.89062ZM13 2.625L3.23438 7.5L13 12.375L22.7656 7.5L13 2.625ZM2 21.875L12 26.8906V14.125L2 9.10938V21.875ZM24 21.875V9.10938L14 14.125V26.8906L24 21.875Z' fill='%2350E6FF'/%3e%3c/svg%3e";

/**
 * The actions to update the state
 */
var SceneThemeContextActionType;
(function (SceneThemeContextActionType) {
    SceneThemeContextActionType["SET_OBJECT_COLOR"] = "SET_OBJECT_COLOR";
    SceneThemeContextActionType["SET_OBJECT_COLOR_OPTIONS"] = "SET_OBJECT_COLOR_OPTIONS";
    SceneThemeContextActionType["SET_SCENE_BACKGROUND"] = "SET_SCENE_BACKGROUND";
    SceneThemeContextActionType["SET_SCENE_BACKGROUND_OPTIONS"] = "SET_SCENE_BACKGROUND_OPTIONS";
    SceneThemeContextActionType["SET_OBJECT_STYLE"] = "SET_OBECT_STYLE";
    SceneThemeContextActionType["SET_OBJECT_STYLE_OPTIONS"] = "SET_OBJECT_STYLE_OPTIONS";
})(SceneThemeContextActionType || (SceneThemeContextActionType = {}));

var debugLogging$2 = false;
var logDebugConsole$2 = getDebugLogger('SceneThemeContext', debugLogging$2);
var SceneThemeContextInstance = React__default.createContext(null);
var useSceneThemeContext = function () { return useContext(SceneThemeContextInstance); };
var isThemePersistenceEnabled = true;
var DEFAULT_OBJECT_COLOR_INDEX = 2;
var SceneThemeContextReducer = fn(function (draft, action) {
    logDebugConsole$2('info', "Updating Color context " + action.type + " with payload: ", action.payload);
    switch (action.type) {
        case SceneThemeContextActionType.SET_OBJECT_COLOR: {
            draft.objectColor =
                draft.objectColorOptions.find(function (x) { return x.color === action.payload.color; }) || DefaultViewerModeObjectColor; // fallback value in case we don't find a match
            setPersistedTheme(buildPersistedTheme(draft));
            break;
        }
        case SceneThemeContextActionType.SET_OBJECT_COLOR_OPTIONS: {
            draft.objectColorOptions = action.payload.options || [];
            break;
        }
        case SceneThemeContextActionType.SET_OBJECT_STYLE: {
            draft.objectStyle =
                action.payload.style || ViewerObjectStyle.Default;
            // adjust the object color based on the style
            if (draft.objectStyle === ViewerObjectStyle.Default) {
                draft.objectColor = DefaultViewerModeObjectColor;
            }
            else if (
            // if NOT default style && current object color is the default, set a different option so you can see the transparency
            draft.objectColor.color ===
                DefaultViewerModeObjectColor.color &&
                draft.objectColor.baseColor ===
                    DefaultViewerModeObjectColor.baseColor) {
                // changing to wireframe or transparent from default, select a color so we see the transparency
                draft.objectColor = draft.objectColorOptions.find(function (x) { return x.color === draft.objectColorOptions[0].color; }); // blue
            }
            setPersistedTheme(buildPersistedTheme(draft));
            break;
        }
        case SceneThemeContextActionType.SET_OBJECT_STYLE_OPTIONS: {
            draft.objectStyleOptions = action.payload.options || [];
            break;
        }
        case SceneThemeContextActionType.SET_SCENE_BACKGROUND: {
            draft.sceneBackground =
                draft.sceneBackgroundOptions.find(function (x) { return x.color === action.payload.color; }) || draft.sceneBackgroundOptions[0]; // fallback value in case we don't find a match;
            setPersistedTheme(buildPersistedTheme(draft));
            break;
        }
        case SceneThemeContextActionType.SET_SCENE_BACKGROUND_OPTIONS: {
            draft.sceneBackgroundOptions = action.payload.options || [];
            break;
        }
    }
});
var SceneThemeContextProvider = function (props) {
    var _a;
    var children = props.children;
    // skip wrapping if the context already exists
    var existingContext = useSceneThemeContext();
    if (existingContext) {
        return React__default.createElement(React__default.Fragment, null, children);
    }
    var initialState = props.initialState, _b = props.shouldPersistTheme, shouldPersistTheme = _b === void 0 ? true : _b;
    var t = useTranslation().t;
    isThemePersistenceEnabled = shouldPersistTheme; // store the selection globally
    // set the initial state for the Color reducer
    var persistedTheme = getPersistedTheme();
    var backgroundOptions = (initialState === null || initialState === void 0 ? void 0 : initialState.sceneBackgroundOptions) || ViewerModeBackgroundColors;
    var sceneBackgroundKey = (persistedTheme === null || persistedTheme === void 0 ? void 0 : persistedTheme.backgroundKey) || '';
    var sceneBackground = (initialState === null || initialState === void 0 ? void 0 : initialState.sceneBackground) ||
        backgroundOptions.find(function (x) { return x.color === sceneBackgroundKey; }) ||
        backgroundOptions[0];
    var styleOptions = (initialState === null || initialState === void 0 ? void 0 : initialState.objectStyleOptions) || buildDefaultStyleChoices(t);
    var objectStyle = (initialState === null || initialState === void 0 ? void 0 : initialState.objectStyle) ||
        (persistedTheme === null || persistedTheme === void 0 ? void 0 : persistedTheme.objectStyle) ||
        ViewerObjectStyle.Default;
    var objectColorOptions = (initialState === null || initialState === void 0 ? void 0 : initialState.objectColorOptions) || ViewerModeObjectColors;
    var objectColorKey = (persistedTheme === null || persistedTheme === void 0 ? void 0 : persistedTheme.objectColorKey) ||
        ((_a = objectColorOptions === null || objectColorOptions === void 0 ? void 0 : objectColorOptions[DEFAULT_OBJECT_COLOR_INDEX]) === null || _a === void 0 ? void 0 : _a.color) ||
        '';
    var objectColor = (initialState === null || initialState === void 0 ? void 0 : initialState.objectColor) || objectStyle === ViewerObjectStyle.Default // use default mode for default style so we get model's built in styles
        ? DefaultViewerModeObjectColor
        : (objectColorOptions === null || objectColorOptions === void 0 ? void 0 : objectColorOptions.find(function (x) { return x.color === objectColorKey; })) ||
            DefaultViewerModeObjectColor;
    var defaultState = {
        sceneBackground: sceneBackground,
        sceneBackgroundOptions: backgroundOptions,
        objectColor: objectColor,
        objectColorOptions: objectColorOptions,
        objectStyle: objectStyle,
        objectStyleOptions: styleOptions
    };
    logDebugConsole$2('info', 'Setting initial theme state. {state, stateOverrides}', defaultState, initialState);
    var _c = useReducer(SceneThemeContextReducer, defaultState), sceneThemeState = _c[0], sceneThemeDispatch = _c[1];
    return (React__default.createElement(SceneThemeContextInstance.Provider, { value: { sceneThemeState: sceneThemeState, sceneThemeDispatch: sceneThemeDispatch } }, children));
};
var buildPersistedTheme = function (state) {
    var _a;
    return {
        backgroundKey: state.sceneBackground.color,
        objectColorKey: (_a = state.objectColor) === null || _a === void 0 ? void 0 : _a.color,
        objectStyle: state.objectStyle
    };
};
var getPersistedTheme = function () {
    var theme = localStorage.getItem(ViewerThemeStorageKey);
    if (theme && isThemePersistenceEnabled) {
        logDebugConsole$2('debug', "Reading persisted theme from storage " + ViewerThemeStorageKey, JSON.parse(theme));
        return JSON.parse(theme);
    }
    return undefined;
};
var setPersistedTheme = function (theme) {
    if (theme && isThemePersistenceEnabled) {
        logDebugConsole$2('debug', "Persisting theme to storage key " + ViewerThemeStorageKey, theme);
        localStorage.setItem(ViewerThemeStorageKey, JSON.stringify(theme));
    }
};
var buildDefaultStyleChoices = function (t) {
    var options = useMemo(function () { return [
        {
            key: ViewerObjectStyle.Default,
            imageSrc: img$2,
            imageAlt: t('modelViewerModePicker.default'),
            selectedImageSrc: img$2,
            imageSize: { width: 40, height: 40 },
            text: t('modelViewerModePicker.default')
        },
        {
            key: ViewerObjectStyle.Transparent,
            imageSrc: img$1,
            imageAlt: t('modelViewerModePicker.transparent'),
            selectedImageSrc: img$1,
            imageSize: { width: 40, height: 40 },
            text: t('modelViewerModePicker.transparent')
        },
        {
            key: ViewerObjectStyle.Wireframe,
            imageSrc: img,
            imageAlt: t('modelViewerModePicker.wireframe'),
            selectedImageSrc: img,
            imageSize: { width: 40, height: 40 },
            text: t('modelViewerModePicker.wireframe')
        }
    ]; }, [t]);
    return options;
};

var SceneViewContextActionType;
(function (SceneViewContextActionType) {
    /** set array of outlined mesh items */
    SceneViewContextActionType["SET_SCENE_SELECTED_MESHES"] = "SET_SCENE_SELECTED_MESHES";
    SceneViewContextActionType["SET_SCENE_OUTLINED_MESHES"] = "SET_SCENE_OUTLINED_MESHES";
    // TODO: Enable this when colored meshes are included in this pattern
    // SET_SCENE_COLORED_MESHES = 'SET_SCENE_COLORED_MESHES'
    SceneViewContextActionType["RESET_SELECTED_MESHES"] = "RESET_SELECTED_MESHES";
    SceneViewContextActionType["RESET_OUTLINED_MESHES"] = "RESET_OUTLINED_MESHES";
    SceneViewContextActionType["OUTLINE_BEHAVIOR_MESHES"] = "OUTLINE_BEHAVIOR_MESHES";
    SceneViewContextActionType["OUTLINE_ELEMENT_MESHES"] = "OUTLINE_ELEMENTS_MESHES";
})(SceneViewContextActionType || (SceneViewContextActionType = {}));

/**
 * This context is for managing values that can control how a scene looks
 */
var debugLogging$1 = false;
var logDebugConsole$1 = getDebugLogger('SceneViewContext', debugLogging$1);
var SceneViewContext = React__default.createContext(null);
var useSceneViewContext = function () { return useContext(SceneViewContext); };
var SceneViewContextReducer = fn(function (draft, action) {
    logDebugConsole$1('info', "Updating Sceneview context " + action.type + " with payload: ", action.payload // ignore that payload doesn't always come since this is just a log
    );
    switch (action.type) {
        case SceneViewContextActionType.SET_SCENE_OUTLINED_MESHES: {
            var customMeshItems = createCustomMeshItems(action.payload.meshIds, action.payload.color);
            draft.outlinedMeshItems = customMeshItems;
            break;
        }
        case SceneViewContextActionType.RESET_SELECTED_MESHES: {
            draft.outlinedMeshItems = [];
            break;
        }
        case SceneViewContextActionType.RESET_OUTLINED_MESHES: {
            draft.outlinedMeshItems = action.payload
                ? action.payload.outlinedMeshItems
                : [];
            break;
        }
        case SceneViewContextActionType.OUTLINE_BEHAVIOR_MESHES: {
            var behavior = action.payload.behavior;
            // get elements that are contained in the hovered behavior
            var meshIds = new Set();
            var selectedElements_2 = [];
            behavior.datasources
                .filter(ViewerConfigUtility.isElementTwinToObjectMappingDataSource)
                .forEach(function (ds) {
                ds.elementIDs.forEach(function (elementId) {
                    var element = action.payload.elements.find(function (el) { return el.id === elementId; });
                    element && selectedElements_2.push(element);
                });
            });
            for (var _i = 0, selectedElements_1 = selectedElements_2; _i < selectedElements_1.length; _i++) {
                var element = selectedElements_1[_i];
                for (var _a = 0, _b = element.objectIDs; _a < _b.length; _a++) {
                    var id = _b[_a];
                    meshIds = meshIds.add(id);
                }
            }
            var customMeshItems = createCustomMeshItems(Array.from(meshIds), action.payload.color);
            draft.outlinedMeshItems = customMeshItems;
            break;
        }
        case SceneViewContextActionType.OUTLINE_ELEMENT_MESHES: {
            var meshIds = new Set();
            for (var _c = 0, _d = action.payload.elements; _c < _d.length; _c++) {
                var element = _d[_c];
                // find elements that contain this mesh
                if (element.objectIDs.includes(action.payload.meshId)) {
                    for (var _e = 0, _f = element.objectIDs; _e < _f.length; _e++) {
                        var id = _f[_e];
                        // add meshes that make up element to highlight
                        meshIds.add(id);
                    }
                }
            }
            var customMeshItems = createCustomMeshItems(Array.from(meshIds), action.payload.color);
            draft.outlinedMeshItems = customMeshItems;
            break;
        }
        // TODO: Enable this when colored meshes are included in this pattern
        // case SceneViewContextActionType.SET_SCENE_COLORED_MESHES: {
        //     const customMeshItems = createCustomMeshItems(
        //         action.payload.meshIds,
        //         action.payload.color
        //     );
        //     break;
        // }
        // case SceneViewContextActionType.SET_SCENE_SELECTED_MESHES: {
        //     const customMeshItems = createCustomMeshItems(
        //         action.payload.meshIds,
        //         action.payload.color
        //     );
        //     draft.outlinedMeshItems = customMeshItems;
        //     draft.coloredMeshItems = customMeshItems;
        //     break;
        // }
    }
});
var initialOutlinedMeshItems;
var SceneViewContextProvider = function (props) {
    var children = props.children;
    // skip wrapping if the context already exists
    var existingContext = useSceneViewContext();
    if (existingContext) {
        return React__default.createElement(React__default.Fragment, null, children);
    }
    var outlinedMeshItems = props.outlinedMeshItems;
    initialOutlinedMeshItems = outlinedMeshItems
        ? deepCopy(outlinedMeshItems)
        : [];
    var defaultState = {
        outlinedMeshItems: initialOutlinedMeshItems
    };
    var _a = useReducer(SceneViewContextReducer, defaultState), sceneViewState = _a[0], sceneViewDispatch = _a[1];
    return (React__default.createElement(SceneViewContext.Provider, { value: {
            sceneViewDispatch: sceneViewDispatch,
            sceneViewState: sceneViewState
        } }, children));
};

var Selected = function (theme) {
    return btoa("<svg width=\"25\" height=\"17\" viewBox=\"0 0 25 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n    <g filter=\"url(#filter0_dd_44735_156165)\">\n    <rect width=\"9\" height=\"1.99923\" rx=\"0.999613\" transform=\"matrix(1 1.78012e-08 -1.71735e-06 1 8 4)\" fill=\"url(#paint0_radial_44735_156165)\"/>\n    </g>\n    <defs>\n    <filter id=\"filter0_dd_44735_156165\" x=\"0.8\" y=\"2.38419e-07\" width=\"23.4\" height=\"16.4\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n    <feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"/>\n    <feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"/>\n    <feOffset dy=\"3.2\"/>\n    <feGaussianBlur stdDeviation=\"3.6\"/>\n    <feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.13 0\"/>\n    <feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_44735_156165\"/>\n    <feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"/>\n    <feOffset dy=\"0.6\"/>\n    <feGaussianBlur stdDeviation=\"0.9\"/>\n    <feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0\"/>\n    <feBlend mode=\"normal\" in2=\"effect1_dropShadow_44735_156165\" result=\"effect2_dropShadow_44735_156165\"/>\n    <feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect2_dropShadow_44735_156165\" result=\"shape\"/>\n    </filter>\n    <radialGradient id=\"paint0_radial_44735_156165\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(0.195652) rotate(12.7934) scale(9.02848 3.15585)\">\n    <stop stop-color=\"" + theme.semanticColors.link + "\"/>\n    <stop offset=\"1\" stop-color=\"" + theme.semanticColors.link + "\"/>\n    </radialGradient>\n    </defs>\n    </svg>");
};
var LeftMouseClick = function (theme) {
    return btoa("<svg width=\"18\" height=\"24\" viewBox=\"0 0 18 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"M13.0576 0.870117C13.6143 0.870117 14.1416 0.977539 14.6396 1.19238C15.1377 1.40723 15.5674 1.7002 15.9287 2.07129C16.2998 2.43262 16.5928 2.8623 16.8076 3.36035C17.0225 3.8584 17.1299 4.38574 17.1299 4.94238V15.8701C17.1299 16.9932 16.915 18.0479 16.4854 19.0342C16.0654 20.0205 15.4844 20.8848 14.7422 21.627C14.0098 22.3594 13.1504 22.9404 12.1641 23.3701C11.1777 23.79 10.123 24 9 24C7.87695 24 6.82227 23.79 5.83594 23.3701C4.84961 22.9404 3.98535 22.3594 3.24316 21.627C2.51074 20.8848 1.92969 20.0205 1.5 19.0342C1.08008 18.0479 0.870117 16.9932 0.870117 15.8701V4.94238C0.870117 4.38574 0.977539 3.8584 1.19238 3.36035C1.40723 2.8623 1.69531 2.43262 2.05664 2.07129C2.42773 1.7002 2.8623 1.40723 3.36035 1.19238C3.8584 0.977539 4.38574 0.870117 4.94238 0.870117H13.0576ZM15.8701 15.8701V4.94238C15.8701 4.55176 15.7969 4.18555 15.6504 3.84375C15.5039 3.50195 15.3037 3.2041 15.0498 2.9502C14.7959 2.69629 14.498 2.49609 14.1562 2.34961C13.8145 2.20312 13.4482 2.12988 13.0576 2.12988H9V7.75488C9 8.10645 8.93164 8.43359 8.79492 8.73633C8.66797 9.03906 8.4873 9.30273 8.25293 9.52734C8.02832 9.75195 7.76465 9.92773 7.46191 10.0547C7.15918 10.1816 6.83691 10.2451 6.49512 10.2451H2.12988V15.8701C2.12988 16.8174 2.31055 17.7109 2.67188 18.5508C3.0332 19.3809 3.52148 20.1084 4.13672 20.7334C4.76172 21.3584 5.48926 21.8516 6.31934 22.2129C7.15918 22.5742 8.05273 22.7549 9 22.7549C9.94727 22.7549 10.8359 22.5742 11.666 22.2129C12.5059 21.8516 13.2334 21.3584 13.8486 20.7334C14.4736 20.1084 14.9668 19.3809 15.3281 18.5508C15.6895 17.7109 15.8701 16.8174 15.8701 15.8701Z\" fill=\"" + theme.semanticColors.bodyText + "\"/>\n    </svg>");
};
var LeftMouseMove = function (theme) {
    return btoa("<svg width=\"30\" height=\"30\" viewBox=\"0 0 30 30\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"M26.6895 7.67578L29.6338 10.6201L26.6895 13.5645L25.8105 12.6855L27.2461 11.25H23.7451V10.0049H27.2461L25.8105 8.56934L26.6895 7.67578ZM14.3701 2.75391L12.9492 4.18945L12.0557 3.31055L15 0.366211L17.9443 3.31055L17.0508 4.18945L15.6299 2.75391V6.25488H14.3701V2.75391ZM4.18945 8.56934L2.75391 10.0049H6.25488V11.25H2.75391L4.18945 12.6855L3.31055 13.5645L0.366211 10.6201L3.31055 7.67578L4.18945 8.56934ZM19.0576 6.87012C19.6143 6.87012 20.1416 6.97754 20.6396 7.19238C21.1377 7.40723 21.5674 7.7002 21.9287 8.07129C22.2998 8.43262 22.5928 8.8623 22.8076 9.36035C23.0225 9.8584 23.1299 10.3857 23.1299 10.9424V21.8701C23.1299 22.9932 22.915 24.0479 22.4854 25.0342C22.0654 26.0205 21.4844 26.8848 20.7422 27.627C20.0098 28.3594 19.1504 28.9404 18.1641 29.3701C17.1777 29.79 16.123 30 15 30C13.877 30 12.8223 29.79 11.8359 29.3701C10.8496 28.9404 9.98535 28.3594 9.24316 27.627C8.51074 26.8848 7.92969 26.0205 7.5 25.0342C7.08008 24.0479 6.87012 22.9932 6.87012 21.8701V10.9424C6.87012 10.3857 6.97754 9.8584 7.19238 9.36035C7.40723 8.8623 7.69531 8.43262 8.05664 8.07129C8.42773 7.7002 8.8623 7.40723 9.36035 7.19238C9.8584 6.97754 10.3857 6.87012 10.9424 6.87012H19.0576ZM21.8701 21.8701V10.9424C21.8701 10.5518 21.7969 10.1855 21.6504 9.84375C21.5039 9.50195 21.3037 9.2041 21.0498 8.9502C20.7959 8.69629 20.498 8.49609 20.1562 8.34961C19.8145 8.20312 19.4482 8.12988 19.0576 8.12988H15V13.7549C15 14.1064 14.9316 14.4336 14.7949 14.7363C14.668 15.0391 14.4873 15.3027 14.2529 15.5273C14.0283 15.752 13.7646 15.9277 13.4619 16.0547C13.1592 16.1816 12.8369 16.2451 12.4951 16.2451H8.12988V21.8701C8.12988 22.8174 8.31055 23.7109 8.67188 24.5508C9.0332 25.3809 9.52148 26.1084 10.1367 26.7334C10.7617 27.3584 11.4893 27.8516 12.3193 28.2129C13.1592 28.5742 14.0527 28.7549 15 28.7549C15.9473 28.7549 16.8359 28.5742 17.666 28.2129C18.5059 27.8516 19.2334 27.3584 19.8486 26.7334C20.4736 26.1084 20.9668 25.3809 21.3281 24.5508C21.6895 23.7109 21.8701 22.8174 21.8701 21.8701Z\" fill=\"" + theme.semanticColors.bodyText + "\"/>\n    </svg>");
};
var RightMouseMove = function (theme) {
    return btoa("<svg width=\"30\" height=\"30\" viewBox=\"0 0 30 30\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"M4.18945 8.56934L2.75391 10.0049H6.25488V11.25H2.75391L4.18945 12.6855L3.31055 13.5645L0.366211 10.6201L3.31055 7.67578L4.18945 8.56934ZM14.3701 2.75391L12.9492 4.18945L12.0557 3.31055L15 0.366211L17.9443 3.31055L17.0508 4.18945L15.6299 2.75391V6.25488H14.3701V2.75391ZM26.6895 7.67578L29.6338 10.6201L26.6895 13.5645L25.8105 12.6855L27.2461 11.25H23.7451V10.0049H27.2461L25.8105 8.56934L26.6895 7.67578ZM19.0576 6.87012C19.6143 6.87012 20.1416 6.97754 20.6396 7.19238C21.1377 7.40723 21.5674 7.7002 21.9287 8.07129C22.2998 8.43262 22.5928 8.8623 22.8076 9.36035C23.0225 9.8584 23.1299 10.3857 23.1299 10.9424V21.8701C23.1299 22.9932 22.915 24.0479 22.4854 25.0342C22.0654 26.0205 21.4844 26.8848 20.7422 27.627C20.0098 28.3594 19.1504 28.9404 18.1641 29.3701C17.1777 29.79 16.123 30 15 30C13.877 30 12.8223 29.79 11.8359 29.3701C10.8496 28.9404 9.98535 28.3594 9.24316 27.627C8.51074 26.8848 7.92969 26.0205 7.5 25.0342C7.08008 24.0479 6.87012 22.9932 6.87012 21.8701V10.9424C6.87012 10.3857 6.97754 9.8584 7.19238 9.36035C7.40723 8.8623 7.69531 8.43262 8.05664 8.07129C8.42773 7.7002 8.8623 7.40723 9.36035 7.19238C9.8584 6.97754 10.3857 6.87012 10.9424 6.87012H19.0576ZM15 28.7549C15.9473 28.7549 16.8359 28.5742 17.666 28.2129C18.5059 27.8516 19.2334 27.3584 19.8486 26.7334C20.4736 26.1084 20.9668 25.3809 21.3281 24.5508C21.6895 23.7109 21.8701 22.8174 21.8701 21.8701V16.2451H17.5049C17.1631 16.2451 16.8359 16.1816 16.5234 16.0547C16.2207 15.9277 15.957 15.752 15.7324 15.5273C15.5078 15.3027 15.3271 15.0391 15.1904 14.7363C15.0635 14.4336 15 14.1064 15 13.7549V8.12988H10.9424C10.5518 8.12988 10.1855 8.20312 9.84375 8.34961C9.50195 8.49609 9.2041 8.69629 8.9502 8.9502C8.69629 9.2041 8.49609 9.50195 8.34961 9.84375C8.20312 10.1855 8.12988 10.5518 8.12988 10.9424V21.8701C8.12988 22.8174 8.31055 23.7109 8.67188 24.5508C9.0332 25.3809 9.52148 26.1084 10.1367 26.7334C10.7617 27.3584 11.4893 27.8516 12.3193 28.2129C13.1592 28.5742 14.0527 28.7549 15 28.7549Z\" fill=\"" + theme.semanticColors.bodyText + "\"/>\n    </svg>");
};
var MiddleMouse = function (theme) {
    return btoa("<svg width=\"18\" height=\"24\" viewBox=\"0 0 18 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"M13.0576 0.870117C13.6143 0.870117 14.1416 0.977539 14.6396 1.19238C15.1377 1.40723 15.5674 1.7002 15.9287 2.07129C16.2998 2.43262 16.5928 2.8623 16.8076 3.36035C17.0225 3.8584 17.1299 4.38574 17.1299 4.94238V15.8701C17.1299 16.9932 16.915 18.0479 16.4854 19.0342C16.0654 20.0205 15.4844 20.8848 14.7422 21.627C14.0098 22.3594 13.1504 22.9404 12.1641 23.3701C11.1777 23.79 10.123 24 9 24C7.87695 24 6.82227 23.79 5.83594 23.3701C4.84961 22.9404 3.98535 22.3594 3.24316 21.627C2.51074 20.8848 1.92969 20.0205 1.5 19.0342C1.08008 18.0479 0.870117 16.9932 0.870117 15.8701V4.94238C0.870117 4.38574 0.977539 3.8584 1.19238 3.36035C1.40723 2.8623 1.69531 2.43262 2.05664 2.07129C2.42773 1.7002 2.8623 1.40723 3.36035 1.19238C3.8584 0.977539 4.38574 0.870117 4.94238 0.870117H13.0576ZM15.8701 15.8701V4.94238C15.8701 4.55176 15.7969 4.18555 15.6504 3.84375C15.5039 3.50195 15.3037 3.2041 15.0498 2.9502C14.7959 2.69629 14.498 2.49609 14.1562 2.34961C13.8145 2.20312 13.4482 2.12988 13.0576 2.12988H10.2451V9C10.2451 9.3418 10.123 9.63477 9.87891 9.87891C9.63477 10.123 9.3418 10.2451 9 10.2451C8.6582 10.2451 8.36523 10.123 8.12109 9.87891C7.87695 9.63477 7.75488 9.3418 7.75488 9V2.12988H4.94238C4.55176 2.12988 4.18555 2.20312 3.84375 2.34961C3.50195 2.49609 3.2041 2.69629 2.9502 2.9502C2.69629 3.2041 2.49609 3.50195 2.34961 3.84375C2.20312 4.18555 2.12988 4.55176 2.12988 4.94238V15.8701C2.12988 16.8174 2.31055 17.7109 2.67188 18.5508C3.0332 19.3809 3.52148 20.1084 4.13672 20.7334C4.76172 21.3584 5.48926 21.8516 6.31934 22.2129C7.15918 22.5742 8.05273 22.7549 9 22.7549C9.94727 22.7549 10.8359 22.5742 11.666 22.2129C12.5059 21.8516 13.2334 21.3584 13.8486 20.7334C14.4736 20.1084 14.9668 19.3809 15.3281 18.5508C15.6895 17.7109 15.8701 16.8174 15.8701 15.8701Z\" fill=\"" + theme.semanticColors.bodyText + "\"/>\n    </svg>\n    ");
};

function GET_HEADER_BUTTON_STYLES(theme, isActive) {
    var color = theme.semanticColors.bodyText + " !important";
    return {
        root: {
            color: color,
            backgroundColor: isActive
                ? theme.semanticColors.buttonBackgroundPressed
                : theme.semanticColors.buttonBackground,
            borderRadius: 4,
            // remove the border for the groups
            height: HEADER_BUTTON_HEIGHT - 2,
            width: HEADER_BUTTON_HEIGHT - 2,
            ':hover': {
                border: "1px solid " + theme.palette.neutralSecondary
            }
        },
        rootChecked: {
            color: color
        },
        rootHovered: {
            color: color
        },
        rootCheckedPressed: {
            color: color
        },
        rootFocused: {
            color: color
        }
    };
}
var classPrefix$5 = 'header-control-button';
var classNames$5 = {
    root: classPrefix$5 + "-root",
    button: classPrefix$5 + "-button"
};
var getStyles$5 = function (props) {
    var isActive = props.isActive, theme = props.theme;
    return {
        root: [classNames$5.root],
        subComponentStyles: {
            button: __assign(__assign({}, GET_HEADER_BUTTON_STYLES(theme, isActive)), { icon: {
                    fontSize: FontSizes.size16
                } })
        }
    };
};

var getClassNames$4 = classNamesFunction();
/**
 * Control for an action at the top of the screen on the 3D Viewer. Can accept children (most likely images) or can be styled with text/icon as appropriate.
 * Should be wrapped in a `HeaderControlGroup` if you want a border.
 */
var HeaderControlButton = function (props) {
    var buttonProps = props.buttonProps, children = props.children, dataTestId = props.dataTestId, className = props.className, iconProps = props.iconProps, id = props.id, imageProps = props.imageProps, isActive = props.isActive, onClick = props.onClick, onMouseEnter = props.onMouseEnter, onMouseLeave = props.onMouseLeave, styles = props.styles, title = props.title;
    /** ----- hooks ----- */
    var theme = useTheme();
    var classNames = getClassNames$4(styles, { theme: theme, isActive: isActive });
    return (React__default.createElement(IconButton, __assign({}, buttonProps, { className: css(classNames.root, className), checked: isActive, "data-testid": dataTestId, iconProps: iconProps, id: id, onClick: onClick, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, styles: classNames.subComponentStyles.button(), title: title }),
        imageProps && React__default.createElement(Image, __assign({}, imageProps)),
        children));
};
var HeaderControlButton$1 = styled(HeaderControlButton, getStyles$5);

var classPrefix$4 = 'cb-HeaderControlGroup';
var classNames$4 = {
    root: classPrefix$4 + "-root"
};
var getStyles$4 = function (props) {
    var theme = props.theme;
    return {
        root: [
            classNames$4.root,
            {
                backgroundColor: theme.semanticColors.buttonBackground,
                border: "1px solid " + theme.palette.neutralLight,
                borderRadius: theme.effects.roundedCorner4
            }
        ],
        subComponentStyles: {
            stack: {
                root: {
                    width: 'fit-content'
                }
            }
        }
    };
};

var getClassNames$3 = classNamesFunction();
/**
 * Component that wraps a collection of `HeaderControlButtons` to group them together and style them accordingly
 */
var HeaderControlGroup = function (props) {
    var children = props.children, id = props.id, styles = props.styles;
    var classNames = getClassNames$3(styles, {
        theme: useTheme()
    });
    return (React__default.createElement(Stack, { id: id, horizontal: true, className: classNames.root, styles: classNames.subComponentStyles.stack }, children));
};
var HeaderControlGroup$1 = styled(HeaderControlGroup, getStyles$4);

var classPrefix$3 = 'cb-cameracontrolscalloutcontent';
var classNames$3 = {
    root: classPrefix$3 + "-root"
};
var getStyles$3 = function (props) {
    var theme = props.theme;
    return {
        root: [
            classNames$3.root,
            {
                width: 200,
                borderRadius: 2,
                background: theme.semanticColors.buttonBackground,
                padding: '16px 16px',
                border: "1px solid " + theme.palette.neutralLight
            }
        ],
        buttonIcon: {
            fill: theme.semanticColors.bodyText
        },
        modes: {
            display: 'flex',
            fontSize: 12,
            marginTop: 16
        },
        mode: {
            flex: 1,
            textAlign: 'center'
        },
        modeIcon: {
            marginTop: 12,
            marginBottom: 4
        },
        subComponentStyles: {}
    };
};

var MoveContent = function (props) {
    var styles = props.styles;
    var theme = useTheme();
    var t = useTranslation().t;
    return (React__default.createElement("div", { className: styles.root },
        React__default.createElement("div", null, t('cameraControls.mouseControls')),
        React__default.createElement("div", { className: styles.modes },
            React__default.createElement("div", { className: styles.mode },
                React__default.createElement("div", null, t('cameraControls.select')),
                React__default.createElement("div", null,
                    React__default.createElement("img", { src: "data:image/svg+xml;base64," + LeftMouseClick(theme), style: { height: 28, width: 28 }, className: styles.modeIcon }))),
            React__default.createElement("div", { className: styles.mode },
                React__default.createElement("div", null, t('cameraControls.pan')),
                React__default.createElement("div", null,
                    React__default.createElement("img", { src: "data:image/svg+xml;base64," + LeftMouseMove(theme), style: { height: 28, width: 28 }, className: styles.modeIcon }))),
            React__default.createElement("div", { className: styles.mode },
                React__default.createElement("div", null, t('cameraControls.orbit')),
                React__default.createElement("div", null,
                    React__default.createElement("img", { src: "data:image/svg+xml;base64," + RightMouseMove(theme), style: { height: 28, width: 28 }, className: styles.modeIcon }))),
            React__default.createElement("div", { className: styles.mode },
                React__default.createElement("div", null, t('cameraControls.zoom')),
                React__default.createElement("div", null,
                    React__default.createElement("img", { src: "data:image/svg+xml;base64," + MiddleMouse(theme), style: { height: 28, width: 28 }, className: styles.modeIcon }))))));
};

var OrbitContent = function (props) {
    var styles = props.styles;
    var theme = useTheme();
    var t = useTranslation().t;
    return (React__default.createElement("div", { className: styles.root },
        React__default.createElement("div", null, t('cameraControls.mouseControls')),
        React__default.createElement("div", { className: styles.modes },
            React__default.createElement("div", { className: styles.mode },
                React__default.createElement("div", null, t('cameraControls.select')),
                React__default.createElement("div", null,
                    React__default.createElement("img", { src: "data:image/svg+xml;base64," + LeftMouseClick(theme), style: { height: 28, width: 28 }, className: styles.modeIcon }))),
            React__default.createElement("div", { className: styles.mode },
                React__default.createElement("div", null, t('cameraControls.orbit')),
                React__default.createElement("div", null,
                    React__default.createElement("img", { src: "data:image/svg+xml;base64," + LeftMouseMove(theme), style: { height: 28, width: 28 }, className: styles.modeIcon }))),
            React__default.createElement("div", { className: styles.mode },
                React__default.createElement("div", null, t('cameraControls.pan')),
                React__default.createElement("div", null,
                    React__default.createElement("img", { src: "data:image/svg+xml;base64," + RightMouseMove(theme), style: { height: 28, width: 28 }, className: styles.modeIcon }))),
            React__default.createElement("div", { className: styles.mode },
                React__default.createElement("div", null, t('cameraControls.zoom')),
                React__default.createElement("div", null,
                    React__default.createElement("img", { src: "data:image/svg+xml;base64," + MiddleMouse(theme), style: { height: 28, width: 28 }, className: styles.modeIcon }))))));
};

var getClassNames$2 = classNamesFunction();
/**
 * Control for showing the right flyout content on the camera controls
 */
var CameraControlsCalloutContent = function (props) {
    var type = props.type, styles = props.styles;
    var classNames = getClassNames$2(styles, {
        theme: useTheme()
    });
    switch (type) {
        case 'Move':
            return React__default.createElement(MoveContent, { styles: classNames });
        case 'Orbit':
            return React__default.createElement(OrbitContent, { styles: classNames });
        default:
            return null;
    }
};
var CameraControlsCalloutContent$1 = styled(CameraControlsCalloutContent, getStyles$3);

var CameraControls = function (_a) {
    var cameraInteraction = _a.cameraInteraction, onCameraInteractionChanged = _a.onCameraInteractionChanged, onCameraZoom = _a.onCameraZoom, onResetCamera = _a.onResetCamera;
    var _b = useState(null), cameraInteractionType = _b[0], setCameraInteractionType = _b[1];
    var _c = useState(false), showPanCallout = _c[0], setShowPanCallout = _c[1];
    var _d = useState(false), showOrbitCallout = _d[0], setShowOrbitCallout = _d[1];
    var theme = useTheme();
    var styles = getStyles$2(theme);
    var calloutAnchorPan = 'cd-camera-controls-calloutAnchor-pan';
    var calloutAnchorOrbit = 'cd-camera-controls-calloutAnchor-orbit';
    useEffect(function () {
        if (cameraInteractionType) {
            onCameraInteractionChanged(cameraInteractionType);
        }
    }, [cameraInteractionType, onCameraInteractionChanged]);
    useEffect(function () {
        if (cameraInteraction) {
            setCameraInteractionType(cameraInteraction);
        }
    }, [cameraInteraction]);
    var updateCameraInteraction = function (type) {
        setCameraInteractionType(type);
    };
    var t = useTranslation().t;
    return (React__default.createElement("div", { className: styles.root },
        React__default.createElement(FocusZone, { style: { zIndex: 999 } },
            React__default.createElement(Stack, { horizontal: true, tokens: { childrenGap: 8 } },
                React__default.createElement(HeaderControlGroup$1, null,
                    React__default.createElement(HeaderControlButton$1, { iconProps: { iconName: 'Rotate90Clockwise' }, id: calloutAnchorOrbit, isActive: cameraInteractionType ===
                            CameraInteraction.Rotate, onClick: function () {
                            return updateCameraInteraction(CameraInteraction.Rotate);
                        }, onMouseEnter: function () { return setShowOrbitCallout(true); }, onMouseLeave: function () { return setShowOrbitCallout(false); } }, cameraInteractionType ===
                        CameraInteraction.Rotate && (React__default.createElement("img", { src: "data:image/svg+xml;base64," + Selected(theme), style: { width: 24 }, className: styles.selectedIndicator }))),
                    React__default.createElement(HeaderControlButton$1, { iconProps: { iconName: 'Move' }, id: calloutAnchorPan, isActive: cameraInteractionType === CameraInteraction.Pan, onClick: function () {
                            return updateCameraInteraction(CameraInteraction.Pan);
                        }, onMouseEnter: function () { return setShowPanCallout(true); }, onMouseLeave: function () { return setShowPanCallout(false); } }, cameraInteractionType ===
                        CameraInteraction.Pan && (React__default.createElement("img", { src: "data:image/svg+xml;base64," + Selected(theme), style: { width: 24 }, className: styles.selectedIndicator })))),
                React__default.createElement(HeaderControlGroup$1, null,
                    React__default.createElement(HeaderControlButton$1, { isActive: false, iconProps: { iconName: 'Add' }, onClick: function () { return onCameraZoom(true); }, title: t('cameraControls.zoomIn') }),
                    React__default.createElement(HeaderControlButton$1, { isActive: false, iconProps: { iconName: 'Remove' }, title: t('cameraControls.zoomOut'), onClick: function () { return onCameraZoom(false); } })),
                React__default.createElement(HeaderControlGroup$1, null,
                    React__default.createElement(HeaderControlButton$1, { iconProps: { iconName: 'CubeShape' }, isActive: false, onClick: onResetCamera, title: t('cameraControls.reset') })))),
        showPanCallout && (React__default.createElement(Callout, { target: "#" + calloutAnchorPan, directionalHint: DirectionalHint.bottomCenter },
            React__default.createElement(CameraControlsCalloutContent$1, { type: 'Move' }))),
        showOrbitCallout && (React__default.createElement(Callout, { target: "#" + calloutAnchorOrbit, directionalHint: DirectionalHint.bottomCenter },
            React__default.createElement(CameraControlsCalloutContent$1, { type: 'Orbit' })))));
};
var classPrefix$2 = 'cb-camera-controls';
var classNames$2 = {
    root: classPrefix$2 + "-root",
    selected: classPrefix$2 + "-selected"
};
var getStyles$2 = memoizeFunction(function (_theme) {
    return mergeStyleSets({
        root: [
            classNames$2.root,
            {
                marginLeft: 'auto',
                marginRight: 'auto',
                display: 'flex'
            }
        ],
        selectedIndicator: [
            classNames$2.selected,
            {
                position: 'absolute',
                top: 28
            }
        ]
    });
});

var WrapperMode;
(function (WrapperMode) {
    WrapperMode["Builder"] = "Builder";
    WrapperMode["Viewer"] = "Viewer";
})(WrapperMode || (WrapperMode = {}));

var classPrefix$1 = 'cb-scene-view-wrapper';
var classNames$1 = {
    root: classPrefix$1 + "-root",
    leftHeader: classPrefix$1 + "-left-header-controls",
    button: classPrefix$1 + "-button",
    callout: classPrefix$1 + "-callout",
    calloutCheckbox: classPrefix$1 + "-callout-checkbox",
    calloutTitle: classPrefix$1 + "-callout-title",
    errorMessage: classPrefix$1 + "-error-message"
};
var getStyles$1 = function (props) {
    var mode = props.mode;
    return {
        /** provide a hook for custom styling by consumers */
        root: [classNames$1.root],
        leftHeaderControlsContainer: [classNames$1.leftHeader],
        subComponentStyles: {
            cameraControlsStack: {
                root: {
                    bottom: mode === WrapperMode.Viewer
                        ? VIEWER_CAMERA_CONTROLS_BOTTOM_OFFSET
                        : BUILDER_CAMERA_CONTROLS_BOTTOM_OFFSET,
                    display: 'flex',
                    position: 'absolute',
                    width: '100%',
                    // hacks for dayz cause Matt said so
                    '.cb-camera-controls-root .ms-FocusZone': {
                        marginLeft: mode === WrapperMode.Viewer ? 360 : 'auto'
                    }
                }
            }
        }
    };
};

/*

This class intercepts calls to the SceneViewer and enables AddIns to hook into events

*/
var getClassNames$1 = classNamesFunction();
var SceneViewWrapper = function (props) {
    var adapter = props.adapter, addInProps = props.addInProps, config = props.config, objectColorUpdated = props.objectColorUpdated, sceneId = props.sceneId, sceneViewProps = props.sceneViewProps, sceneVisuals = props.sceneVisuals, selectedVisual = props.selectedVisual, styles = props.styles, wrapperMode = props.wrapperMode;
    var onMeshHover = sceneViewProps.onMeshHover, onMeshClick = sceneViewProps.onMeshClick, onSceneLoaded = sceneViewProps.onSceneLoaded, svp = __rest(sceneViewProps, ["onMeshHover", "onMeshClick", "onSceneLoaded"]);
    var data = new ADT3DAddInEventData();
    data.adapter = adapter;
    data.config = config;
    data.sceneId = sceneId;
    data.sceneVisuals = sceneVisuals;
    var _a = useState(null), cameraInteractionType = _a[0], setCameraInteractionType = _a[1];
    var sceneViewComponent = useRef();
    var theme = useTheme();
    var classNames = getClassNames$1(styles, { theme: theme, mode: wrapperMode });
    var sceneThemeState = useSceneThemeContext().sceneThemeState;
    var sceneViewState = useContext(SceneViewContext).sceneViewState;
    // notify consumer of the change
    useEffect(function () {
        if (objectColorUpdated) {
            objectColorUpdated(sceneThemeState.objectColor);
        }
    }, [objectColorUpdated, sceneThemeState.objectColor]);
    useEffect(function () {
        var cameraInteraction = localStorage.getItem(SelectedCameraInteractionKey);
        if (cameraInteraction) {
            setCameraInteractionType(JSON.parse(cameraInteraction));
        }
        else {
            setCameraInteractionType(CameraInteraction.Rotate);
        }
    }, []);
    var sceneLoaded = function (scene) {
        data.eventType = ADT3DAddInEventTypes.SceneLoaded;
        data.scene = scene;
        var noBubble = false;
        if (addInProps === null || addInProps === void 0 ? void 0 : addInProps.onSceneLoaded) {
            noBubble = addInProps.onSceneLoaded(data);
        }
        if (!noBubble && onSceneLoaded) {
            onSceneLoaded(scene);
        }
    };
    var meshHover = function (mesh, scene, pointerEvent) {
        data.mesh = mesh;
        data.scene = scene;
        data.pointerEvent = pointerEvent;
        var noBubble = false;
        if (addInProps === null || addInProps === void 0 ? void 0 : addInProps.onMeshHover) {
            noBubble = addInProps.onMeshHover(data);
        }
        if (!noBubble && onMeshHover) {
            onMeshHover(mesh, scene, pointerEvent);
        }
    };
    var meshClick = function (mesh, scene, pointerEvent) {
        data.mesh = mesh;
        data.scene = scene;
        data.pointerEvent = pointerEvent;
        var noBubble = false;
        if (addInProps === null || addInProps === void 0 ? void 0 : addInProps.onMeshClick) {
            noBubble = addInProps.onMeshClick(data);
        }
        if (!noBubble && onMeshClick) {
            onMeshClick(mesh, scene, pointerEvent);
        }
    };
    var cameraMove = function (position) {
        if (addInProps === null || addInProps === void 0 ? void 0 : addInProps.onCameraMove) {
            addInProps.onCameraMove(position);
        }
    };
    var onCameraInteractionChanged = function (type) {
        setCameraInteractionType(type);
        localStorage.setItem(SelectedCameraInteractionKey, JSON.stringify(type));
    };
    var wrapperClassName = wrapperMode === WrapperMode.Builder
        ? 'cb-sceneview-builder-wrapper'
        : 'cb-sceneview-viewer-wrapper';
    return (React__default.createElement("div", { style: sceneThemeState.sceneBackground
            ? {
                background: sceneThemeState.sceneBackground.color
            }
            : {}, className: css(wrapperClassName, classNames.root) },
        React__default.createElement(SceneView, __assign({ ref: sceneViewComponent, backgroundColor: sceneThemeState.sceneBackground, objectColor: sceneThemeState.objectColor, objectColorOptions: sceneThemeState.objectColorOptions, objectStyle: sceneThemeState.objectStyle, onCameraMove: (addInProps === null || addInProps === void 0 ? void 0 : addInProps.onCameraMove) ? cameraMove : undefined, outlinedMeshitems: sceneViewState.outlinedMeshItems }, svp, { cameraInteractionType: cameraInteractionType, onMeshClick: meshClick, onMeshHover: meshHover, onSceneLoaded: sceneLoaded })),
        showFpsCounter ,
        React__default.createElement(Stack, { horizontal: true, styles: classNames.subComponentStyles.cameraControlsStack },
            React__default.createElement(CameraControls, { cameraInteraction: cameraInteractionType, onCameraInteractionChanged: onCameraInteractionChanged, onCameraZoom: function (zoom) { var _a; return (_a = sceneViewComponent.current) === null || _a === void 0 ? void 0 : _a.zoomCamera(zoom); }, onResetCamera: function () {
                    var _a, _b;
                    return (_a = sceneViewComponent.current) === null || _a === void 0 ? void 0 : _a.resetCamera((_b = selectedVisual === null || selectedVisual === void 0 ? void 0 : selectedVisual.element) === null || _b === void 0 ? void 0 : _b.objectIDs);
                } }))));
};
var SceneViewWrapper$1 = styled(SceneViewWrapper, getStyles$1);

var classPrefix = 'cb-adt-3d-viewer';
var classNames = {
    root: classPrefix + "-root",
    wrapper: classPrefix + "-wrapper",
    layersPicker: classPrefix + "-layers-picker"
};
var getStyles = function (_props) {
    return {
        root: [
            classNames.root,
            {
                height: '100%',
                width: '100%'
            }
        ],
        wrapper: [
            classNames.wrapper,
            {
                height: '100%',
                position: 'relative',
                width: '100%'
            }
        ],
        subComponentStyles: {}
    };
};

var getClassNames = classNamesFunction();
var debugLogging = false;
var logDebugConsole = getDebugLogger('ADT3DBuilder', debugLogging);
var ADT3DBuilder = function (props) {
    var adapter = props.adapter, modelUrl = props.modelUrl, sceneViewProps = props.sceneViewProps, onMeshClicked = props.onMeshClicked, onMeshHovered = props.onMeshHovered, showMeshesOnHover = props.showMeshesOnHover, coloredMeshItems = props.coloredMeshItems, showHoverOnSelected = props.showHoverOnSelected, gizmoElementItem = props.gizmoElementItem, gizmoTransformItem = props.gizmoTransformItem, setGizmoTransformItem = props.setGizmoTransformItem, objectColorUpdated = props.objectColorUpdated, styles = props.styles;
    // styles
    var fluentTheme = useTheme();
    var classNames = getClassNames(styles, { theme: fluentTheme });
    // viewer callbacks
    var meshClick = useCallback(function (mesh, _scene, e) {
        if (onMeshClicked) {
            onMeshClicked(mesh, e);
        }
    }, [onMeshClicked]);
    var meshHover = useCallback(function (mesh, _scene, _e) {
        if (onMeshHovered) {
            onMeshHovered(mesh);
        }
    }, [onMeshHovered]);
    var svp = sceneViewProps || {};
    logDebugConsole('debug', 'Render ADT3DBuilder');
    return (React__default.createElement(BaseComponent, { containerClassName: classNames.root },
        React__default.createElement("div", { className: classNames.wrapper },
            React__default.createElement(SceneViewWrapper$1, { objectColorUpdated: objectColorUpdated, wrapperMode: WrapperMode.Builder, sceneViewProps: __assign(__assign({}, svp), { modelUrl: modelUrl, onMeshClick: meshClick, onMeshHover: meshHover, coloredMeshItems: coloredMeshItems, showMeshesOnHover: showMeshesOnHover !== null && showMeshesOnHover !== void 0 ? showMeshesOnHover : true, showHoverOnSelected: showHoverOnSelected, gizmoElementItem: gizmoElementItem, gizmoTransformItem: gizmoTransformItem, setGizmoTransformItem: setGizmoTransformItem, getToken: adapter.authService
                        ? function () {
                            return adapter.authService.getToken('storage');
                        }
                        : undefined, allowModelDimensionErrorMessage: true }) }))));
};
var ADT3DBuilder$1 = styled(withErrorBoundary(ADT3DBuilder), getStyles);

export { ADT3DBuilder$1 as A, GET_HEADER_BUTTON_STYLES as G, HeaderControlGroup$1 as H, SceneThemeContextProvider as S, WrapperMode as W, SceneViewContextProvider as a, SceneViewContextActionType as b, HeaderControlButton$1 as c, useSceneThemeContext as d, SceneThemeContextActionType as e, SceneViewWrapper$1 as f, useSceneViewContext as u };
//# sourceMappingURL=ADT3DBuilder-e1ec74fa.js.map
