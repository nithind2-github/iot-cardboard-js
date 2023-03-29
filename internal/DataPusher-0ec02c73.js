import { gd as _setPrototypeOf, I as AdtPusherSimulationType, cN as SpinButton, ge as Position, gf as getNumericPart, c_ as _assertThisInitialized, A as AssetTypes, cX as MessageBar, cY as MessageBarType, bS as useTranslation, U as UploadPhase, c8 as FontIcon, bi as __awaiter, bj as __generator, bk as __assign, cM as TextField, ce as Separator, c4 as PrimaryButton, d7 as ProgressIndicator, cL as Dropdown, cU as Toggle, c2 as Stack, cq as Text } from './Interfaces-8fb2a33a.js';
import React__default, { Children, isValidElement, cloneElement, useState, useEffect, createContext, useReducer, useRef, useContext } from 'react';
import { s as styleInject, B as BaseComponent } from './BaseComponent-cb0a4bca.js';
import { f as fn } from './immer.esm-8bf4cc8a.js';
import { u as useAdapter } from './StableGuidRngProvider-c9a58eb4.js';
import { A as AssetSimulation } from './AssetSimulation-1892741d.js';
import { _ as _objectWithoutPropertiesLoose } from './objectWithoutPropertiesLoose-88438d63.js';
import ReactDOM__default from 'react-dom';
import { w as withErrorBoundary } from './ErrorBoundary-350d7d3a.js';

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

var reactIs = {exports: {}};

var reactIs_production_min = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_production_min;

function requireReactIs_production_min () {
	if (hasRequiredReactIs_production_min) return reactIs_production_min;
	hasRequiredReactIs_production_min = 1;
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
	Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
	function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}reactIs_production_min.AsyncMode=l;reactIs_production_min.ConcurrentMode=m;reactIs_production_min.ContextConsumer=k;reactIs_production_min.ContextProvider=h;reactIs_production_min.Element=c;reactIs_production_min.ForwardRef=n;reactIs_production_min.Fragment=e;reactIs_production_min.Lazy=t;reactIs_production_min.Memo=r;reactIs_production_min.Portal=d;
	reactIs_production_min.Profiler=g;reactIs_production_min.StrictMode=f;reactIs_production_min.Suspense=p;reactIs_production_min.isAsyncMode=function(a){return A(a)||z(a)===l};reactIs_production_min.isConcurrentMode=A;reactIs_production_min.isContextConsumer=function(a){return z(a)===k};reactIs_production_min.isContextProvider=function(a){return z(a)===h};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};reactIs_production_min.isForwardRef=function(a){return z(a)===n};reactIs_production_min.isFragment=function(a){return z(a)===e};reactIs_production_min.isLazy=function(a){return z(a)===t};
	reactIs_production_min.isMemo=function(a){return z(a)===r};reactIs_production_min.isPortal=function(a){return z(a)===d};reactIs_production_min.isProfiler=function(a){return z(a)===g};reactIs_production_min.isStrictMode=function(a){return z(a)===f};reactIs_production_min.isSuspense=function(a){return z(a)===p};
	reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};reactIs_production_min.typeOf=z;
	return reactIs_production_min;
}

var reactIs_development = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_development;

function requireReactIs_development () {
	if (hasRequiredReactIs_development) return reactIs_development;
	hasRequiredReactIs_development = 1;



	if (process.env.NODE_ENV !== "production") {
	  (function() {

	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
	// (unstable) APIs that have been removed. Can we remove the symbols?

	var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
	var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
	var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
	var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
	var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

	function isValidElementType(type) {
	  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
	}

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;

	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_ASYNC_MODE_TYPE:
	          case REACT_CONCURRENT_MODE_TYPE:
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	            return type;

	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_LAZY_TYPE:
	              case REACT_MEMO_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;

	              default:
	                return $$typeof;
	            }

	        }

	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	} // AsyncMode is deprecated along with isAsyncMode

	var AsyncMode = REACT_ASYNC_MODE_TYPE;
	var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;
	var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

	      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	    }
	  }

	  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
	}
	function isConcurrentMode(object) {
	  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}

	reactIs_development.AsyncMode = AsyncMode;
	reactIs_development.ConcurrentMode = ConcurrentMode;
	reactIs_development.ContextConsumer = ContextConsumer;
	reactIs_development.ContextProvider = ContextProvider;
	reactIs_development.Element = Element;
	reactIs_development.ForwardRef = ForwardRef;
	reactIs_development.Fragment = Fragment;
	reactIs_development.Lazy = Lazy;
	reactIs_development.Memo = Memo;
	reactIs_development.Portal = Portal;
	reactIs_development.Profiler = Profiler;
	reactIs_development.StrictMode = StrictMode;
	reactIs_development.Suspense = Suspense;
	reactIs_development.isAsyncMode = isAsyncMode;
	reactIs_development.isConcurrentMode = isConcurrentMode;
	reactIs_development.isContextConsumer = isContextConsumer;
	reactIs_development.isContextProvider = isContextProvider;
	reactIs_development.isElement = isElement;
	reactIs_development.isForwardRef = isForwardRef;
	reactIs_development.isFragment = isFragment;
	reactIs_development.isLazy = isLazy;
	reactIs_development.isMemo = isMemo;
	reactIs_development.isPortal = isPortal;
	reactIs_development.isProfiler = isProfiler;
	reactIs_development.isStrictMode = isStrictMode;
	reactIs_development.isSuspense = isSuspense;
	reactIs_development.isValidElementType = isValidElementType;
	reactIs_development.typeOf = typeOf;
	  })();
	}
	return reactIs_development;
}

(function (module) {

	if (process.env.NODE_ENV === 'production') {
	  module.exports = requireReactIs_production_min();
	} else {
	  module.exports = requireReactIs_development();
	}
} (reactIs));

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}

var propTypes = {exports: {}};

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

var objectAssign;
var hasRequiredObjectAssign;

function requireObjectAssign () {
	if (hasRequiredObjectAssign) return objectAssign;
	hasRequiredObjectAssign = 1;
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};
	return objectAssign;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret_1;
var hasRequiredReactPropTypesSecret;

function requireReactPropTypesSecret () {
	if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
	hasRequiredReactPropTypesSecret = 1;

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	ReactPropTypesSecret_1 = ReactPropTypesSecret;
	return ReactPropTypesSecret_1;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var checkPropTypes_1;
var hasRequiredCheckPropTypes;

function requireCheckPropTypes () {
	if (hasRequiredCheckPropTypes) return checkPropTypes_1;
	hasRequiredCheckPropTypes = 1;

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  var ReactPropTypesSecret = requireReactPropTypesSecret();
	  var loggedTypeFailures = {};
	  var has = Function.call.bind(Object.prototype.hasOwnProperty);

	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            var err = Error(
	              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
	              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
	            );
	            err.name = 'Invariant Violation';
	            throw err;
	          }
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error && !(error instanceof Error)) {
	          printWarning(
	            (componentName || 'React class') + ': type specification of ' +
	            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
	            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
	            'You may have forgotten to pass an argument to the type checker ' +
	            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
	            'shape all require an argument).'
	          );
	        }
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          printWarning(
	            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
	          );
	        }
	      }
	    }
	  }
	}

	/**
	 * Resets warning cache when testing.
	 *
	 * @private
	 */
	checkPropTypes.resetWarningCache = function() {
	  if (process.env.NODE_ENV !== 'production') {
	    loggedTypeFailures = {};
	  }
	};

	checkPropTypes_1 = checkPropTypes;
	return checkPropTypes_1;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var factoryWithTypeCheckers;
var hasRequiredFactoryWithTypeCheckers;

