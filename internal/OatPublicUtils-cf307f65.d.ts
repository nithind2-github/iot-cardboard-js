import { z as IAuthService, D as IEnvironmentToConstantMapping, de as DtdlInterface, a2 as IADTTwin, dk as DtdlProperty, bz as DurationUnits, aE as DTwin, bA as IConsoleLogFunction, R as IAzureResource, bB as AzureAccessPermissionRoleGroups } from './ADTAdapter-69d7e03f';
import { x as AzureResourceDisplayFields, v as AzureAccessPermissionRoles, u as AzureResourceTypes, D as lib } from './ADT3DScenePage-dc80dd59';
import * as BABYLON from '@babylonjs/core/Legacy/legacy';
import React from 'react';
import { a as I3DScenesConfig, e as IValueRange } from './3DScenesConfiguration-v1.0.0.d-e5d9427a';
import { IDropdownOption } from '@fluentui/react';

declare class MsalAuthService implements IAuthService {
    private getTokenCalls;
    private gettingToken;
    private isLoggingIn;
    private executeGetTokenSequentially;
    private authContextConfig;
    private authContext;
    private environmentToConstantMapping;
    constructor(environmentToConstantMapping?: IEnvironmentToConstantMapping);
    login: () => void;
    private logout;
    private shiftAndExecuteGetTokenCall;
    private createGetTokenCall;
    private getGenericTokenPromiseCallback;
    getToken: (tokenFor?: 'azureManagement' | 'adx' | 'storage' | 'powerBI') => Promise<string>;
}

/** Highest level sections of the app */
declare enum AppRegion$1 {
    Builder = "Builder",
    SceneLobby = "SceneLobby",
    Viewer = "Viewer",
    DataHistoryExplorer = "DataHistoryExplorer"
}
/** the source of the event, was it from a user or an automated event based off of some condition */
declare enum TelemetryTrigger {
    /** user initiated action */
    UserAction = "UserAction",
    /** user initiated view */
    UserView = "UserView",
    /** System initiated action */
    SystemAction = "SystemAction"
}
/**
 * The high level component emitting the event
 * Keep it at the general level, no need to get overly specific.
 * Ex: SceneList, ElementForm, etc
 */
declare enum ComponentName$1 {
    BehaviorForm = "BehaviorForm",
    BehaviorList = "BehaviorList",
    ElementForm = "ElementForm",
    ElementList = "ElementList",
    SceneList = "SceneList",
    DataHistoryExplorerModal = "DataHistoryExplorerModal"
}

/** Highest level sections of the app */
declare enum AppRegion {
    OAT = "OAT"
}
/**
 * The high level component emitting the event
 * Keep it at the general level, no need to get overly specific.
 * Ex: OAT
 */
declare enum ComponentName {
    OAT = "OAT"
}

/** Loosely based on the Application insights telemetry data model
 * https://docs.microsoft.com/en-us/azure/azure-monitor/app/data-model
 */
