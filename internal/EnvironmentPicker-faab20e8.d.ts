import React from 'react';
import { c as ADT3DSceneAdapter, M as MockAdapter, T as IADTInstance, U as IAzureStorageAccount, V as IAzureStorageBlobContainer } from './ADTAdapter-69d7e03f';
import './ADT3DScenePage-dc80dd59';

declare type WithLocalStorage = {
    isLocalStorageEnabled: true;
    localStorageKey?: string;
    selectedItemLocalStorageKey?: string;
};
declare type WithoutLocalStorage = {
    isLocalStorageEnabled: false;
    localStorageKey?: never;
    selectedItemLocalStorageKey?: never;
};
declare type StorageContainer = {
    containerUrl?: string;
    onContainerChange?: (storageAccount: IAzureStorageAccount | string, container: IAzureStorageBlobContainer | string, containers: Array<IAzureStorageBlobContainer | string>) => void;
} & (WithLocalStorage | WithoutLocalStorage);
declare type EnvironmentPickerProps = {
    adapter: ADT3DSceneAdapter | MockAdapter;
    onDismiss?: () => void;
    adtInstanceUrl?: string;
    onAdtInstanceChange?: (adtInstance: IADTInstance | string, adtInstances: Array<IADTInstance | string>) => void;
    storage?: StorageContainer;
    isDialogOpen?: boolean;
} & (WithLocalStorage | WithoutLocalStorage);

declare const _default: React.MemoExoticComponent<({ adapter, onDismiss, isLocalStorageEnabled, localStorageKey, adtInstanceUrl, onAdtInstanceChange, storage, isDialogOpen: isDialogOpenProp }: EnvironmentPickerProps) => JSX.Element>;

export { _default as _ };
