import { Vector3, AbstractMesh, Scene } from '@babylonjs/core';
import { v as AzureAccessPermissionRoles, u as AzureResourceTypes, y as ADXTableColumns, C as CameraInteraction, V as ViewerObjectStyle, z as powerbi, T as Theme, L as Locale, b as ComponentErrorType, H as HierarchyNodeType, m as modelActionType, g as FileUploadStatus, G as GlobeTheme, q as ADT3DAddInEventTypes } from './ADT3DScenePage-dc80dd59';
import { ModelDict } from 'azure-iot-dtdl-parser';
import { I as IWidget, a as I3DScenesConfig, b as ITwinToObjectMapping, c as IBehavior, d as IScene } from './3DScenesConfiguration-v1.0.0.d-e5d9427a';
import * as BABYLON from '@babylonjs/core/Legacy/legacy';
import { ErrorObject } from 'ajv';
import { AxiosInstance } from 'axios';
import { ModelDict as ModelDict$1 } from 'azure-iot-dtdl-parser/dist/parser/modelDict';
import * as page from 'page';
import { IVisual, IPage } from 'powerbi-models';
import { IStyle, IStackStyles, ITheme, IStyleFunctionOrObject } from '@fluentui/react';

declare class AdapterResult<T extends IAdapterData> {
    result: T;
    errorInfo: IErrorInfo;
    constructor(params: AdapterResultParams<T>);
    hasNoData(): boolean;
    hasError(): boolean;
    getData(): any;
    /** Returns error array if errors are present.  If no errors present, returns null */
    getErrors(): IComponentError[];
    /** Returns catastrophic error if present, otherwise returns null */
    getCatastrophicError(): IComponentError;
}

declare type AdapterReturnType<T extends IAdapterData> = Promise<AdapterResult<T>> | ICancellablePromise<AdapterResult<T>>;
declare type AdapterResultParams<T extends IAdapterData> = {
    result: T;
    errorInfo: IErrorInfo;
};
declare type AxiosParams = {
    url: string;
    method: 'get' | 'post' | 'put' | 'delete' | 'patch';
    headers?: AxiosObjParam;
    params?: AxiosObjParam;
    data?: AxiosObjParam | string;
};
declare type AxiosObjParam = {
    [key: string]: any;
};
declare type AdapterState<T extends IAdapterData> = {
    adapterResult: AdapterResult<T>;
    isLoading: boolean;
    isLongPolling: boolean;
    isInitialCall: boolean;
};
declare type KeyValuePairData = {
    key: string;
    value: any;
    timestamp?: Date;
};
declare type BIMData = {
    bimURL: string;
    bimMetadataURL: string;
};
declare type ADTRelationship = {
    relationshipName: string;
    relationshipId: string;
    targetId?: string;
    relationshipLink?: string;
    sourceId?: string;
    targetModel?: string;
    sourceModel?: string;
};
declare type ADXTimeSeriesTableRow = {
    timestamp: string;
    id: string;
    key: string;
    value: number;
};
declare type TimeSeriesData = {
    timestamp: string | number;
    value: number;
};
declare type ADXTimeSeries = {
    seriesId: string;
    id: string;
    key: string;
    data: Array<TimeSeriesData>;
};
declare type HierarchyData = Record<string, IHierarchyNode>;
declare type ADTModelsApiData = {
    value: IADTModel[];
    nextLink: string;
};
declare type ADTTwinsApiData = {
    value: IADTTwin[];
    continuationToken?: string;
};
declare type CancellablePromise<T> = {
    /** Wrapped promise - throws CancelledPromiseError if cancelled */
    promise: Promise<T>;
    /** Function to cancel promise */
    cancel: () => void;
};
declare type UseLongPollParams = {
    /** Function to long poll at set interval */
    callback: () => Promise<any>;
    /** Time between each callback execution */
    pollingIntervalMillis?: number;
    /** Length of time UI pulse state remains true after callback completion - use to indicate updated data */
    pulseTimeoutMillis?: number;
};
declare type ImgPropertyPositions = {
    /** Position relative to the left edge, where "100%" is the right edge and "0%" is the left edge*/
    left: string;
    /** Position relative to the top edge, where "100%" is the bottom edge and "0%" is the top edge*/
    top: string;
};
declare type AdapterMethodParams = {
    [paramName: string]: any;
};
declare type AdapterMethodParamsForGetADTModels = {
    continuationToken?: string;
    shouldIncludeDefinitions?: boolean;
};
declare type AdapterMethodParamsForGetADTTwinsByModelId = {
    modelId: string;
    continuationToken?: string;
};
declare type AdapterMethodParamsForSearchADTTwins = {
    searchProperty: string;
    searchTerm: string;
    shouldSearchByModel: boolean;
    continuationToken?: string;
};
declare type AdapterMethodParamsForSearchTwinsByQuery = {
    query: string;
};
declare type AdapterMethodParamsForGetTwinsByQuery = {
    query: string;
    continuationToken?: string;
};
declare type AdapterMethodParamsForGetScenes = {
    Id: string;
    continuationToken?: string;
};
declare type AdapterMethodParamsForJobs = {
    jobId: string;
};
declare type AdapterCreateJobArgs = {
    outputBlobUri: string;
    inputBlobUri: string;
    jobId: string;
};
declare type ADTRelationshipsApiData = {
    value: IADTRelationship[];
    nextLink: string;
};
declare type AssetsFromBIMState = {
    models: Array<DTModel>;
    twins: Array<DTwin>;
    relationships: Array<DTwinRelationship>;
    modelCounts: Record<string, number>;
};
declare type AdapterTypes = IKeyValuePairAdapter | IADTAdapter;
declare type IIconNames = CardboardIconNames | string;
declare type CardboardIconNames = 'Add' | 'Chart' | 'Color' | 'CubeShape' | 'Database' | 'Delete' | 'DeveloperTools' | 'Design' | 'Edit' | 'EntryView' | 'Home' | 'Info' | 'Link' | 'LinkedDatabase' | 'MapLayers' | 'MoreVertical' | 'MultiSelect' | 'NumberField' | 'Org' | 'ProductVariant' | 'Ringer' | 'Search' | 'Shapes' | 'SpeedHigh' | 'View';
declare type OatIconNames = 'BufferTimeBefore' | 'BulletedList2' | 'Calendar' | 'Clock' | 'Code' | 'CubeShape' | 'DateTime' | 'DocumentManagement' | 'Down' | 'GroupList' | 'Permissions' | 'TextField' | 'ToggleRight' | 'Up' | 'UpgradeAnalysis';
declare enum DurationUnits {
    milliseconds = 0,
    seconds = 1,
    minutes = 2,
    hours = 3,
    days = 4,
    years = 5
}
declare type IConsoleLogFunction = (level: 'debug' | 'info' | 'warn' | 'error', message: string, ...args: unknown[]) => void;
declare type AzureAccessPermissionRoleGroups = {
    enforced: Array<AzureAccessPermissionRoles>;
    interchangeables: Array<Array<AzureAccessPermissionRoles>>;
};
/** AdapterMethodParamsForGetAzureResources is used for setting the paramter for the getResources method in AzureManagementAdapter
 * @param resourceType set the type to get the resources of that type
 * @param searchParams parameters used for get resources requests agains the management API
 * @param resourceProviderEndpoint if provided, the Azure Management API is going to only make call against this provider endpoint, otherwise will use predefined mapping based on passed resource type
 * @param userData used for making requests against management API for getting subscriptions or checking role assignments for the logged in user
 */
declare type AdapterMethodParamsForGetAzureResources = {
    resourceType: AzureResourceTypes;
    searchParams?: AzureResourceSearchParams;
    resourceProviderEndpoint?: string;
    userData?: {
        uniqueObjectId: string;
    };
};
/** AzureResourceSearchParams is used for handling get resources requests in resource picker component.
 * @param take the number of resources to return to limit the number of following requests to check the permission against, but drawback of this approach is that the taken bucket of resources may not be the ones that user has required permissions
 * @param filter used to filter resources based on AzureResourceDisplayFields
 * @param additionalParams is for resource specific params (e.g storageAccountId or storageAccountBlobUrl for fetching StorageBlobContainer resource type via storage accounts) to limit the number of requests for performance
 * @param isAdditionalParamsRequired is used as a secondary gate to enforce the presence of additionaParams to make getResources call which might take long time
 */
declare type AzureResourceSearchParams = {
    take?: number;
    filter?: string;
} & (AzureResourceSearchParamsWithAdditionalParams | AzureResourceSearchParamsWithoutAdditionalParams);
declare type AzureResourceSearchParamsWithAdditionalParams = {
    isAdditionalParamsRequired: true;
    additionalParams: {
        storageAccountId?: string;
        storageAccountBlobUrl?: string;
        [key: string]: any;
    };
};
declare type AzureResourceSearchParamsWithoutAdditionalParams = {
    isAdditionalParamsRequired?: false;
    additionalParams?: never;
};
/** AzureResourceFetchParamsForResourceGraph consists of parameters used during fetching Azure resources via resource graphs REST API (e.g. for ADT Instances and Storage Accounts type resources).
 * @param type used to set where clause in resource graphy query payload
 * @param skipToken continuation token for pagination in resource graph calls
 * @param limit used in the query payload to set the number of data return in resource graph call
 * @param query partial where clauses to add to the query payload for Resources table
 *  */
declare type AzureResourceFetchParamsForResourceGraph = {
    type: AzureResourceTypes;
    skipToken?: string;
    limit?: number;
    query?: string;
};
/** AzureResourceFetchParamsForResourceProvider consists of parameters used during fetching Azure resources via resource provider service.
 * @param url resource provider endpoint
 * @param apiVersion api version to be used in request
 * @param filter string is used in request parameter
 * @param nextLink a full url which includes all the parameters necessary for the next page call if there is pagination in response
 */
declare type AzureResourceFetchParamsForResourceProvider = {
    url: string;
    apiVersion: string;
    filter?: string;
    nextLink?: string;
};
/** AzureResourceFetchParams consists of parameters used during fetching Azure resources via resource graphs api or resource provider services. */
declare type AzureResourceFetchParams = AzureResourceFetchParamsForResourceGraph | AzureResourceFetchParamsForResourceProvider;
declare type ADXTable = {
    Rows: Array<Array<string | number>>;
    Columns: Array<{
        ColumnName: ADXTableColumns;
        ColumnType: 'string' | 'datetime' | 'dynamic';
    }>;
    FrameType: 'DataTable';
    TableKind: 'PrimaryResult';
    [additionalProperty: string]: any;
};

declare enum DTDLType {
    Interface = "Interface",
    Telemetry = "Telemetry",
    Property = "Property",
    Command = "Command",
    Relationship = "Relationship",
    Component = "Component"
}
/** the actual schema types that a DTDL item can have */
declare type DTDLSchema = DTDLPrimitiveSchema | DTDLGeospatialSchema | DTDLComplexSchema;
declare type DTDLPrimitiveSchema = 'boolean' | 'date' | 'dateTime' | 'double' | 'duration' | 'float' | 'integer' | 'long' | 'string' | 'time';
declare type DTDLGeospatialSchema = 'linestring' | 'multiLinestring' | 'multiPoint' | 'multiPolygon' | 'point' | 'polygon';
declare type DTDLComplexSchema = DtdlArray | DtdlEnum | DtdlMap | DtdlObject;
declare enum DTDLSchemaType {
    Enum = "Enum",
    Array = "Array",
    Map = "Map",
    Object = "Object"
}