function requireFactoryWithTypeCheckers () {
	if (hasRequiredFactoryWithTypeCheckers) return factoryWithTypeCheckers;
	hasRequiredFactoryWithTypeCheckers = 1;

	var ReactIs = reactIs.exports;
	var assign = requireObjectAssign();

	var ReactPropTypesSecret = requireReactPropTypesSecret();
	var checkPropTypes = requireCheckPropTypes();

	var has = Function.call.bind(Object.prototype.hasOwnProperty);
	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	function emptyFunctionThatReturnsNull() {
	  return null;
	}

	factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    elementType: createElementTypeTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          var err = new Error(
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	          err.name = 'Invariant Violation';
	          throw err;
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            printWarning(
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!ReactIs.isValidElementType(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      if (process.env.NODE_ENV !== 'production') {
	        if (arguments.length > 1) {
	          printWarning(
	            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
	            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
	          );
	        } else {
	          printWarning('Invalid argument supplied to oneOf, expected an array.');
	        }
	      }
	      return emptyFunctionThatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
	        var type = getPreciseType(value);
	        if (type === 'symbol') {
	          return String(value);
	        }
	        return value;
	      });
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (has(propValue, key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunctionThatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        printWarning(
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
	        );
	        return emptyFunctionThatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }

	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from
	      // props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // falsy value can't be a Symbol
	    if (!propValue) {
	      return false;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};
	return factoryWithTypeCheckers;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var factoryWithThrowingShims;
var hasRequiredFactoryWithThrowingShims;

function requireFactoryWithThrowingShims () {
	if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims;
	hasRequiredFactoryWithThrowingShims = 1;

	var ReactPropTypesSecret = requireReactPropTypesSecret();

	function emptyFunction() {}
	function emptyFunctionWithReset() {}
	emptyFunctionWithReset.resetWarningCache = emptyFunction;

	factoryWithThrowingShims = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    var err = new Error(
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	    err.name = 'Invariant Violation';
	    throw err;
	  }	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  }	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    elementType: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim,

	    checkPropTypes: emptyFunctionWithReset,
	    resetWarningCache: emptyFunction
	  };

	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};
	return factoryWithThrowingShims;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs.exports;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  propTypes.exports = requireFactoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  propTypes.exports = requireFactoryWithThrowingShims()();
}

var css_248z$2 = "/*\r\n  Your use of the content in the files referenced here is subject to the terms of the license at http://aka.ms/fabric-assets-license\r\n*/\n*[class^='cb-'] {\n  box-sizing: border-box;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }\n\n.cb-tsicomponent-container {\n  height: 100%;\n  width: 100%; }\n\n.cb-warning-icon {\n  color: var(--cb-color-text-warning); }\n\n.cb-base-fade-in {\n  animation: fadeIn 0.367s cubic-bezier(0.1, 0.9, 0.2, 1) forwards; }\n\n@keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes fadeOut {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n.cb-datapusher-container {\n  height: 100%;\n  padding: 0 20px;\n  position: relative;\n  width: 100%; }\n  .cb-datapusher-container h4 {\n    border-bottom: 1px solid var(--cb-color-card-border);\n    font-weight: 600;\n    margin: 0 0 8px;\n    padding: 12px 0; }\n  .cb-datapusher-container .cb-adt-data-pusher {\n    height: 100%;\n    overflow-y: auto; }\n  .cb-datapusher-container .cb-form-field-description {\n    max-width: 600px; }\n  .cb-datapusher-container .cb-datapusher-footer {\n    background-color: var(--cb-color-bg-canvas);\n    bottom: 0;\n    left: 20px;\n    overflow: hidden;\n    position: absolute;\n    right: 20px; }\n  .cb-datapusher-container .cb-live-stream-data-form-container,\n  .cb-datapusher-container .cb-other-options-form-container,\n  .cb-datapusher-container .cb-quick-fill-data-form-container {\n    margin-bottom: 8px; }\n  .cb-datapusher-container .cb-status-row-container {\n    align-items: center;\n    display: flex; }\n  .cb-datapusher-container .cb-generate-assets-container {\n    max-width: 600px;\n    width: 100%; }\n  .cb-datapusher-container .cb-initiate-action-button {\n    margin-top: 16px; }\n";
styleInject(css_248z$2);

var dataPusherActionType;
(function (dataPusherActionType) {
    dataPusherActionType[dataPusherActionType["SET_INSTANCE_URL"] = 0] = "SET_INSTANCE_URL";
    dataPusherActionType[dataPusherActionType["SET_DAYS_TO_SIMULATE"] = 1] = "SET_DAYS_TO_SIMULATE";
    dataPusherActionType[dataPusherActionType["SET_DATA_SPACING"] = 2] = "SET_DATA_SPACING";
    dataPusherActionType[dataPusherActionType["SET_QUICK_STREAM_FREQUENCY"] = 3] = "SET_QUICK_STREAM_FREQUENCY";
    dataPusherActionType[dataPusherActionType["SET_IS_LIVE_DATA_SIMULATED"] = 4] = "SET_IS_LIVE_DATA_SIMULATED";
    dataPusherActionType[dataPusherActionType["SET_LIVE_STREAM_FREQUENCY"] = 5] = "SET_LIVE_STREAM_FREQUENCY";
    dataPusherActionType[dataPusherActionType["SET_IS_SIMULATION_RUNNING"] = 6] = "SET_IS_SIMULATION_RUNNING";
    dataPusherActionType[dataPusherActionType["SET_IS_DATA_BACK_FILLED"] = 7] = "SET_IS_DATA_BACK_FILLED";
    dataPusherActionType[dataPusherActionType["SET_IS_ENVIRONMENT_READY"] = 8] = "SET_IS_ENVIRONMENT_READY";
    dataPusherActionType[dataPusherActionType["SET_LIVE_STATUS"] = 9] = "SET_LIVE_STATUS";
    dataPusherActionType[dataPusherActionType["SET_MODELS"] = 10] = "SET_MODELS";
    dataPusherActionType[dataPusherActionType["SET_TWINS"] = 11] = "SET_TWINS";
    dataPusherActionType[dataPusherActionType["SET_RELATIONSHIPS"] = 12] = "SET_RELATIONSHIPS";
    dataPusherActionType[dataPusherActionType["SET_ARE_ASSETS_UPLOADED"] = 13] = "SET_ARE_ASSETS_UPLOADED";
    dataPusherActionType[dataPusherActionType["SET_ARE_ASSETS_SET"] = 14] = "SET_ARE_ASSETS_SET";
    dataPusherActionType[dataPusherActionType["SET_SIMULATION_TYPE"] = 15] = "SET_SIMULATION_TYPE";
})(dataPusherActionType || (dataPusherActionType = {}));

var defaultAdtDataPusherState = {
    instanceUrl: '<your_adt_instance_url>.digitaltwins.azure.net',
    daysToSimulate: 7,
    dataSpacing: 60000,
    quickStreamFrequency: 1000,
    isLiveDataSimulated: true,
    liveStreamFrequency: 10,
    isSimulationRunning: false,
    isDataBackFilled: false,
    isEnvironmentReady: false,
    disablePastEvents: false,
    models: [],
    twins: [],
    relationships: [],
    areAssetsSet: false,
    simulationStatus: {
        areAssetsUploaded: false,
        liveStatus: null
    },
    simulationType: AdtPusherSimulationType.RobotArms
};
// Using immer immutability helper: https://github.com/immerjs/immer
var dataPusherReducer = fn(function (draft, action) {
    var payload = action.payload;
    switch (action.type) {
        case dataPusherActionType.SET_INSTANCE_URL:
            draft.instanceUrl = payload;
            return;
        case dataPusherActionType.SET_DAYS_TO_SIMULATE:
            draft.daysToSimulate = payload;
            return;
        case dataPusherActionType.SET_DATA_SPACING:
            draft.dataSpacing = payload;
            return;
        case dataPusherActionType.SET_QUICK_STREAM_FREQUENCY:
            draft.quickStreamFrequency = payload;
            return;
        case dataPusherActionType.SET_IS_LIVE_DATA_SIMULATED:
            draft.isLiveDataSimulated = payload;
            return;
        case dataPusherActionType.SET_LIVE_STREAM_FREQUENCY:
            draft.liveStreamFrequency = payload;
            return;
        case dataPusherActionType.SET_IS_SIMULATION_RUNNING:
            draft.isSimulationRunning = payload;
            return;
        case dataPusherActionType.SET_IS_DATA_BACK_FILLED:
            draft.isDataBackFilled = payload;
            return;
        case dataPusherActionType.SET_IS_ENVIRONMENT_READY:
            draft.isEnvironmentReady = payload;
            return;
        case dataPusherActionType.SET_MODELS:
            draft.models = payload;
            return;
        case dataPusherActionType.SET_TWINS:
            draft.twins = payload;
            return;
        case dataPusherActionType.SET_RELATIONSHIPS:
            draft.relationships = payload;
            return;
        case dataPusherActionType.SET_ARE_ASSETS_SET:
            draft.areAssetsSet = payload;
            return;
        case dataPusherActionType.SET_ARE_ASSETS_UPLOADED:
            draft.simulationStatus.areAssetsUploaded = payload;
            return;
        case dataPusherActionType.SET_LIVE_STATUS:
            draft.simulationStatus.liveStatus = payload;
            return;
        case dataPusherActionType.SET_SIMULATION_TYPE:
            draft.simulationType = payload;
            return;
        default:
            return;
    }
});

