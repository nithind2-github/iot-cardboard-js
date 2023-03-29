import { C as ComponentError, bi as __awaiter, bj as __generator, bK as __rest, d as ComponentErrorType, bk as __assign, H as HierarchyNodeType } from './Interfaces-8fb2a33a.js';
import { a as axios } from './index-d9418fcc.js';
import { A as AdapterResult } from './AdapterResult-96d676e4.js';

var ADTAdapterModelsData = /** @class */ (function () {
    function ADTAdapterModelsData(data) {
        this.data = data;
    }
    ADTAdapterModelsData.prototype.hasNoData = function () {
        var _a;
        return (this.data === undefined ||
            this.data === null ||
            ((_a = this.data.value) === null || _a === void 0 ? void 0 : _a.length) === 0);
    };
    return ADTAdapterModelsData;
}());
var ADTAdapterTwinsData = /** @class */ (function () {
    function ADTAdapterTwinsData(data) {
        this.data = data;
    }
    ADTAdapterTwinsData.prototype.hasNoData = function () {
        return (this.data === undefined ||
            this.data === null ||
            this.data.value.length === 0);
    };
    return ADTAdapterTwinsData;
}());
var ADTAdapterSearchByQueryData = /** @class */ (function () {
    function ADTAdapterSearchByQueryData(data) {
        this.data = data;
    }
    ADTAdapterSearchByQueryData.prototype.hasNoData = function () {
        return (this.data === undefined ||
            this.data === null ||
            this.data.value.length === 0);
    };
    return ADTAdapterSearchByQueryData;
}());
var ADTAdapterPatchData = /** @class */ (function () {
    function ADTAdapterPatchData(data) {
        this.data = data;
    }
    ADTAdapterPatchData.prototype.hasNoData = function () {
        return this.data === null || this.data === undefined;
    };
    return ADTAdapterPatchData;
}());

var ADTModelData = /** @class */ (function () {
    function ADTModelData(data) {
        this.data = data;
    }
    ADTModelData.prototype.hasNoData = function () {
        return this.data === null || this.data === undefined;
    };
    return ADTModelData;
}());
var ADTAllModelsData = /** @class */ (function () {
    function ADTAllModelsData(data) {
        this.data = data;
    }
    ADTAllModelsData.prototype.hasNoData = function () {
        var _a, _b;
        return !((_a = this.data) === null || _a === void 0 ? void 0 : _a.parsedModels) || !((_b = this.data) === null || _b === void 0 ? void 0 : _b.rawModels);
    };
    return ADTAllModelsData;
}());
var ADTTwinToModelMappingData = /** @class */ (function () {
    function ADTTwinToModelMappingData(data) {
        this.data = data;
    }
    ADTTwinToModelMappingData.prototype.hasNoData = function () {
        var _a, _b;
        return !((_a = this.data) === null || _a === void 0 ? void 0 : _a.twinId) || !((_b = this.data) === null || _b === void 0 ? void 0 : _b.modelId);
    };
    return ADTTwinToModelMappingData;
}());

var ADTRelationshipsData = /** @class */ (function () {
    function ADTRelationshipsData(data) {
        this.data = data;
    }
    ADTRelationshipsData.prototype.hasNoData = function () {
        return this.data === null || this.data.length === 0;
    };
    return ADTRelationshipsData;
}());
var ADTRelationshipData = /** @class */ (function () {
    function ADTRelationshipData(data) {
        this.data = data;
    }
    ADTRelationshipData.prototype.hasNoData = function () {
        return this.data === null || this.data.length === 0;
    };
    return ADTRelationshipData;
}());

var ADTTwinData = /** @class */ (function () {
    function ADTTwinData(data) {
        this.data = data;
    }
    ADTTwinData.prototype.hasNoData = function () {
        return this.data === null || this.data === undefined;
    };
    return ADTTwinData;
}());