declare type DtdlVersion = '2' | '3';
declare type DtdlContext = string | string[];
declare type DtdlReference = DtdlComponent | DtdlRelationship;
declare type DtdlInterfaceContent = DtdlComponent | DtdlRelationship | DtdlProperty | DtdlCommand;
interface DtdlInterface {
    '@id': string;
    '@type': string;
    '@context': DtdlContext;
    comment?: string;
    contents?: DtdlInterfaceContent[];
    description?: string | Record<string, string>;
    displayName?: string | Record<string, string>;
    extends?: string | string[];
    schemas?: DtdlInterfaceSchema[];
}
interface DtdlInterfaceSchema {
    '@id': string;
    '@type': 'Array' | 'Enum' | 'Map' | 'Object';
    comment?: string;
    description?: string;
    displayName?: string;
    [schemaProperty: string]: any;
}
interface DtdlComponent {
    /** This must be "Component". */
    '@type': DTDLType.Component;
    /** The programming name of the element. */
    name: string;
    /** The data type of the Component, which is an instance of Interface. */
    schema: DtdlInterface | string;
    /** An identifer for the Component. If no @id is provided, one will be assigned automatically. */
    '@id'?: string;
    /** A comment for model authors. */
    comment?: string;
    /** supports single or multiple languages. key is lang code, value is string for that lang */
    description?: string | Record<string, string>;
    /** supports single or multiple languages. key is lang code, value is string for that lang */
    displayName?: string | Record<string, string>;
}
interface DtdlRelationship {
    /** This must be "Relationship". */
    '@type': DTDLType.Relationship;
    /** The programming name of the element. */
    name: string;
    /** An identifer for the Component. If no @id is provided, one will be assigned automatically. */
    '@id'?: string;
    /** A comment for model authors. */
    comment?: string;
    /** supports single or multiple languages. key is lang code, value is string for that lang */
    description?: string | Record<string, string>;
    /** supports single or multiple languages. key is lang code, value is string for that lang */
    displayName?: string | Record<string, string>;
    maxMultiplicity?: number;
    minMultiplicity?: number;
    properties?: DtdlProperty[];
    /** can be an array of length 1 or a string */
    target?: string | string[];
    writable?: boolean;
}
interface DtdlCommand {
    /** This must be "Relationship". */
    '@type': DTDLType.Command;
    /** The "programming" name of the command. The name may only contain the characters a-z, A-Z, 0-9, and underscore, and must match this regular expression ^[a-zA-Z](?:[a-zA-Z0-9_]*[a-zA-Z0-9])?$.*/
    name: string;
    /** An identifer for the Component. If no @id is provided, one will be assigned automatically. */
    '@id'?: string;
    /** A comment for model authors. */
    comment?: string;
    /** supports single or multiple languages. key is lang code, value is string for that lang */
    description?: string | Record<string, string>;
    /** supports single or multiple languages. key is lang code, value is string for that lang */
    displayName?: string | Record<string, string>;
    request?: CommandPayload;
    response?: CommandPayload;
}
interface CommandPayload {
    name: string;
    schema: DTDLSchema;
    '@id'?: string;
    comment?: string;
    /** supports single or multiple languages. key is lang code, value is string for that lang */
    description?: string | Record<string, string>;
    /** supports single or multiple languages. key is lang code, value is string for that lang */
    displayName?: string | Record<string, string>;
}
interface DtdlProperty {
    '@type': string | string[];
    name: string;
    schema: DTDLSchema;
    '@id'?: string;
    comment?: string;
    description?: string;
    displayName?: string;
    unit?: string;
    writable?: boolean;
    index?: number;
}
interface DtdlArray {
    ['@type']: DTDLSchemaType.Array;
    elementSchema: DTDLSchema;
    ['@id']?: string;
    displayName?: string;
    description?: string;
    comment?: string;
}
interface DtdlMapKey {
    /** The "programming" name of the map's value. The name may only contain the characters a-z, A-Z, 0-9, and underscore, and must match this regular expression `^[a-zA-Z](?:[a-zA-Z0-9_]*[a-zA-Z0-9])?$.` */
    name: string;
    /** The data type of the map's key. Always `string` */
    schema: 'string';
    /** The ID of the map key. If no @id is provided, the digital twin interface processor will assign one. */
    ['@id']?: string;
    /** A comment for model authors */
    comment?: string;
    /** A localizable description for display */
    description?: string;
    /** A localizable name for display */
    displayName?: string;
}
interface DtdlMapValue {
    /** The "programming" name of the map's value. The name may only contain the characters a-z, A-Z, 0-9, and underscore, and must match this regular expression `^[a-zA-Z](?:[a-zA-Z0-9_]*[a-zA-Z0-9])?$.` */
    name: string;
    /** The data type of the map's values */
    schema: DTDLSchema;
    /** The ID of the map key. If no @id is provided, the digital twin interface processor will assign one. */
    ['@id']?: string;
    /** A comment for model authors */
    comment?: string;
    /** A localizable description for display */
    description?: string;
    /** A localizable name for display */
    displayName?: string;
}
interface DtdlMap {
    ['@type']: DTDLSchemaType.Map;
    mapKey: DtdlMapKey;
    mapValue: DtdlMapValue;
    ['@id']?: string;
    displayName?: string;
    description?: string;
    comment?: string;
}
interface DtdlObject {
    ['@type']: DTDLSchemaType.Object;
    fields: DtdlObjectField[];
    ['@id']?: string;
    displayName?: string;
    description?: string;
    comment?: string;
}
interface DtdlObjectField {
    name: string;
    schema: DTDLSchema;
    ['@id']?: string;
    comment?: string;
    description?: string;
    displayName?: string;
}
interface DtdlEnum {
    ['@type']: DTDLSchemaType.Enum;
    enumValues: DtdlEnumValue[];
    valueSchema: DtdlEnumValueSchema;
    ['@id']?: string;
    displayName?: string;
    description?: string;
}
declare type DtdlEnumValueSchema = 'integer' | 'string';
interface DtdlEnumValue {
    ['@id']?: string;
    name: string;
    enumValue: number | string;
    displayName?: string;
    description?: string;
    comment?: string;
}

declare class ADTAdapterModelsData implements IAdapterData {
    data: ADTModelsApiData;
    constructor(data: ADTModelsApiData);
    hasNoData(): boolean;
}
declare class ADTAdapterTwinsData implements IAdapterData {
    data: ADTTwinsApiData;
    constructor(data: ADTTwinsApiData);
    hasNoData(): boolean;
}
declare class ADTAdapterSearchByQueryData implements IAdapterData {
    data: ADTTwinsApiData;
    constructor(data: ADTTwinsApiData);
    hasNoData(): boolean;
}
declare class ADTAdapterPatchData implements IAdapterData {
    data: any;
    constructor(data: any);
    hasNoData(): boolean;
}

declare class ADTModelData implements IAdapterData {
    data: IADTModel;
    constructor(data: IADTModel);
    hasNoData(): boolean;
}
declare class ADTAllModelsData implements IAdapterData {
    data: {
        rawModels: DtdlInterface[];
        parsedModels: ModelDict;
    };
    constructor(data: {
        rawModels: DtdlInterface[];
        parsedModels: ModelDict;
    });
    hasNoData(): boolean;
}
declare class ADTTwinToModelMappingData implements IAdapterData {
    data: {
        twinId: string;
        modelId: string;
    };
    constructor(data: {
        twinId: string;
        modelId: string;
    });
    hasNoData(): boolean;
}

declare class ADTRelationshipsData implements IAdapterData {
    data: ADTRelationship[];
    constructor(data: ADTRelationship[]);
    hasNoData(): boolean;
}
declare class ADTRelationshipData implements IAdapterData {
    data: IADTRelationship;
    constructor(data: IADTRelationship);
    hasNoData(): boolean;
}

declare class ADTTwinData implements IAdapterData {
    data: IADTTwin;
    constructor(data: IADTTwin);
    hasNoData(): boolean;
}

declare class KeyValuePairAdapterData implements IAdapterData {
    data: Array<KeyValuePairData>;
    constructor(data: Array<KeyValuePairData>);
    hasNoData(): boolean;
}

/** Utility class which creates sandbox environment for adapter data fetching.
 *
 * • Manages errors and catasrophicErrors.
 *
 * • Safely fetches auth token and passes token to data fetching callback
 *
 * • Catches, classifies, and aggregates errors
 */
declare class AdapterMethodSandbox {
    private errors;
    private catasrophicError;
    private authService;
    constructor(authservice?: IAuthService);
    /**
     *  Pushes new ComponentError onto errors list.  If error is marked as catastrophic,
     *  execution will halt with catastrophic error attached to result
     */
    pushError({ rawError, message, type, isCatastrophic }: IComponentError): void;
    /**
     * Fetch token wrapped in try / catch block.  If token fetch fails, will attach
     * catastrophic TokenRetrievalFailed error, halting further execution.
     */
    private safelyFetchToken;
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
    safelyFetchData<T extends IAdapterData>(fetchDataWithToken: (token?: string) => Promise<T>, tokenFor?: 'azureManagement' | 'adx' | 'storage' | 'powerBI'): Promise<AdapterResult<T>>;
    safelyFetchDataCancellableAxiosPromise(returnDataClass: {
        new (data: any): any;
    }, axiosParams: AxiosParams, dataTransformFunc?: (data: any) => any, tokenFor?: 'azureManagement' | 'adx' | 'storage' | 'powerBI'): ICancellablePromise<AdapterResult<any>>;
}

declare class CancelledPromiseError extends Error {
    constructor(m?: string);
}
declare class ComponentError extends Error implements IComponentError {
    type: any;
    isCatastrophic: any;
    rawError: any;
    messageParams: {
        [key: string]: string;
    };
    jsonSchemaErrors?: ErrorObject[];
    private getComponentErrorNameFromType;
    private getComponentErrorMessageFromType;
    constructor({ name, message, type, isCatastrophic, rawError, messageParams, jsonSchemaErrors }: IComponentError);
}

declare class StandardModelSearchData implements IAdapterData {
    data: IStandardModelSearchResult;
    constructor(data: IStandardModelSearchResult);
    hasNoData(): boolean;
}
declare class StandardModelData implements IAdapterData {
    data: any;
    constructor(data: any);
    hasNoData(): boolean;
}
declare class StandardModelIndexData implements IAdapterData {
    data: IStandardModelIndexData;
    constructor(data: IStandardModelIndexData);
    hasNoData(): boolean;
}

declare class ADTTwinLookupData implements IAdapterData {
    data: {
        twin: IADTTwin;
        model: IADTModel;
    };
    constructor(twin: IADTTwin, model: IADTModel);
    hasNoData(): boolean;
}

interface IWidgetLibraryItem {
    title: string;
    description: string;
    notAvailableDescription?: string;
    learnMoreLink?: string;
    iconName: string;
    disabled?: boolean;
    data: IWidget;
}
interface IBehaviorTwinAliasItem {
    alias: string;
    elementToTwinMappings: Array<{
        elementId: string;
        twinId: string;
    }>;
}
interface IElementTwinAliasItem {
    alias: string;
    twinId: string;
}

