import { bF as __extends, bk as __assign, aa as LOCAL_STORAGE_KEYS, bq as getDebugLogger } from './Interfaces-8fb2a33a.js';

/** The property names for custom properties in the payload */
var CUSTOM_PROPERTY_NAMES = {
    /** hashed value for the adt instance */
    AdtInstanceHash: 'AdtInstanceHash',
    /** region of the app (builder/viewer/etc.) */
    AppRegion: 'AppRegion',
    /** name of the emitting component */
    ComponentName: 'ComponentName',
    /** hashed id of the parent scene */
    ParentSceneHash: 'ParentSceneHash',
    /** hashed id of the scene */
    SceneHash: 'SceneHash',
    /** hashed value for the adt instance */
    StorageContainerHash: 'StorageContainerHash',
    /** type of action (user, system, etc.) */
    TriggerType: 'TriggerType',
    /** hashed id for the data history explorer instance */
    DataHistoryInstanceHash: 'DataHistoryInstanceHash'
};
/** Highest level sections of the app */
var AppRegion;
(function (AppRegion) {
    AppRegion["Builder"] = "Builder";
    AppRegion["SceneLobby"] = "SceneLobby";
    AppRegion["Viewer"] = "Viewer";
    AppRegion["DataHistoryExplorer"] = "DataHistoryExplorer";
})(AppRegion || (AppRegion = {}));
/** The type of gesture the user used, (click, hover, etc.) */
var Gesture;
(function (Gesture) {
    Gesture["Click"] = "Click";
    Gesture["Hover"] = "Hover";
})(Gesture || (Gesture = {}));
/** the source of the event, was it from a user or an automated event based off of some condition */
var TelemetryTrigger;
(function (TelemetryTrigger) {
    /** user initiated action */
    TelemetryTrigger["UserAction"] = "UserAction";
    /** user initiated view */
    TelemetryTrigger["UserView"] = "UserView";
    /** System initiated action */
    TelemetryTrigger["SystemAction"] = "SystemAction";
})(TelemetryTrigger || (TelemetryTrigger = {}));
/**
 * The high level component emitting the event
 * Keep it at the general level, no need to get overly specific.
 * Ex: SceneList, ElementForm, etc
 */
var ComponentName;
(function (ComponentName) {
    ComponentName["BehaviorForm"] = "BehaviorForm";
    ComponentName["BehaviorList"] = "BehaviorList";
    ComponentName["ElementForm"] = "ElementForm";
    ComponentName["ElementList"] = "ElementList";
    ComponentName["SceneList"] = "SceneList";
    ComponentName["DataHistoryExplorerModal"] = "DataHistoryExplorerModal";
})(ComponentName || (ComponentName = {}));
/**
 * The events the app can emit
 * Structure is like this:
 *  - App region (Builder/Viewer)
 *    - High level component (SceneList, ElementForm, etc)
 *      - User action/System action
 *        - Event/action
 *           - variant (ex: initiate, confirm, cancel)
 *           - eventName: the name of the beacon to emit
 *           - properties: names of the custom properties that the event will have attached to it
 */
