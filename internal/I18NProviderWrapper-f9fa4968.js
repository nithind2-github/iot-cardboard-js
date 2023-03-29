import React__default, { useMemo, createElement, useEffect } from 'react';
import { bL as I18nContext, L as Locale } from './Interfaces-8fb2a33a.js';

function I18nextProvider(_ref) {
  var i18n = _ref.i18n,
      defaultNS = _ref.defaultNS,
      children = _ref.children;
  var value = useMemo(function () {
    return {
      i18n: i18n,
      defaultNS: defaultNS
    };
  }, [i18n, defaultNS]);
  return createElement(I18nContext.Provider, {
    value: value
  }, children);
}

function I18nProviderWrapper(_a) {
    var children = _a.children, locale = _a.locale, _b = _a.localeStrings, localeStrings = _b === void 0 ? undefined : _b, i18n = _a.i18n;
    useEffect(function () {
        if (localeStrings) {
            i18n.addResourceBundle(
            // keep existing nested translation and overwrite those with the new ones
            locale || i18n.language || Locale.EN, // assign localeStrings to the provided locale prop, if there is not to the last used detected language; otherwise to default language EN
            'translation', localeStrings, true, true);
        }
        i18n.changeLanguage(locale);
    }, [i18n, locale, localeStrings]);
    return React__default.createElement(I18nextProvider, { i18n: i18n }, children);
}

export { I18nProviderWrapper as I };
//# sourceMappingURL=I18NProviderWrapper-f9fa4968.js.map