declare const ADTModel_ImgSrc_PropertyName = "processGraphicImageSrc";
declare const ADTModel_ViewData_PropertyName = "cb_viewdata";
declare const ADTModel_ImgPropertyPositions_PropertyName = "processGraphicLabelPositions";
declare const ADTModel_InBIM_RelationshipName = "inBIM";
declare const ADTModel_BimFilePath_PropertyName = "bimFilePath";
declare const ADTModel_MetadataFilePath_PropertyName = "metadataFilePath";
declare const ADTModel_BIMContainerId = "BIMContainer";
declare const ADT_ApiVersion = "2020-10-31";
declare const ViewDataPropertyName = "cb_viewdata";
declare const BoardInfoPropertyName = "boardInfo";
declare const DTMIRegex: RegExp;
declare const DTDLNameRegex: RegExp;
declare const SCENES_DEMO_URL = "https://explorer.digitaltwins.azure.net/3DScenes/demo";
declare const DOCUMENTATION_LINKS: {
    overviewDoc: string;
    overviewDocSetupSection: string;
    viewOnGithub: string;
    viewTheQuickstart: string;
    howToBehaviors: string;
    howToElements: string;
    howToExpressions: string;
    howToLayers: string;
    howToTwins: string;
    howToWidgets: string;
    ontologyConcepts: string;
    ontologyConceptsVersions: string;
    dataHistory: string;
};
/** this is the minimum frequency we support for fetching data from ADT */
declare const DEFAULT_REFRESH_RATE_IN_MILLISECONDS = 10000;
declare const ONE_SECOND = 1000;
declare const ONE_MINUTE: number;
declare const ONE_HOUR: number;
declare const LOCAL_STORAGE_KEYS: {
    FeatureFlags: {
        Telemetry: {
            debugLogging: string;
        };
        Proxy: {
            forceCORS: string;
        };
        PowerBI: {
            showWidgets: string;
        };
    };
    Environment: {
        Configuration: string;
        Options: string;
    };
};
declare const ADT_ALLOW_LISTED_URLS: {
    DEV: string;
    PROD: string;
};
declare const dtdlPrimitiveTypesList: string[];
declare enum dtdlPropertyTypesEnum {
    boolean = "boolean",
    date = "date",
    dateTime = "dateTime",
    double = "double",
    duration = "duration",
    float = "float",
    integer = "integer",
    long = "long",
    string = "string",
    time = "time",
    Array = "Array",
    Enum = "Enum",
    Map = "Map",
    Object = "Object"
}
declare type PropertyValueType = 'boolean' | 'date' | 'dateTime' | 'double' | 'duration' | 'float' | 'integer' | 'long' | 'string' | 'time' | 'enum';
declare const dtdlComplexTypesList: string[];
declare const ADTSceneTwinModelId = "dtmi:com:visualontology:scene;1";
declare const CharacterWidths: number[];
declare const ADT3DSceneConfigFileNameInBlobStore = "3DScenesConfiguration";
declare const availableWidgets: Array<IWidgetLibraryItem>;
declare const twinRefreshMaxAge = 9000;
declare const modelRefreshMaxAge = 3600000;
declare const timeSeriesConnectionRefreshMaxAge = 3600000;
declare const PRIMARY_TWIN_NAME = "PrimaryTwin";
declare const DTID_PROPERTY_NAME = "$dtId";
declare const dtIdModel: {
    fullPath: string;
    key: string;
    localPath: string;
    name: string;
    propertyType: string;
    schema: any;
    entity: any;
};
declare const ValidAdtHostSuffixes: string[];
declare const ValidContainerHostSuffixes: string[];
declare const DefaultViewerModeObjectColor: IADTObjectColor;
declare const ViewerModeObjectColors: IADTObjectColor[];
declare const TransparentTexture = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACEAYAAAAiJtFnAAAACXBIWXMAAC4jAAAuIwF4pT92AAAGv2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDYgNzkuZGFiYWNiYiwgMjAyMS8wNC8xNC0wMDozOTo0NCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIyLjQgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0wMy0zMVQxMTo0MDo0Ni0wNDowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0wMy0zMVQxMjowNDozMS0wNDowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjItMDMtMzFUMTI6MDQ6MzEtMDQ6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjBiOTc0ODZjLTVjZDAtNmM0NC04MmQyLTAyYjhhYmQwYTNiNyIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjJhN2NiYzZlLTU1ZmUtN2I0Ni1iNGY3LTUyNGI5MWI2NDUyNCIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjY0MDAyNjE4LTE3MmYtN2Q0My1hNzAwLTgzYjFmYzViYzdlMyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo2NDAwMjYxOC0xNzJmLTdkNDMtYTcwMC04M2IxZmM1YmM3ZTMiIHN0RXZ0OndoZW49IjIwMjItMDMtMzFUMTE6NDA6NDYtMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi40IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NTFmYjc2ZTQtYmQ2ZS01ZTRiLWFlYTYtOGJlOTJhZjMzMjc5IiBzdEV2dDp3aGVuPSIyMDIyLTAzLTMxVDEyOjA0OjMxLTA0OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuNCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjBiOTc0ODZjLTVjZDAtNmM0NC04MmQyLTAyYjhhYmQwYTNiNyIgc3RFdnQ6d2hlbj0iMjAyMi0wMy0zMVQxMjowNDozMS0wNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjQgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgHULycAAAARSURBVAgdY2AAA2YWVBpJAAABqAAdXZ84SgAAAABJRU5ErkJggg==";
declare const ViewerModeBackgroundColors: Array<IADTBackgroundColor>;
/** @deprecated This key will be removed soon since the new local storage structure */
declare const EnvironmentsLocalStorageKey = "cb-environments";
/** @deprecated This key will be removed soon since the new local storage structure */
declare const ContainersLocalStorageKey = "cb-containers";
/** @deprecated This key will be removed soon since the new local storage structure */
declare const StorageAccountsLocalStorageKey = "cb-storage-accounts";
/** @deprecated This key will be removed soon since the new local storage structure */
declare const SelectedEnvironmentLocalStorageKey = "cb-selected-environment";
/** @deprecated This key will be removed soon since the new local storage structure */
declare const SelectedContainerLocalStorageKey = "cb-selected-container";
declare const SELECTED_ENVIRONMENT_LOCAL_STORAGE_KEY = "cb-selected-environment";
declare const SELECTECTED_CONTAINER_LOCAL_STORAGE_KEY = "cb-selected-container";
declare const OAT_FILES_STORAGE_KEY = "oat-files";
declare const OAT_LAST_PROJECT_STORAGE_KEY = "oat-last-project";
declare const OAT_UNTARGETED_RELATIONSHIP_NAME = "Untargeted";
declare const OAT_RELATIONSHIP_HANDLE_NAME = "Relationship";
declare const OAT_COMPONENT_HANDLE_NAME = "Component";
declare const OAT_EXTEND_HANDLE_NAME = "Extend";
declare type OatReferenceType = DTDLType.Component | DTDLType.Relationship | 'Extend';
declare type OatGraphReferenceType = DTDLType.Component | DTDLType.Relationship | 'Extend' | 'Untargeted';
declare const OAT_UNTARGETED_RELATIONSHIP_ID_PREFIX = "untargeted";
declare const OAT_INTERFACE_TYPE = "Interface";
declare const OAT_GRAPH_REFERENCE_TYPE = "Relationship";
declare const OAT_DEFAULT_PATH_VALUE = "com:example";
declare const OAT_DEFAULT_CONTEXT: string;
declare const OAT_MODEL_ID_PREFIX = "dtmi";
declare const OAT_COMMENT_LENGTH_LIMIT = 512;
declare const OAT_DESCRIPTION_LENGTH_LIMIT = 512;
declare const OAT_DISPLAY_NAME_LENGTH_LIMIT = 64;
declare const OAT_NAME_LENGTH_LIMIT = 64;
declare const OAT_ID_LENGTH_LIMIT = 2048;
/** max limit for the total count of references in the ontology due to perf degredation above this */
declare const OAT_ONTOLOGY_MAX_REFERENCE_LIMIT = 250;
declare const SelectedCameraInteractionKey = "cb-camera-interaction";
declare const ViewerThemeStorageKey = "cb-viewer-theme";
declare const defaultValueRangeColor = "#FF0000";
declare const StyleConstants: {
    icons: {
        size20: string;
        size16: string;
    };
};
declare const intellisenseMultilineBreakpoint = 40;
declare const CardboardClassNamePrefix = "cb";
declare const globeUrl = "https://cardboardresources.blob.core.windows.net/public/Globe.glb";
declare const DTDLPropertyIconographyMap: {
    boolean: {
        text: string;
        icon: string;
    };
    date: {
        text: string;
        icon: string;
    };
    dateTime: {
        text: string;
        icon: string;
    };
    double: {
        text: string;
        icon: string;
    };
    duration: {
        text: string;
        icon: string;
    };
    enum: {
        text: string;
        icon: string;
    };
    float: {
        text: string;
        icon: string;
    };
    integer: {
        text: string;
        icon: string;
    };
    long: {
        text: string;
        icon: string;
    };
    string: {
        text: string;
        icon: string;
    };
    time: {
        text: string;
        icon: string;
    };
};
declare const propertySelectorData: {
    propertyTags: {
        primitive: {
            name: string;
            title: string;
            icon: any;
        }[];
        complex: {
            name: DTDLSchemaType;
            title: string;
            icon: string;
            complex: boolean;
        }[];
        geospatial: {
            name: string;
            title: string;
            icon: any;
        }[];
    };
};
declare const BlobStorageServiceCorsAllowedOrigins: string[];
declare const BlobStorageServiceCorsAllowedMethods: string[];
declare const BlobStorageServiceCorsAllowedHeaders: string[];
declare const EnforcedStorageAccountAccessRoleIds: Array<AzureAccessPermissionRoles>;
declare const InterchangeableStorageAccountAccessRoleIds: Array<Array<AzureAccessPermissionRoles>>;
declare const RequiredAccessRoleGroupForStorageAccount: AzureAccessPermissionRoleGroups;
declare const EnforcedStorageContainerAccessRoleIds: Array<AzureAccessPermissionRoles>;
declare const InterchangeableStorageContainerAccessRoleIds: Array<Array<AzureAccessPermissionRoles>>;
declare const RequiredAccessRoleGroupForStorageContainer: AzureAccessPermissionRoleGroups;
declare const EnforcedADTInstanceAccessRoleIds: Array<AzureAccessPermissionRoles>;
declare const InterchangeableADTInstanceAccessRoleIds: Array<Array<AzureAccessPermissionRoles>>;
declare const RequiredAccessRoleGroupForADTInstance: AzureAccessPermissionRoleGroups;
declare const CONNECTION_STRING_SUFFIX = ".kusto.windows.net";
/** Quick time span key to value in millisecond mapping */
declare const QuickTimeSpans: {
    "Last 15 mins": number;
    "Last 30 mins": number;
    "Last hour": number;
    "Last 3 hours": number;
    "Last 6 hours": number;
    "Last 12 hours": number;
    "Last 24 hours": number;
    "Last 7 days": number;
    "Last 30 days": number;
    "Last 60 days": number;
    "Last 90 days": number;
    "Last 180 days": number;
    "Last year": number;
};
/** No translation needed for these options */
declare const AggregationTypeDropdownOptions: Array<IChartOption>;
declare const DataHistoryStaticMaxDateInMillis: number;

interface IExpandedADTModelData {
    rootModel: DtdlInterface;
    expandedModels: DtdlInterface[];
}
declare class ExpandedADTModelData implements IAdapterData {
    data: IExpandedADTModelData;
    constructor(data: IExpandedADTModelData);
    hasNoData(): boolean;
}

declare class AzureResourcesData implements IAdapterData {
    data: Array<IAzureResource>;
    constructor(data: Array<IAzureResource>);
    hasNoData(): boolean;
}
declare class AzureResourceData implements IAdapterData {
    data: IAzureResource;
    constructor(data: IAzureResource);
    hasNoData(): boolean;
}
declare class AzureMissingRoleDefinitionsData implements IAdapterData {
    data: AzureAccessPermissionRoleGroups;
    constructor(data: AzureAccessPermissionRoleGroups);
    hasNoData(): boolean;
}

declare class ADTScenesConfigData implements IAdapterData {
    data: I3DScenesConfig;
    constructor(data: I3DScenesConfig);
    hasNoData(): boolean;
}