var KeyValuePairAdapterData = /** @class */ (function () {
    function KeyValuePairAdapterData(data) {
        this.data = data;
    }
    KeyValuePairAdapterData.prototype.hasNoData = function () {
        return (this.data === null ||
            this.data.length === 0 ||
            !this.data.reduce(function (acc, curr) {
                return acc || curr.value;
            }, false));
    };
    return KeyValuePairAdapterData;
}());

/** Utility class which creates sandbox environment for adapter data fetching.
 *
 * • Manages errors and catasrophicErrors.
 *
 * • Safely fetches auth token and passes token to data fetching callback
 *
 * • Catches, classifies, and aggregates errors
 */
var AdapterMethodSandbox = /** @class */ (function () {
    function AdapterMethodSandbox(authservice) {
        this.errors = [];
        this.catasrophicError = null;
        this.authService = authservice;
    }
    /**
     *  Pushes new ComponentError onto errors list.  If error is marked as catastrophic,
     *  execution will halt with catastrophic error attached to result
     */
    AdapterMethodSandbox.prototype.pushError = function (_a) {
        var rawError = _a.rawError, message = _a.message, type = _a.type, isCatastrophic = _a.isCatastrophic;
        var error = new ComponentError({
            message: message,
            type: type,
            isCatastrophic: isCatastrophic,
            rawError: rawError
        });
        this.errors.push(error);
        if (error.isCatastrophic) {
            this.catasrophicError = error;
            throw error;
        }
    };
    /**
     * Fetch token wrapped in try / catch block.  If token fetch fails, will attach
     * catastrophic TokenRetrievalFailed error, halting further execution.
     */
    AdapterMethodSandbox.prototype.safelyFetchToken = function (tokenFor) {
        return __awaiter(this, void 0, void 0, function () {
            var token, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // If adapterMethodSandbox not constructed with authService, skip token fetching
                        if (!this.authService) {
                            return [2 /*return*/, null];
                        }
                        token = '';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.authService.getToken(tokenFor)];
                    case 2:
                        token = _a.sent();
                        if (!token && token !== '') {
                            throw new Error('Token undefined');
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        this.pushError({
                            isCatastrophic: true,
                            type: ComponentErrorType.TokenRetrievalFailed,
                            rawError: err_1
                        });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, token];
                }
            });
        });
    };
    /**
     * Wraps adapter data-fetching logic in sandbox which safely fetches an auth token and handles errors consistently.
     *
     * • Any operation that may throw in the callback passed to this method should be wrapped in additional try/catch
     * blocks which push specific error info to the sandbox.
     *
     * • Errors marked isCatastrophic will halt adapter execution.
     *
     * • Uncaught errors will be treated as catastrophic errors with unknown types and will also halt adapter execution.
     *  */
    AdapterMethodSandbox.prototype.safelyFetchData = function (fetchDataWithToken, tokenFor) {
        return __awaiter(this, void 0, void 0, function () {
            var token, data, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.safelyFetchToken(tokenFor)];
                    case 1:
                        token = _a.sent();
                        return [4 /*yield*/, fetchDataWithToken(token)];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, new AdapterResult({
                                errorInfo: {
                                    errors: this.errors,
                                    catastrophicError: this.catasrophicError
                                },
                                result: data
                            })];
                    case 3:
                        err_2 = _a.sent();
                        // Uncaught errors are bubbled up and caught here.
                        if (!(err_2 instanceof ComponentError)) {
                            // Unknown error, construct new catastrophicError error
                            this.catasrophicError = new ComponentError({
                                isCatastrophic: true,
                                rawError: err_2,
                                type: ComponentErrorType.UnknownError
                            });
                            this.errors.unshift(this.catasrophicError);
                        }
                        else if (!this.catasrophicError) {
                            // Uncaught ComponentError thrown explicitly (not pushed to sandbox).  Attach to catastrophicError.
                            this.catasrophicError = err_2;
                            this.errors.unshift(this.catasrophicError);
                        }
                        // Attach errorInfo, nullify result, and return AdapterResult.
                        return [2 /*return*/, new AdapterResult({
                                errorInfo: {
                                    errors: this.errors,
                                    catastrophicError: this.catasrophicError
                                },
                                result: null
                            })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AdapterMethodSandbox.prototype.safelyFetchDataCancellableAxiosPromise = function (returnDataClass, axiosParams, dataTransformFunc, tokenFor) {
        var _this = this;
        var headers = axiosParams.headers, restOfParams = __rest(axiosParams, ["headers"]);
        var cancelTokenSource = axios.CancelToken.source();
        var cancellablePromise = this.safelyFetchData(function (token) { return __awaiter(_this, void 0, void 0, function () {
            var axiosData, err_3, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios(__assign(__assign({}, restOfParams), { headers: __assign({ 'Content-Type': 'application/json', authorization: 'Bearer ' + token }, headers), cancelToken: cancelTokenSource.token }))];
                    case 1:
                        axiosData = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_3 = _a.sent();
                        if (axios.isCancel(err_3)) {
                            this.pushError({
                                type: ComponentErrorType.DataFetchFailed,
                                isCatastrophic: false,
                                rawError: err_3
                            });
                        }
                        else {
                            this.pushError({
                                type: ComponentErrorType.DataFetchFailed,
                                isCatastrophic: true,
                                rawError: err_3
                            });
                        }
                        return [3 /*break*/, 3];
                    case 3:
                        result = axiosData === null || axiosData === void 0 ? void 0 : axiosData.data;
                        return [2 /*return*/, new returnDataClass(dataTransformFunc ? dataTransformFunc(result) : result)];
                }
            });
        }); }, tokenFor);
        cancellablePromise.cancel = cancelTokenSource.cancel;
        return cancellablePromise;
    };
    return AdapterMethodSandbox;
}());

