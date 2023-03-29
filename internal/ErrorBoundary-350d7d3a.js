import { bF as __extends, C as ComponentError, d as ComponentErrorType, bk as __assign } from './Interfaces-8fb2a33a.js';
import React__default, { useState, useMemo } from 'react';
import { B as BaseComponent } from './BaseComponent-cb0a4bca.js';

var ErrorBoundaryContext = React__default.createContext({
    error: null,
    errorInfo: null,
    setIsHandled: function (_isHandled) { return undefined; }
});
var ErrorBoundaryWrapper = function (_a) {
    var theme = _a.theme, title = _a.title, onErrorBoundary = _a.onErrorBoundary, children = _a.children;
    var _b = useState(null), error = _b[0], setError = _b[1];
    var _c = useState(null), errorInfo = _c[0], setErrorInfo = _c[1];
    var _d = useState(false), isHandled = _d[0], setIsHandled = _d[1];
    var errorContextValue = useMemo(function () { return ({
        error: error,
        errorInfo: errorInfo,
        setIsHandled: setIsHandled
    }); }, [error, errorInfo]);
    return (React__default.createElement(ErrorBoundaryContext.Provider, { value: errorContextValue },
        React__default.createElement(ErrorBoundary, { onError: function (error, errorInfo) {
                setError(error);
                setErrorInfo(errorInfo);
                if (typeof onErrorBoundary === 'function') {
                    onErrorBoundary(error, errorInfo);
                }
            }, isHandled: isHandled, theme: theme, cardTitle: title }, children)));
};
// Apply this method to a component to wrap it within ErrorBoundary class component which keeps track of errors
function withErrorBoundary(Component) {
    return React__default.forwardRef(function (props, ref) {
        return (React__default.createElement(ErrorBoundaryWrapper, { theme: props.theme, title: props.title, onErrorBoundary: props.onErrorBoundary },
            React__default.createElement(Component, __assign({}, props, { ref: ref !== null && ref !== void 0 ? ref : undefined }))));
    });
}
/** Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.
 * Error boundaries do not catch errors inside event handlers, use try/catch block for those: https://reactjs.org/docs/error-boundaries.html */
var ErrorBoundary = /** @class */ (function (_super) {
    __extends(ErrorBoundary, _super);
    function ErrorBoundary(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { error: null, hasError: false };
        return _this;
    }
    // Invoked after an error has been thrown by a descendant component, updating state to render fallback UI
    ErrorBoundary.getDerivedStateFromError = function (error) {
        return {
            error: error,
            hasError: true
        };
    };
    // Call the callback function as side effect to expose error via context when an error is thrown
    ErrorBoundary.prototype.componentDidCatch = function (error, errorInfo) {
        this.props.onError(error, errorInfo);
    };
    ErrorBoundary.prototype.render = function () {
        if (!this.props.isHandled && this.state.hasError) {
            return (React__default.createElement(BaseComponent, { theme: this.props.theme, componentError: new ComponentError({
                    isCatastrophic: true,
                    type: ComponentErrorType.ErrorBoundary,
                    name: this.state.error.name,
                    message: this.state.error.message,
                    rawError: new Error(this.state.error.stack)
                }) }));
        }
        return this.props.children;
    };
    return ErrorBoundary;
}(React__default.Component));

export { withErrorBoundary as w };
//# sourceMappingURL=ErrorBoundary-350d7d3a.js.map