declare class SceneVisual {
    element: ITwinToObjectMapping;
    behaviors: IBehavior[];
    twins: Record<string, DTwin>;
    coloredMeshItems?: CustomMeshItem[];
    alertBadgeGroup?: SceneViewBadgeGroup[];
    transformedElementItems?: TransformedElementItem[];
    constructor(element: ITwinToObjectMapping, behaviors: IBehavior[], twins: Record<string, DTwin>, coloredMeshItems?: CustomMeshItem[], transformedElementItems?: TransformedElementItem[]);
}
interface Marker {
    name: string;
    id: string;
    UIElement: any;
    GroupedUIElement?: any;
    position?: Vector3;
    attachedMeshIds?: string[];
    showIfOccluded?: boolean;
    allowGrouping?: boolean;
    latitude?: number;
    longitude?: number;
    scene?: IScene;
}
interface CustomMeshItem {
    meshId: string;
    color?: string;
    transform?: TransformInfo;
}
interface TransformedElementItem {
    meshIds: string[];
    parentMeshId: string;
    transform?: TransformInfo;
    original?: TransformInfo;
}
interface TransformInfo {
    rotation: {
        x: number;
        y: number;
        z: number;
    };
    position: {
        x: number;
        y: number;
        z: number;
    };
}
interface SceneViewBadge {
    id: string;
    meshId: string;
    color?: string;
    icon?: string;
}
interface SceneViewBadgeGroup {
    id: string;
    meshId: string;
    badges: SceneViewBadge[];
    element: ITwinToObjectMapping;
    behaviors: IBehavior[];
    twins: Record<string, DTwin>;
}
declare type SceneViewEventHandler = (mesh: AbstractMesh, scene: BABYLON.Scene, e: PointerEvent) => void;
interface ICameraPosition {
    position: BABYLON.Vector3;
    target: BABYLON.Vector3;
    radius: number;
}
interface ISceneViewProps {
    backgroundColor?: IADTBackgroundColor;
    cameraInteractionType?: CameraInteraction;
    cameraPosition?: ICameraPosition;
    coloredMeshItems?: CustomMeshItem[];
    getToken?: () => Promise<string>;
    gizmoElementItem?: TransformedElementItem;
    gizmoTransformItem?: TransformInfo;
    markers?: Marker[];
    modelUrl?: string | 'Globe';
    objectColor?: IADTObjectColor;
    objectColorOptions?: IADTObjectColor[];
    objectStyle?: ViewerObjectStyle;
    onCameraMove?: (position: ICameraPosition) => void;
    onMeshClick?: SceneViewEventHandler;
    onMeshHover?: SceneViewEventHandler;
    onSceneLoaded?: (scene: BABYLON.Scene) => void;
    outlinedMeshitems?: CustomMeshItem[];
    setGizmoTransformItem?: (gizmoTransformItem: TransformInfo) => void;
    showHoverOnSelected?: boolean;
    showMeshesOnHover?: boolean;
    transformedElementItems?: TransformedElementItem[];
    unzoomedMeshOpacity?: number;
    zoomToMeshIds?: string[];
    allowModelDimensionErrorMessage?: boolean;
}

declare class ADT3DViewerData implements IAdapterData {
    data: {
        modelUrl: string;
        sceneVisuals: SceneVisual[];
    };
    constructor(modelUrl: string, sceneVisuals: SceneVisual[]);
    hasNoData(): boolean;
}

declare class AssetProperty<T> {
    id: string;
    propertyName: string;
    private currentValue;
    private getNextValue;
    schema: string;
    constructor({ id, propertyName, currentValue, getNextValue, schema }: IAssetProperty<T>);
    tick(): ADTPatch;
}

declare class StorageBlobsData implements IAdapterData {
    data: Array<IStorageBlob>;
    constructor(data: Array<IStorageBlob>);
    hasNoData(): boolean;
}
declare class StorageBlobServiceCorsRulesData implements IAdapterData {
    data: Array<IBlobServiceCorsRule> | '';
    constructor(data: Array<IBlobServiceCorsRule> | '');
    hasNoData(): boolean;
}

declare class BlobAdapter implements IBlobAdapter {
    protected storageAccountName: string;
    protected storageAccountHostName: string;
    protected containerName: string;
    protected containerResourceId: string;
    protected blobAuthService: IAuthService;
    protected blobProxyServerPath: string;
    protected useBlobProxy: boolean;
    constructor(blobContainerUrl: string, authService: IAuthService, blobProxyServerPath?: string, useBlobProxy?: boolean);
    getBlobContainerURL(): string;
    getStorageAccountURL(): string;
    generateBlobUrl(path: string): string;
    generateBlobHeaders(headers?: AxiosObjParam): AxiosObjParam;
    resetSceneConfig(): Promise<AdapterResult<ADTScenesConfigData>>;
    setBlobContainerPath(blobContainerURL: string): void;
    getScenesConfig(): Promise<AdapterResult<ADTScenesConfigData>>;
    putScenesConfig(config: I3DScenesConfig): ICancellablePromise<AdapterResult<any>>;
    /**
     * This method pulls blobs/files from container using List Blob API (https://docs.microsoft.com/en-us/rest/api/storageservices/list-blobs)
     * and accepts an array of file types to be used to filter those files. It parses XML response into JSON and returns adapter data with array of blobs
     */
    getContainerBlobs(fileTypes: Array<string>): Promise<AdapterResult<StorageBlobsData>>;
    putBlob(file: File): ICancellablePromise<AdapterResult<any>>;
    getBlobServiceCorsProperties(): ICancellablePromise<AdapterResult<any>>;
    setBlobServiceCorsProperties(): ICancellablePromise<AdapterResult<any>>;
}

declare class ADTInstanceTimeSeriesConnectionData implements IAdapterData {
    data: IADXConnection;
    constructor(data: IADXConnection);
    hasNoData(): boolean;
}

declare class ADXTimeSeriesData implements IAdapterData {
    data: Array<ADXTimeSeries>;
    constructor(data: Array<ADXTimeSeries>);
    hasNoData(): boolean;
}

declare class ADXAdapter implements IADXAdapter {
    protected adxAuthService: IAuthService;
    protected adxConnectionInformation: IADXConnection;
    constructor(adxAuthService: IAuthService, adxConnectionInformation: IADXConnection);
    getTimeSeriesData(seriesIds: Array<string>, query: string, connection?: IADXConnection): Promise<AdapterResult<ADXTimeSeriesData>>;
    setADXConnectionInformation(adxConnectionInformation: IADXConnection): void;
    getADXConnectionInformation(): IADXConnection;
}

/**
 * Caches adapter results by entity ID and prevents concurrent requests for the same entity ID
 */
declare class AdapterEntityCache<T extends IAdapterData> {
    private maxAgeMs;
    private cachedEntities;
    /**
     * @param maxAgeMs The maximum age that a cached entity is allowed to be.  Any older and the cache is busted
     */
    constructor(maxAgeMs?: number);
    /**
     * Retrieves an entity from the cache.  If the entity is stale, getEntityData will be executed to resolve the entity
     * @param key The key for the desired entity
     * @param getEntityData A function for retrieving the entity data.  Likely using an axios call wrapped in the adapter sandbox
     * @returns A promise that resolves the AdapterResult for the desired entity
     */
    getEntity(key: string, getEntityData: () => Promise<AdapterResult<T>>, forceRefresh?: boolean): Promise<AdapterResult<T>>;
    setEntity(key: string, getEntityData: () => Promise<AdapterResult<T>>): void;
}

declare class AzureManagementAdapter implements IAzureManagementAdapter {
    authService: IAuthService;
    tenantId: string;
    uniqueObjectId: string;
    protected timeSeriesConnectionCache: AdapterEntityCache<ADTInstanceTimeSeriesConnectionData>;
    constructor(authService: IAuthService, tenantId?: string, uniqueObjectId?: string);
    /** Given a url and params, continuously fetch resources if nextLink exist in the request response and append it to the given accumulator array */
    fetchAllResources<T>(adapterMethodSandbox: AdapterMethodSandbox, token: string, // TODO: if fetch takes so long, token might expire,
    params: AzureResourceFetchParams, accumulator?: Array<T>): Promise<T[]>;
    /** Given a resource id and user object id, it will return a list of all of the role assignments
     * of the user defined for that resource */
    getRoleAssignments(resourceId: string, uniqueObjectId: string): Promise<AdapterResult<AzureResourcesData>>;
    /** Checks if a user has a list of certain role defintions like Reader, Writer, Storage Owner, and etc.
     *  in their list of role assignments for a particular resource */
    hasRoleDefinitions(resourceId: string, accessRolesToCheck: AzureAccessPermissionRoleGroups, uniqueObjectId?: string): Promise<boolean>;
    /** Returns a subset of expected role definition ids which are not present
     * in user's current role assignments for a particular resource */
    getMissingRoleDefinitions(resourceId: string, uniqueObjectId: string, requiredAccessRoles: AzureAccessPermissionRoleGroups): Promise<AzureAccessPermissionRoleGroups>;
    /** Returns list of all the storage containers in the provided storage account */
    getContainersByStorageAccountId(storageAccountId: string): Promise<AdapterResult<AzureResourcesData>>;
    /** Returns the Azure resource provided by its url string with the help of Resource Graph api calls */
    getResourceByUrl(urlString: string, type: AzureResourceTypes): Promise<AdapterResult<AzureResourceData>>;
    /** Returns list of all the resources of the given type and access role ids */
    getResources(params: AdapterMethodParamsForGetAzureResources): Promise<AdapterResult<AzureResourcesData>>;
    /** Returns list of all the resources of the given type and access role ids */
    getResourcesByPermissions(params: {
        getResourcesParams: AdapterMethodParamsForGetAzureResources;
        requiredAccessRoles: AzureAccessPermissionRoleGroups;
    }): Promise<AdapterResult<AzureResourcesData>>;
    /** Given a role id, resource id (scope) and object id it assigns the given role to that resource for that user */
    assignRole(roleDefinitionId: AzureAccessPermissionRoles, resourceId: string, uniqueObjectId?: string): Promise<AdapterResult<AzureResourcesData>>;
    /** either pass id or hostName as adtInstanceIdentifier */
    getTimeSeriesConnectionInformation(adtUrl: string, useCache?: boolean, forceRefresh?: boolean): Promise<AdapterResult<ADTInstanceTimeSeriesConnectionData>>;
}

declare class ADTDataHistoryAdapter implements IADTDataHistoryAdapter {
    constructor(authService: IAuthService, adtHostUrl: string, adxConnectionInformation?: IADXConnection, tenantId?: string, uniqueObjectId?: string, adtProxyServerPath?: string, useAdtProxy?: boolean);
}
interface ADTDataHistoryAdapter extends ADTAdapter, ADXAdapter, AzureManagementAdapter {
    updateADXConnectionInformation(): Promise<AdapterResult<ADTInstanceTimeSeriesConnectionData>>;
}

