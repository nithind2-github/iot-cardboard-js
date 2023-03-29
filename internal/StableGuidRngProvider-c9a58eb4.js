import { bi as __awaiter, bj as __generator, a as CancelledPromiseError, bk as __assign, bo as __spreadArray } from './Interfaces-8fb2a33a.js';
import { f as fn } from './immer.esm-8bf4cc8a.js';
import React__default, { useRef, useEffect, useState, useMemo, useReducer, useContext } from 'react';
import { A as AdapterResult } from './AdapterResult-96d676e4.js';
import './index-9a9478a7.js';

var SET_IS_LOADING = 'SET_IS_LOADING';
var SET_ADAPTER_RESULT = 'SET_ADAPTER_RESULT';
var SET_IS_LONG_POLLING = 'SET_IS_LONG_POLLING';
var SET_IS_INITIAL_CALL = 'SET_IS_INITIAL_CALL';
var SET_OAT_PROPERTY_EDITOR_CURRENT_PROPERTY_INDEX = 'SET_OAT_PROPERTY_EDITOR_CURRENT_PROPERTY_INDEX';
var SET_OAT_PROPERTY_EDITOR_CURRENT_NESTED_PROPERTY_INDEX = 'SET_OAT_PROPERTY_EDITOR_CURRENT_NESTED_PROPERTY_INDEX';
var SET_OAT_PROPERTY_EDITOR_DRAGGING_TEMPLATE = 'SET_OAT_PROPERTY_EDITOR_DRAGGING_TEMPLATE';
var SET_OAT_PROPERTY_EDITOR_DRAGGING_PROPERTY = 'SET_OAT_PROPERTY_EDITOR_DRAGGING_PROPERTY';
var SET_OAT_PROPERTY_MODAL_OPEN = 'SET_OAT_PROPERTY_MODAL_OPEN';
var SET_OAT_PROPERTY_MODAL_BODY = 'SET_OAT_PROPERTY_MODAL_BODY';

/** Wraps promise with logic that allows for promise cancellation via cancel() method */
function makeCancellable(promise, promisesRef) {
    var isCancelled = false;
    var returnValue = {
        promise: null,
        cancel: function () { return null; }
    };
    var wrappedPromise = new Promise(function (resolve, reject) {
        function executePromise() {
            return __awaiter(this, void 0, void 0, function () {
                var val, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, promise];
                        case 1:
                            val = _a.sent();
                            if (isCancelled) {
                                reject(new CancelledPromiseError());
                            }
                            else {
                                resolve(val);
                            }
                            return [3 /*break*/, 3];
                        case 2:
                            error_1 = _a.sent();
                            if (isCancelled) {
                                reject(new CancelledPromiseError());
                            }
                            else {
                                reject(error_1);
                            }
                            return [3 /*break*/, 3];
                        case 3:
                            // Remove promise from promisesRef.current list once resolved/rejected
                            if (promisesRef &&
                                promisesRef.current.indexOf(returnValue) !== -1) {
                                promisesRef.current = promisesRef.current.filter(function (promise) { return promise !== returnValue; });
                            }
                            return [2 /*return*/];
                    }
                });
            });
        }
        executePromise();
    });
    returnValue = {
        promise: wrappedPromise,
        cancel: function () {
            isCancelled = true;
        }
    };
    return returnValue;
}
/**
 * Exposes two functions: 'cancellablePromise' to wrap promises in cancellation code which auto cancels on unmount,
 * and 'cancel' function to manually cancel wrapped promises.  This hooks was adapted from the following repo:
 * https://github.com/rajeshnaroth/react-cancelable-promise-hook/blob/master/index.js
 */
var useCancellablePromise = function () {
    var promises = useRef(null);
    /** Cancel all active promises constructed by this hook's consumer */
    function cancel() {
        promises.current.forEach(function (p) { return p.cancel(); });
        promises.current = [];
    }
    // On unmount, cancel promises
    useEffect(function () {
        promises.current = promises.current || [];
        return cancel;
    }, []);
    /** Function to construct cancellable promise if it is not already */
    function cancellablePromise(p) {
        var isICancellablePromise = p['cancel'] && typeof p['cancel'] === 'function';
        var cPromise = !isICancellablePromise
            ? makeCancellable(p, promises)
            : p;
        promises.current.push(cPromise);
        return !isICancellablePromise
            ? cPromise.promise
            : p;
    }
    return { cancellablePromise: cancellablePromise, cancel: cancel };
};

var defaultPollingIntervalMillis = 1000;
var defaultPulseTimeoutMillis = 400;
/**
 * Hook to wrap vanilla setInterval with smarter, unmount-safe logic.
 * Adapted from Dan Abramov's declarative setInterval blog post
 * https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 */
var useLongPoll = function (_a) {
    var callback = _a.callback, _b = _a.pollingIntervalMillis, pollingIntervalMillis = _b === void 0 ? defaultPollingIntervalMillis : _b, _c = _a.pulseTimeoutMillis, pulseTimeoutMillis = _c === void 0 ? defaultPulseTimeoutMillis : _c;
    var _d = useState(false), pulse = _d[0], setPulse = _d[1];
    var savedCallback = useRef(null);
    var mountedRef = useRef(true);
    // Remember the latest callback
    useEffect(function () {
        savedCallback.current = callback;
    }, [callback]);
    // Set up the interval
    useEffect(function () {
        var timeoutId, intervalId;
        function tick() {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, savedCallback.current()];
                        case 1:
                            _a.sent();
                            mountedRef.current && setPulse(true);
                            timeoutId = setTimeout(function () { return mountedRef.current && setPulse(false); }, pulseTimeoutMillis);
                            return [2 /*return*/];
                    }
                });
            });
        }
        if (pollingIntervalMillis !== null) {
            tick();
            intervalId = setInterval(tick, pollingIntervalMillis);
            return function () {
                mountedRef.current = false;
                clearInterval(intervalId);
                clearTimeout(timeoutId);
            };
        }
    }, [pollingIntervalMillis]);
    return {
        /**
         * Boolean pulse variable. Toggled to true for pulseTimeoutMillis
         * after callback completion, before returning to false.  Can be used
         * for visual indication of updated data in UI.
         */
        pulse: pulse
    };
};

