import React from 'react';
import { IStyleFunctionOrObject, ITheme, IStyle, IStackStyles } from '@fluentui/react';
import { y as IConsumeCompositeCardProps, c as ADT3DSceneAdapter, M as MockAdapter, dC as ISceneViewProps, C as CustomMeshItem, dA as TransformedElementItem, dB as TransformInfo, I as IADTObjectColor, dD as IWidgetLibraryItem, dE as IBehaviorTwinAliasItem, dF as IElementTwinAliasItem } from './ADTAdapter-69d7e03f';
import { T as Theme, L as Locale, k as VisualRuleFormMode, W as WidgetFormMode, l as TwinAliasFormMode, j as ADT3DSceneBuilderMode, n as ADT3DSceneTwinBindingsMode } from './ADT3DScenePage-dc80dd59';
import { a as I3DScenesConfig, c as IBehavior, b as ITwinToObjectMapping } from './3DScenesConfiguration-v1.0.0.d-e5d9427a';

interface IADT3DSceneBuilderCardProps extends IConsumeCompositeCardProps {
    adapter: ADT3DSceneAdapter | MockAdapter;
    sceneId: string;
    sceneViewProps?: ISceneViewProps;
    /** show the toggle to switch between builder & viewer modes */
    showModeToggle?: boolean;
    /**
     * Call to provide customized styling that will layer on top of the variant rules.
     */
    styles?: IStyleFunctionOrObject<IADT3DSceneBuilderStyleProps, IADT3DSceneBuilderStyles>;
}
interface IADT3DSceneBuilderStyleProps {
    theme: ITheme;
}
interface IADT3DSceneBuilderStyles {
    root: IStyle;
    wrapper: IStyle;
    /**
     * SubComponent styles.
     */
    subComponentStyles?: IADT3DSceneBuilderSubComponentStyles;
}
interface IADT3DSceneBuilderSubComponentStyles {
    headerStack?: IStackStyles;
}
interface I3DSceneBuilderContext {
    adapter: ADT3DSceneAdapter | MockAdapter;
    theme?: Theme;
    locale?: Locale;
    localeStrings?: Record<string, any>;
    config: I3DScenesConfig;
    getConfig: () => void;
    sceneId: string;
    coloredMeshItems: Array<CustomMeshItem>;
    setColoredMeshItems: (objects: Array<CustomMeshItem>) => void;
    setGizmoElementItem: (item: TransformedElementItem) => void;
    setGizmoTransformItem: (item: TransformInfo) => void;
    widgetFormInfo: WidgetFormInfo;
    setWidgetFormInfo: (widgetFormInfo: WidgetFormInfo) => void;
    behaviorTwinAliasFormInfo: BehaviorTwinAliasFormInfo;
    setBehaviorTwinAliasFormInfo: (behaviorTwinAliasFormInfo: BehaviorTwinAliasFormInfo) => void;
    elementTwinAliasFormInfo: ElementTwinAliasFormInfo;
    setElementTwinAliasFormInfo: (elementTwinAliasFormInfo: ElementTwinAliasFormInfo) => void;
    dispatch: React.Dispatch<{
        type: string;
        payload: any;
    }>;
    state: ADT3DSceneBuilderState;
    objectColor: IADTObjectColor;
    setUnsavedBehaviorChangesDialogOpen: (isOpen: boolean) => void;
    setUnsavedChangesDialogDiscardAction: (action: any) => void;
    setIsLayerBuilderDialogOpen: (isOpen: boolean, behaviorId?: string, onFocusDismiss?: (layerId: string) => void) => void;
    visualRuleFormMode: VisualRuleFormMode;
    setVisualRuleFormMode: (mode: VisualRuleFormMode) => void;
}
declare type BuilderDirtyFormType = 'behavior' | 'element';
declare type WidgetFormInfo = {
    widget?: IWidgetLibraryItem;
    mode: WidgetFormMode;
    widgetId?: string;
};
declare type BehaviorTwinAliasFormInfo = null | {
    twinAlias: IBehaviorTwinAliasItem;
    mode: TwinAliasFormMode;
    aliasToAutoPopulate?: string;
};
declare type ElementTwinAliasFormInfo = null | {
    twinAlias: IElementTwinAliasItem;
    mode: TwinAliasFormMode;
};
interface ADT3DSceneBuilderState {
    behaviors: Array<IBehavior>;
    behaviorTwinAliasFormInfo: BehaviorTwinAliasFormInfo;
    builderMode: ADT3DSceneBuilderMode;
    coloredMeshItems: Array<CustomMeshItem>;
    config: I3DScenesConfig;
    elements: Array<ITwinToObjectMapping>;
    elementTwinAliasFormInfo: ElementTwinAliasFormInfo;
    enableHoverOnModel: boolean;
    formDirtyState: Map<BuilderDirtyFormType, boolean>;
    gizmoElementItem: TransformedElementItem;
    gizmoTransformItem: TransformInfo;
    isLayerBuilderDialogOpen: boolean;
    layerBuilderDialogData: {
        behaviorId: string;
        onFocusDismiss?: (layerId: string) => void;
    };
    objectColor: IADTObjectColor;
    originalBehaviorToEdit: IBehavior;
    removedElements: Array<ITwinToObjectMapping>;
    selectedBehavior: IBehavior;
    /** copy of the behavior being edited by the form. Reflects changes in realtime but should not be edited */
    draftBehavior: IBehavior;
    selectedElement: ITwinToObjectMapping;
    selectedElements: Array<ITwinToObjectMapping>;
    selectedPivotTab: ADT3DSceneTwinBindingsMode;
    showHoverOnSelected: boolean;
    unsavedBehaviorDialogOpen: boolean;
    unsavedChangesDialogDiscardAction: VoidFunction;
    visualRuleFormMode: VisualRuleFormMode;
    widgetFormInfo: WidgetFormInfo;
}

declare const SceneBuilderContext: React.Context<I3DSceneBuilderContext>;
declare const _default: React.FunctionComponent<IADT3DSceneBuilderCardProps>;

export { SceneBuilderContext as S, _default as _ };
