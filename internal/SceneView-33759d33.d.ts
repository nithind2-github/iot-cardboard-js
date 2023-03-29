import { T as Theme } from './ADT3DScenePage-dc80dd59';
import { dC as ISceneViewProps } from './ADTAdapter-69d7e03f';
import React from 'react';

declare const showFpsCounter = false;
declare const _default: React.ForwardRefExoticComponent<Pick<ISceneViewProps & React.RefAttributes<unknown> & {
    theme?: Theme;
    title?: string;
    onErrorBoundary?: (error: any, errorInfo: any) => any;
}, "title" | "theme" | "key" | "onErrorBoundary" | keyof ISceneViewProps> & React.RefAttributes<unknown>>;

export { _default as _, showFpsCounter as s };