declare class MockAdapter implements IKeyValuePairAdapter, IADT3DViewerAdapter, IBlobAdapter, Partial<IADTAdapter>, IPropertyInspectorAdapter, IModelledPropertyBuilderAdapter, IPowerBIWidgetBuilderAdapter {
    private mockError;
    mockData: IMockData;
    private networkTimeoutMillis;
    private isDataStatic;
    private mockEnvironmentHostName;
    private mockContainerUrl;
    private mockADXConnectionInformation;
    private seededRng;
    private mockTwinPropertiesMap;
    constructor(mockAdapterArgs?: IMockAdapter);
    getVisualsOnPage(reportUrl: string, pageName: string): Promise<IVisual[]>;
    getPagesInReport(reportUrl: string): Promise<IPage[]>;
    mockNetwork(): Promise<void>;
    resetSceneConfig(): Promise<AdapterResult<ADTScenesConfigData>>;
    getModelIdFromTwinId(twinId: string): Promise<AdapterResult<ADTTwinToModelMappingData>>;
    getAllAdtModels(): Promise<AdapterResult<ADTAllModelsData>>;
    updateTwin(twinId: string, patches: ADTPatch[]): Promise<AdapterResult<ADTAdapterPatchData>>;
    updateRelationship(_twinId: string, _relationshipId: string, patches: ADTPatch[]): Promise<AdapterResult<ADTAdapterPatchData>>;
    getADTRelationship(_twinId: string, _relationshipId: string): Promise<AdapterResult<ADTRelationshipData>>;
    getExpandedAdtModel(modelId: string, baseModelIds?: string[]): Promise<AdapterResult<ExpandedADTModelData>>;
    getKeyValuePairs(_id: string, properties: string[], additionalParameters: IGetKeyValuePairsAdditionalParameters): Promise<AdapterResult<KeyValuePairAdapterData>>;
    getRelationships(id: string): Promise<AdapterResult<ADTRelationshipsData>>;
    getADTModel(modelId: string): Promise<AdapterResult<ADTModelData>>;
    getADTTwin(twinId: string): Promise<AdapterResult<ADTTwinData>>;
    getScenesConfig(): Promise<AdapterResult<ADTScenesConfigData>>;
    putScenesConfig(config: I3DScenesConfig): Promise<AdapterResult<ADTScenesConfigData>>;
    putBlob(file: File): Promise<AdapterResult<StorageBlobsData>>;
    getSceneData(sceneId: string, config: I3DScenesConfig): Promise<AdapterResult<ADT3DViewerData>>;
    searchADTTwins(params: AdapterMethodParamsForSearchADTTwins): Promise<AdapterResult<ADTAdapterTwinsData>>;
    getFirstPropertyFromQuery: (query: string) => string;
    getFirstValueFromQuery: (query: string) => string;
    searchTwinsByQuery(params: AdapterMethodParamsForSearchTwinsByQuery): Promise<AdapterResult<ADTAdapterTwinsData>>;
    getBlobContainerURL: () => string;
    setBlobContainerPath: (configBlobPath: string) => void;
    getAdtHostUrl(): string;
    setAdtHostUrl(hostName: string): void;
    setADXConnectionInformation: (adxConnectionInformation: IADXConnection) => void;
    getADXConnectionInformation: () => IADXConnection;
    getResourceByUrl(_urlString: string, type: AzureResourceTypes): Promise<AdapterResult<AzureResourceData>>;
    getResources({ resourceType }: AdapterMethodParamsForGetAzureResources): Promise<AdapterResult<AzureResourcesData>>;
    hasRoleDefinitions(_resourceId: string, _accessRolesToCheck: AzureAccessPermissionRoleGroups, _uniqueObjectId?: string): Promise<boolean>;
    getResourcesByPermissions(params: {
        getResourcesParams: AdapterMethodParamsForGetAzureResources;
        requiredAccessRoles: AzureAccessPermissionRoleGroups;
    }): Promise<AdapterResult<any>>;
    getMissingStorageContainerAccessRoles(_containerURLString?: string): Promise<AdapterResult<AzureMissingRoleDefinitionsData>>;
    addMissingRolesToStorageContainer(_missingRoleDefinitionIds: AzureAccessPermissionRoleGroups): Promise<AdapterResult<AzureResourcesData>>;
    getContainerBlobs(): Promise<AdapterResult<StorageBlobsData>>;
    private initializeMockTwinProperties;
    getBlobServiceCorsProperties(): Promise<AdapterResult<StorageBlobServiceCorsRulesData>>;
    setBlobServiceCorsProperties(): Promise<AdapterResult<StorageBlobServiceCorsRulesData>>;
    getTimeSeriesConnectionInformation(_adtUrl: string): Promise<AdapterResult<ADTInstanceTimeSeriesConnectionData>>;
    /** Returns a mock data based on the passed query by parsing it
     * to get quick time, twin id and twin property to reflect
     * on the generated mock data */
    getTimeSeriesData(seriesIds: Array<string>, query: string, _connection?: IADXConnection, useStaticData?: boolean): Promise<AdapterResult<ADXTimeSeriesData>>;
    updateADXConnectionInformation(): Promise<AdapterResult<any>>;
    /**TO-DO */
    createJob(inputBlobUri: string, outputBlobUri: string, jobId: string): Promise<any>;
    /**TO-DO */
    deleteJob(params: AdapterMethodParamsForJobs): Promise<any>;
    /**TO-DO */
    cancelJob(params: AdapterMethodParamsForJobs): Promise<any>;
    /**TO-DO */
    getAllJobs(): Promise<any>;
}

interface IPowerBIWidgetBuilderAdapter {
    getVisualsOnPage(reportUrl: string, pageName: string): Promise<IVisual[]>;
    getPagesInReport(reportUrl: string): Promise<IPage[]>;
}

declare class PowerBIWidgetBuilderAdapter implements IPowerBIWidgetBuilderAdapter {
    authService: IAuthService;
    element: HTMLDivElement;
    report: powerbi.exports.Report;
    constructor(authService: IAuthService);
    getVisualsOnPage: (reportUrl: string, pageName: string) => Promise<{
        name: string;
        title: string;
        type: string;
    }[]>;
    getPagesInReport: (reportUrl: string) => Promise<page.Page[]>;
    getReport: (reportUrl: string) => Promise<powerbi.exports.Report>;
}

declare class ADT3DSceneAdapter {
    constructor(authService: IAuthService, adtHostUrl: string, blobContainerUrl?: string, tenantId?: string, uniqueObjectId?: string, adtProxyServerPath?: string, blobProxyServerPath?: string, useAdtProxy?: boolean, useBlobProxy?: boolean);
    /** Checking missing role assignments for the container, for this we need the resouce id of the container and we need to make
     * series of Azure Management calls for be able to find that container - if exist in user's subscription.
     */
    getMissingStorageContainerAccessRoles: (containerUrlString?: string) => Promise<AdapterResult<AzureMissingRoleDefinitionsData>>;
    /** Adding provided role definitions to the user's role assignments for the container resource. This method assumes that
     * containerResourceId is already set in the previous getMissingStorageContainerAccessRoles method and present for assigning roles for.
     */
    addMissingRolesToStorageContainer: (missingRoleDefinitionIds: AzureAccessPermissionRoleGroups) => Promise<AdapterResult<AzureResourcesData>>;
}
interface ADT3DSceneAdapter extends BlobAdapter, ADTDataHistoryAdapter, PowerBIWidgetBuilderAdapter {
    getMissingStorageContainerAccessRoles: (containerURLString?: string) => Promise<AdapterResult<AzureMissingRoleDefinitionsData>>;
    addMissingRolesToStorageContainer: (missingRoleDefinitionIds: AzureAccessPermissionRoleGroups) => Promise<AdapterResult<AzureResourcesData>>;
}

declare enum WrapperMode {
    Builder = "Builder",
    Viewer = "Viewer"
}

interface ISceneViewWrapperStyles {
    root: IStyle;
    leftHeaderControlsContainer: IStyle;
    /**
     * SubComponent styles.
     */
    subComponentStyles?: ISceneViewWrapperSubComponentStyles;
}
interface ISceneViewWrapperSubComponentStyles {
    cameraControlsStack: IStackStyles;
}

interface IADT3DViewerStyleProps {
    theme: ITheme;
}
interface IADT3DViewerStyles {
    root: IStyle;
    layersPicker: IStyle;
    wrapper: IStyle;
    /**
     * SubComponent styles.
     */
    subComponentStyles?: IADT3DViewerSubComponentStyles;
}
interface IADT3DViewerSubComponentStyles {
    headerStack?: IStackStyles;
}

interface BaseComponentProps {
    theme?: Theme;
    children?: React.ReactNode;
    locale?: Locale;
    localeStrings?: Record<string, any>;
    /** Whether to show loading overlay */
    isLoading?: boolean;
    /** Whether to show empty data overlay */
    isDataEmpty?: boolean;
    /** Set of adapter results to reduce catastraphic errors from */
    adapterResults?: Array<AdapterResult<any>>;
    /** Hardwire error UI with this prop */
    componentError?: ComponentError;
    /** Custom className for BaseComponent container */
    containerClassName?: string;
    /** Custom message to display under loading spinner: defaults to 'loading...' */
    customLoadingMessage?: string;
    /** Disable base component default styles */
    disableDefaultStyles?: boolean;
}

interface IOATNodeData {
    '@id': string;
    '@type': OatReferenceType | 'Untargeted';
    name: string;
}