// Sets up reducer with 'curried producer' - https://immerjs.github.io/immer/docs/curried-produce
// Draft state can be directly modified.  Draft does not need to be explicitly returned.
var cardStateReducer = fn(function (draft, action) {
    var payload = action.payload;
    switch (action.type) {
        case SET_IS_LOADING:
            draft.isLoading = payload;
            return;
        case SET_ADAPTER_RESULT:
            draft.adapterResult = payload;
            return;
        case SET_IS_LONG_POLLING:
            draft.isLongPolling = payload;
            return;
        case SET_IS_INITIAL_CALL:
            draft.isInitialCall = payload;
            return;
        default:
            return;
    }
});
/** Wraps adapter data fetching, loading, long polling, and promise cancelling logic */
var useAdapter = function (_a) {
    var adapterMethod = _a.adapterMethod, refetchDependencies = _a.refetchDependencies, _b = _a.isLongPolling, isLongPolling = _b === void 0 ? false : _b, pollingIntervalMillis = _a.pollingIntervalMillis, pulseTimeoutMillis = _a.pulseTimeoutMillis, _c = _a.isAdapterCalledOnMount, isAdapterCalledOnMount = _c === void 0 ? true : _c;
    var defaultCardState = useMemo(function () { return ({
        adapterResult: new AdapterResult({
            result: null,
            errorInfo: null
        }),
        isLoading: isAdapterCalledOnMount,
        isLongPolling: isLongPolling,
        isInitialCall: true
    }); }, [isLongPolling]);
    var mountedRef = useRef(null);
    var _d = useReducer(cardStateReducer, defaultCardState), state = _d[0], dispatch = _d[1];
    var _e = useCancellablePromise(), cancellablePromise = _e.cancellablePromise, cancel = _e.cancel;
    var setIsLoading = function (isLoading) {
        dispatch({ type: SET_IS_LOADING, payload: isLoading });
    };
    var setAdapterResult = function (adapterResult) {
        if (!adapterResult) {
            adapterResult = new AdapterResult({
                result: null,
                errorInfo: null
            });
        }
        dispatch({ type: SET_ADAPTER_RESULT, payload: adapterResult });
    };
    var callAdapter = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var adapterResult, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setIsLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, cancellablePromise(adapterMethod(params))];
                case 2:
                    adapterResult = _a.sent();
                    if (mountedRef.current) {
                        setAdapterResult(adapterResult);
                        setIsLoading(false);
                    }
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    if (!(err_1 instanceof CancelledPromiseError)) {
                        console.error('Unexpected promise error', err_1); // log unexpected errors
                        if (mountedRef.current) {
                            setIsLoading(false); // Toggle off loading state if component is still mounted
                        }
                    }
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var cancelAdapter = function (shouldPreserveResult) {
        cancel(); // Cancel outstanding promises
        if (mountedRef.current) {
            if (!shouldPreserveResult) {
                setAdapterResult(null);
            }
            setIsLoading(false);
        }
    };
    var setIsLongPolling = function (isLongPolling) {
        dispatch({
            type: SET_IS_LONG_POLLING,
            payload: isLongPolling
        });
    };
    var longPoll = useLongPoll(__assign({ callback: callAdapter, pollingIntervalMillis: !state.isLongPolling
            ? null
            : pollingIntervalMillis }, (pulseTimeoutMillis && { pulseTimeoutMillis: pulseTimeoutMillis })));
    useEffect(function () {
        if (isAdapterCalledOnMount) {
            if (state.isInitialCall) {
                callAdapter();
                dispatch({
                    type: SET_IS_INITIAL_CALL,
                    payload: false
                });
            }
            else {
                cancelAdapter();
                callAdapter();
            }
        }
    }, __spreadArray([], refetchDependencies));
    useEffect(function () {
        mountedRef.current = true; // Use ref to indicate mounted state
        return function () {
            mountedRef.current = false;
            cancelAdapter();
        };
    }, []);
    return {
        isLoading: state.isLoading,
        adapterResult: state.adapterResult,
        callAdapter: callAdapter,
        cancelAdapter: cancelAdapter,
        setIsLongPolling: setIsLongPolling,
        isLongPolling: state.isLongPolling,
        pulse: longPoll.pulse
    };
};

var StableGuidRng = React__default.createContext(null);
var useStableGuidRng = function () { return useContext(StableGuidRng); };

export { SET_OAT_PROPERTY_EDITOR_CURRENT_NESTED_PROPERTY_INDEX as S, useCancellablePromise as a, useLongPoll as b, SET_OAT_PROPERTY_MODAL_OPEN as c, SET_OAT_PROPERTY_MODAL_BODY as d, SET_OAT_PROPERTY_EDITOR_DRAGGING_PROPERTY as e, SET_OAT_PROPERTY_EDITOR_DRAGGING_TEMPLATE as f, SET_OAT_PROPERTY_EDITOR_CURRENT_PROPERTY_INDEX as g, useStableGuidRng as h, useAdapter as u };
//# sourceMappingURL=StableGuidRngProvider-c9a58eb4.js.map