var TelemetryEvents = {
    Adapter: {
        /** scene load */
        SceneLoad: {
            SystemAction: {
                ParseConfiguration: {
                    eventName: 'ParseConfig.ConfigKpis',
                    properties: {
                        countBehaviors: 'countBehaviors',
                        countScenes: 'countScenes',
                        countLayers: 'countLayers'
                    }
                },
                ParseScene: {
                    eventName: 'ParseConfig.SceneKpis',
                    properties: {
                        countBehaviors: 'countBehaviors',
                        countElements: 'countElements',
                        countAssets: 'countAssets',
                        hasCoordinates: 'hasCoordinates',
                        hasDescription: 'hasDescription',
                        pollingDelay: 'pollingDelay',
                        sceneHash: CUSTOM_PROPERTY_NAMES.SceneHash
                    }
                },
                ParseElement: {
                    eventName: 'ParseConfig.ElementKpis',
                    properties: {
                        elementType: 'elementType',
                        countMeshes: 'countMeshes',
                        countAliases: 'countAliases',
                        parentSceneHash: CUSTOM_PROPERTY_NAMES.ParentSceneHash
                    }
                },
                ParseBehavior: {
                    eventName: 'ParseConfig.BehaviorKpis',
                    properties: {
                        countAliases: 'countAliases',
                        countElements: 'countElements',
                        countDataSources: 'countDataSources',
                        countWidgets: 'countWidgets',
                        countWidgetGaugeType: 'countWidgetGaugeType',
                        countWidgetLinkType: 'countWidgetLinkType',
                        countWidgetPropertyType: 'countWidgetPropertyType',
                        countWidgetDataHistoryType: 'countWidgetDataHistoryType',
                        countVisuals: 'countVisuals',
                        countVisualBadgeType: 'countVisualBadgeType',
                        countVisualColorType: 'countVisualColorType',
                        parentSceneHash: CUSTOM_PROPERTY_NAMES.ParentSceneHash
                    }
                }
            }
        }
    },
    /** builder section of the app */
    Builder: {
        /** scene list page */
        SceneList: {
            UserAction: {
                /** creating a new scene */
                CreateScene: {
                    Cancel: {
                        eventName: 'SceneList.CreateScene.Cancel'
                    },
                    Confirm: {
                        eventName: 'SceneList.CreateScene.Confirm',
                        properties: {
                            hasCoordinates: 'hasCoordinates',
                            hasDescription: 'hasDescription'
                        }
                    },
                    Initiate: {
                        eventName: 'SceneList.CreateScene.Initiate'
                    }
                },
                /** delete an existing scene */
                DeleteScene: {
                    Cancel: {
                        eventName: 'SceneList.DeleteScene.Cancel'
                    },
                    Confirm: {
                        eventName: 'SceneList.DeleteScene.Confirm'
                    },
                    Initiate: {
                        eventName: 'SceneList.DeleteScene.Initiate',
                        properties: {
                            itemIndex: 'itemIndex'
                        }
                    }
                },
                /** modify an existing scene */
                EditScene: {
                    Cancel: {
                        eventName: 'SceneList.EditScene.Confirm'
                    },
                    Confirm: {
                        eventName: 'SceneList.EditScene.Confirm'
                    },
                    Initiate: {
                        eventName: 'SceneList.EditScene.Initiate',
                        properties: {
                            itemIndex: 'itemIndex'
                        }
                    }
                },
                /** Select a scene from the list */
                SelectScene: {
                    eventName: 'SceneList.SelectScene'
                }
            }
        }
    },
    /** viewer section of the app */
    Viewer: {},
    /** tools provided by the library */
    Tools: {
        /** data history explorer component */
        DataHistoryExplorer: {
            SystemAction: {
                ParseDataHistory: {
                    eventName: 'ParseConfig.DataHistoryExplorerKpis',
                    properties: {
                        countSeries: 'countSeries'
                    }
                }
            },
            UserAction: {
                /** opening modal to explore data history */
                OpenModal: {
                    eventName: 'DataHistoryExplorer.OpenModal'
                },
                /** closing data history explorer modal */
                CloseModal: {
                    eventName: 'DataHistoryExplorer.CloseModal'
                },
                /** adding a new series using the time series builder on the left */
                AddSeries: {
                    eventName: 'DataHistoryExplorer.AddSeries',
                    properties: {
                        hasCustomLabel: 'hasCustomLabel',
                        isCastedToNumber: 'isCastedToNumber'
                    }
                },
                /** editing series using the time series builder on the left */
                EditSeries: {
                    eventName: 'DataHistoryExplorer.EditSeries',
                    properties: {
                        seriesId: 'seriesId',
                        hasCustomLabel: 'hasCustomLabel',
                        isCastedToNumber: 'isCastedToNumber'
                    }
                },
                /** removing a new series using the ellipsis menu of the list item in the builder on the left */
                RemoveSeries: {
                    eventName: 'DataHistoryExplorer.RemoveSeries',
                    properties: {
                        seriesId: 'seriesId'
                    }
                },
                /** toggle the option to cast a property type to numeric */
                ToggleNumericCasting: {
                    eventName: 'DataHistoryExplorer.ToggleNumericCasting',
                    properties: {
                        toggleValue: 'toggleValue'
                    }
                },
                /** changing view mode either to Chart or Table on the viewer component */
                ChangeView: {
                    eventName: 'DataHistoryExplorer.ChangeView',
                    properties: {
                        view: 'view'
                    }
                },
                /** changing any chart options on the viewer under Chart tab like Y-axis type, Aggregation type or Quick Time */
                ChangeChartOption: {
                    eventName: 'DataHistoryExplorer.ChangeChartOption',
                    properties: {
                        chartOptions: 'chartOptions'
                    }
                },
                /** clicking on Open in ADX action to view the chart data in Azure Data Explorer Web UI */
                OpenSeriesInAdx: {
                    eventName: 'DataHistoryExplorer.OpenInADX'
                },
                /** dowloading data in the Table tab in the viewer on right hand side */
                DownloadTable: {
                    eventName: 'DataHistoryExplorer.DownloadTable',
                    properties: {
                        numberOfRows: 'numberOfRows'
                    }
                },
                /** triggering to force refresh data fetching */
                ForceRefresh: {
                    eventName: 'DataHistoryExplorer.ForceRefresh'
                }
            }
        }
    }
};