interface IAction {
    type: string;
    payload?: any;
}
interface IBIMViewerProps {
    bimFilePath: string;
    metadataFilePath: string;
    centeredObject?: string;
}
interface ITSIChartComponentProps {
    data: any[];
    chartOptions?: any;
    chartDataOptions?: any[];
}
interface ICardBaseProps {
    title?: string;
    theme?: Theme;
    locale?: Locale;
    localeStrings?: Record<string, any>;
    adapterAdditionalParameters?: Record<string, any>;
}
interface IStandaloneConsumeCardProps extends ICardBaseProps {
    adapter: any;
}
interface IConsumeCardProps extends ICardBaseProps {
    adapter: any;
    id: string;
    properties: readonly string[];
}
interface IErrorComponentProps {
    errorContent?: string;
    errorTitle?: string;
    errorType?: ComponentErrorType;
}
interface IErrorButtonAction {
    buttonText: string;
    buttonAction: () => void;
}
interface IOverlayProps {
    children: React.ReactNode;
    onClose?: () => void;
}
interface IConsumeCompositeCardProps extends ICardBaseProps {
    adapter?: any;
}
interface IAuthService {
    login: () => void;
    getToken: (tokenFor?: 'azureManagement' | 'adx' | 'storage' | 'powerBI') => Promise<string>;
}
interface IEnvironmentToConstantMapping {
    authority: string;
    clientId: string;
    scope: string;
    redirectUri: string;
}
interface IAdapterData {
    data: any;
    hasNoData?: () => boolean;
}
interface IUseAdapter<T extends IAdapterData> {
    /** Adapter loading state */
    isLoading: boolean;
    /** Result of adapter method call */
    adapterResult: AdapterResult<T>;
    /** Calls adapter method (safe on unmount) and updates adapter result */
    callAdapter: (params?: AdapterMethodParams) => Promise<void>;
    /** Cancel adapter method and set the adapter result to null if not explicityly prevented using shouldPreserveResult parameter */
    cancelAdapter: (shouldPreserveResult?: boolean) => void;
    /** Toggles on/off long poll */
    setIsLongPolling: (isLongPolling: boolean) => void;
    /** Indicates long polling state */
    isLongPolling: boolean;
    /** Long polling pulse state for UI */
    pulse: boolean;
}
interface IComponentError {
    /** Name of the error to be used as title */
    name?: string;
    /** Text description of the error */
    message?: string;
    /** Classification of error type */
    type?: ComponentErrorType;
    /** Catastrophic errors stop adapter execution */
    isCatastrophic?: boolean;
    /** Raw error object from catch block */
    rawError?: Error;
    /** Values that can be used in string interpolation when constructing the error message */
    messageParams?: {
        [key: string]: string;
    };
    /** Error data from JSON schema validation*/
    jsonSchemaErrors?: ErrorObject[];
}
interface IMockAdapter {
    /** If unset, random data is generated, if explicitly set, MockAdapter will use value for mocked data.
     *  To mock empty data, explicitly set { mockData: null }
     */
    mockData?: IMockData;
    /** Mocked network timeout period, defaults to 0ms */
    networkTimeoutMillis?: number;
    /** If set, MockAdapter will mock error of set type */
    mockError?: IMockError;
    /** Toggles seeding of random data (data remains constants between builds), defaults to true */
    isDataStatic?: boolean;
}
interface IMockData {
    scenesConfig?: I3DScenesConfig;
    twins?: Array<IADTTwin>;
    models?: DtdlInterface[];
    timeSeriesDataList?: Array<Array<TimeSeriesData>>;
}
interface IMockError {
    type: ComponentErrorType;
    rawError?: Error;
}
interface IErrorInfo {
    errors: IComponentError[];
    catastrophicError: IComponentError;
}
interface IHierarchyProps {
    data: Record<string, IHierarchyNode>;
    searchTermToMark?: string;
    isLoading?: boolean;
    onParentNodeClick?: (node: IHierarchyNode) => void;
    onChildNodeClick?: (parentNode: IHierarchyNode, childNode: IHierarchyNode) => void;
    noDataText?: string;
    shouldScrollToSelectedNode?: boolean;
}
interface IHierarchyNode {
    name: string;
    id: string;
    parentNode?: IHierarchyNode;
    nodeData: any;
    nodeType: HierarchyNodeType;
    children?: Record<string, IHierarchyNode>;
    childrenContinuationToken?: string | null;
    onNodeClick?: (node?: IHierarchyNode) => void;
    isCollapsed?: boolean;
    isSelected?: boolean;
    isLoading?: boolean;
    isNewlyAdded?: boolean;
}
interface IAzureResources {
    value: IAzureResource[];
    nextLink?: string;
}
interface IAzureResource {
    id: string;
    name: string;
    type: AzureResourceTypes;
    properties: Record<string, any>;
    subscriptionName?: string;
    [additionalProperty: string]: any;
}
interface IAzureRoleAssignment extends IAzureResource {
    type: AzureResourceTypes.RoleAssignment;
    properties: IAzureRoleAssignmentPropertyData;
}
interface IADTInstance extends IAzureResource {
    type: AzureResourceTypes.DigitalTwinInstance;
    properties: IADTInstancePropertyData;
    location: string;
}
interface IAzureStorageAccount extends IAzureResource {
    type: AzureResourceTypes.StorageAccount;
    properties: IAzureStorageAccountPropertyData;
}
interface IAzureStorageBlobContainer extends IAzureResource {
    type: AzureResourceTypes.StorageBlobContainer;
}
interface IAzureTimeSeriesDatabaseConnection extends IAzureResource {
    type: AzureResourceTypes.TimeSeriesConnection;
    properties: IAzureTimeSeriesDatabaseConnectionPropertyData;
}
interface IAzureRoleAssignmentPropertyData {
    roleDefinitionId: string;
    [additionalProperty: string]: any;
}
interface IADTInstancePropertyData {
    hostName: string;
    [additionalProperty: string]: any;
}
interface IAzureStorageAccountPropertyData {
    primaryEndpoints: {
        blob: string;
        [additionalProperty: string]: any;
    };
    [additionalProperty: string]: any;
}
interface IAzureTimeSeriesDatabaseConnectionPropertyData {
    connectionType: 'AzureDataExplorer' | string;
    /** Kusto cluster url */
    adxEndpointUri: string;
    adxDatabaseName: string;
    adxTableName: string;
    [additionalProperty: string]: any;
}
interface IADXConnection {
    kustoClusterUrl: string;
    kustoDatabaseName: string;
    kustoTableName: string;
}
interface IADTModel {
    id: string;
    description: any;
    displayName: Record<string, string>;
    decommissioned: boolean;
    uploadTime: string;
    model?: IADTModelDefinition;
}
interface IADTModelDefinition {
    '@type': string;
    '@context': string;
    '@id': string;
    displayName: string;
    description: string;
    comment: string;
    contents?: any[];
}
interface IADTTwin {
    $dtId: string;
    $etag: string;
    $metadata: {
        $model: string;
        [propertyName: string]: any;
    };
    [propertyName: string]: any;
}
interface IAdtApiJob {
    id: string;
    inputBlobUri: string;
    outputBlobUri: string;
    createdDateTime: string;
    lastActionDateTime: string;
    finishedDateTime: string;
    purgeDateTime: string;
    status: string;
    error: {
        code: string;
        message: string;
    };
}
interface IADTRelationship {
    $etag: string;
    $relationshipId: string;
    $relationshipName: string;
    $relationshipLink?: string;
    $sourceId?: string;
    $targetId?: string;
    targetModel?: string;
    [property: string]: any;
}
interface IADTProperty {
    ['@type']: 'Property';
    name: string;
    schema: string | Record<string, any>;
    ['@id']?: string;
    comment?: string;
    description?: string;
    displayName?: string;
    unit?: string;
    writable?: boolean;
}
interface IADTTwinComponent {
    $metadata: {
        [propertyName: string]: {
            lastUpdateTime: string;
        };
    };
    [propertyName: string]: any;
}
interface IGetKeyValuePairsAdditionalParameters extends Record<string, any> {
    isTimestampIncluded?: boolean;
}
interface IResolvedRelationshipClickErrors {
    twinErrors?: any;
    modelErrors?: any;
}
interface IViewData {
    viewDefinition: string;
    imageSrc: string;
    imagePropertyPositions: string;
}
interface IEntityInfo {
    id: string;
    properties: any;
    chartDataOptions?: any;
    [key: string]: any;
}
interface ISearchboxProps {
    className?: string;
    placeholder: string;
    onChange?: (event?: React.ChangeEvent<HTMLInputElement>, newValue?: string) => void;
    onSearch?: (value: string) => void;
    onClear?: () => void;
}
interface ICancellablePromise<T> extends Promise<T> {
    cancel: () => void;
}
interface IKeyValuePairAdapter {
    getKeyValuePairs(id: string, properties: readonly string[], additionalParameters?: IGetKeyValuePairsAdditionalParameters): AdapterReturnType<KeyValuePairAdapterData>;
}
declare type IPropertyInspectorAdapter = Pick<IADTAdapter, 'getADTTwin' | 'getADTRelationship' | 'getExpandedAdtModel' | 'updateTwin' | 'updateRelationship'>;
interface IModelledPropertyBuilderAdapter {
    getADTTwin(twinId: string): Promise<AdapterResult<ADTTwinData>>;
    getAllAdtModels(): Promise<AdapterResult<ADTAllModelsData>>;
    getModelIdFromTwinId(twinId: string): Promise<AdapterResult<ADTTwinToModelMappingData>>;
}
declare type IQueryBuilderAdapter = IADTAdapter | MockAdapter;
interface IADT3DViewerAdapter {
    getSceneData(sceneId: string, config: I3DScenesConfig, visibleLayerIds?: string[], bustCache?: boolean): AdapterReturnType<ADT3DViewerData>;
}
interface IADTAdapter extends IKeyValuePairAdapter, IADT3DViewerAdapter, IModelledPropertyBuilderAdapter {
    getADTModels(params?: AdapterMethodParamsForGetADTModels): AdapterReturnType<ADTAdapterModelsData>;
    getADTTwinsByModelId(params: AdapterMethodParamsForGetADTTwinsByModelId): AdapterReturnType<ADTAdapterTwinsData>;
    searchADTTwins(params: AdapterMethodParamsForSearchADTTwins): AdapterReturnType<ADTAdapterTwinsData>;
    searchTwinsByQuery(params: AdapterMethodParamsForSearchTwinsByQuery): AdapterReturnType<ADTAdapterTwinsData>;
    getRelationships(id: string): Promise<AdapterResult<ADTRelationshipsData>>;
    getADTTwin(twinId: string): Promise<AdapterResult<ADTTwinData>>;
    getADTModel(modelId: string): Promise<AdapterResult<ADTModelData>>;
    lookupADTTwin?(twinId: string): Promise<ADTTwinLookupData>;
    getADTRelationship(twinId: string, relationshipId: string): AdapterReturnType<ADTRelationshipData>;
    createADTModels(models: DTModel[]): AdapterReturnType<ADTAdapterModelsData>;
    deleteADTModel(id: string): AdapterReturnType<ADTModelData>;
    deleteADTTwin(id: string): AdapterReturnType<ADTTwinData>;
    createModels(models: DTModel[]): any;
    createTwins(twins: DTwin[], onUploadProgress?: any): any;
    createRelationships(relationships: DTwinRelationship[], onUploadProgress?: any): any;
    getExpandedAdtModel(modelId: string, baseModelIds?: string[]): AdapterReturnType<ExpandedADTModelData>;
    updateTwin(twinId: string, patches: Array<ADTPatch>): AdapterReturnType<ADTAdapterPatchData>;
    updateRelationship(twinId: string, relationshipId: string, patches: Array<ADTPatch>): AdapterReturnType<ADTAdapterPatchData>;
    getIncomingRelationships(twinId: string): Promise<AdapterResult<ADTRelationshipsData>>;
}
interface IJobsAdapter extends ADT3DSceneAdapter {
    /** TO-DO: Need to properly set the return types  */
    createJob(params: AdapterCreateJobArgs): AdapterReturnType<any>;
    deleteJob(params: AdapterMethodParamsForJobs): AdapterReturnType<any>;
    cancelJob(params: AdapterMethodParamsForJobs): AdapterReturnType<any>;
    getAllJobs(): AdapterReturnType<any>;
}
interface IAzureManagementAdapter {
    getRoleAssignments: (resourceId: string, uniqueObjectId: string) => AdapterReturnType<AzureResourcesData>;
    hasRoleDefinitions: (resourceId: string, accessRolesToCheck: AzureAccessPermissionRoleGroups, uniqueObjectId: string) => Promise<boolean>;
    getResources: (params: AdapterMethodParamsForGetAzureResources) => AdapterReturnType<AzureResourcesData>;
    getResourcesByPermissions: (params: {
        getResourcesParams: AdapterMethodParamsForGetAzureResources;
        requiredAccessRoles: AzureAccessPermissionRoleGroups;
    }) => AdapterReturnType<AzureResourcesData>;
    assignRole: (roleId: AzureAccessPermissionRoles, resourceId: string, // scope
    uniqueObjectId: string) => AdapterReturnType<AzureResourcesData>;
    getTimeSeriesConnectionInformation: (adtUrl: string) => AdapterReturnType<ADTInstanceTimeSeriesConnectionData>;
}
interface IBlobAdapter {
    getBlobContainerURL: () => string;
    setBlobContainerPath: (configBlobPath: string) => void;
    getScenesConfig: () => AdapterReturnType<ADTScenesConfigData>;
    putScenesConfig: (config: I3DScenesConfig) => AdapterReturnType<ADTScenesConfigData>;
    getContainerBlobs: (fileTypes?: Array<string>) => AdapterReturnType<StorageBlobsData>;
    putBlob: (file: File) => AdapterReturnType<StorageBlobsData>;
    resetSceneConfig(): AdapterReturnType<ADTScenesConfigData>;
}
interface IADXAdapter {
    setADXConnectionInformation: (adxConnectionInformation: IADXConnection) => void;
    getADXConnectionInformation: () => IADXConnection | null;
    getTimeSeriesData: (seriesIds: Array<string>, query: string, connection?: IADXConnection) => AdapterReturnType<ADXTimeSeriesData>;
}
interface IADTDataHistoryAdapter extends IADTAdapter, IADXAdapter, IAzureManagementAdapter {
    updateADXConnectionInformation: () => AdapterReturnType<ADTInstanceTimeSeriesConnectionData>;
}
interface IBaseStandardModelSearchAdapter {
    CdnUrl: string;
    getModelSearchIndex(): AdapterReturnType<StandardModelIndexData>;
    fetchModelJsonFromCDN(dtmi: string, actionType: modelActionType): AdapterReturnType<StandardModelData>;
}
interface IModelSearchStringParams {
    queryString: string;
    pageIdx?: number;
    modelIndex: Record<string, any>;
}
interface IStandardModelSearchAdapter extends IBaseStandardModelSearchAdapter {
    githubRepo?: string;
    searchString(params: IModelSearchStringParams): AdapterReturnType<StandardModelSearchData>;
}
interface IStandardModelSearchItem {
    dtmi: string;
    displayName?: string;
    description?: string;
}
interface IStandardModelSearchResult {
    data: IStandardModelSearchItem[];
    metadata?: {
        [key: string]: any;
    };
}
interface IStandardModelIndexData {
    modelSearchStringIndex: string[];
    modelSearchIndexObj: Record<string, any>;
}
interface DTwinUpdateEvent {
    dtId: string;
    patchJSON: ADTPatch[];
}
interface ADTPatch {
    op: 'add' | 'replace' | 'remove';
    path: string;
    value?: any;
}
interface SimulationParams {
    daysToSimulate: number;
    dataSpacing: number;
    liveStreamFrequency: number;
    quickStreamFrequency: number;
    isLiveDataSimulated: boolean;
}
declare type IADTModelImages = {
    [modelId: string]: IADTModelImageContent;
};
interface IADTModelImageContent {
    [ADTModel_ImgSrc_PropertyName]: string;
    [ADTModel_ImgPropertyPositions_PropertyName]: Record<string, any>;
}
interface AssetRelationship {
    name: string;
    target?: string;
    targetModel?: string;
}
interface AssetTwin {
    name: string;
    assetRelationships?: Array<AssetRelationship>;
    properties: Array<AssetProperty<any>>;
}
interface IAssetProperty<T> {
    id: string;
    propertyName: string;
    currentValue: T;
    getNextValue: (currentValue: T) => T;
    schema?: string;
}
interface DTModelContent {
    '@type': 'Property' | 'Relationship' | 'Telemetry' | 'Command' | 'Component' | readonly [string, string];
    name: string;
    schema: string | Record<string, any>;
    [propertyName: string]: any;
}
interface DTModel {
    '@id': string;
    '@type': string | readonly [string, string];
    '@context': string | readonly [string];
    displayName?: string;
    contents?: readonly DTModelContent[];
    description?: string;
    comment?: string;
}
interface DTwin {
    $dtId: string;
    $metadata: {
        $model: string;
        [propertyName: string]: any;
    };
    [propertyName: string]: any;
}
interface DTwinRelationship {
    $relId: string;
    $dtId: string;
    $targetId: string;
    $name: string;
    targetModel?: string;
}
interface IAdtPusherSimulation {
    seedTimeMillis: number;
    tick(): Array<any>;
    generateDTModels(isImagesIncluded?: boolean, download?: boolean): Array<DTModel>;
    generateDTwins(isImagesIncluded?: boolean, download?: boolean): Array<DTwin>;
    generateTwinRelationships(): Array<DTwinRelationship>;
}
declare enum AdtPusherSimulationType {
    DairyProduction = "dairyProduction",
    RobotArms = "robotArms"
}
interface IGenerateADTAssetsProps {
    adapter: IADTAdapter;
    models: readonly DTModel[];
    twins: readonly DTwin[];
    relationships: readonly DTwinRelationship[];
    triggerUpload: boolean;
    onComplete(models: any, twins: any, relationships: any): void;
}
interface IJSONUploaderProps {
    onFileListChanged?: (files: Array<File>) => void;
    existingFiles?: Array<File>;
}
interface IJSONUploaderFileItem {
    name: string;
    size: string;
    content?: JSON | Error;
    status: FileUploadStatus;
}
interface IADTInstancesProps {
    theme?: Theme;
    locale?: Locale;
    localeStrings?: Record<string, any>;
    adapter: ADT3DSceneAdapter;
    hasLabel?: boolean;
    selectedInstance?: string;
    onInstanceChange?: (instanceHostName: string) => void;
}
interface IADT3DGlobeProps {
    adapter: IBlobAdapter | MockAdapter;
    title?: string;
    onSceneClick?: (scene: IScene) => void;
    globeTheme?: GlobeTheme;
}
declare class ADT3DAddInEventData {
    eventType: ADT3DAddInEventTypes;
    config: I3DScenesConfig;
    sceneId: string;
    adapter: IADT3DViewerAdapter;
    sceneVisuals?: SceneVisual[];
    marker: Marker;
    mesh: AbstractMesh;
    scene: Scene;
    pointerEvent: PointerEvent;
}
interface IADT3DAddInProps {
    onSceneLoaded?: (data: ADT3DAddInEventData) => boolean;
    onMeshClick?: (data: ADT3DAddInEventData) => boolean;
    onMeshHover?: (data: ADT3DAddInEventData) => boolean;
    onCameraMove?: (position: ICameraPosition) => void;
}
interface ISceneViewWrapperProps {
    config?: I3DScenesConfig;
    sceneId?: string;
    adapter?: IADT3DViewerAdapter;
    sceneViewProps: ISceneViewProps;
    sceneVisuals?: SceneVisual[];
    addInProps?: IADT3DAddInProps;
    selectedVisual?: Partial<SceneVisual>;
    objectColorUpdated?: (objectColor: IADTObjectColor) => void;
    wrapperMode: WrapperMode;
    /**
     * Call to provide customized styling that will layer on top of the variant rules.
     */
    styles?: IStyleFunctionOrObject<undefined, ISceneViewWrapperStyles>;
}
interface IADT3DViewerProps extends BaseComponentProps {
    adapter: IADT3DViewerAdapter | (IADT3DViewerAdapter & IPropertyInspectorAdapter & IADTDataHistoryAdapter);
    sceneId: string;
    scenesConfig: I3DScenesConfig;
    title?: string;
    connectionLineColor?: string;
    enableMeshSelection?: boolean;
    addInProps?: IADT3DAddInProps;
    refetchConfig?: () => any;
    showMeshesOnHover?: boolean;
    showHoverOnSelected?: boolean;
    coloredMeshItems?: CustomMeshItem[];
    /**
     * Ids of the elements to zoom the camera to focus on
     */
    zoomToElementId?: string;
    unzoomedMeshOpacity?: number;
    hideViewModePickerUI?: boolean;
    hideElementsPanel?: boolean;
    outlinedMeshItems?: CustomMeshItem[];
    /** show the toggle to switch between builder & viewer modes */
    showModeToggle?: boolean;
    sceneViewProps?: ISceneViewProps;
    selectedLayerIds?: string[];
    /**
     * Call to provide customized styling that will layer on top of the variant rules.
     */
    styles?: IStyleFunctionOrObject<IADT3DViewerStyleProps, IADT3DViewerStyles>;
}
interface ISceneViewerThemeCache {
    backgroundKey: string;
    objectColorKey: string;
    objectStyle: ViewerObjectStyle;
}
interface IADTObjectColor {
    color: string;
    baseColor: string;
    lightingStyle: number;
    reflectionTexture?: string;
    coloredMeshColor: string;
    meshHoverColor: string;
    coloredMeshHoverColor: string;
    outlinedMeshHoverColor: string;
    outlinedMeshSelectedColor: string;
    outlinedMeshHoverSelectedColor: string;
}
interface IADTBackgroundColor {
    color: string;
    badgeColor: string;
    defaultBadgeColor: string;
    defaultBadgeTextColor: string;
    aggregateBadgeColor: string;
    aggregateBadgeTextColor: string;
    objectLuminanceRatio?: number;
}
interface IStorageBlob {
    Name: string;
    Path: string;
    Properties: Record<string, any>;
}
interface IAliasedTwinProperty {
    alias: 'PrimaryTwin' | string;
    property: string;
}
interface ILanguageOption {
    key: string;
}
interface DTDLPropertySchema {
    '@type': string;
    fields?: Record<string, any>[];
    enumValues?: DTDLPropertyEnumValue[];
    mapKey?: Record<string, any>;
    mapValue?: Record<string, any>;
    valueSchema?: string;
}
interface DTDLPropertyEnumValue {
    displayName?: string | Record<string, unknown>;
    '@id'?: string;
    name: string;
    enumValue: string;
    description?: string;
    comment?: string;
}
interface IOATNodeElement {
    id: string;
    data?: DtdlInterface;
    position?: IOATNodePosition;
    type?: string;
}
interface IOATNodePosition {
    x: number;
    y: number;
}
interface IOATRelationshipElement {
    id: string;
    label?: string;
    markerEnd?: string;
    source: string;
    sourceHandle?: string;
    target: string;
    targetHandle?: string;
    type?: string;
    data?: IOATNodeData;
}
interface IOATLastPropertyFocused {
    item: DtdlProperty;
    index: number;
}
interface IOATProperty {
    id: string;
    displayName: string;
    index: number;
}
interface IBlobServiceCorsRule {
    AllowedOrigins: Array<string>;
    AllowedMethods: Array<string>;
    AllowedHeaders?: Array<string>;
    ExposedHeaders?: Array<string>;
    MaxAgeInSeconds: number;
}
interface IDataHistoryTimeSeriesTwin {
    seriesId: string;
    label?: string;
    twinId: string;
    twinPropertyName: string;
    twinPropertyType: PropertyValueType;
    chartProps?: {
        color?: string;
        isTwinPropertyTypeCastedToNumber?: boolean;
    };
}
interface IChartOption {
    key: string;
    text: string;
    data?: number | string;
}

