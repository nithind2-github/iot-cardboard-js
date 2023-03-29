import React__default, { useMemo, useContext, useCallback } from 'react';
import { T as Theme$1, c7 as mergeStyleSets, bk as __assign, gg as createTheme, gh as initializeIcons, gi as ThemeProvider$1, bL as I18nContext, bS as useTranslation, cu as Spinner, bs as i18nInstance } from './Interfaces-8fb2a33a.js';
import { I as I18nProviderWrapper } from './I18NProviderWrapper-f9fa4968.js';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var getPrimaryButtonCustomOverrides = function (themeSetting, theme) {
    return {
        // Adds box shadow on light theme
        boxShadow: themeSetting === Theme$1.Light
            ? "0 1px 3px 0 rgba(0, 0, 0, .12)"
            : '0 1px 3px 0 rgba(255,255,255,.12)',
        primaryButtonTextColor: themeSetting === Theme$1.Kraken ? theme.palette.white : '#F2F3F4',
        primaryButtonTextColorDisabled: themeSetting === Theme$1.Dark
            ? '#F2F3F4'
            : theme.semanticColors.buttonTextDisabled
    };
};
var defaultSwatchColors = [
    { id: 'blue', label: 'blue', item: '#33A1FD' },
    { id: 'green', label: 'green', item: '#26C485' },
    { id: 'yellow', label: 'yellow', item: '#FEE440' },
    { id: 'orange', label: 'orange', item: '#F79824' },
    { id: 'red', label: 'red', item: '#C32F27' },
    { id: 'pink', label: 'pink', item: '#EE92C2' }
];
var defaultSwatchIcons = [
    {
        id: 'FastForward',
        item: 'FastForward'
    },
    {
        id: 'Asterisk',
        item: 'Asterisk'
    },
    {
        id: 'Frigid',
        item: 'Frigid'
    },
    {
        id: 'RedEye',
        item: 'RedEye'
    },
    {
        id: 'Ringer',
        item: 'Ringer'
    },
    {
        id: 'Stopwatch',
        item: 'Stopwatch'
    },
    {
        id: 'SpeedHigh',
        item: 'SpeedHigh'
    },
    {
        id: 'Shield',
        item: 'Shield'
    },
    {
        id: 'Accept',
        item: 'Accept'
    },
    {
        id: 'Warning',
        item: 'Warning'
    },
    {
        id: 'Lightbulb',
        item: 'Lightbulb'
    }
];
// Palettes created from https://aka.ms/themedesigner
var fluentLightThemePalette = {
    themePrimary: '#0078d4',
    themeLighterAlt: '#eff6fc',
    themeLighter: '#deecf9',
    themeLight: '#c7e0f4',
    themeTertiary: '#71afe5',
    themeSecondary: '#2b88d8',
    themeDarkAlt: '#106ebe',
    themeDark: '#005a9e',
    themeDarker: '#004578',
    neutralLighterAlt: '#faf9f8',
    neutralLighter: '#f3f2f1',
    neutralLight: '#edebe9',
    neutralQuaternaryAlt: '#e1dfdd',
    neutralQuaternary: '#d0d0d0',
    neutralTertiaryAlt: '#c8c6c4',
    neutralTertiary: '#a19f9d',
    neutralSecondary: '#605e5c',
    neutralPrimaryAlt: '#3b3a39',
    neutralPrimary: '#323130',
    neutralDark: '#201f1e',
    black: '#000000',
    white: '#ffffff',
    // custom colors
    glassyBackground75: '#faf9f8bf',
    glassyBackground90: '#faf9f8e6',
    glassyBorder: '#d3d3d3',
    errorTextLight: '#cb2431'
};
var fluentDarkThemePalette = {
    themePrimary: '#058bf2',
    themeLighterAlt: '#00060a',
    themeLighter: '#011627',
    themeLight: '#012a49',
    themeTertiary: '#035491',
    themeSecondary: '#047bd5',
    themeDarkAlt: '#1d96f4',
    themeDark: '#3fa6f5',
    themeDarker: '#70bdf8',
    neutralLighterAlt: '#0d0f0e',
    neutralLighter: '#0d0f0e',
    neutralLight: '#0c0e0d',
    neutralQuaternaryAlt: '#0b0d0c',
    neutralQuaternary: '#0b0c0c',
    neutralTertiaryAlt: '#5e5e5e',
    neutralTertiary: '#c8c8c8',
    neutralSecondary: '#d0d0d0',
    neutralPrimaryAlt: '#dadada',
    neutralPrimary: '#ffffff',
    neutralDark: '#f4f4f4',
    black: '#f8f8f8',
    white: '#0d0f0e',
    // custom colors
    glassyBackground75: '#040404bf',
    glassyBackground90: '#040404e6',
    glassyBorder: '#424242',
    errorTextLight: '#f85149'
};
var fluentExplorerThemePalette = {
    themePrimary: '#60aaff',
    themeLighterAlt: '#f9fcff',
    themeLighter: '#e6f2ff',
    themeLight: '#d0e6ff',
    themeTertiary: '#a0ccff',
    themeSecondary: '#74b5ff',
    themeDarkAlt: '#579ae6',
    themeDark: '#4a82c2',
    themeDarker: '#36608f',
    neutralLighterAlt: '#2b2b2b',
    neutralLighter: '#333333',
    neutralLight: '#414141',
    neutralQuaternaryAlt: '#4a4a4a',
    neutralQuaternary: '#515151',
    neutralTertiaryAlt: '#6f6f6f',
    neutralTertiary: '#c8c8c8',
    neutralSecondary: '#d0d0d0',
    neutralPrimaryAlt: '#dadada',
    neutralPrimary: '#ffffff',
    neutralDark: '#f4f4f4',
    black: '#f8f8f8',
    white: '#222222',
    // custom colors
    glassyBackground75: '#404040bf',
    glassyBackground90: '#404040e6',
    glassyBorder: '#777',
    errorTextLight: '#f85149'
};
var fluentKrakenThemePalette = {
    themePrimary: '#52baed',
    themeLighterAlt: '#030709',
    themeLighter: '#0d1e26',
    themeLight: '#193847',
    themeTertiary: '#326f8e',
    themeSecondary: '#49a3d1',
    themeDarkAlt: '#63c0ef',
    themeDark: '#7acaf1',
    themeDarker: '#9cd7f5',
    neutralLighterAlt: '#1c2746',
    neutralLighter: '#212c4d',
    neutralLight: '#293659',
    neutralQuaternaryAlt: '#2f3c61',
    neutralQuaternary: '#344267',
    neutralTertiaryAlt: '#4c5a81',
    neutralTertiary: '#c8c8c8',
    neutralSecondary: '#d0d0d0',
    neutralPrimaryAlt: '#dadada',
    neutralPrimary: '#ffffff',
    neutralDark: '#f4f4f4',
    black: '#f8f8f8',
    white: '#16203c',
    // custom colors
    glassyBackground75: '#1e2c53bf',
    glassyBackground90: '#1e2c53e6',
    glassyBorder: '#303d5c',
    errorTextLight: '#f85149'
};