declare enum TelemetryType {
    event = "event",
    exception = "exception",
    metric = "metric",
    request = "request",
    trace = "trace"
}
interface ITelemetry {
    type: TelemetryType;
}
declare type CustomProperties = Record<string, any>;
declare type SeverityLevel = 'Verbose' | 'Information' | 'Warning' | 'Error' | 'Critical';
interface IBaseTelemetryParams {
    customProperties?: CustomProperties;
    name: string;
}
interface IRequestTelemetryParams extends IBaseTelemetryParams {
    url: string;
    success?: boolean;
    responseCode?: number;
    responseMessage?: string;
    requestMethod?: string;
}
interface IExceptionTelemetryParams extends IBaseTelemetryParams {
    /** Identifier of where the exception was thrown in code.
     * Used for exceptions grouping. Typically a combination of exception
     * type and a function from the call stack. */
    exceptionId: string;
    /** Trace severity level */
    severityLevel?: SeverityLevel;
    message?: string;
    stack?: string;
}
interface ITraceTelemetryParams extends IBaseTelemetryParams {
    message: string;
    /** Trace severity level */
    severityLevel?: SeverityLevel;
}
declare type IEventTelemetryParams = IEventTelemetryForComponentAction | IEventTelemetryForComponentView | IEventTelemetryForService;
interface IEventTelemetryParamsBase extends IBaseTelemetryParams {
    triggerType: TelemetryTrigger;
}
declare type IEventTelemetryForComponentAction = IEventTelemetryParamsBase & {
    triggerType: TelemetryTrigger.UserAction;
    componentName: ComponentName$1 | ComponentName;
    appRegion: AppRegion$1 | AppRegion;
};
declare type IEventTelemetryForComponentView = IEventTelemetryParamsBase & {
    triggerType: TelemetryTrigger.UserView;
    componentName: ComponentName$1 | ComponentName;
    appRegion: AppRegion$1 | AppRegion;
};
declare type IEventTelemetryForService = IEventTelemetryParamsBase & {
    triggerType: TelemetryTrigger.SystemAction;
    componentName?: ComponentName$1 | ComponentName;
    appRegion?: AppRegion$1 | AppRegion;
};
interface IMetricTelemetryParams extends IBaseTelemetryParams {
    average: number;
    min?: number;
    max?: number;
    sampleSize?: number;
}

type TelemetryService_types_TelemetryType = TelemetryType;
declare const TelemetryService_types_TelemetryType: typeof TelemetryType;
type TelemetryService_types_ITelemetry = ITelemetry;
type TelemetryService_types_CustomProperties = CustomProperties;
type TelemetryService_types_SeverityLevel = SeverityLevel;
type TelemetryService_types_IBaseTelemetryParams = IBaseTelemetryParams;
type TelemetryService_types_IRequestTelemetryParams = IRequestTelemetryParams;
type TelemetryService_types_IExceptionTelemetryParams = IExceptionTelemetryParams;
type TelemetryService_types_ITraceTelemetryParams = ITraceTelemetryParams;
type TelemetryService_types_IEventTelemetryParams = IEventTelemetryParams;
type TelemetryService_types_IMetricTelemetryParams = IMetricTelemetryParams;
declare namespace TelemetryService_types {
  export {
    TelemetryService_types_TelemetryType as TelemetryType,
    TelemetryService_types_ITelemetry as ITelemetry,
    TelemetryService_types_CustomProperties as CustomProperties,
    TelemetryService_types_SeverityLevel as SeverityLevel,
    TelemetryService_types_IBaseTelemetryParams as IBaseTelemetryParams,
    TelemetryService_types_IRequestTelemetryParams as IRequestTelemetryParams,
    TelemetryService_types_IExceptionTelemetryParams as IExceptionTelemetryParams,
    TelemetryService_types_ITraceTelemetryParams as ITraceTelemetryParams,
    TelemetryService_types_IEventTelemetryParams as IEventTelemetryParams,
    TelemetryService_types_IMetricTelemetryParams as IMetricTelemetryParams,
  };
}

declare type TelemetryItem = TelemetryEvent | TelemetryException | TelemetryMetric | TelemetryRequest | TelemetryTrace;
declare abstract class Telemetry {
    name: string;
    type: TelemetryType;
    customProperties: CustomProperties;
    timestamp: string;
    constructor(name: string, customProperties: CustomProperties);
}
/** Telemetry for network requests
 * https://docs.microsoft.com/en-us/azure/azure-monitor/app/data-model-request-telemetry
 */
declare class TelemetryRequest extends Telemetry {
    type: TelemetryType.request;
    name: string;
    url: string;
    success: boolean;
    responseCode: number;
    responseMessage: string;
    requestMethod: string;
    customProperties: CustomProperties;
    constructor({ name, url, requestMethod, responseCode, responseMessage, success, customProperties }: IRequestTelemetryParams);
}
/** Telemetry for exceptions
 * https://docs.microsoft.com/en-us/azure/azure-monitor/app/data-model-exception-telemetry
 */