/** Loosely based on the Application insights telemetry data model
 * https://docs.microsoft.com/en-us/azure/azure-monitor/app/data-model
 */
var TelemetryType;
(function (TelemetryType) {
    TelemetryType["event"] = "event";
    TelemetryType["exception"] = "exception";
    TelemetryType["metric"] = "metric";
    TelemetryType["request"] = "request";
    TelemetryType["trace"] = "trace";
})(TelemetryType || (TelemetryType = {}));

var TelemetryService_types = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get TelemetryType () { return TelemetryType; }
});

var Telemetry = /** @class */ (function () {
    function Telemetry(name, customProperties) {
        this.name = name;
        this.customProperties = customProperties || {};
        this.timestamp = new Date().toUTCString();
    }
    return Telemetry;
}());
/** Telemetry for network requests
 * https://docs.microsoft.com/en-us/azure/azure-monitor/app/data-model-request-telemetry
 */
var TelemetryRequest = /** @class */ (function (_super) {
    __extends(TelemetryRequest, _super);
    function TelemetryRequest(_a) {
        var name = _a.name, url = _a.url, requestMethod = _a.requestMethod, responseCode = _a.responseCode, responseMessage = _a.responseMessage, success = _a.success, customProperties = _a.customProperties;
        var _this = _super.call(this, name, customProperties) || this;
        _this.type = TelemetryType.request;
        _this.url = url;
        _this.success = success;
        _this.responseCode = responseCode;
        _this.responseMessage = responseMessage;
        _this.requestMethod = requestMethod;
        _this.customProperties = customProperties;
        return _this;
    }
    return TelemetryRequest;
}(Telemetry));
/** Telemetry for exceptions
 * https://docs.microsoft.com/en-us/azure/azure-monitor/app/data-model-exception-telemetry
 */