var getDropdownStyles = function (_themeSetting, _theme) {
    return {
        root: {
            selectors: {
                '&.cb-modelcreate-readonly': {
                    selectors: {
                        label: {
                            color: 'var(--cb-color-text-primary)',
                            paddingBottom: 0
                        },
                        '.ms-Dropdown-title': {
                            color: 'var(--cb-color-text-primary)',
                            background: 'transparent'
                        },
                        '.ms-Dropdown-caretDownWrapper': {
                            display: 'none'
                        }
                    }
                }
            }
        }
    };
};

var getPivotStyles = function (_themeSetting, _theme) {
    return {
        icon: {
            marginRight: 4
        },
        link: {
            height: '36px'
        }
    };
};
var classPrefix = 'behaviors-form-pivot-header';
var classNames = {
    root: classPrefix + "-root",
    alert: classPrefix + "-alert"
};
var customPivotItemStyles = mergeStyleSets({
    root: [
        classNames.root,
        {
            alignItems: 'center',
            display: 'flex',
            flex: '0 1 100%'
        }
    ],
    alert: [
        classNames.alert,
        {
            backgroundColor: 'var(--cb-color-text-error)',
            borderRadius: 6,
            height: 6,
            marginLeft: 4,
            marginTop: 4,
            width: 6,
            flexShrink: 0
        }
    ]
});
function setPivotToRequired(isValid, t, link, defaultRenderer) {
    if (!link || !defaultRenderer) {
        return null;
    }
    return (React__default.createElement("span", { className: customPivotItemStyles.root },
        defaultRenderer(__assign(__assign({}, link), { itemIcon: undefined })),
        isValid === false && (React__default.createElement("span", { "aria-label": t('fieldRequired'), className: customPivotItemStyles.alert }))));
}