var HierarchyNode = /** @class */ (function () {
    function HierarchyNode() {
    }
    HierarchyNode.createNodesFromADTModels = function (models, nodeType, newlyAddedModelIds) {
        if (nodeType === void 0) { nodeType = HierarchyNodeType.Parent; }
        return models
            ? models
                .sort(function (a, b) {
                var _a, _b;
                return (((_a = a.displayName) === null || _a === void 0 ? void 0 : _a.en) || a.id).localeCompare(((_b = b.displayName) === null || _b === void 0 ? void 0 : _b.en) || b.id, undefined, {
                    numeric: true,
                    sensitivity: 'base'
                });
            })
                .reduce(function (p, c) {
                var _a;
                p[c.id] = __assign(__assign({ name: ((_a = c.displayName) === null || _a === void 0 ? void 0 : _a.en) || c.id, id: c.id, nodeData: c, nodeType: nodeType }, (nodeType === HierarchyNodeType.Parent && {
                    children: {},
                    isCollapsed: true
                })), { isNewlyAdded: newlyAddedModelIds === null || newlyAddedModelIds === void 0 ? void 0 : newlyAddedModelIds.includes(c.id) });
                return p;
            }, {})
            : {};
    };
    HierarchyNode.createNodesFromADTTwins = function (twins, modelNode) {
        return twins
            ? twins
                .sort(function (a, b) {
                return a.$dtId.localeCompare(b.$dtId, undefined, {
                    numeric: true,
                    sensitivity: 'base'
                });
            })
                .reduce(function (p, c) {
                p[c.$dtId] = {
                    name: c.$dtId,
                    id: c.$dtId,
                    parentNode: modelNode,
                    nodeData: c,
                    nodeType: HierarchyNodeType.Child
                };
                return p;
            }, {})
            : {};
    };
    return HierarchyNode;
}());

export { ADTAdapterModelsData as A, HierarchyNode as H, KeyValuePairAdapterData as K, ADTAdapterTwinsData as a, ADTModelData as b, ADTRelationshipsData as c, ADTRelationshipData as d, ADTTwinData as e, AdapterMethodSandbox as f, ADTAdapterSearchByQueryData as g, ADTAdapterPatchData as h, ADTTwinToModelMappingData as i, ADTAllModelsData as j };
//# sourceMappingURL=HierarchyNode-c4d8d9f5.js.map