var TelemetryException = /** @class */ (function (_super) {
    __extends(TelemetryException, _super);
    function TelemetryException(_a) {
        var name = _a.name, message = _a.message, exceptionId = _a.exceptionId, stack = _a.stack, customProperties = _a.customProperties, severityLevel = _a.severityLevel;
        var _this = _super.call(this, name, customProperties) || this;
        _this.type = TelemetryType.exception;
        _this.exceptionId = exceptionId;
        _this.severityLevel = severityLevel;
        _this.message = message;
        _this.stack = stack;
        return _this;
    }
    return TelemetryException;
}(Telemetry));
/** Telemetry for trace statements (similar to log entries)
 * https://docs.microsoft.com/en-us/azure/azure-monitor/app/data-model-trace-telemetry
 */
var TelemetryTrace = /** @class */ (function (_super) {
    __extends(TelemetryTrace, _super);
    function TelemetryTrace(_a) {
        var name = _a.name, message = _a.message, severityLevel = _a.severityLevel, customProperties = _a.customProperties;
        var _this = _super.call(this, name, customProperties) || this;
        _this.type = TelemetryType.trace;
        _this.message = message;
        _this.severityLevel = severityLevel;
        return _this;
    }
    return TelemetryTrace;
}(Telemetry));
/** Telemetry for application events (Typically it is a user interaction such as button click)
 * https://docs.microsoft.com/en-us/azure/azure-monitor/app/data-model-event-telemetry
 */
var TelemetryEvent = /** @class */ (function (_super) {
    __extends(TelemetryEvent, _super);
    function TelemetryEvent(_a) {
        var _b;
        var appRegion = _a.appRegion, componentName = _a.componentName, customProperties = _a.customProperties, name = _a.name, triggerType = _a.triggerType;
        var _this = _super.call(this, name, customProperties) || this;
        _this.type = TelemetryType.event;
        _this.customProperties = __assign(__assign({}, _this.customProperties), (_b = {}, _b[CUSTOM_PROPERTY_NAMES.AppRegion] = appRegion || 'Unset', _b[CUSTOM_PROPERTY_NAMES.ComponentName] = componentName || 'Unset', _b[CUSTOM_PROPERTY_NAMES.TriggerType] = triggerType || 'Unset', _b));
        return _this;
    }
    return TelemetryEvent;
}(Telemetry));
/** Telemetry for application measurements (Typically it is a state of the app like queue length, or duration something took to complete)
 * https://docs.microsoft.com/en-us/azure/azure-monitor/app/data-model-metric-telemetry
 */
var TelemetryMetric = /** @class */ (function (_super) {
    __extends(TelemetryMetric, _super);
    function TelemetryMetric(_a) {
        var name = _a.name, average = _a.average, min = _a.min, max = _a.max, sampleSize = _a.sampleSize, customProperties = _a.customProperties;
        var _this = _super.call(this, name, customProperties) || this;
        _this.type = TelemetryType.metric;
        _this.average = average;
        _this.min = min;
        _this.max = max;
        _this.sampleSize = sampleSize || 1;
        return _this;
    }
    return TelemetryMetric;
}(Telemetry));

var Telemetry$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Telemetry: Telemetry,
    TelemetryRequest: TelemetryRequest,
    TelemetryException: TelemetryException,
    TelemetryTrace: TelemetryTrace,
    TelemetryEvent: TelemetryEvent,
    TelemetryMetric: TelemetryMetric
});

