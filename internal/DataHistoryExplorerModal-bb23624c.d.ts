import React$1 from 'react';
import { IStyle, IButtonStyles, IStackStyles, IIconStyles, IModalStyles, IStyleFunctionOrObject, ITheme } from '@fluentui/react';
import { an as IADTDataHistoryAdapter, M as MockAdapter, b1 as IDataHistoryTimeSeriesTwin } from './ADTAdapter-69d7e03f';
import './ADT3DScenePage-dc80dd59';

interface ICardboardModalStyles {
    content: IStyle;
    footer: IStyle;
    headerContainer: IStyle;
    subtitle: IStyle;
    title: IStyle;
    titleContainer: IStyle;
    /**
     * SubComponent styles.
     */
    subComponentStyles?: ICardboardModalSubComponentStyles;
}
interface ICardboardModalSubComponentStyles {
    cancelButton?: Partial<IButtonStyles>;
    destructiveButton?: Partial<IButtonStyles>;
    footerStack?: IStackStyles;
    icon?: IIconStyles;
    modal?: Partial<IModalStyles>;
    primaryButton?: Partial<IButtonStyles>;
}

interface IDataHistoryExplorerModalProps {
    adapter: IADTDataHistoryAdapter | MockAdapter;
    isOpen: boolean;
    onDismiss?: () => void;
    timeSeriesTwins?: Array<IDataHistoryTimeSeriesTwin>;
    dataHistoryInstanceId?: string;
    /**
     * Call to provide customized styling that will layer on top of the variant rules.
     */
    styles?: IStyleFunctionOrObject<IDataHistoryExplorerModalStyleProps, IDataHistoryExplorerModalStyles>;
}
interface IDataHistoryExplorerModalStyleProps {
    theme: ITheme;
}
interface IDataHistoryExplorerModalStyles {
    root: IStyle;
    contentStack: IStyle;
    /**
     * SubComponent styles.
     */
    subComponentStyles?: IDataHistoryExplorerModalSubComponentStyles;
}
interface IDataHistoryExplorerModalSubComponentStyles {
    modal?: Partial<ICardboardModalStyles>;
}

declare const _default: React$1.FunctionComponent<IDataHistoryExplorerModalProps>;

export { _default as _ };