declare class TelemetryException extends Telemetry {
    type: TelemetryType.exception;
    exceptionId: string;
    severityLevel: SeverityLevel;
    message: string;
    stack: string;
    constructor({ name, message, exceptionId, stack, customProperties, severityLevel }: IExceptionTelemetryParams);
}
/** Telemetry for trace statements (similar to log entries)
 * https://docs.microsoft.com/en-us/azure/azure-monitor/app/data-model-trace-telemetry
 */
declare class TelemetryTrace extends Telemetry {
    type: TelemetryType.trace;
    message: string;
    severityLevel: SeverityLevel;
    constructor({ name, message, severityLevel, customProperties }: ITraceTelemetryParams);
}
/** Telemetry for application events (Typically it is a user interaction such as button click)
 * https://docs.microsoft.com/en-us/azure/azure-monitor/app/data-model-event-telemetry
 */
declare class TelemetryEvent extends Telemetry {
    type: TelemetryType.event;
    constructor({ appRegion, componentName, customProperties, name, triggerType }: IEventTelemetryParams);
}
/** Telemetry for application measurements (Typically it is a state of the app like queue length, or duration something took to complete)
 * https://docs.microsoft.com/en-us/azure/azure-monitor/app/data-model-metric-telemetry
 */
declare class TelemetryMetric extends Telemetry {
    type: TelemetryType.metric;
    average: number;
    min?: number;
    max?: number;
    sampleSize?: number;
    constructor({ name, average, min, max, sampleSize, customProperties }: IMetricTelemetryParams);
}

type Telemetry$1_TelemetryItem = TelemetryItem;
type Telemetry$1_Telemetry = Telemetry;
declare const Telemetry$1_Telemetry: typeof Telemetry;
type Telemetry$1_TelemetryRequest = TelemetryRequest;
declare const Telemetry$1_TelemetryRequest: typeof TelemetryRequest;
type Telemetry$1_TelemetryException = TelemetryException;
declare const Telemetry$1_TelemetryException: typeof TelemetryException;
type Telemetry$1_TelemetryTrace = TelemetryTrace;
declare const Telemetry$1_TelemetryTrace: typeof TelemetryTrace;
type Telemetry$1_TelemetryEvent = TelemetryEvent;
declare const Telemetry$1_TelemetryEvent: typeof TelemetryEvent;
type Telemetry$1_TelemetryMetric = TelemetryMetric;
declare const Telemetry$1_TelemetryMetric: typeof TelemetryMetric;
declare namespace Telemetry$1 {
  export {
    Telemetry$1_TelemetryItem as TelemetryItem,
    Telemetry$1_Telemetry as Telemetry,
    Telemetry$1_TelemetryRequest as TelemetryRequest,
    Telemetry$1_TelemetryException as TelemetryException,
    Telemetry$1_TelemetryTrace as TelemetryTrace,
    Telemetry$1_TelemetryEvent as TelemetryEvent,
    Telemetry$1_TelemetryMetric as TelemetryMetric,
  };
}

declare class TelemetryService {
    static telemetryCallback: (telemetry: TelemetryItem) => Promise<void>;
    private static adtInstanceHash;
    private static storageContainerHash;
    private static sceneHash;
    static registerTelemetryCallback(telemetryCallback: (telemetry: TelemetryItem) => Promise<void>): void;
    static sendEvent(telemetry: TelemetryEvent): void;
    static sendException(telemetry: TelemetryException): void;
    static sendMetric(telemetry: TelemetryMetric): void;
    static sendRequest(telemetry: TelemetryRequest): void;
    static sendTrace(telemetry: TelemetryTrace): void;
    /**
     * store the current adt instance
     * @param adtInstanceUrl
     */
    static setAdtInstance(adtInstanceUrl: string): void;
    /**
     * store the current blob storage container url
     * @param blobStorageContainerUrl the url for the storage container
     */
    static setStorageContainerUrl(blobStorageContainerUrl: string): void;
    /** store the scene id for the current scene */
    static setSceneId(sceneId: string): void;
    private static sendTelemetry;
    private static _addCommonTelemetryProperties;
}