/*

TypeScript Md5
==============

Based on work by
* Joseph Myers: http://www.myersdaily.org/joseph/javascript/md5-text.html
* André Cruz: https://github.com/satazor/SparkMD5
* Raymond Hill: https://github.com/gorhill/yamd5.js

Effectively a TypeScrypt re-write of Raymond Hill JS Library

The MIT License (MIT)

Copyright (C) 2014 Raymond Hill

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.



            DO WHAT YOU WANT TO PUBLIC LICENSE
                    Version 2, December 2004

 Copyright (C) 2015 André Cruz <amdfcruz@gmail.com>

 Everyone is permitted to copy and distribute verbatim or modified
 copies of this license document, and changing it is allowed as long
 as the name is changed.

            DO WHAT YOU WANT TO PUBLIC LICENSE
   TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

  0. You just DO WHAT YOU WANT TO.


*/
class Md5 {
    constructor() {
        this._dataLength = 0;
        this._bufferLength = 0;
        this._state = new Int32Array(4);
        this._buffer = new ArrayBuffer(68);
        this._buffer8 = new Uint8Array(this._buffer, 0, 68);
        this._buffer32 = new Uint32Array(this._buffer, 0, 17);
        this.start();
    }
    static hashStr(str, raw = false) {
        return this.onePassHasher
            .start()
            .appendStr(str)
            .end(raw);
    }
    static hashAsciiStr(str, raw = false) {
        return this.onePassHasher
            .start()
            .appendAsciiStr(str)
            .end(raw);
    }
    static _hex(x) {
        const hc = Md5.hexChars;
        const ho = Md5.hexOut;
        let n;
        let offset;
        let j;
        let i;
        for (i = 0; i < 4; i += 1) {
            offset = i * 8;
            n = x[i];
            for (j = 0; j < 8; j += 2) {
                ho[offset + 1 + j] = hc.charAt(n & 0x0F);
                n >>>= 4;
                ho[offset + 0 + j] = hc.charAt(n & 0x0F);
                n >>>= 4;
            }
        }
        return ho.join('');
    }
    static _md5cycle(x, k) {
        let a = x[0];
        let b = x[1];
        let c = x[2];
        let d = x[3];
        // ff()
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        // gg()
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        // hh()
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        // ii()
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0;
    }
    /**
     * Initialise buffer to be hashed
     */
    start() {
        this._dataLength = 0;
        this._bufferLength = 0;
        this._state.set(Md5.stateIdentity);
        return this;
    }
    // Char to code point to to array conversion:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
    // #Example.3A_Fixing_charCodeAt_to_handle_non-Basic-Multilingual-Plane_characters_if_their_presence_earlier_in_the_string_is_unknown
    /**
     * Append a UTF-8 string to the hash buffer
     * @param str String to append
     */
    appendStr(str) {
        const buf8 = this._buffer8;
        const buf32 = this._buffer32;
        let bufLen = this._bufferLength;
        let code;
        let i;
        for (i = 0; i < str.length; i += 1) {
            code = str.charCodeAt(i);
            if (code < 128) {
                buf8[bufLen++] = code;
            }
            else if (code < 0x800) {
                buf8[bufLen++] = (code >>> 6) + 0xC0;
                buf8[bufLen++] = code & 0x3F | 0x80;
            }
            else if (code < 0xD800 || code > 0xDBFF) {
                buf8[bufLen++] = (code >>> 12) + 0xE0;
                buf8[bufLen++] = (code >>> 6 & 0x3F) | 0x80;
                buf8[bufLen++] = (code & 0x3F) | 0x80;
            }
            else {
                code = ((code - 0xD800) * 0x400) + (str.charCodeAt(++i) - 0xDC00) + 0x10000;
                if (code > 0x10FFFF) {
                    throw new Error('Unicode standard supports code points up to U+10FFFF');
                }
                buf8[bufLen++] = (code >>> 18) + 0xF0;
                buf8[bufLen++] = (code >>> 12 & 0x3F) | 0x80;
                buf8[bufLen++] = (code >>> 6 & 0x3F) | 0x80;
                buf8[bufLen++] = (code & 0x3F) | 0x80;
            }
            if (bufLen >= 64) {
                this._dataLength += 64;
                Md5._md5cycle(this._state, buf32);
                bufLen -= 64;
                buf32[0] = buf32[16];
            }
        }
        this._bufferLength = bufLen;
        return this;
    }
    /**
     * Append an ASCII string to the hash buffer
     * @param str String to append
     */
    appendAsciiStr(str) {
        const buf8 = this._buffer8;
        const buf32 = this._buffer32;
        let bufLen = this._bufferLength;
        let i;
        let j = 0;
        for (;;) {
            i = Math.min(str.length - j, 64 - bufLen);
            while (i--) {
                buf8[bufLen++] = str.charCodeAt(j++);
            }
            if (bufLen < 64) {
                break;
            }
            this._dataLength += 64;
            Md5._md5cycle(this._state, buf32);
            bufLen = 0;
        }
        this._bufferLength = bufLen;
        return this;
    }
    /**
     * Append a byte array to the hash buffer
     * @param input array to append
     */
    appendByteArray(input) {
        const buf8 = this._buffer8;
        const buf32 = this._buffer32;
        let bufLen = this._bufferLength;
        let i;
        let j = 0;
        for (;;) {
            i = Math.min(input.length - j, 64 - bufLen);
            while (i--) {
                buf8[bufLen++] = input[j++];
            }
            if (bufLen < 64) {
                break;
            }
            this._dataLength += 64;
            Md5._md5cycle(this._state, buf32);
            bufLen = 0;
        }
        this._bufferLength = bufLen;
        return this;
    }
    /**
     * Get the state of the hash buffer
     */
    getState() {
        const s = this._state;
        return {
            buffer: String.fromCharCode.apply(null, Array.from(this._buffer8)),
            buflen: this._bufferLength,
            length: this._dataLength,
            state: [s[0], s[1], s[2], s[3]]
        };
    }
    /**
     * Override the current state of the hash buffer
     * @param state New hash buffer state
     */
    setState(state) {
        const buf = state.buffer;
        const x = state.state;
        const s = this._state;
        let i;
        this._dataLength = state.length;
        this._bufferLength = state.buflen;
        s[0] = x[0];
        s[1] = x[1];
        s[2] = x[2];
        s[3] = x[3];
        for (i = 0; i < buf.length; i += 1) {
            this._buffer8[i] = buf.charCodeAt(i);
        }
    }
    /**
     * Hash the current state of the hash buffer and return the result
     * @param raw Whether to return the value as an `Int32Array`
     */
    end(raw = false) {
        const bufLen = this._bufferLength;
        const buf8 = this._buffer8;
        const buf32 = this._buffer32;
        const i = (bufLen >> 2) + 1;
        this._dataLength += bufLen;
        const dataBitsLen = this._dataLength * 8;
        buf8[bufLen] = 0x80;
        buf8[bufLen + 1] = buf8[bufLen + 2] = buf8[bufLen + 3] = 0;
        buf32.set(Md5.buffer32Identity.subarray(i), i);
        if (bufLen > 55) {
            Md5._md5cycle(this._state, buf32);
            buf32.set(Md5.buffer32Identity);
        }
        // Do the final computation based on the tail and length
        // Beware that the final length may not fit in 32 bits so we take care of that
        if (dataBitsLen <= 0xFFFFFFFF) {
            buf32[14] = dataBitsLen;
        }
        else {
            const matches = dataBitsLen.toString(16).match(/(.*?)(.{0,8})$/);
            if (matches === null) {
                return;
            }
            const lo = parseInt(matches[2], 16);
            const hi = parseInt(matches[1], 16) || 0;
            buf32[14] = lo;
            buf32[15] = hi;
        }
        Md5._md5cycle(this._state, buf32);
        return raw ? this._state : Md5._hex(this._state);
    }
}
// Private Static Variables
Md5.stateIdentity = new Int32Array([1732584193, -271733879, -1732584194, 271733878]);
Md5.buffer32Identity = new Int32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
Md5.hexChars = '0123456789abcdef';
Md5.hexOut = [];
// Permanent instance is to use for one-call hashing
Md5.onePassHasher = new Md5();
if (Md5.hashStr('hello') !== '5d41402abc4b2a76b9719d911017c592') {
    throw new Error('Md5 self test failed.');
}