/** Increment the value (or return nothing to keep the previous value if invalid) */
var onIncrementSpinner = function (value, max, suffix, step) {
    var numericValue = getNumericPart(value);
    if (numericValue !== undefined) {
        return String(Math.min(numericValue + step, max)) + ' ' + suffix;
    }
};
/** Decrement the value (or return nothing to keep the previous value if invalid) */
var onDecrementSpinner = function (value, min, suffix, step) {
    var numericValue = getNumericPart(value);
    if (numericValue !== undefined) {
        return String(Math.max(numericValue - step, min)) + ' ' + suffix;
    }
};
/**
 * Clamp the value within the valid range (or return nothing to keep the previous value
 * if there's not valid numeric input)
 */
var onValidateInput = function (value, min, max, suffix) {
    var numericValue = getNumericPart(value);
    if (numericValue !== undefined) {
        numericValue = Math.min(numericValue, max);
        numericValue = Math.max(numericValue, min);
        return String(numericValue) + ' ' + suffix;
    }
    else
        return '';
};
var NumericSpinInput = function (_a) {
    var label = _a.label, max = _a.max, min = _a.min, onChange = _a.onChange, onDecrement = _a.onDecrement, onIncrement = _a.onIncrement, step = _a.step, suffix = _a.suffix, width = _a.width, value = _a.value;
    var spinButtonStyles = {
        spinButtonWrapper: { width: width }
    };
    return (React__default.createElement(SpinButton, { label: label, labelPosition: Position.top, value: onValidateInput(String(value), min, max, suffix), onChange: function (_e, newValue) {
            var numericPart = getNumericPart(newValue);
            if (numericPart) {
                onChange(numericPart);
            }
        }, onIncrement: function (value) {
            var newVal = onIncrementSpinner(value, max, suffix, step);
            newVal && onIncrement(getNumericPart(newVal));
        }, onDecrement: function (value) {
            var newVal = onDecrementSpinner(value, min, suffix, step);
            newVal && onDecrement(getNumericPart(newVal));
        }, onValidate: function (value) {
            return onValidateInput(value, min, max, suffix);
        }, incrementButtonAriaLabel: "Increase value by " + step, decrementButtonAriaLabel: "Decrease value by " + step, styles: spinButtonStyles }));
};

var css_248z$1 = "/*\r\n  Your use of the content in the files referenced here is subject to the terms of the license at http://aka.ms/fabric-assets-license\r\n*/\n*[class^='cb-'] {\n  box-sizing: border-box;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }\n\n.cb-tsicomponent-container {\n  height: 100%;\n  width: 100%; }\n\n.cb-warning-icon {\n  color: var(--cb-color-text-warning); }\n\n.cb-base-fade-in {\n  animation: fadeIn 0.367s cubic-bezier(0.1, 0.9, 0.2, 1) forwards; }\n\n@keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes fadeOut {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n.cb-expandable-enter {\n  max-height: 0;\n  overflow: hidden; }\n\n.cb-expandable-enter-active {\n  max-height: 5000px;\n  transition: max-height 0.4s cubic-bezier(0.8, 0, 0.2, 1); }\n\n.cb-expandable-exit {\n  max-height: 5000px; }\n\n.cb-expandable-exit-active {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.4s cubic-bezier(0, 1, 0, 1); }\n\n.cb-expandable-exit-done {\n  max-height: 0;\n  overflow: hidden; }\n";
styleInject(css_248z$1);

/**
 * Checks if a given element has a CSS class.
 * 
 * @param element the element
 * @param className the CSS class name
 */
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

/**
 * Adds a CSS class to a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!hasClass(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}

function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}
/**
 * Removes a CSS class from a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */


function removeClass$1(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  }
}

var config = {
  disabled: false
};

var timeoutsShape = process.env.NODE_ENV !== 'production' ? propTypes.exports.oneOfType([propTypes.exports.number, propTypes.exports.shape({
  enter: propTypes.exports.number,
  exit: propTypes.exports.number,
  appear: propTypes.exports.number
}).isRequired]) : null;
var classNamesShape = process.env.NODE_ENV !== 'production' ? propTypes.exports.oneOfType([propTypes.exports.string, propTypes.exports.shape({
  enter: propTypes.exports.string,
  exit: propTypes.exports.string,
  active: propTypes.exports.string
}), propTypes.exports.shape({
  enter: propTypes.exports.string,
  enterDone: propTypes.exports.string,
  enterActive: propTypes.exports.string,
  exit: propTypes.exports.string,
  exitDone: propTypes.exports.string,
  exitActive: propTypes.exports.string
})]) : null;

var TransitionGroupContext = React__default.createContext(null);

var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [ReactDOM__default.findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : ReactDOM__default.findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM__default.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children;
        _this$props.in;
        _this$props.mountOnEnter;
        _this$props.unmountOnExit;
        _this$props.appear;
        _this$props.enter;
        _this$props.exit;
        _this$props.timeout;
        _this$props.addEndListener;
        _this$props.onEnter;
        _this$props.onEntering;
        _this$props.onEntered;
        _this$props.onExit;
        _this$props.onExiting;
        _this$props.onExited;
        _this$props.nodeRef;
        var childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      React__default.createElement(TransitionGroupContext.Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : React__default.cloneElement(React__default.Children.only(children), childProps))
    );
  };

  return Transition;
}(React__default.Component);