// Overrides PrimaryButton styles
var getPrimaryButtonStyles = function (themeSetting, theme) {
    var customOverrides = getPrimaryButtonCustomOverrides(themeSetting, theme);
    return {
        root: {
            boxShadow: customOverrides.boxShadow,
            color: customOverrides.primaryButtonTextColor
        },
        rootHovered: {
            color: customOverrides.primaryButtonTextColor
        },
        rootPressed: {
            color: customOverrides.primaryButtonTextColor
        },
        rootDisabled: {
            color: customOverrides.primaryButtonTextColorDisabled
        }
    };
};

var getSeparatorStyles = function (_themeSetting, theme) {
    return {
        root: {
            '&:before': {
                backgroundColor: theme.palette.neutralLight
            }
        }
    };
};

var getSpinButtonStyles = function (_themeSetting, _theme) {
    return {
        root: {
            selectors: {
                '&.cb-modelcreate-readonly': {
                    selectors: {
                        label: {
                            color: 'var(--cb-color-text-primary)'
                        },
                        input: {
                            color: 'var(--cb-color-text-primary)',
                            background: 'transparent'
                        },
                        div: {
                            color: 'var(--cb-color-text-primary)',
                            background: 'transparent'
                        },
                        span: {
                            display: 'none'
                        },
                        'div::after': {
                            border: 'none'
                        }
                    }
                }
            }
        }
    };
};

var getTextFieldStyles = function (_themeSetting, _theme) {
    return {
        root: {
            selectors: {
                '&.cb-modelcreate-readonly': {
                    selectors: {
                        label: {
                            color: 'var(--cb-color-text-primary)',
                            paddingBottom: 0
                        },
                        '.ms-TextField-fieldGroup': {
                            border: 'none'
                        },
                        input: {
                            color: 'var(--cb-color-text-primary)',
                            background: 'transparent'
                        },
                        textarea: {
                            color: 'var(--cb-color-text-primary)',
                            background: 'transparent'
                        },
                        '.ms-TextField-description': {
                            display: 'none'
                        }
                    }
                }
            }
        }
    };
};

var getToggleStyles = function (_themeSetting, _theme) {
    return {
        root: {
            selectors: {
                '&.cb-modelcreate-readonly': {
                    selectors: {
                        label: {
                            color: 'var(--cb-color-text-primary)'
                        },
                        button: {
                            display: 'none'
                        }
                    }
                }
            }
        }
    };
};

/*
    Constructs a strongly typed theme override object for each
    custom-styled Fluent Component.  If styling a new component,
    add a ComponentName.styles.ts file in the ComponentStyles/ folder.
*/
var getCustomComponentStyles = function (themeSetting, theme) { return ({
    PrimaryButton: {
        styles: getPrimaryButtonStyles(themeSetting, theme)
    },
    TextField: {
        styles: getTextFieldStyles()
    },
    Toggle: {
        styles: getToggleStyles()
    },
    Dropdown: {
        styles: getDropdownStyles()
    },
    Separator: {
        styles: getSeparatorStyles(themeSetting, theme)
    },
    SpinButton: {
        styles: getSpinButtonStyles()
    },
    Pivot: {
        styles: getPivotStyles()
    }
}); };

/*
    Semantic slots are used to style Fluent components and are auto populated
    based on the theme color palette slots. These auto populated colors can be overriden by
    specifying the semantic slots in this file
*/
var fluentLightThemeSemanticColors = {
    errorText: '#a4262c'
};
var fluentDarkThemeSemanticColors = {
    menuBackground: '#2b2b2b',
    errorText: '#751d20'
};
var fluentExplorerThemeSemanticColors = {
    menuBackground: '#323130',
    severeWarningBackground: '#442726',
    messageText: '#ffffff',
    errorText: '#751d20'
};
var fluentKrakenThemeSemanticColors = {
    errorText: '#a4262c'
};

