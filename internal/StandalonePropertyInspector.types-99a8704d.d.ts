import { T as Theme$1, L as Locale, P as PropertyInspectorPatchMode } from './ADT3DScenePage-dc80dd59';
import { an as IADTDataHistoryAdapter, M as MockAdapter, aE as DTwin, de as DtdlInterface, a4 as IADTRelationship, av as ADTPatch } from './ADTAdapter-69d7e03f';
import { Theme, IPalette, IStyleFunctionOrObject, IStyle, IButtonStyles, ISpinnerStyles } from '@fluentui/react';

/** custom colors our app needs */
interface CustomPalette {
    /** color code for the partially transparent color for modals and overlays */
    glassyBackground75: string;
    glassyBackground90: string;
    /** color for the border when using the glassy background */
    glassyBorder: string;
    /** Error text color lighter than Fluent's */
    errorTextLight: string;
}
/**
 * Processed theme with all the values populated
 */
declare type IExtendedPalette = IPalette & CustomPalette;
interface IExtendedTheme extends Theme {
    palette: IExtendedPalette;
}

interface IDataHistoryExplorerModalControlProps {
    adapter: IADTDataHistoryAdapter | MockAdapter;
    /**
     * if isEnabled is provided, it will be prioritized over adapter's timeSeriesConnectionCache value to
     * decide how to show the data history modal control button like enabled or disabled
     */
    isEnabled?: boolean;
    initialTwinId?: string;
    /**
     * Call to provide customized styling that will layer on top of the variant rules.
     */
    styles?: IStyleFunctionOrObject<IDataHistoryExplorerModalControlStyleProps, IDataHistoryExplorerModalControlStyles>;
}
interface IDataHistoryExplorerModalControlStyleProps {
    theme: IExtendedTheme;
}
interface IDataHistoryExplorerModalControlStyles {
    root: IStyle;
    /**
     * SubComponent styles.
     */
    subComponentStyles?: IDataHistoryExplorerModalControlSubComponentStyles;
}
interface IDataHistoryExplorerModalControlSubComponentStyles {
    iconButton?: Partial<IButtonStyles>;
    spinner?: Partial<ISpinnerStyles>;
}

interface OnCommitPatchParams {
    patchMode: PropertyInspectorPatchMode;
    id: string;
    sourceTwinId?: string;
    patches: Array<ADTPatch>;
}
interface StandalonePropertyInspectorProps {
    theme?: Theme$1;
    locale?: Locale;
    localeStrings?: Record<string, any>;
    inputData: TwinParams | RelationshipParams;
    missingModelIds?: Array<string>;
    onCommitChanges?: (patchData: OnCommitPatchParams) => any;
    onRefresh?: () => any;
    readonly?: boolean;
    parentHandlesScroll?: boolean;
    customCommandBarTitleSpan?: React.ReactNode;
    dataHistoryControlProps?: IDataHistoryExplorerModalControlProps;
}
declare type TwinParams = {
    twin: DTwin;
    expandedModels: DtdlInterface[];
    rootModel: DtdlInterface;
};
declare type RelationshipParams = {
    relationship: IADTRelationship;
    relationshipModel: DtdlInterface;
};

export { OnCommitPatchParams as O, StandalonePropertyInspectorProps as S };