Transition.contextType = TransitionGroupContext;
Transition.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: propTypes.exports.shape({
    current: typeof Element === 'undefined' ? propTypes.exports.any : function (propValue, key, componentName, location, propFullName, secret) {
      var value = propValue[key];
      return propTypes.exports.instanceOf(value && 'ownerDocument' in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
    }
  }),

  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: propTypes.exports.oneOfType([propTypes.exports.func.isRequired, propTypes.exports.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: propTypes.exports.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: propTypes.exports.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: propTypes.exports.bool,

  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: propTypes.exports.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: propTypes.exports.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: propTypes.exports.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: propTypes.exports.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: propTypes.exports.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: propTypes.exports.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: propTypes.exports.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: propTypes.exports.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: propTypes.exports.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: propTypes.exports.func
} : {}; // Name the function so it is clearer in the documentation

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;

var _addClass = function addClass$1(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return addClass(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return removeClass$1(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](https://docs.angularjs.org/api/ngAnimate) library, you should
 * use it if you're using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**, so it's
 * important to add `transition` declaration only to them, otherwise transitions
 * might not behave as intended! This might not be obvious when the transitions
 * are symmetrical, i.e. when `*-enter-active` is the same as `*-exit`, like in
 * the example above (minus `transition`), but it becomes apparent in more
 * complex transitions.
 *
 * **Note**: If you're using the
 * [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
 * prop, make sure to define styles for `.appear-*` classes as well.
 */


var CSSTransition = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };

    _this.onEnter = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument[0],
          appearing = _this$resolveArgument[1];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, appearing ? 'appear' : 'enter', 'base');

      if (_this.props.onEnter) {
        _this.props.onEnter(maybeNode, maybeAppearing);
      }
    };

    _this.onEntering = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument2[0],
          appearing = _this$resolveArgument2[1];

      var type = appearing ? 'appear' : 'enter';

      _this.addClass(node, type, 'active');

      if (_this.props.onEntering) {
        _this.props.onEntering(maybeNode, maybeAppearing);
      }
    };

    _this.onEntered = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument3[0],
          appearing = _this$resolveArgument3[1];

      var type = appearing ? 'appear' : 'enter';

      _this.removeClasses(node, type);

      _this.addClass(node, type, 'done');

      if (_this.props.onEntered) {
        _this.props.onEntered(maybeNode, maybeAppearing);
      }
    };

    _this.onExit = function (maybeNode) {
      var _this$resolveArgument4 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument4[0];

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      _this.addClass(node, 'exit', 'base');

      if (_this.props.onExit) {
        _this.props.onExit(maybeNode);
      }
    };

    _this.onExiting = function (maybeNode) {
      var _this$resolveArgument5 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument5[0];

      _this.addClass(node, 'exit', 'active');

      if (_this.props.onExiting) {
        _this.props.onExiting(maybeNode);
      }
    };

    _this.onExited = function (maybeNode) {
      var _this$resolveArgument6 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument6[0];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, 'exit', 'done');

      if (_this.props.onExited) {
        _this.props.onExited(maybeNode);
      }
    };

    _this.resolveArguments = function (maybeNode, maybeAppearing) {
      return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] // here `maybeNode` is actually `appearing`
      : [maybeNode, maybeAppearing];
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + "-" : '';
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
      return {
        baseClassName: baseClassName,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.addClass = function addClass(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];

    var _this$getClassNames = this.getClassNames('enter'),
        doneClassName = _this$getClassNames.doneClassName;

    if (type === 'appear' && phase === 'done' && doneClassName) {
      className += " " + doneClassName;
    } // This is to force a repaint,
    // which is necessary in order to transition styles when adding a class name.


    if (phase === 'active') {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
    }

    if (className) {
      this.appliedClasses[type][phase] = className;

      _addClass(node, className);
    }
  };

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type],
        baseClassName = _this$appliedClasses$.base,
        activeClassName = _this$appliedClasses$.active,
        doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};

    if (baseClassName) {
      removeClass(node, baseClassName);
    }

    if (activeClassName) {
      removeClass(node, activeClassName);
    }

    if (doneClassName) {
      removeClass(node, doneClassName);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props;
        _this$props.classNames;
        var props = _objectWithoutPropertiesLoose(_this$props, ["classNames"]);

    return /*#__PURE__*/React__default.createElement(Transition, _extends({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(React__default.Component);

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes = process.env.NODE_ENV !== "production" ? _extends({}, Transition.propTypes, {
  /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided, which
   * will be suffixed for each stage, e.g. `classNames="fade"` applies:
   *
   * - `fade-appear`, `fade-appear-active`, `fade-appear-done`
   * - `fade-enter`, `fade-enter-active`, `fade-enter-done`
   * - `fade-exit`, `fade-exit-active`, `fade-exit-done`
   *
   * A few details to note about how these classes are applied:
   *
   * 1. They are _joined_ with the ones that are already defined on the child
   *    component, so if you want to add some base styles, you can use
   *    `className` without worrying that it will be overridden.
   *
   * 2. If the transition component mounts with `in={false}`, no classes are
   *    applied yet. You might be expecting `*-exit-done`, but if you think
   *    about it, a component cannot finish exiting if it hasn't entered yet.
   *
   * 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
   *    allows you to define different behavior for when appearing is done and
   *    when regular entering is done, using selectors like
   *    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
   *    an epic entrance animation when element first appears in the DOM using
   *    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   *    simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: classNamesShape,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: propTypes.exports.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: propTypes.exports.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: propTypes.exports.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExit: propTypes.exports.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: propTypes.exports.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExited: propTypes.exports.func
}) : {};

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */

function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && isValidElement(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) Children.map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */

function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return cloneElement(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!isValidElement(child)) return;
    var hasPrev = (key in prevChildMapping);
    var hasNext = (key in nextChildMapping);
    var prevChild = prevChildMapping[key];
    var isLeaving = isValidElement(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = cloneElement(child, {
        in: false
      });
    } else if (hasNext && hasPrev && isValidElement(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}

var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
};
/**
 * The `<TransitionGroup>` component manages a set of transition components
 * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
 * components, `<TransitionGroup>` is a state machine for managing the mounting
 * and unmounting of components over time.
 *
 * Consider the example below. As items are removed or added to the TodoList the
 * `in` prop is toggled automatically by the `<TransitionGroup>`.
 *
 * Note that `<TransitionGroup>`  does not define any animation behavior!
 * Exactly _how_ a list item animates is up to the individual transition
 * component. This means you can mix and match animations across different list
 * items.
 */

var TransitionGroup = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(_assertThisInitialized(_this)); // Initial children should all be entering, dependent on appear


    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  } // node is `undefined` when user provided `nodeRef` prop
  ;

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = getChildMapping(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = _extends({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);

    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return /*#__PURE__*/React__default.createElement(TransitionGroupContext.Provider, {
        value: contextValue
      }, children);
    }

    return /*#__PURE__*/React__default.createElement(TransitionGroupContext.Provider, {
      value: contextValue
    }, /*#__PURE__*/React__default.createElement(Component, props, children));
  };

  return TransitionGroup;
}(React__default.Component);

TransitionGroup.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: propTypes.exports.any,

  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: propTypes.exports.node,

  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: propTypes.exports.bool,

  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: propTypes.exports.bool,

  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: propTypes.exports.bool,

  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: propTypes.exports.func
} : {};
TransitionGroup.defaultProps = defaultProps;

/**
 * The `<ReplaceTransition>` component is a specialized `Transition` component
 * that animates between two children.
 *
 * ```jsx
 * <ReplaceTransition in>
 *   <Fade><div>I appear first</div></Fade>
 *   <Fade><div>I replace the above</div></Fade>
 * </ReplaceTransition>
 * ```
 */

var ReplaceTransition = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ReplaceTransition, _React$Component);

  function ReplaceTransition() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

    _this.handleEnter = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _this.handleLifecycle('onEnter', 0, args);
    };

    _this.handleEntering = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return _this.handleLifecycle('onEntering', 0, args);
    };

    _this.handleEntered = function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return _this.handleLifecycle('onEntered', 0, args);
    };

    _this.handleExit = function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return _this.handleLifecycle('onExit', 1, args);
    };

    _this.handleExiting = function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      return _this.handleLifecycle('onExiting', 1, args);
    };

    _this.handleExited = function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      return _this.handleLifecycle('onExited', 1, args);
    };

    return _this;
  }

  var _proto = ReplaceTransition.prototype;

  _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
    var _child$props;

    var children = this.props.children;
    var child = React__default.Children.toArray(children)[idx];
    if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);

    if (this.props[handler]) {
      var maybeNode = child.props.nodeRef ? undefined : ReactDOM__default.findDOMNode(this);
      this.props[handler](maybeNode);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        inProp = _this$props.in,
        props = _objectWithoutPropertiesLoose(_this$props, ["children", "in"]);

    var _React$Children$toArr = React__default.Children.toArray(children),
        first = _React$Children$toArr[0],
        second = _React$Children$toArr[1];

    delete props.onEnter;
    delete props.onEntering;
    delete props.onEntered;
    delete props.onExit;
    delete props.onExiting;
    delete props.onExited;
    return /*#__PURE__*/React__default.createElement(TransitionGroup, props, inProp ? React__default.cloneElement(first, {
      key: 'first',
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered
    }) : React__default.cloneElement(second, {
      key: 'second',
      onEnter: this.handleExit,
      onEntering: this.handleExiting,
      onEntered: this.handleExited
    }));
  };

  return ReplaceTransition;
}(React__default.Component);

ReplaceTransition.propTypes = process.env.NODE_ENV !== "production" ? {
  in: propTypes.exports.bool.isRequired,
  children: function children(props, propName) {
    if (React__default.Children.count(props[propName]) !== 2) return new Error("\"" + propName + "\" must be exactly two transition components.");
    return null;
  }
} : {};

var _leaveRenders, _enterRenders;

function areChildrenDifferent(oldChildren, newChildren) {
  if (oldChildren === newChildren) return false;

  if (React__default.isValidElement(oldChildren) && React__default.isValidElement(newChildren) && oldChildren.key != null && oldChildren.key === newChildren.key) {
    return false;
  }

  return true;
}
/**
 * Enum of modes for SwitchTransition component
 * @enum { string }
 */


var modes = {
  out: 'out-in',
  in: 'in-out'
};

var callHook = function callHook(element, name, cb) {
  return function () {
    var _element$props;

    element.props[name] && (_element$props = element.props)[name].apply(_element$props, arguments);
    cb();
  };
};