var getFluentTheme = function (theme) {
    switch (theme) {
        case Theme$1.Dark:
            return fluentDarkTheme;
        case Theme$1.Light:
            return fluentLightTheme;
        case Theme$1.Explorer:
            return fluentExplorerTheme;
        case Theme$1.Kraken:
            return fluentKrakenTheme;
        default:
            return fluentLightTheme;
    }
};
/*
    Creates fluent theme using palette and semantic colors,
    then applies custom component style overrides.
*/
var createThemeWithCustomStyles = function (themeInfo, themeSetting) {
    var theme = createTheme(themeInfo);
    theme.components = getCustomComponentStyles(themeSetting, theme);
    return theme;
};
/*
    Each theme is made up of
    palette: Fluent UI color palette
    semanticColors: Specific UI color slots.  These are created using
    the palette colors, but can be overriden for more stylistic control.
*/
var fluentLightThemeInfo = {
    palette: fluentLightThemePalette,
    semanticColors: fluentLightThemeSemanticColors
};
var fluentDarkThemeInfo = {
    palette: fluentDarkThemePalette,
    semanticColors: fluentDarkThemeSemanticColors
};
var fluentExplorerThemeInfo = {
    palette: fluentExplorerThemePalette,
    semanticColors: fluentExplorerThemeSemanticColors
};
var fluentKrakenThemeInfo = {
    palette: fluentKrakenThemePalette,
    semanticColors: fluentKrakenThemeSemanticColors
};
var fluentLightTheme = createThemeWithCustomStyles(fluentLightThemeInfo, Theme$1.Light);
var fluentDarkTheme = createThemeWithCustomStyles(fluentDarkThemeInfo, Theme$1.Dark);
var fluentExplorerTheme = createThemeWithCustomStyles(fluentExplorerThemeInfo, Theme$1.Explorer);
var fluentKrakenTheme = createThemeWithCustomStyles(fluentKrakenThemeInfo, Theme$1.Kraken);

var Theme = React__default.createContext(null);
var useLibTheme = function () { return useContext(Theme); };
// Required to load fluent UI icons
initializeIcons();
var ThemeProvider = function (_a) {
    var children = _a.children, _b = _a.theme, theme = _b === void 0 ? Theme$1.Light : _b;
    var fluentTheme = useMemo(function () { return getFluentTheme(theme); }, [theme]);
    var unsetStyles = { all: 'unset', minHeight: 'inherit' };
    return (React__default.createElement(Theme.Provider, { value: theme },
        React__default.createElement(ThemeProvider$1, { theme: fluentTheme, applyTo: 'none', style: unsetStyles },
            React__default.createElement("div", { style: unsetStyles, "cardboard-data-theme": theme }, children))));
};

var css_248z$2 = ".cb-overlay-outer {\n  align-items: center;\n  background-color: var(--cb-color-bg-canvas);\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  position: absolute;\n  width: 100%;\n  z-index: 3; }\n\n.cb-overlay-inner {\n  background: var(--cb-color-bg-canvas-inset);\n  border-radius: 3px;\n  padding: 20px; }\n";
styleInject(css_248z$2);

var Overlay = function (_a) {
    var onClose = _a.onClose, children = _a.children;
    // Absence of onClose implies that the overlay cannot be closed.
    // onClose is offloaded to the consumer of overlay to handle deciding whether to render the overlay instance
    var onCloseWrapper = useCallback(function () {
        if (onClose) {
            onClose();
        }
    }, [onClose]);
    return (React__default.createElement("div", { className: "cb-overlay-outer", onClick: onCloseWrapper },
        React__default.createElement("div", { className: "cb-overlay-inner" }, children)));
};
var Overlay$1 = React__default.memo(Overlay);

var css_248z$1 = ".cb-error-title {\n  color: var(--cb-color-text-danger);\n  font-weight: 700; }\n";
styleInject(css_248z$1);

var Error = function (_a) {
    var errorTitle = _a.errorTitle, errorContent = _a.errorContent;
    return (React__default.createElement(Overlay$1, null,
        React__default.createElement("div", { className: "cb-error-title" }, errorTitle),
        errorContent && React__default.createElement("div", null, errorContent)));
};
var ErrorComponent = React__default.memo(Error);

