import { T as Theme } from './ADT3DScenePage-dc80dd59';
import React$1 from 'react';
import { s as ICardBaseProps, A as ADTAdapter } from './ADTAdapter-69d7e03f';

interface IDataPusherProps extends ICardBaseProps {
    adapter: ADTAdapter;
    initialInstanceUrl?: string;
    disablePastEvents?: boolean;
}

declare const _default: React$1.ForwardRefExoticComponent<IDataPusherProps & {
    theme?: Theme;
    title?: string;
    onErrorBoundary?: (error: any, errorInfo: any) => any;
} & React$1.RefAttributes<unknown>>;

export { _default as _ };