var leaveRenders = (_leaveRenders = {}, _leaveRenders[modes.out] = function (_ref) {
  var current = _ref.current,
      changeState = _ref.changeState;
  return React__default.cloneElement(current, {
    in: false,
    onExited: callHook(current, 'onExited', function () {
      changeState(ENTERING, null);
    })
  });
}, _leaveRenders[modes.in] = function (_ref2) {
  var current = _ref2.current,
      changeState = _ref2.changeState,
      children = _ref2.children;
  return [current, React__default.cloneElement(children, {
    in: true,
    onEntered: callHook(children, 'onEntered', function () {
      changeState(ENTERING);
    })
  })];
}, _leaveRenders);
var enterRenders = (_enterRenders = {}, _enterRenders[modes.out] = function (_ref3) {
  var children = _ref3.children,
      changeState = _ref3.changeState;
  return React__default.cloneElement(children, {
    in: true,
    onEntered: callHook(children, 'onEntered', function () {
      changeState(ENTERED, React__default.cloneElement(children, {
        in: true
      }));
    })
  });
}, _enterRenders[modes.in] = function (_ref4) {
  var current = _ref4.current,
      children = _ref4.children,
      changeState = _ref4.changeState;
  return [React__default.cloneElement(current, {
    in: false,
    onExited: callHook(current, 'onExited', function () {
      changeState(ENTERED, React__default.cloneElement(children, {
        in: true
      }));
    })
  }), React__default.cloneElement(children, {
    in: true
  })];
}, _enterRenders);
/**
 * A transition component inspired by the [vue transition modes](https://vuejs.org/v2/guide/transitions.html#Transition-Modes).
 * You can use it when you want to control the render between state transitions.
 * Based on the selected mode and the child's key which is the `Transition` or `CSSTransition` component, the `SwitchTransition` makes a consistent transition between them.
 *
 * If the `out-in` mode is selected, the `SwitchTransition` waits until the old child leaves and then inserts a new child.
 * If the `in-out` mode is selected, the `SwitchTransition` inserts a new child first, waits for the new child to enter and then removes the old child.
 *
 * **Note**: If you want the animation to happen simultaneously
 * (that is, to have the old child removed and a new child inserted **at the same time**),
 * you should use
 * [`TransitionGroup`](https://reactcommunity.org/react-transition-group/transition-group)
 * instead.
 *
 * ```jsx
 * function App() {
 *  const [state, setState] = useState(false);
 *  return (
 *    <SwitchTransition>
 *      <CSSTransition
 *        key={state ? "Goodbye, world!" : "Hello, world!"}
 *        addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
 *        classNames='fade'
 *      >
 *        <button onClick={() => setState(state => !state)}>
 *          {state ? "Goodbye, world!" : "Hello, world!"}
 *        </button>
 *      </CSSTransition>
 *    </SwitchTransition>
 *  );
 * }
 * ```
 *
 * ```css
 * .fade-enter{
 *    opacity: 0;
 * }
 * .fade-exit{
 *    opacity: 1;
 * }
 * .fade-enter-active{
 *    opacity: 1;
 * }
 * .fade-exit-active{
 *    opacity: 0;
 * }
 * .fade-enter-active,
 * .fade-exit-active{
 *    transition: opacity 500ms;
 * }
 * ```
 */

var SwitchTransition = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(SwitchTransition, _React$Component);

  function SwitchTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      status: ENTERED,
      current: null
    };
    _this.appeared = false;

    _this.changeState = function (status, current) {
      if (current === void 0) {
        current = _this.state.current;
      }

      _this.setState({
        status: status,
        current: current
      });
    };

    return _this;
  }

  var _proto = SwitchTransition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.appeared = true;
  };

  SwitchTransition.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (props.children == null) {
      return {
        current: null
      };
    }

    if (state.status === ENTERING && props.mode === modes.in) {
      return {
        status: ENTERING
      };
    }

    if (state.current && areChildrenDifferent(state.current, props.children)) {
      return {
        status: EXITING
      };
    }

    return {
      current: React__default.cloneElement(props.children, {
        in: true
      })
    };
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        mode = _this$props.mode,
        _this$state = this.state,
        status = _this$state.status,
        current = _this$state.current;
    var data = {
      children: children,
      current: current,
      changeState: this.changeState,
      status: status
    };
    var component;

    switch (status) {
      case ENTERING:
        component = enterRenders[mode](data);
        break;

      case EXITING:
        component = leaveRenders[mode](data);
        break;

      case ENTERED:
        component = current;
    }

    return /*#__PURE__*/React__default.createElement(TransitionGroupContext.Provider, {
      value: {
        isMounting: !this.appeared
      }
    }, component);
  };

  return SwitchTransition;
}(React__default.Component);

SwitchTransition.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Transition modes.
   * `out-in`: Current element transitions out first, then when complete, the new element transitions in.
   * `in-out`: New element transitions in first, then when complete, the current element transitions out.
   *
   * @type {'out-in'|'in-out'}
   */
  mode: propTypes.exports.oneOf([modes.in, modes.out]),

  /**
   * Any `Transition` or `CSSTransition` component.
   */
  children: propTypes.exports.oneOfType([propTypes.exports.element.isRequired])
} : {};
SwitchTransition.defaultProps = {
  mode: modes.out
};

var ExpandableSlideInContent = function (_a) {
    var children = _a.children, isExpanded = _a.isExpanded;
    return (React__default.createElement(CSSTransition, { classNames: "cb-expandable", in: isExpanded, unmountOnExit: true, timeout: 400 }, children));
};
var ExpandableSlideInContent$1 = React__default.memo(ExpandableSlideInContent);

var css_248z = ".cb-upload-progress {\n  position: relative; }\n  .cb-upload-progress .cb-upload-sections-container {\n    display: flex;\n    height: 100%;\n    padding: 16px;\n    width: 100%; }\n  .cb-upload-progress .cb-progress-line {\n    border-bottom: 0;\n    border-top: 1px dashed #bababa;\n    left: calc((100% - 32px) / 6);\n    margin: 0 16px;\n    position: absolute;\n    top: 27px;\n    width: calc((100% - 32px) * 2 / 3);\n    z-index: -1; }\n  .cb-upload-progress .cb-upload-section {\n    align-items: center;\n    display: flex;\n    flex-basis: 0;\n    flex-direction: column;\n    flex-grow: 1; }\n  .cb-upload-progress .cb-upload-section-header,\n  .cb-upload-progress .cb-upload-section-content {\n    font-size: 14px;\n    font-weight: normal;\n    margin: 0;\n    text-align: center; }\n  .cb-upload-progress .cb-upload-type {\n    display: flex;\n    font-weight: 600;\n    margin: 0;\n    margin-bottom: 8px;\n    margin-top: 8px; }\n  .cb-upload-progress .cb-status-phase-preupload {\n    background-color: #f4f4f4;\n    border-color: #bababa !important;\n    color: #bababa; }\n  .cb-upload-progress .cb-status-phase-uploading {\n    background-color: #f4f4f4;\n    border-color: #015cda; }\n  .cb-upload-progress .cb-status-phase-uploading,\n  .cb-upload-progress .cb-upload-section-content {\n    color: #015cda; }\n  .cb-upload-progress .cb-status-phase-succeeded {\n    background-color: transparent;\n    background-color: #fff;\n    border-color: #36a643 !important;\n    color: #36a643 !important; }\n  .cb-upload-progress .cb-status-phase-partiallyfailed {\n    background-color: #fff;\n    border-color: transparent;\n    color: #d58e00;\n    margin-bottom: 4px;\n    margin-top: -4px; }\n  .cb-upload-progress .cb-status-phase-failed {\n    background-color: #fff;\n    border-color: #a50606 !important;\n    color: #a50606 !important; }\n  .cb-upload-progress .cb-progress-status {\n    border-radius: 24px;\n    border-style: solid;\n    border-width: 1px;\n    height: 24px;\n    text-align: center;\n    width: 24px; }\n  .cb-upload-progress .cb-font-icon {\n    margin-left: 1px;\n    margin-top: 3px; }\n  .cb-upload-progress .cb-progress-icon {\n    height: 24px;\n    width: 24px; }\n  .cb-upload-progress .cb-status-message {\n    font-style: italic;\n    padding-left: 40px; }\n  .cb-upload-progress .cb-progress-ongoing {\n    background-color: rgba(0, 0, 0, 0.4); }\n  .cb-upload-progress .cb-progress-success {\n    background-color: rgba(0, 255, 0, 0.4); }\n  .cb-upload-progress .cb-progress-failure {\n    background-color: rgba(255, 0, 0, 0.4); }\n";
styleInject(css_248z);