/** Parse DTDL models via model parser */
declare const parseDTDLModelsAsync: (dtdlInterfaces: DtdlInterface[]) => Promise<any>;
declare const logDtdlParserError: (parserErrors: any) => void;
/** Validates input data with JSON schema */
declare const validate3DConfigWithSchema: (data: I3DScenesConfig) => I3DScenesConfig;
/**
 * checks whether the provided value is one of the values in the provided enum type
 * @example isValueInEnum(DTDLSchemaType, schemaType)
 */
declare const isValueInEnum: (enumType: any, value: any) => boolean;
declare const createGUID: (isWithDashes?: boolean) => string;
declare const getFileType: (fileName: string, defaultType?: string) => string;
declare const createNodeFilterFromRootForBIM: (parentNodeModelName: string) => (nodes: any) => {};
declare const createSeededGUID: (seededRandomNumGen: () => number) => string;
declare const getMarkedHtmlBySearch: (str: string, searchTerm: string, isCaseSensitive?: boolean) => string | React.DetailedReactHTMLElement<React.HTMLAttributes<HTMLElement>, HTMLElement>[] | React.DetailedReactHTMLElement<{}, HTMLElement>;
declare const objectHasOwnProperty: (obj: any, propertyName: any) => any;
declare const parseViewProperties: (data: Record<string, any>) => string[];
declare const hasAllProcessGraphicsCardProperties: (dtTwin: IADTTwin) => boolean;
declare const downloadJSON: (text: string, fileName?: string) => void;
/** downloads a file as a blob to the user's machine */
declare function downloadFile(blob: Blob, fileName: string): void;
/** Remove the suffix or any other text after the numbers, or return undefined if not a number */
declare const getNumericPart: (value: string) => number | undefined;
declare const getModelContentType: (type: string | string[]) => string;
declare const getModelContentUnit: (type: string | string[], property: DtdlProperty) => string;
declare const createDTDLModelId: (name: any) => string;
declare const applyMixins: (derivedCtor: any, constructors: any[]) => void;
declare function measureText(str: string, fontSize: number): number;
declare function getTimeStamp(): string;
/**
 * Takes in a duration in milliseconds and returns and object that has the value converted to the best units to describe that duration (ex: seconds, minutes, hours, days, years).
 * @param milliseconds millisecond duration to convert
 * @returns an object containing the scaled version and the locale resource key for the units, NOTE: the resource key expects the value to be passed in as an argument to populate the value ex: `t(formattedTime.displayStringKey, {value: formattedTime.value})`
 */
declare function formatTimeInRelevantUnits(milliseconds: number, minimumUnits?: DurationUnits): {
    value: number;
    displayStringKey: string;
};
declare function deepCopy<T>(object: T): T;
declare function getSceneElementStatusColor(valueExpression: string, valueRanges: IValueRange[], twins: Record<string, DTwin>): string;
declare function buildDropdownOptionsFromStrings(properties: string[]): IDropdownOption[];
/** gives back the RGBA string for css */
declare function hexToRgbCss(hex: string): string;
/**
 * Gives back the css string to use for making a give hex color into a transparent RGBA
 * @param hex Hex value of the color. e
 * @param transparency amount of transparency
 * @example `getTransparentColor(theme.palette.black,'0.1')`
 * @returns string to be plugged into a style
 */
declare function getTransparentColor(hex: string, transparency: '0.1' | '0.2' | '0.3' | '0.4' | '0.5' | '0.6' | '0.7' | '0.8' | '0.9'): string;
declare function wrapTextInTemplateString(text: string): string;
declare function stripTemplateStringsFromText(text: string): string;
declare function parseLinkedTwinExpression(expression: string, twins: Record<string, DTwin>, fallbackResult?: any): any;
declare function hexToColor4(hex: string): BABYLON.Color4;
declare function rgbToHex(r: any, g: any, b: any): string;
/**
 * Sorts a list alphabetically ignoring casing
 * @example listItems.sort(sortCaseInsensitiveAlphabetically())
 * @returns Sort function to pass to `.sort()`
 */
