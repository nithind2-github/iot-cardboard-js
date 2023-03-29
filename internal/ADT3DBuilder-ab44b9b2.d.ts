import React from 'react';
import { AbstractMesh } from '@babylonjs/core';
import { IStyleFunctionOrObject, ITheme, IStyle } from '@fluentui/react';
import { ai as IADTAdapter, C as CustomMeshItem, dA as TransformedElementItem, dB as TransformInfo, I as IADTObjectColor, dC as ISceneViewProps } from './ADTAdapter-69d7e03f';

interface IADT3DBuilderProps {
    adapter: IADTAdapter;
    modelUrl: string;
    title?: string;
    onMeshClicked?: (clickedMesh: AbstractMesh, e: PointerEvent) => void;
    onMeshHovered?: (clickedMesh: AbstractMesh) => void;
    showMeshesOnHover?: boolean;
    coloredMeshItems?: CustomMeshItem[];
    showHoverOnSelected?: boolean;
    gizmoElementItem?: TransformedElementItem;
    gizmoTransformItem?: TransformInfo;
    setGizmoTransformItem?: (gizmoTransformItem: TransformInfo) => void;
    objectColorUpdated?: (objectColor: IADTObjectColor) => void;
    sceneViewProps?: ISceneViewProps;
    /**
     * Call to provide customized styling that will layer on top of the variant rules.
     */
    styles?: IStyleFunctionOrObject<IADT3DBuilderStyleProps, IADT3DBuilderStyles>;
}
interface IADT3DBuilderStyleProps {
    theme: ITheme;
}
interface IADT3DBuilderStyles {
    root: IStyle;
    wrapper: IStyle;
    /**
     * SubComponent styles.
     */
    subComponentStyles?: IADT3DBuilderSubComponentStyles;
}
interface IADT3DBuilderSubComponentStyles {
}

declare const _default: React.FunctionComponent<IADT3DBuilderProps>;

export { _default as _ };