var UploadProgress = function (_a) {
    var modelsStatus = _a.modelsStatus, twinsStatus = _a.twinsStatus, relationshipsStatus = _a.relationshipsStatus;
    return (React__default.createElement("div", { className: "cb-upload-progress" },
        React__default.createElement("hr", { className: "cb-progress-line" }),
        React__default.createElement("div", { className: "cb-upload-sections-container" },
            React__default.createElement(UploadSection, { status: modelsStatus, uploadType: AssetTypes.Models, stepNumber: 1 }),
            React__default.createElement(UploadSection, { status: twinsStatus, uploadType: AssetTypes.Twins, stepNumber: 2 }),
            React__default.createElement(UploadSection, { status: relationshipsStatus, uploadType: AssetTypes.Relationships, stepNumber: 3 })),
        React__default.createElement("div", { className: "cb-error-section" },
            React__default.createElement(ErrorMessage, { uploadStatus: modelsStatus }),
            React__default.createElement(ErrorMessage, { uploadStatus: twinsStatus }),
            React__default.createElement(ErrorMessage, { uploadStatus: relationshipsStatus }))));
};
var StepIcon = function (_a) {
    var status = _a.status, stepNumber = _a.stepNumber;
    if (status.phase === UploadPhase.PreUpload ||
        status.phase === UploadPhase.Uploading) {
        return React__default.createElement(React__default.Fragment, null, stepNumber);
    }
    var iconMap = {};
    iconMap[UploadPhase.Failed] = 'StatusCircleErrorX';
    iconMap[UploadPhase.Succeeded] = 'CheckMark';
    iconMap[UploadPhase.PartiallyFailed] = 'Warning';
    return (React__default.createElement(FontIcon, { iconName: iconMap[status.phase], className: "cb-font-icon" }));
};
var ErrorMessage = function (_a) {
    var uploadStatus = _a.uploadStatus;
    return (uploadStatus.errorMessage && (React__default.createElement(MessageBar, { messageBarType: MessageBarType.error }, uploadStatus.errorMessage)));
};
var UploadSection = function (_a) {
    var status = _a.status, uploadType = _a.uploadType, stepNumber = _a.stepNumber;
    var t = useTranslation().t;
    var getHeaderText = function (phase) {
        if (phase === UploadPhase.Uploading) {
            return t('uploadProgress.uploading', { assetType: uploadType });
        }
        if (phase === UploadPhase.Succeeded) {
            return t('uploadProgress.uploadSuccess', { assetType: uploadType });
        }
        if (phase === UploadPhase.PartiallyFailed) {
            return t('uploadProgress.uploadPartiallyFailed', {
                assetType: uploadType
            });
        }
        if (phase === UploadPhase.Failed) {
            return t('uploadProgress.uploadFailed', { assetType: uploadType });
        }
    };
    return (React__default.createElement("div", { className: "cb-upload-section" },
        React__default.createElement("div", { className: "cb-progress-status cb-status-phase-" + status.phase },
            React__default.createElement(StepIcon, { status: status, stepNumber: stepNumber })),
        React__default.createElement("div", { className: "cb-upload-section-text" },
            React__default.createElement("h3", { className: "cb-upload-section-header" }, getHeaderText(status.phase)),
            status.message && (React__default.createElement("p", { className: "cb-upload-section-content" }, status.message)))));
};

var GenerateADTAssets = function (_a) {
    var adapter = _a.adapter, models = _a.models, twins = _a.twins, relationships = _a.relationships, triggerUpload = _a.triggerUpload, onComplete = _a.onComplete;
    var _b = useState(false), isUploading = _b[0], setIsUploading = _b[1];
    var t = useTranslation().t;
    var pushModelsState = useAdapter({
        adapterMethod: function (models) { return adapter.createModels(models); },
        refetchDependencies: [],
        isAdapterCalledOnMount: false
    });
    //set upload progress state based on adapter result
    useEffect(function () {
        var _a, _b, _c;
        if ((_b = (_a = pushModelsState.adapterResult.errorInfo) === null || _a === void 0 ? void 0 : _a.errors) === null || _b === void 0 ? void 0 : _b.length) {
            setModelsUploadStatus({
                phase: UploadPhase.Failed,
                message: null,
                errorMessage: t('generateADTAssets.assetsPushError', {
                    assetType: AssetTypes.Models
                })
            });
        }
        else if (pushModelsState.adapterResult.result) {
            setModelsUploadStatus({
                phase: UploadPhase.Succeeded,
                message: t('generateADTAssets.assetsPushedCount', {
                    count: (_c = pushModelsState.adapterResult.getData()) === null || _c === void 0 ? void 0 : _c.length,
                    assetType: AssetTypes.Models
                }),
                errorMessage: null
            });
        }
    }, [pushModelsState.adapterResult]);
    var updateTwinsUploadProgress = function (twinsUploaded, totalTwins) {
        setTwinsUploadStatus({
            phase: UploadPhase.Uploading,
            message: t('generateADTAssets.uploadProgress', {
                pushed: twinsUploaded,
                total: totalTwins
            }),
            errorMessage: null
        });
    };
    var pushTwinsState = useAdapter({
        adapterMethod: function (twins) {
            return adapter.createTwins(twins, updateTwinsUploadProgress);
        },
        refetchDependencies: [],
        isAdapterCalledOnMount: false
    });
    var updateRelationshipsUploadStatus = function (relationshipsUploaded, totalRelationships) {
        setRelationshipsUploadStatus({
            phase: UploadPhase.Uploading,
            message: t('generateADTAssets.uploadProgress', {
                pushed: relationshipsUploaded,
                total: totalRelationships
            }),
            errorMessage: null
        });
    };
    var pushRelationshipsState = useAdapter({
        adapterMethod: function (relationships) {
            return adapter.createRelationships(relationships, updateRelationshipsUploadStatus);
        },
        refetchDependencies: [],
        isAdapterCalledOnMount: false
    });
    //set upload progress state based on adapter result
    useEffect(function () {
        var _a, _b, _c, _d, _e;
        if ((_b = (_a = pushRelationshipsState.adapterResult.errorInfo) === null || _a === void 0 ? void 0 : _a.errors) === null || _b === void 0 ? void 0 : _b.length) {
            if ((_c = pushRelationshipsState.adapterResult.result) === null || _c === void 0 ? void 0 : _c.hasNoData()) {
                setRelationshipsUploadStatus({
                    phase: UploadPhase.Failed,
                    message: null,
                    errorMessage: t('generateADTAssets.assetsPushError', {
                        assetType: AssetTypes.Relationships
                    })
                });
            }
            else {
                setRelationshipsUploadStatus({
                    phase: UploadPhase.PartiallyFailed,
                    message: t('generateADTAssets.assetsPushedCount', {
                        count: (_d = pushRelationshipsState.adapterResult.getData()) === null || _d === void 0 ? void 0 : _d.length,
                        assetType: AssetTypes.Relationships
                    }),
                    errorMessage: t('generateADTAssets.partialError', {
                        assetType: AssetTypes.Relationships,
                        errorCount: pushRelationshipsState.adapterResult.errorInfo
                            .errors.length
                    })
                });
            }
        }
        else if (pushTwinsState.adapterResult.result) {
            setRelationshipsUploadStatus({
                phase: UploadPhase.Succeeded,
                message: t('generateADTAssets.assetsPushedCount', {
                    count: (_e = pushRelationshipsState.adapterResult.getData()) === null || _e === void 0 ? void 0 : _e.length,
                    assetType: AssetTypes.Relationships
                }),
                errorMessage: null
            });
        }
    }, [pushRelationshipsState.adapterResult]);
    //set upload progress state based on adapter result
    useEffect(function () {
        var _a, _b, _c, _d, _e;
        if ((_b = (_a = pushTwinsState.adapterResult.errorInfo) === null || _a === void 0 ? void 0 : _a.errors) === null || _b === void 0 ? void 0 : _b.length) {
            if ((_c = pushTwinsState.adapterResult.result) === null || _c === void 0 ? void 0 : _c.hasNoData()) {
                setTwinsUploadStatus({
                    phase: UploadPhase.Failed,
                    message: null,
                    errorMessage: t('generateADTAssets.assetsPushError', {
                        assetType: AssetTypes.Twins
                    })
                });
            }
            else {
                setTwinsUploadStatus({
                    phase: UploadPhase.PartiallyFailed,
                    message: t('generateADTAssets.assetsPushedCount', {
                        count: (_d = pushTwinsState.adapterResult.getData()) === null || _d === void 0 ? void 0 : _d.length,
                        assetType: AssetTypes.Twins
                    }),
                    errorMessage: t('generateADTAssets.partialError', {
                        assetType: AssetTypes.Twins,
                        errorCount: pushTwinsState.adapterResult.errorInfo.errors.length
                    })
                });
            }
        }
        else if (pushTwinsState.adapterResult.result) {
            setTwinsUploadStatus({
                phase: UploadPhase.Succeeded,
                message: t('generateADTAssets.assetsPushedCount', {
                    count: (_e = pushTwinsState.adapterResult.getData()) === null || _e === void 0 ? void 0 : _e.length,
                    assetType: AssetTypes.Twins
                }),
                errorMessage: null
            });
        }
    }, [pushTwinsState.adapterResult]);
    useEffect(function () {
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            var models_1, twins_1, relationships_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(!isUploading && triggerUpload)) return [3 /*break*/, 4];
                        setIsUploading(true);
                        return [4 /*yield*/, initiateModelsUpload()];
                    case 1:
                        models_1 = _a.sent();
                        return [4 /*yield*/, initiateTwinsUpload()];
                    case 2:
                        twins_1 = _a.sent();
                        return [4 /*yield*/, initiateRelationshipsUpload()];
                    case 3:
                        relationships_1 = _a.sent();
                        setIsUploading(false);
                        onComplete(models_1, twins_1, relationships_1);
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); })();
    }, [triggerUpload]);
    var initiateModelsUpload = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            setModelsUploadStatus({
                phase: UploadPhase.Uploading,
                message: t('generateADTAssets.uploading'),
                errorMessage: null
            });
            return [2 /*return*/, pushModelsState.callAdapter(models)];
        });
    }); };
    var initiateTwinsUpload = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            setTwinsUploadStatus({
                phase: UploadPhase.Uploading,
                message: t('generateADTAssets.uploading'),
                errorMessage: null
            });
            return [2 /*return*/, pushTwinsState.callAdapter(twins)];
        });
    }); };
    var initiateRelationshipsUpload = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            setRelationshipsUploadStatus({
                phase: UploadPhase.Uploading,
                message: t('generateADTAssets.uploading'),
                errorMessage: null
            });
            return [2 /*return*/, pushRelationshipsState.callAdapter(relationships)];
        });
    }); };
    var initializeUploadStatus = function () {
        return {
            phase: UploadPhase.PreUpload,
            message: null,
            errorMessage: null
        };
    };
    var _c = useState(initializeUploadStatus()), modelsUploadStatus = _c[0], setModelsUploadStatus = _c[1];
    var _d = useState(initializeUploadStatus()), twinsUploadStatus = _d[0], setTwinsUploadStatus = _d[1];
    var _e = useState(initializeUploadStatus()), relationshipsUploadStatus = _e[0], setRelationshipsUploadStatus = _e[1];
    return (React__default.createElement(UploadProgress, { modelsStatus: modelsUploadStatus, twinsStatus: twinsUploadStatus, relationshipsStatus: relationshipsUploadStatus }));
};