declare function sortCaseInsensitive(descending?: boolean): (a: string, b: string) => number;
/**
 * Sort function to order items from ascending or descending order, for boolean, numbers and strings. Case insensitive sort
 * NOTE: only works when property is one layer down
 * @param propertyName name of the property to sort on
 *  @example listItems.sort(sortAscendingOrDescending('textPrimary'))
 * @returns Sort function to pass to `.sort()`
 */
declare function sortAscendingOrDescending<T>(propertyName: keyof T, descending?: boolean): (a: T, b: T) => number;
/**
 * Modifies the collection in-place to shift an item up or down in the collection.
 * @param direction Direction to move the item
 * @param itemIndex index of the item to move
 * @param items collection of items
 * @returns reference to the original collection
 */
declare const moveItemInCollection: <T>(direction: 'Up' | 'Down', itemIndex: number, items: T[]) => T[];
/**
 * remove duplicate objects from an array
 * @param array array of objects to operate on
 * @param key key of the property to use as the discriminator
 * @returns a new copy of the array with only unique values
 */
declare function removeDuplicatesFromArray<T>(array: T[], key: keyof T): T[];
declare function getDebugLogger(context: string, enabled: boolean): IConsoleLogFunction;
/** checks if a value is null or undefined and returns true if it's not one of those values */
declare function isDefined(value: unknown): boolean;
/**
 * Check if two string type resource display property values are equal
 * @param value1 resource property value
 * @param value2 resource property value
 * @example areResourceValuesEqual('https://exampleurl-1.com', 'https://exampleurl-2', AzureResourceDisplayFields.url)
 * @returns true if they are equal, false if not or values are empty
 */
declare function areResourceValuesEqual(value1: string, value2: string, displayField: AzureResourceDisplayFields): boolean;
/**
 * Retrieving the access permission role ids from role assignments resources
 * @param roleAssingments list of role assignments to retrieve the role ids from
 * @returns the list of role ids as AzureAccessPermissionRoles from the role assignment properties
 */
declare function getRoleIdsFromRoleAssignments(roleAssignments?: Array<IAzureResource>): Array<AzureAccessPermissionRoles>;
/**
 * Returns the list of missing role ids based on the passed assigned role ids and required role ids to check against
 * @param assignedRoleIds list of roles already assigned to the user
 * @param requiredAccessRoles list of required roles as enforced or interchangeables to check against if the user is already assigned
 * @returns the list of missing role group including missing enforced role ids and missing interchangeable role ids
 */
declare function getMissingRoleIdsFromRequired(assignedRoleIds: Array<AzureAccessPermissionRoles>, requiredAccessRoles: AzureAccessPermissionRoleGroups): AzureAccessPermissionRoleGroups;
declare const getResourceUrl: (resource: IAzureResource | string, resourceType: AzureResourceTypes, parentResource?: IAzureResource | string) => string | null;
declare const getResourceUrls: (resources: Array<IAzureResource | string>, resourceType: AzureResourceTypes, parentResource?: IAzureResource | string) => string[];
declare const getResourceId: (resource: IAzureResource | string) => string | null;
declare const getNameOfResource: (resource: string | IAzureResource, resourceType: AzureResourceTypes) => string;
declare const getContainerNameFromUrl: (containerUrl: string) => string;
declare const removeProtocolPartFromUrl: (urlString: string) => string;
declare const getUrlFromString: (urlString: string) => URL;
/** Checking if a given ADX cluster url is a safe url following a certain regex and hostname */
declare const isValidADXClusterUrl: (clusterUrl: string) => boolean;
/**
 * Takes a number and returns a string representing the formatted number
 * @param val, number that is to be formatted
 * @returns a string representation of the number
 * represents infinitesimally small or large numbers in scientific notation
 * represents tens, hundreds, and thousands with 3 sig figs w/ commas when necessary
 * represents million and billion values with M or B suffixes
 */