declare class ADTTwinsData implements IAdapterData {
    data: IADTTwin[];
    constructor(data: IADTTwin[]);
    hasNoData(): boolean;
}
declare class ADTModelsData implements IAdapterData {
    data: IADTModel[];
    constructor(data: IADTModel[]);
    hasNoData(): boolean;
}

declare class SimulationAdapterData implements IAdapterData {
    data: any;
    constructor(data: any);
    hasNoData(): boolean;
}

declare class ADTAdapter implements IADTAdapter {
    tenantId: string;
    uniqueObjectId: string;
    authService: IAuthService;
    adtHostUrl: string;
    protected adtProxyServerPath: string;
    packetNumber: number;
    protected axiosInstance: AxiosInstance;
    cachedModels: DtdlInterface[];
    cachedTwinModelMap: Map<string, string>;
    parsedModels: ModelDict$1;
    protected adtTwinCache: AdapterEntityCache<ADTTwinData>;
    protected adtModelsCache: AdapterEntityCache<ADTAllModelsData>;
    protected adtTwinToModelMappingCache: AdapterEntityCache<ADTTwinToModelMappingData>;
    protected useAdtProxy: boolean;
    constructor(adtHostUrl: string, authService: IAuthService, tenantId?: string, uniqueObjectId?: string, adtProxyServerPath?: string, useAdtProxy?: boolean);
    generateUrl(path: string): string;
    generateHeaders(headers?: AxiosObjParam): AxiosObjParam;
    getAdtHostUrl(): string;
    setAdtHostUrl(hostName: string): void;
    getRelationships(id: string): ICancellablePromise<AdapterResult<any>>;
    getADTTwin(twinId: string, useCache?: boolean, forceRefresh?: boolean): ICancellablePromise<AdapterResult<any>> | Promise<AdapterResult<ADTTwinData>>;
    getModelIdFromTwinId(twinId: string): Promise<AdapterResult<ADTTwinToModelMappingData>>;
    getAllAdtModels(): Promise<AdapterResult<ADTAllModelsData>>;
    getADTModel(modelId: string): ICancellablePromise<AdapterResult<any>>;
    deleteADTModel(modelId: string): ICancellablePromise<AdapterResult<any>>;
    deleteADTTwin(twinId: string): ICancellablePromise<AdapterResult<any>>;
    getADTModels(params?: AdapterMethodParamsForGetADTModels): Promise<AdapterResult<any>>;
    createADTModels(models: DTModel[]): ICancellablePromise<AdapterResult<any>>;
    updateTwins(events: Array<DTwinUpdateEvent>): Promise<AdapterResult<SimulationAdapterData>>;
    getADTTwinsByModelId(params: AdapterMethodParamsForGetADTTwinsByModelId): ICancellablePromise<AdapterResult<any>>;
    searchADTTwins(params: AdapterMethodParamsForSearchADTTwins): ICancellablePromise<AdapterResult<any>>;
    getTwinsByQuery(params?: AdapterMethodParamsForGetTwinsByQuery): Promise<AdapterResult<any>>;
    searchTwinsByQuery(params: AdapterMethodParamsForSearchTwinsByQuery): Promise<AdapterResult<ADTAdapterSearchByQueryData>>;
    createModels(models: DTModel[]): Promise<AdapterResult<ADTModelsData>>;
    createTwins(twins: DTwin[], onUploadProgress?: any): Promise<AdapterResult<ADTTwinsData>>;
    createRelationships(relationships: DTwinRelationship[], onUploadProgress?: any): Promise<AdapterResult<ADTRelationshipsData>>;
    getKeyValuePairs(id: string, properties: string[], additionalParameters: IGetKeyValuePairsAdditionalParameters): ICancellablePromise<AdapterResult<any>>;
    lookupADTTwin(twinId: string): Promise<ADTTwinLookupData>;
    getExpandedAdtModel(modelId: string, baseModelIds?: string[]): Promise<AdapterResult<ExpandedADTModelData>>;
    updateTwin(twinId: string, patches: Array<ADTPatch>): Promise<AdapterResult<ADTAdapterPatchData>>;
    getADTRelationship(twinId: string, relationshipId: string): Promise<AdapterResult<ADTRelationshipData>>;
    updateRelationship(twinId: string, relationshipId: string, patches: Array<ADTPatch>): Promise<AdapterResult<ADTAdapterPatchData>>;
    getIncomingRelationships(twinId: string): Promise<AdapterResult<any>>;
    getSceneData(sceneId: string, config: I3DScenesConfig, visibleLayerIds?: string[], bustCache?: boolean): Promise<AdapterResult<ADT3DViewerData>>;
}