var DataPusherContext = createContext(null);
var useDataPusherContext = function () { return useContext(DataPusherContext); };
var separatorStyles = {
    content: { fontWeight: 'bold', paddingLeft: 0 },
    root: { marginTop: 16 }
};
var DataPusher = function (_a) {
    var _b, _c, _d, _f, _g, _h;
    var locale = _a.locale, localeStrings = _a.localeStrings, theme = _a.theme, adapter = _a.adapter, _j = _a.initialInstanceUrl, initialInstanceUrl = _j === void 0 ? '<your_adt_instance_url>.digitaltwins.azure.net' : _j, _k = _a.disablePastEvents, disablePastEvents = _k === void 0 ? false : _k;
    var t = useTranslation().t;
    var _l = useReducer(dataPusherReducer, __assign(__assign({}, defaultAdtDataPusherState), { instanceUrl: initialInstanceUrl, disablePastEvents: disablePastEvents })), state = _l[0], dispatch = _l[1];
    var intervalRef = useRef(null);
    var updateTwinState = useAdapter({
        adapterMethod: function (params) {
            return adapter.updateTwins(params.events);
        },
        refetchDependencies: [],
        isAdapterCalledOnMount: false
    });
    var stopSimulation = function () {
        dispatch({
            type: dataPusherActionType.SET_IS_SIMULATION_RUNNING,
            payload: false
        });
        clearInterval(intervalRef.current);
        adapter.packetNumber = 0;
    };
    var startSimulation = function () {
        dispatch({
            type: dataPusherActionType.SET_IS_SIMULATION_RUNNING,
            payload: true
        });
        // Clear any prior interval
        clearInterval(intervalRef.current);
        // Live simulator
        var startLiveSimulation = function () {
            var sim = new AssetSimulation(new Date().valueOf(), state.liveStreamFrequency * 1000, state.simulationType);
            intervalRef.current = setInterval(function () {
                var events = sim.tick();
                updateTwinState.callAdapter({ events: events });
            }, state.liveStreamFrequency * 1000);
        };
        var startDateMillis = state.isDataBackFilled
            ? new Date().valueOf() - state.daysToSimulate * 86400000
            : new Date().valueOf(); // get starting date
        // Quick fill simulator
        var sim = new AssetSimulation(startDateMillis, state.dataSpacing, state.simulationType);
        intervalRef.current = setInterval(function () {
            if (sim.seedTimeMillis > new Date().valueOf() &&
                state.isLiveDataSimulated) {
                // Change to live simulation
                console.log('Reached "now", beginning live simulation');
                clearInterval(intervalRef.current);
                startLiveSimulation();
            }
            var events = sim.tick();
            updateTwinState.callAdapter({ events: events });
        }, state.quickStreamFrequency);
    };
    var generateEnvironment = function () { return __awaiter(void 0, void 0, void 0, function () {
        var assetSimulation;
        return __generator(this, function (_a) {
            assetSimulation = new AssetSimulation(0, 0, state.simulationType);
            dispatch({
                type: dataPusherActionType.SET_MODELS,
                payload: assetSimulation.generateDTModels()
            });
            dispatch({
                type: dataPusherActionType.SET_TWINS,
                payload: assetSimulation.generateDTwins()
            });
            dispatch({
                type: dataPusherActionType.SET_RELATIONSHIPS,
                payload: assetSimulation.generateTwinRelationships()
            });
            dispatch({
                type: dataPusherActionType.SET_ARE_ASSETS_SET,
                payload: true
            });
            return [2 /*return*/];
        });
    }); };
    // Update adapter's ADT Url when input changes
    useEffect(function () {
        adapter.adtHostUrl = state.instanceUrl;
    }, [state.instanceUrl]);
    // Safely unmount
    useEffect(function () {
        return function () {
            clearInterval(intervalRef.current);
        };
    }, []);
    var onComplete = function () {
        dispatch({
            type: dataPusherActionType.SET_ARE_ASSETS_UPLOADED,
            payload: true
        });
    };
    useEffect(function () {
        var _a, _b;
        var data = (_a = updateTwinState.adapterResult) === null || _a === void 0 ? void 0 : _a.getData();
        if (data) {
            dispatch({
                type: dataPusherActionType.SET_LIVE_STATUS,
                payload: {
                    packetNumber: adapter.packetNumber,
                    totalTwinsPatched: (_b = data === null || data === void 0 ? void 0 : data.length) !== null && _b !== void 0 ? _b : 0,
                    totalSuccessfulPatches: (data === null || data === void 0 ? void 0 : data.length) > 0
                        ? data.reduce(function (acc, curr) {
                            return (curr === null || curr === void 0 ? void 0 : curr.status) === 204 ? acc + 1 : acc;
                        }, 0)
                        : 0
                }
            });
        }
    }, [updateTwinState.adapterResult]);
    useEffect(function () {
        if (state.simulationStatus.areAssetsUploaded) {
            dispatch({
                type: dataPusherActionType.SET_IS_ENVIRONMENT_READY,
                payload: true
            });
        }
    }, [state.simulationStatus.areAssetsUploaded]);
    return (React__default.createElement(BaseComponent, { isLoading: false, theme: theme, locale: locale, localeStrings: localeStrings },
        React__default.createElement(DataPusherContext.Provider, { value: { state: state, dispatch: dispatch } },
            React__default.createElement("div", { className: "cb-datapusher-container" },
                React__default.createElement("h4", null, t('dataPusher.dataPusherTitle')),
                React__default.createElement("div", { className: "cb-adt-data-pusher" },
                    React__default.createElement(TextField, { label: t('dataPusher.instanceUrl'), placeholder: '<your_adt_instance_url>.digitaltwins.azure.net', value: state.instanceUrl, onChange: function (_e, newValue) {
                            return dispatch({
                                type: dataPusherActionType.SET_INSTANCE_URL,
                                payload: newValue
                                    .replace('https://', '')
                                    .replace('http://', '')
                            });
                        }, styles: {
                            fieldGroup: { width: '600px' },
                            root: { marginBottom: '8px' }
                        } }),
                    React__default.createElement(SimulationTypeForm, null),
                    !state.disablePastEvents && (React__default.createElement(React__default.Fragment, null,
                        React__default.createElement(Separator, { alignContent: "start", styles: separatorStyles }, t('dataPusher.pastEventsLabel')),
                        React__default.createElement(QuickFillDataForm, null))),
                    React__default.createElement(Separator, { alignContent: "start", styles: separatorStyles }, t('dataPusher.liveStreamLabel')),
                    React__default.createElement(LiveStreamDataForm, null),
                    React__default.createElement(Separator, { alignContent: "start", styles: separatorStyles }, t('dataPusher.create')),
                    React__default.createElement(FormFieldDescription, null, t('dataPusher.generateEnvironmentDescription')),
                    React__default.createElement("div", { className: "cb-generate-assets-container" },
                        state.areAssetsSet && (React__default.createElement(GenerateADTAssets, { adapter: adapter, models: state.models, twins: state.twins, relationships: state.relationships, triggerUpload: state.areAssetsSet, onComplete: onComplete })),
                        React__default.createElement(PrimaryButton, { text: t('dataPusher.generateEnvironment'), disabled: state.areAssetsSet, className: 'cb-initiate-action-button', onClick: function () {
                                generateEnvironment();
                            } })),
                    React__default.createElement(Separator, { alignContent: "start", styles: separatorStyles }, t('dataPusher.simulate')),
                    React__default.createElement(FormFieldDescription, null, t('dataPusher.simulateDescription')),
                    React__default.createElement("div", null, !!state.isSimulationRunning && (React__default.createElement(ProgressIndicator, { label: t('dataPusher.simulating'), description: t('dataPusher.liveStatus', {
                            packetNumber: (_c = (_b = state.simulationStatus.liveStatus) === null || _b === void 0 ? void 0 : _b.packetNumber) !== null && _c !== void 0 ? _c : 0,
                            totalSuccessfulPatches: (_f = (_d = state.simulationStatus.liveStatus) === null || _d === void 0 ? void 0 : _d.totalSuccessfulPatches) !== null && _f !== void 0 ? _f : 0,
                            totalTwinsPatched: (_h = (_g = state.simulationStatus.liveStatus) === null || _g === void 0 ? void 0 : _g.totalTwinsPatched) !== null && _h !== void 0 ? _h : 0
                        }) }))),
                    React__default.createElement(PrimaryButton, { text: state.isSimulationRunning
                            ? t('dataPusher.stopSimulation')
                            : t('dataPusher.startSimulation'), disabled: (!state.isSimulationRunning &&
                            !state.isDataBackFilled &&
                            !state.isLiveDataSimulated) ||
                            !state.isEnvironmentReady, onClick: function () {
                            return state.isSimulationRunning
                                ? stopSimulation()
                                : startSimulation();
                        }, className: 'cb-initiate-action-button' }))))));
};
var SimulationTypeForm = function () {
    var t = useTranslation().t;
    var _a = useDataPusherContext(), state = _a.state, dispatch = _a.dispatch;
    var options = [
        {
            key: AdtPusherSimulationType.RobotArms,
            text: t('dataPusher.robotArms')
        },
        {
            key: AdtPusherSimulationType.DairyProduction,
            text: t('dataPusher.dairyProduction')
        }
    ];
    var onChange = function (_event, item) {
        dispatch({
            type: dataPusherActionType.SET_SIMULATION_TYPE,
            payload: item.key
        });
    };
    return (React__default.createElement(Dropdown, { styles: { root: { width: 200 } }, label: t('dataPusher.pusherType'), options: options, onChange: onChange, selectedKey: state.simulationType }));
};
var QuickFillDataForm = function () {
    var t = useTranslation().t;
    var _a = useDataPusherContext(), state = _a.state, dispatch = _a.dispatch;
    return (React__default.createElement("div", { className: "cb-quick-fill-data-form-container" },
        React__default.createElement(Toggle, { label: "", checked: state.isDataBackFilled, onText: t('on'), offText: t('off'), onChange: function (_e, checked) {
                return dispatch({
                    type: dataPusherActionType.SET_IS_DATA_BACK_FILLED,
                    payload: checked
                });
            }, styles: { root: { marginBottom: 0, marginTop: 4 } } }),
        React__default.createElement(FormFieldDescription, null, state.isDataBackFilled
            ? t('dataPusher.pastEventsDescriptionOn')
            : t('dataPusher.pastEventsDescriptionOff')),
        React__default.createElement(ExpandableSlideInContent$1, { isExpanded: state.isDataBackFilled },
            React__default.createElement(Stack, { tokens: { childrenGap: 8 } },
                React__default.createElement("div", null,
                    React__default.createElement(NumericSpinInput, { label: t('dataPusher.daysToSimulateLabel'), width: 125, min: 1, max: 1000, step: 1, suffix: t('dataPusher.days'), value: state.daysToSimulate, onChange: function (newValue) {
                            dispatch({
                                type: dataPusherActionType.SET_DAYS_TO_SIMULATE,
                                payload: newValue
                            });
                        }, onIncrement: function (newValue) {
                            return dispatch({
                                type: dataPusherActionType.SET_DAYS_TO_SIMULATE,
                                payload: newValue
                            });
                        }, onDecrement: function (newValue) {
                            return dispatch({
                                type: dataPusherActionType.SET_DAYS_TO_SIMULATE,
                                payload: newValue
                            });
                        } }),
                    React__default.createElement(FormFieldDescription, null, t('dataPusher.daysToSimulateDescription'))),
                React__default.createElement("div", null,
                    React__default.createElement(NumericSpinInput, { label: t('dataPusher.dataSpacingLabel'), width: 125, min: 100, max: Infinity, step: 1000, suffix: 'ms', value: state.dataSpacing, onChange: function (newValue) {
                            dispatch({
                                type: dataPusherActionType.SET_DATA_SPACING,
                                payload: newValue
                            });
                        }, onIncrement: function (newValue) {
                            return dispatch({
                                type: dataPusherActionType.SET_DATA_SPACING,
                                payload: newValue
                            });
                        }, onDecrement: function (newValue) {
                            return dispatch({
                                type: dataPusherActionType.SET_DATA_SPACING,
                                payload: newValue
                            });
                        } }),
                    React__default.createElement(FormFieldDescription, null, t('dataPusher.dataSpacingDescription'))),
                React__default.createElement("div", null,
                    React__default.createElement(NumericSpinInput, { label: t('dataPusher.quickStreamFrequencyLabel'), width: 125, min: 1000, max: Infinity, step: 100, suffix: 'ms', value: state.quickStreamFrequency, onChange: function (newValue) {
                            dispatch({
                                type: dataPusherActionType.SET_QUICK_STREAM_FREQUENCY,
                                payload: newValue
                            });
                        }, onIncrement: function (newValue) {
                            return dispatch({
                                type: dataPusherActionType.SET_QUICK_STREAM_FREQUENCY,
                                payload: newValue
                            });
                        }, onDecrement: function (newValue) {
                            return dispatch({
                                type: dataPusherActionType.SET_QUICK_STREAM_FREQUENCY,
                                payload: newValue
                            });
                        } }),
                    React__default.createElement(FormFieldDescription, null, t('dataPusher.quickStreamFrequencyDescription')))))));
};
var LiveStreamDataForm = function () {
    var t = useTranslation().t;
    var _a = useDataPusherContext(), state = _a.state, dispatch = _a.dispatch;
    return (React__default.createElement("div", { className: "cb-live-stream-data-form-container" },
        !state.disablePastEvents && (React__default.createElement(React__default.Fragment, null,
            React__default.createElement(Toggle, { label: "", checked: state.isLiveDataSimulated, onText: t('on'), offText: t('off'), onChange: function (_e, checked) {
                    return dispatch({
                        type: dataPusherActionType.SET_IS_LIVE_DATA_SIMULATED,
                        payload: checked
                    });
                }, styles: { root: { marginBottom: 0, marginTop: 4 } } }),
            React__default.createElement(FormFieldDescription, null, state.isLiveDataSimulated
                ? t('dataPusher.liveStreamDescriptionOn')
                : t('dataPusher.liveStreamDescriptionOff')))),
        React__default.createElement(ExpandableSlideInContent$1, { isExpanded: state.isLiveDataSimulated },
            React__default.createElement("div", { className: "cb-live-stream-data-form-options" },
                React__default.createElement(NumericSpinInput, { label: t('dataPusher.liveStreamFrequencyLabel'), width: 125, min: 1, max: Infinity, step: 1, suffix: state.liveStreamFrequency === 1
                        ? 'second'
                        : 'seconds', value: state.liveStreamFrequency, onChange: function (newValue) {
                        dispatch({
                            type: dataPusherActionType.SET_LIVE_STREAM_FREQUENCY,
                            payload: newValue
                        });
                    }, onIncrement: function (newValue) {
                        return dispatch({
                            type: dataPusherActionType.SET_LIVE_STREAM_FREQUENCY,
                            payload: newValue
                        });
                    }, onDecrement: function (newValue) {
                        return dispatch({
                            type: dataPusherActionType.SET_LIVE_STREAM_FREQUENCY,
                            payload: newValue
                        });
                    } }),
                React__default.createElement(FormFieldDescription, null, t('dataPusher.liveStreamFrequencyDescription'))))));
};
var FormFieldDescription = function (_a) {
    var children = _a.children;
    var styles = function (_props, theme) { return ({
        root: {
            color: theme.palette.neutralSecondary
        }
    }); };
    return (React__default.createElement("div", { className: "cb-form-field-description" },
        React__default.createElement(Text, { variant: 'small', styles: styles }, children)));
};
var DataPusher$1 = withErrorBoundary(DataPusher);

export { DataPusher$1 as D, _extends as _, _inheritsLoose as a, propTypes as p, reactIs as r };
//# sourceMappingURL=DataPusher-0ec02c73.js.map