declare function formatNumber(val: number): any;
/**
 * Takes a word string and capitalize only the first letter
 * @param str, the string to be formatted
 * @returns capitalized first letter formatted string
 */
declare function capitalizeFirstLetter(str: string): string;
/**
 * Validate if URL is Explorer for CORS enabling
 */
declare function validateExplorerOrigin(origin: string): boolean;

declare const Utils_parseDTDLModelsAsync: typeof parseDTDLModelsAsync;
declare const Utils_logDtdlParserError: typeof logDtdlParserError;
declare const Utils_validate3DConfigWithSchema: typeof validate3DConfigWithSchema;
declare const Utils_isValueInEnum: typeof isValueInEnum;
declare const Utils_createGUID: typeof createGUID;
declare const Utils_getFileType: typeof getFileType;
declare const Utils_createNodeFilterFromRootForBIM: typeof createNodeFilterFromRootForBIM;
declare const Utils_createSeededGUID: typeof createSeededGUID;
declare const Utils_getMarkedHtmlBySearch: typeof getMarkedHtmlBySearch;
declare const Utils_objectHasOwnProperty: typeof objectHasOwnProperty;
declare const Utils_parseViewProperties: typeof parseViewProperties;
declare const Utils_hasAllProcessGraphicsCardProperties: typeof hasAllProcessGraphicsCardProperties;
declare const Utils_downloadJSON: typeof downloadJSON;
declare const Utils_downloadFile: typeof downloadFile;
declare const Utils_getNumericPart: typeof getNumericPart;
declare const Utils_getModelContentType: typeof getModelContentType;
declare const Utils_getModelContentUnit: typeof getModelContentUnit;
declare const Utils_createDTDLModelId: typeof createDTDLModelId;
declare const Utils_applyMixins: typeof applyMixins;
declare const Utils_measureText: typeof measureText;
declare const Utils_getTimeStamp: typeof getTimeStamp;
declare const Utils_formatTimeInRelevantUnits: typeof formatTimeInRelevantUnits;
declare const Utils_deepCopy: typeof deepCopy;
declare const Utils_getSceneElementStatusColor: typeof getSceneElementStatusColor;
declare const Utils_buildDropdownOptionsFromStrings: typeof buildDropdownOptionsFromStrings;
declare const Utils_hexToRgbCss: typeof hexToRgbCss;
declare const Utils_getTransparentColor: typeof getTransparentColor;
declare const Utils_wrapTextInTemplateString: typeof wrapTextInTemplateString;
declare const Utils_stripTemplateStringsFromText: typeof stripTemplateStringsFromText;
declare const Utils_parseLinkedTwinExpression: typeof parseLinkedTwinExpression;
declare const Utils_hexToColor4: typeof hexToColor4;
declare const Utils_rgbToHex: typeof rgbToHex;
declare const Utils_sortCaseInsensitive: typeof sortCaseInsensitive;
declare const Utils_sortAscendingOrDescending: typeof sortAscendingOrDescending;
declare const Utils_moveItemInCollection: typeof moveItemInCollection;
declare const Utils_removeDuplicatesFromArray: typeof removeDuplicatesFromArray;
declare const Utils_getDebugLogger: typeof getDebugLogger;
declare const Utils_isDefined: typeof isDefined;
declare const Utils_areResourceValuesEqual: typeof areResourceValuesEqual;
declare const Utils_getRoleIdsFromRoleAssignments: typeof getRoleIdsFromRoleAssignments;
declare const Utils_getMissingRoleIdsFromRequired: typeof getMissingRoleIdsFromRequired;
declare const Utils_getResourceUrl: typeof getResourceUrl;
declare const Utils_getResourceUrls: typeof getResourceUrls;
declare const Utils_getResourceId: typeof getResourceId;
declare const Utils_getNameOfResource: typeof getNameOfResource;
declare const Utils_getContainerNameFromUrl: typeof getContainerNameFromUrl;
declare const Utils_removeProtocolPartFromUrl: typeof removeProtocolPartFromUrl;
declare const Utils_getUrlFromString: typeof getUrlFromString;
declare const Utils_isValidADXClusterUrl: typeof isValidADXClusterUrl;
declare const Utils_formatNumber: typeof formatNumber;
declare const Utils_capitalizeFirstLetter: typeof capitalizeFirstLetter;
declare const Utils_validateExplorerOrigin: typeof validateExplorerOrigin;
declare namespace Utils {
  export {
    Utils_parseDTDLModelsAsync as parseDTDLModelsAsync,
    Utils_logDtdlParserError as logDtdlParserError,
    Utils_validate3DConfigWithSchema as validate3DConfigWithSchema,
    Utils_isValueInEnum as isValueInEnum,
    Utils_createGUID as createGUID,
    Utils_getFileType as getFileType,
    Utils_createNodeFilterFromRootForBIM as createNodeFilterFromRootForBIM,
    Utils_createSeededGUID as createSeededGUID,
    Utils_getMarkedHtmlBySearch as getMarkedHtmlBySearch,
    Utils_objectHasOwnProperty as objectHasOwnProperty,
    Utils_parseViewProperties as parseViewProperties,
    Utils_hasAllProcessGraphicsCardProperties as hasAllProcessGraphicsCardProperties,
    Utils_downloadJSON as downloadJSON,
    Utils_downloadFile as downloadFile,
    Utils_getNumericPart as getNumericPart,
    Utils_getModelContentType as getModelContentType,
    Utils_getModelContentUnit as getModelContentUnit,
    Utils_createDTDLModelId as createDTDLModelId,
    Utils_applyMixins as applyMixins,
    Utils_measureText as measureText,
    Utils_getTimeStamp as getTimeStamp,
    Utils_formatTimeInRelevantUnits as formatTimeInRelevantUnits,
    Utils_deepCopy as deepCopy,
    Utils_getSceneElementStatusColor as getSceneElementStatusColor,
    Utils_buildDropdownOptionsFromStrings as buildDropdownOptionsFromStrings,
    Utils_hexToRgbCss as hexToRgbCss,
    Utils_getTransparentColor as getTransparentColor,
    Utils_wrapTextInTemplateString as wrapTextInTemplateString,
    Utils_stripTemplateStringsFromText as stripTemplateStringsFromText,
    Utils_parseLinkedTwinExpression as parseLinkedTwinExpression,
    Utils_hexToColor4 as hexToColor4,
    Utils_rgbToHex as rgbToHex,
    Utils_sortCaseInsensitive as sortCaseInsensitive,
    Utils_sortAscendingOrDescending as sortAscendingOrDescending,
    Utils_moveItemInCollection as moveItemInCollection,
    Utils_removeDuplicatesFromArray as removeDuplicatesFromArray,
    Utils_getDebugLogger as getDebugLogger,
    Utils_isDefined as isDefined,
    Utils_areResourceValuesEqual as areResourceValuesEqual,
    Utils_getRoleIdsFromRoleAssignments as getRoleIdsFromRoleAssignments,
    Utils_getMissingRoleIdsFromRequired as getMissingRoleIdsFromRequired,
    Utils_getResourceUrl as getResourceUrl,
    Utils_getResourceUrls as getResourceUrls,
    Utils_getResourceId as getResourceId,
    Utils_getNameOfResource as getNameOfResource,
    Utils_getContainerNameFromUrl as getContainerNameFromUrl,
    Utils_removeProtocolPartFromUrl as removeProtocolPartFromUrl,
    Utils_getUrlFromString as getUrlFromString,
    Utils_isValidADXClusterUrl as isValidADXClusterUrl,
    Utils_formatNumber as formatNumber,
    Utils_capitalizeFirstLetter as capitalizeFirstLetter,
    Utils_validateExplorerOrigin as validateExplorerOrigin,
  };
}