var debugLogging = localStorage.getItem(LOCAL_STORAGE_KEYS.FeatureFlags.Telemetry.debugLogging) === 'true' || false;
var logDebugConsole = getDebugLogger('TelemetryService', debugLogging);
var TelemetryService = /** @class */ (function () {
    function TelemetryService() {
    }
    // Attach telemetry processing callback from consuming application
    TelemetryService.registerTelemetryCallback = function (telemetryCallback) {
        TelemetryService.telemetryCallback = telemetryCallback;
    };
    // #region public telemetry emitters
    TelemetryService.sendEvent = function (telemetry) {
        this.sendTelemetry(telemetry);
    };
    TelemetryService.sendException = function (telemetry) {
        this.sendTelemetry(telemetry);
    };
    TelemetryService.sendMetric = function (telemetry) {
        this.sendTelemetry(telemetry);
    };
    TelemetryService.sendRequest = function (telemetry) {
        this.sendTelemetry(telemetry);
    };
    TelemetryService.sendTrace = function (telemetry) {
        this.sendTelemetry(telemetry);
    };
    // #endregion
    // #region public setters
    /**
     * store the current adt instance
     * @param adtInstanceUrl
     */
    TelemetryService.setAdtInstance = function (adtInstanceUrl) {
        this.adtInstanceHash = Md5.hashStr(adtInstanceUrl);
        logDebugConsole('debug', "Updating adt instance hash to " + this.adtInstanceHash + ". {adtInstance}", adtInstanceUrl);
    };
    /**
     * store the current blob storage container url
     * @param blobStorageContainerUrl the url for the storage container
     */
    TelemetryService.setStorageContainerUrl = function (blobStorageContainerUrl) {
        this.storageContainerHash = Md5.hashStr(blobStorageContainerUrl);
        logDebugConsole('debug', "Updating storage URL to " + this.storageContainerHash + ". {storageUrl}", blobStorageContainerUrl);
    };
    /** store the scene id for the current scene */
    TelemetryService.setSceneId = function (sceneId) {
        this.sceneHash = Md5.hashStr(sceneId);
        logDebugConsole('debug', "Updating scene hash to " + this.sceneHash + ". {sceneId}", sceneId);
    };
    // #endregion
    // #region private methods
    // Report telemetry to telemetry processing callback (if present)
    TelemetryService.sendTelemetry = function (telemetry) {
        // add the common properties for all events
        TelemetryService._addCommonTelemetryProperties(telemetry);
        logDebugConsole('debug', "[Telemetry] [" + telemetry.type + "] " + telemetry.name, telemetry);
        if (TelemetryService.telemetryCallback)
            TelemetryService.telemetryCallback(telemetry);
    };
    TelemetryService._addCommonTelemetryProperties = function (telemetry) {
        if (!telemetry.customProperties) {
            telemetry.customProperties = {};
        }
        // add the scene hash
        if (this.sceneHash) {
            telemetry.customProperties[CUSTOM_PROPERTY_NAMES.SceneHash] = this.sceneHash;
        }
        // add the adt instance hash
        if (this.adtInstanceHash) {
            telemetry.customProperties[CUSTOM_PROPERTY_NAMES.AdtInstanceHash] = this.adtInstanceHash;
        }
        // add the storage container hash
        if (this.storageContainerHash) {
            telemetry.customProperties[CUSTOM_PROPERTY_NAMES.StorageContainerHash] = this.storageContainerHash;
        }
    };
    return TelemetryService;
}());

export { AppRegion as A, ComponentName as C, TelemetryService as T, Telemetry$1 as a, TelemetryService_types as b, TelemetryEvent as c, TelemetryTrigger as d, TelemetryEvents as e, CUSTOM_PROPERTY_NAMES as f, TelemetryRequest as g, TelemetryException as h, TelemetryTrace as i, TelemetryMetric as j };
//# sourceMappingURL=TelemetryService-fbd269fd.js.map
