import React from 'react';
import { IStyleFunctionOrObject, ITheme, IStyle, IButtonStyles, ITextStyles, INavStyles, IProcessedStyleSet } from '@fluentui/react';
import { L as Locale, T as Theme } from './ADT3DScenePage-dc80dd59';

interface ITutorialModalProps {
    defaultPageKey?: TutorialModalPage;
    isOpen: boolean;
    locale?: Locale;
    localeStrings?: Record<string, any>;
    onDismiss: () => void;
    theme?: Theme;
    /**
     * Call to provide customized styling that will layer on top of the variant rules.
     */
    styles?: IStyleFunctionOrObject<ITutorialModalStyleProps, ITutorialModalStyles>;
}
interface ITutorialModalStyleProps {
    theme: ITheme;
}
interface ITutorialModalStyles {
    root: IStyle;
    header: IStyle;
    headerTextContainer: IStyle;
    headerText: IStyle;
    body: IStyle;
    contentPane: IStyle;
    illustrationPageContainer: IStyle;
    footer: IStyle;
    navContainer: IStyle;
    slideshowContainer: IStyle;
    slideChangeBtnContainerLeft: IStyle;
    slideChangeBtnContainerRight: IStyle;
    slideStatusIndicatorContainer: IStyle;
    previewBadge: IStyle;
    iconLabelContainer: IStyle;
    growContent: IStyle;
    /**
     * SubComponent styles.
     */
    subComponentStyles?: ITutorialModalSubComponentStyles;
}
interface ITutorialModalSubComponentStyles {
    closeButton: IButtonStyles;
    chevronButton: IButtonStyles;
    slideIndicatorButton: IButtonStyles;
    linkSeparator: ITextStyles;
    nav: Partial<INavStyles>;
}
declare enum TutorialModalPage {
    CONCEPTS = "CONCEPTS",
    INTRODUCTION = "INTRODUCTION",
    ELEMENTS = "ELEMENTS",
    BEHAVIORS = "BEHAVIORS",
    TWINS = "TWINS",
    WIDGETS = "WIDGETS",
    SCENELAYERS = "SCENELAYERS"
}

declare const TutorialModalContext: React.Context<{
    classNames: IProcessedStyleSet<ITutorialModalStyles>;
}>;
declare const _default: React.FunctionComponent<ITutorialModalProps>;

export { TutorialModalContext as T, _default as _ };