/**
 * Runs the collection of models through the `azure-iot-dtdl-parser` package and returns a string containing the errors (if any) or empty string if successful.
 * @param models The collection of models that make up the entire ontology
 * @returns a string containing the errors or empty string if successful
 */
declare function parseModels(models: DtdlInterface[]): Promise<string>;
declare type TranslateFunction = (key: string, args?: Record<string, string>) => string;
declare type ImportStatus = 'Success' | 'Failed';
interface IImportLocalizationKeys {
    FileInvalidJson: string;
    NoValidFilesMessage: string;
    NoValidFilesTitle: string;
    ImportFailedTitle: string;
    ImportFailedMessage: string;
    ExceptionTitle: string;
    ExceptionMessage: string;
}
interface IImportFileArgs {
    /** the collection of model files being uploaded */
    files: File[];
    /** the existing models in the ontology to merge with */
    currentModels: DtdlInterface[];
    /** localization translation function */
    translate: TranslateFunction;
    localizationKeys: IImportLocalizationKeys;
}
interface IImportError {
    title: string;
    message: string;
}
interface IImportFileResult {
    data: DtdlInterface[];
    stats: {
        newModelCount: number;
    };
    errors: IImportError[];
    status: ImportStatus;
}
/**
 * Takes a collection of uploaded files, reads the contents and the validates the models to ensure they are valid DTDL and the ontology is in a valid state.
 * @param args the arguments for the function
 * @returns an object containing the resulting valid model collection or a collection of errors.
 */