export { IADXConnection as $, ADTAdapter as A, BlobAdapter as B, CustomMeshItem as C, IEnvironmentToConstantMapping as D, IAdapterData as E, IUseAdapter as F, IComponentError as G, IMockAdapter as H, IADTObjectColor as I, IMockData as J, KeyValuePairAdapterData as K, IMockError as L, MockAdapter as M, IErrorInfo as N, IHierarchyProps as O, IHierarchyNode as P, IAzureResources as Q, IAzureResource as R, IAzureRoleAssignment as S, IADTInstance as T, IAzureStorageAccount as U, IAzureStorageBlobContainer as V, IAzureTimeSeriesDatabaseConnection as W, IAzureRoleAssignmentPropertyData as X, IADTInstancePropertyData as Y, IAzureStorageAccountPropertyData as Z, IAzureTimeSeriesDatabaseConnectionPropertyData as _, IADTBackgroundColor as a, IOATProperty as a$, IADTModel as a0, IADTModelDefinition as a1, IADTTwin as a2, IAdtApiJob as a3, IADTRelationship as a4, IADTProperty as a5, IADTTwinComponent as a6, IGetKeyValuePairsAdditionalParameters as a7, IResolvedRelationshipClickErrors as a8, IViewData as a9, AssetTwin as aA, IAssetProperty as aB, DTModelContent as aC, DTModel as aD, DTwin as aE, DTwinRelationship as aF, IAdtPusherSimulation as aG, AdtPusherSimulationType as aH, IGenerateADTAssetsProps as aI, IJSONUploaderProps as aJ, IJSONUploaderFileItem as aK, IADTInstancesProps as aL, IADT3DGlobeProps as aM, ADT3DAddInEventData as aN, IADT3DAddInProps as aO, ISceneViewWrapperProps as aP, IADT3DViewerProps as aQ, ISceneViewerThemeCache as aR, IStorageBlob as aS, IAliasedTwinProperty as aT, ILanguageOption as aU, DTDLPropertySchema as aV, DTDLPropertyEnumValue as aW, IOATNodeElement as aX, IOATNodePosition as aY, IOATRelationshipElement as aZ, IOATLastPropertyFocused as a_, IEntityInfo as aa, ISearchboxProps as ab, ICancellablePromise as ac, IKeyValuePairAdapter as ad, IPropertyInspectorAdapter as ae, IModelledPropertyBuilderAdapter as af, IQueryBuilderAdapter as ag, IADT3DViewerAdapter as ah, IADTAdapter as ai, IJobsAdapter as aj, IAzureManagementAdapter as ak, IBlobAdapter as al, IADXAdapter as am, IADTDataHistoryAdapter as an, IBaseStandardModelSearchAdapter as ao, IModelSearchStringParams as ap, IStandardModelSearchAdapter as aq, IStandardModelSearchItem as ar, IStandardModelSearchResult as as, IStandardModelIndexData as at, DTwinUpdateEvent as au, ADTPatch as av, SimulationParams as aw, IADTModelImages as ax, IADTModelImageContent as ay, AssetRelationship as az, ADXAdapter as b, ONE_HOUR as b$, IBlobServiceCorsRule as b0, IDataHistoryTimeSeriesTwin as b1, IChartOption as b2, AdapterReturnType as b3, AdapterResultParams as b4, AxiosParams as b5, AxiosObjParam as b6, AdapterState as b7, KeyValuePairData as b8, BIMData as b9, IConsoleLogFunction as bA, AzureAccessPermissionRoleGroups as bB, AdapterMethodParamsForGetAzureResources as bC, AzureResourceSearchParams as bD, AzureResourceSearchParamsWithAdditionalParams as bE, AzureResourceSearchParamsWithoutAdditionalParams as bF, AzureResourceFetchParamsForResourceGraph as bG, AzureResourceFetchParamsForResourceProvider as bH, AzureResourceFetchParams as bI, ADXTable as bJ, ADTModel_ImgSrc_PropertyName as bK, ADTModel_ViewData_PropertyName as bL, ADTModel_ImgPropertyPositions_PropertyName as bM, ADTModel_InBIM_RelationshipName as bN, ADTModel_BimFilePath_PropertyName as bO, ADTModel_MetadataFilePath_PropertyName as bP, ADTModel_BIMContainerId as bQ, ADT_ApiVersion as bR, ViewDataPropertyName as bS, BoardInfoPropertyName as bT, DTMIRegex as bU, DTDLNameRegex as bV, SCENES_DEMO_URL as bW, DOCUMENTATION_LINKS as bX, DEFAULT_REFRESH_RATE_IN_MILLISECONDS as bY, ONE_SECOND as bZ, ONE_MINUTE as b_, ADTRelationship as ba, ADXTimeSeriesTableRow as bb, TimeSeriesData as bc, ADXTimeSeries as bd, HierarchyData as be, ADTModelsApiData as bf, ADTTwinsApiData as bg, CancellablePromise as bh, UseLongPollParams as bi, ImgPropertyPositions as bj, AdapterMethodParams as bk, AdapterMethodParamsForGetADTModels as bl, AdapterMethodParamsForGetADTTwinsByModelId as bm, AdapterMethodParamsForSearchADTTwins as bn, AdapterMethodParamsForSearchTwinsByQuery as bo, AdapterMethodParamsForGetTwinsByQuery as bp, AdapterMethodParamsForGetScenes as bq, AdapterMethodParamsForJobs as br, AdapterCreateJobArgs as bs, ADTRelationshipsApiData as bt, AssetsFromBIMState as bu, AdapterTypes as bv, IIconNames as bw, CardboardIconNames as bx, OatIconNames as by, DurationUnits as bz, ADT3DSceneAdapter as c, RequiredAccessRoleGroupForStorageAccount as c$, LOCAL_STORAGE_KEYS as c0, ADT_ALLOW_LISTED_URLS as c1, dtdlPrimitiveTypesList as c2, dtdlPropertyTypesEnum as c3, PropertyValueType as c4, dtdlComplexTypesList as c5, ADTSceneTwinModelId as c6, CharacterWidths as c7, ADT3DSceneConfigFileNameInBlobStore as c8, availableWidgets as c9, OatGraphReferenceType as cA, OAT_UNTARGETED_RELATIONSHIP_ID_PREFIX as cB, OAT_INTERFACE_TYPE as cC, OAT_GRAPH_REFERENCE_TYPE as cD, OAT_DEFAULT_PATH_VALUE as cE, OAT_DEFAULT_CONTEXT as cF, OAT_MODEL_ID_PREFIX as cG, OAT_COMMENT_LENGTH_LIMIT as cH, OAT_DESCRIPTION_LENGTH_LIMIT as cI, OAT_DISPLAY_NAME_LENGTH_LIMIT as cJ, OAT_NAME_LENGTH_LIMIT as cK, OAT_ID_LENGTH_LIMIT as cL, OAT_ONTOLOGY_MAX_REFERENCE_LIMIT as cM, SelectedCameraInteractionKey as cN, ViewerThemeStorageKey as cO, defaultValueRangeColor as cP, StyleConstants as cQ, intellisenseMultilineBreakpoint as cR, CardboardClassNamePrefix as cS, globeUrl as cT, DTDLPropertyIconographyMap as cU, propertySelectorData as cV, BlobStorageServiceCorsAllowedOrigins as cW, BlobStorageServiceCorsAllowedMethods as cX, BlobStorageServiceCorsAllowedHeaders as cY, EnforcedStorageAccountAccessRoleIds as cZ, InterchangeableStorageAccountAccessRoleIds as c_, twinRefreshMaxAge as ca, modelRefreshMaxAge as cb, timeSeriesConnectionRefreshMaxAge as cc, PRIMARY_TWIN_NAME as cd, DTID_PROPERTY_NAME as ce, dtIdModel as cf, ValidAdtHostSuffixes as cg, ValidContainerHostSuffixes as ch, DefaultViewerModeObjectColor as ci, ViewerModeObjectColors as cj, TransparentTexture as ck, ViewerModeBackgroundColors as cl, EnvironmentsLocalStorageKey as cm, ContainersLocalStorageKey as cn, StorageAccountsLocalStorageKey as co, SelectedEnvironmentLocalStorageKey as cp, SelectedContainerLocalStorageKey as cq, SELECTED_ENVIRONMENT_LOCAL_STORAGE_KEY as cr, SELECTECTED_CONTAINER_LOCAL_STORAGE_KEY as cs, OAT_FILES_STORAGE_KEY as ct, OAT_LAST_PROJECT_STORAGE_KEY as cu, OAT_UNTARGETED_RELATIONSHIP_NAME as cv, OAT_RELATIONSHIP_HANDLE_NAME as cw, OAT_COMPONENT_HANDLE_NAME as cx, OAT_EXTEND_HANDLE_NAME as cy, OatReferenceType as cz, AzureManagementAdapter as d, EnforcedStorageContainerAccessRoleIds as d0, InterchangeableStorageContainerAccessRoleIds as d1, RequiredAccessRoleGroupForStorageContainer as d2, EnforcedADTInstanceAccessRoleIds as d3, InterchangeableADTInstanceAccessRoleIds as d4, RequiredAccessRoleGroupForADTInstance as d5, CONNECTION_STRING_SUFFIX as d6, QuickTimeSpans as d7, AggregationTypeDropdownOptions as d8, DataHistoryStaticMaxDateInMillis as d9, TransformedElementItem as dA, TransformInfo as dB, ISceneViewProps as dC, IWidgetLibraryItem as dD, IBehaviorTwinAliasItem as dE, IElementTwinAliasItem as dF, DtdlVersion as da, DtdlContext as db, DtdlReference as dc, DtdlInterfaceContent as dd, DtdlInterface as de, DtdlInterfaceSchema as df, DtdlComponent as dg, DtdlRelationship as dh, DtdlCommand as di, CommandPayload as dj, DtdlProperty as dk, DtdlArray as dl, DtdlMapKey as dm, DtdlMapValue as dn, DtdlMap as dp, DtdlObject as dq, DtdlObjectField as dr, DtdlEnum as ds, DtdlEnumValueSchema as dt, DtdlEnumValue as du, StandardModelIndexData as dv, StandardModelData as dw, StandardModelSearchData as dx, SceneVisual as dy, SceneViewBadgeGroup as dz, ADTDataHistoryAdapter as e, ADTAdapterModelsData as f, ADTAdapterTwinsData as g, ADTModelData as h, ADTRelationshipsData as i, ADTRelationshipData as j, ADTTwinData as k, AdapterMethodSandbox as l, AdapterResult as m, ComponentError as n, CancelledPromiseError as o, IAction as p, IBIMViewerProps as q, ITSIChartComponentProps as r, ICardBaseProps as s, IStandaloneConsumeCardProps as t, IConsumeCardProps as u, IErrorComponentProps as v, IErrorButtonAction as w, IOverlayProps as x, IConsumeCompositeCardProps as y, IAuthService as z };
