import { E as IAdapterData, F as IUseAdapter, bk as AdapterMethodParams, b3 as AdapterReturnType, ac as ICancellablePromise, bi as UseLongPollParams, r as ITSIChartComponentProps, ah as IADT3DViewerAdapter, dy as SceneVisual, dz as SceneViewBadgeGroup } from './ADTAdapter-69d7e03f';
import { a as I3DScenesConfig } from './3DScenesConfiguration-v1.0.0.d-e5d9427a';

interface Params<T extends IAdapterData> {
    /** Callback which triggers adapter data fetch */
    adapterMethod: (params?: AdapterMethodParams) => AdapterReturnType<T>;
    /** Not to execute the adapter method when we use the useAdapter hook in first render */
    isAdapterCalledOnMount?: boolean;
    /** Array of dependencies that, when changed, should cancel the data fetch, nullify the data, and trigger a refetch.   */
    refetchDependencies: any[];
    /** Whether or not the adapterMethod is long polling */
    isLongPolling?: boolean;
    /** Long polling interval */
    pollingIntervalMillis?: number;
    /** Interval at which 'pulse' state is toggled for UI. */
    pulseTimeoutMillis?: number;
}
/** Wraps adapter data fetching, loading, long polling, and promise cancelling logic */
declare const useAdapter: <T extends IAdapterData>({ adapterMethod, refetchDependencies, isLongPolling, pollingIntervalMillis, pulseTimeoutMillis, isAdapterCalledOnMount }: Params<T>) => IUseAdapter<T>;

/**
 * Exposes two functions: 'cancellablePromise' to wrap promises in cancellation code which auto cancels on unmount,
 * and 'cancel' function to manually cancel wrapped promises.  This hooks was adapted from the following repo:
 * https://github.com/rajeshnaroth/react-cancelable-promise-hook/blob/master/index.js
 */
declare const useCancellablePromise: () => {
    cancellablePromise: <T>(p: Promise<T> | ICancellablePromise<T>) => Promise<T>;
    cancel: () => void;
};

declare const useGuid: () => string;

/**
 * Hook to wrap vanilla setInterval with smarter, unmount-safe logic.
 * Adapted from Dan Abramov's declarative setInterval blog post
 * https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 */
declare const useLongPoll: ({ callback, pollingIntervalMillis, pulseTimeoutMillis }: UseLongPollParams) => {
    /**
     * Boolean pulse variable. Toggled to true for pulseTimeoutMillis
     * after callback completion, before returning to false.  Can be used
     * for visual indication of updated data in UI.
     */
    pulse: boolean;
};

declare const useTSIChartComponentRender: (component: any, renderParameters: ITSIChartComponentProps) => string;

declare const useRuntimeSceneData: (adapter: IADT3DViewerAdapter, sceneId: string, scenesConfig: I3DScenesConfig, selectedLayerIds?: string[]) => {
    modelUrl: string;
    sceneVisuals: SceneVisual[];
    sceneBadges: SceneViewBadgeGroup[];
    isLoading: boolean;
    triggerRuntimeRefetch: () => Promise<void>;
    lastRefreshTime: number;
    nextRefreshTime: number;
};

export { useCancellablePromise as a, useGuid as b, useLongPoll as c, useTSIChartComponentRender as d, useRuntimeSceneData as e, useAdapter as u };