declare const parseFilesToModels: (args: IImportFileArgs) => Promise<IImportFileResult>;
/**
 * NOTE: Exposed only for testing purposes, not intended to be used externally
 * Function that takes a collection of models and removes all the V3 features from them and returns that collection back.
 * @param models Collection of models to process
 * @returns collection of models without V3 features
 */
declare const stripV3Features: (models: DtdlInterface[]) => DtdlInterface[];
declare type ExportStatus = 'Success' | 'Failed';
interface IExportLocalizationKeys {
    ExceptionTitle: string;
    ExceptionMessage: string;
}
interface IExportModelsArgs {
    /** the existing models in the ontology to merge with */
    models: DtdlInterface[];
    /** localization translation function */
    translate: TranslateFunction;
    /** the keys to use for localized strings */
    localizationKeys: IExportLocalizationKeys;
}
interface IExportError {
    title: string;
    message: string;
}
interface IExportModelsResult {
    file: lib;
    errors: IExportError[];
    status: ExportStatus;
}
/**
 * Creates a downloadable zip file containing one file for each model in the collection. The files are nested in folders that reflect the path in their DTMI.
 * @example dtmi:folder1:folder2:myModel;1 -->
 *      root.zip
 *         |--folder1
 *              |--folder2
 *                  |--myModel.json
 */
declare const createZipFileFromModels: (args: IExportModelsArgs) => IExportModelsResult;

declare const OatPublicUtils_parseModels: typeof parseModels;
type OatPublicUtils_IImportLocalizationKeys = IImportLocalizationKeys;
declare const OatPublicUtils_parseFilesToModels: typeof parseFilesToModels;
declare const OatPublicUtils_stripV3Features: typeof stripV3Features;
type OatPublicUtils_IExportLocalizationKeys = IExportLocalizationKeys;
declare const OatPublicUtils_createZipFileFromModels: typeof createZipFileFromModels;
declare namespace OatPublicUtils {
  export {
    OatPublicUtils_parseModels as parseModels,
    OatPublicUtils_IImportLocalizationKeys as IImportLocalizationKeys,
    OatPublicUtils_parseFilesToModels as parseFilesToModels,
    OatPublicUtils_stripV3Features as stripV3Features,
    OatPublicUtils_IExportLocalizationKeys as IExportLocalizationKeys,
    OatPublicUtils_createZipFileFromModels as createZipFileFromModels,
  };
}

export { MsalAuthService as M, OatPublicUtils as O, TelemetryService as T, Utils as U, Telemetry$1 as a, TelemetryService_types as b };