var css_248z = "/*\r\n  Your use of the content in the files referenced here is subject to the terms of the license at http://aka.ms/fabric-assets-license\r\n*/\n*[class^='cb-'] {\n  box-sizing: border-box;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }\n\n.cb-tsicomponent-container {\n  height: 100%;\n  width: 100%; }\n\n.cb-warning-icon {\n  color: var(--cb-color-text-warning); }\n\n.cb-base-fade-in {\n  animation: fadeIn 0.367s cubic-bezier(0.1, 0.9, 0.2, 1) forwards; }\n\n@keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes fadeOut {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n.cb-base-component {\n  color: var(--cb-color-text-primary);\n  height: 100%;\n  position: relative;\n  width: 100%; }\n";
styleInject(css_248z);

/** Provides wrapper component for theming and localization.
 *  Also provides optional UI states for loading, empty data, and errors.
 *
 *  If provided adapterResults, any catastrophic errors present will be
 *  rendered in error overlay.  This functionality can be short circuited by
 *  explicitly passing a componentError object.
 *
 * Note: If theming or localization providers are already present higher in
 * the component tree, those providers won't be duplicated.
 */
var BaseComponent = function (_a) {
    var _b, _c;
    var adapterResults = _a.adapterResults, children = _a.children, componentError = _a.componentError, containerClassName = _a.containerClassName, customLoadingMessage = _a.customLoadingMessage, _d = _a.disableDefaultStyles, disableDefaultStyles = _d === void 0 ? false : _d, _e = _a.isDataEmpty, isDataEmpty = _e === void 0 ? false : _e, _f = _a.isLoading, isLoading = _f === void 0 ? false : _f, locale = _a.locale, localeStrings = _a.localeStrings, theme = _a.theme;
    // Access theme and localization contexts to see if they are already present in component tree
    var localizationContext = useContext(I18nContext);
    var themeContext = useContext(Theme);
    var t = useTranslation().t;
    var catastrophicError = adapterResults === null || adapterResults === void 0 ? void 0 : adapterResults.reduce(function (acc, curr) {
        if (acc)
            return acc;
        var err = curr === null || curr === void 0 ? void 0 : curr.getCatastrophicError();
        if (err)
            return err;
        return null;
    }, null);
    var errorToRender = componentError || catastrophicError;
    var showInfo = !errorToRender && (isLoading || isDataEmpty);
    var loadingMessage = customLoadingMessage || t('loading');
    var BaseContents = (React__default.createElement("div", { className: (disableDefaultStyles ? '' : 'cb-base-component ') + " " + (containerClassName ? containerClassName : ''), "cardboard-data-theme": (_b = (theme || themeContext)) !== null && _b !== void 0 ? _b : undefined },
        showInfo && (React__default.createElement(React__default.Fragment, null, React__default.createElement(Overlay$1, null, isLoading ? (React__default.createElement("div", null,
            React__default.createElement(Spinner, { label: loadingMessage }))) : (t('noData'))))),
        errorToRender && (React__default.createElement(ErrorComponent, { errorTitle: errorToRender.name, errorContent: errorToRender.message
                ? errorToRender.message
                : (_c = errorToRender.rawError) === null || _c === void 0 ? void 0 : _c.toString() })),
        children));
    if (!localizationContext && !themeContext) {
        // Missing both theming and localization contexts
        return (React__default.createElement(I18nProviderWrapper, { locale: locale, localeStrings: localeStrings, i18n: i18nInstance },
            React__default.createElement(ThemeProvider, { theme: theme }, BaseContents)));
    }
    else if (!localizationContext) {
        // Missing only localization context
        return (React__default.createElement(I18nProviderWrapper, { locale: locale, localeStrings: localeStrings, i18n: i18nInstance }, BaseContents));
    }
    else if (!themeContext) {
        // Missing only theming context
        return React__default.createElement(ThemeProvider, { theme: theme }, BaseContents);
    }
    else {
        // Theming and localization contexts are already present in tree
        return BaseContents;
    }
};

export { BaseComponent as B, defaultSwatchIcons as a, setPivotToRequired as b, defaultSwatchColors as d, styleInject as s, useLibTheme as u };
//# sourceMappingURL=BaseComponent-cb0a4bca.js.map
