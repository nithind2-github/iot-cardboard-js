import React$1 from 'react';
import { y as IConsumeCompositeCardProps, c as ADT3DSceneAdapter, M as MockAdapter, T as IADTInstance, V as IAzureStorageBlobContainer, p as IAction, G as IComponentError, w as IErrorButtonAction, $ as IADXConnection } from './ADTAdapter-69d7e03f';
import { i as ADT3DScenePageSteps } from './ADT3DScenePage-dc80dd59';
import { d as IScene, a as I3DScenesConfig } from './3DScenesConfiguration-v1.0.0.d-e5d9427a';

interface IADT3DScenePageProps extends IConsumeCompositeCardProps {
    adapter: ADT3DSceneAdapter | MockAdapter;
    environmentPickerOptions?: {
        adt?: {
            isLocalStorageEnabled?: boolean;
            localStorageKey?: string;
            selectedItemLocalStorageKey?: string;
            onAdtInstanceChange?: (adtInstance: string | IADTInstance, adtInstances: Array<string | IADTInstance>) => void;
        };
        storage?: {
            isLocalStorageEnabled?: boolean;
            localStorageKey?: string;
            selectedItemLocalStorageKey?: string;
            onContainerChange?: (container: string | IAzureStorageBlobContainer, containers: Array<string | IAzureStorageBlobContainer>) => void;
        };
    };
    enableTwinPropertyInspectorPatchMode?: boolean;
}
interface IADT3DScenePageState {
    currentStep: ADT3DScenePageSteps;
    scenesConfig: I3DScenesConfig;
    selectedBlobContainerURL: string;
    selectedScene: IScene;
    scene?: IScene;
    errors?: Array<IComponentError>;
    errorCallback: IErrorButtonAction;
    adxConnectionInformation: {
        connection: IADXConnection;
        loadingState: ADXConnectionInformationLoadingState;
    };
}
interface IADT3DScenePageContext {
    state: IADT3DScenePageState;
    dispatch: React.Dispatch<IAction>;
    handleOnHomeClick: () => void;
    handleOnSceneClick: (scene: IScene) => void;
    handleOnSceneSwap: (sceneId: string) => void;
    isTwinPropertyInspectorPatchModeEnabled: boolean;
}
declare enum ADXConnectionInformationLoadingState {
    IDLE = 0,
    LOADING = 1,
    EXIST = 2,
    NOT_EXIST = 3
}

declare const ADT3DScenePageContext: React$1.Context<IADT3DScenePageContext>;
declare const _default: React$1.NamedExoticComponent<IADT3DScenePageProps>;

export { ADT3DScenePageContext as A, _default as _ };
