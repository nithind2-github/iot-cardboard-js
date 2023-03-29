import React from 'react';
import { T as Theme, L as Locale } from './ADT3DScenePage-dc80dd59';
import { ae as IPropertyInspectorAdapter, an as IADTDataHistoryAdapter, a2 as IADTTwin, a4 as IADTRelationship } from './ADTAdapter-69d7e03f';
import { O as OnCommitPatchParams } from './StandalonePropertyInspector.types-99a8704d';

declare type TwinPropertyInspectorProps = {
    twinId: string;
    adapter: IPropertyInspectorAdapter | IADTDataHistoryAdapter;
    relationshipId?: never;
    resolvedTwin?: IADTTwin;
    resolvedRelationship?: never;
};
declare type RelationshipPropertyInspectorProps = {
    relationshipId: string;
    adapter: IPropertyInspectorAdapter;
    twinId: string;
    resolvedRelationship?: IADTRelationship;
    resolvedTwin?: IADTTwin;
};
declare type DataHistoryControl = boolean | {
    isEnabled: boolean;
};
declare type PropertyInspectorProps = {
    isPropertyInspectorLoading?: boolean;
    onPatch?: (patchData: OnCommitPatchParams) => any;
    parentHandlesScroll?: boolean;
    theme?: Theme;
    locale?: Locale;
    localeStrings?: Record<string, any>;
    rootAndBaseModelIdsToFlatten?: {
        rootModelId: string;
        baseModelIds: string[];
    };
    readonly?: boolean;
    customCommandBarTitleSpan?: React.ReactNode;
    hasDataHistoryControl?: DataHistoryControl;
} & (TwinPropertyInspectorProps | RelationshipPropertyInspectorProps);
declare const _default: React.NamedExoticComponent<PropertyInspectorProps>;

export { DataHistoryControl as D, _default as _ };
