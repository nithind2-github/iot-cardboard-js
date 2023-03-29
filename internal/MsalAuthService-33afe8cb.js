import { ag as InteractionRequiredAuthError, ah as PublicClientApplication } from './OatPublicUtils-091169d8.js';

var MsalAuthService = /** @class */ (function () {
    function MsalAuthService(environmentToConstantMapping) {
        var _this = this;
        this.getTokenCalls = [];
        this.gettingToken = false;
        this.isLoggingIn = true;
        this.executeGetTokenSequentially = true;
        this.environmentToConstantMapping = {
            authority: 'https://login.microsoftonline.com/organizations',
            // valid redirect URI for this is client ID is https://adtexplorer-tsi-local.azurewebsites.net
            // modify hosts file accordingly
            clientId: 'e7e88070-28a1-43a3-9704-d8b986eb5f60',
            scope: 'https://api.timeseries.azure.com/.default',
            redirectUri: window.location.protocol + '//' + window.location.hostname
            // // The resource URI for ADT should NOT end with a trailing slash as it will cause
            // // authentication to fail.
            // scope: 'https://digitaltwins.azure.net/.default'
        };
        this.login = function () {
            _this.isLoggingIn = true;
            var accounts = _this.authContext.getAllAccounts();
            if (accounts.length) {
                _this.authContext.setActiveAccount(accounts[0]);
                _this.isLoggingIn = false;
                _this.shiftAndExecuteGetTokenCall();
            }
            else {
                _this.authContext
                    .loginPopup()
                    .then(function () {
                    // In case multiple accounts exist, you can select
                    var currentAccounts = _this.authContext.getAllAccounts();
                    _this.authContext.setActiveAccount(currentAccounts[0]);
                    _this.isLoggingIn = false;
                    _this.shiftAndExecuteGetTokenCall();
                })
                    .catch(function (error) {
                    //login failure
                    alert(error);
                });
            }
        };
        this.logout = function () {
            _this.authContext.logout();
        };
        this.shiftAndExecuteGetTokenCall = function () {
            var call = _this.getTokenCalls.shift();
            if (call) {
                call.call();
            }
        };
        this.createGetTokenCall = function (scope, resolve, reject, allowParallelGetTokenAfterComplete) {
            var resolveToken = function (_a) {
                var accessToken = _a.accessToken;
                if (allowParallelGetTokenAfterComplete) {
                    _this.executeGetTokenSequentially = false;
                }
                _this.gettingToken = false;
                resolve(accessToken);
                _this.shiftAndExecuteGetTokenCall();
            };
            return function () {
                _this.gettingToken = true;
                _this.authContext
                    .acquireTokenSilent(scope)
                    .then(resolveToken)
                    .catch(function (error) {
                    if (error instanceof InteractionRequiredAuthError) {
                        // popups are likely to be blocked by the browser
                        // notify the user that they should enable them
                        alert('Some authentication flows will require pop-ups, please make sure popups are enabled for this site.');
                        _this.authContext
                            .acquireTokenPopup(scope)
                            .then(resolveToken)
                            .catch(function (error) {
                            console.error(error);
                            resolveToken(error);
                        });
                    }
                    else {
                        console.error(error);
                        resolveToken(error);
                    }
                });
            };
        };
        this.getGenericTokenPromiseCallback = function (scope, allowParallelGetTokenAfterComplete) {
            if (allowParallelGetTokenAfterComplete === void 0) { allowParallelGetTokenAfterComplete = false; }
            scope.authority = "" + _this.environmentToConstantMapping.authority;
            return function (resolve, reject) {
                var getTokenCall = _this.createGetTokenCall(scope, resolve, reject, allowParallelGetTokenAfterComplete);
                _this.getTokenCalls.push(getTokenCall);
                if ((!_this.gettingToken || !_this.executeGetTokenSequentially) &&
                    !_this.isLoggingIn) {
                    _this.shiftAndExecuteGetTokenCall();
                }
            };
        };
        this.getToken = function (tokenFor) {
            var scope;
            switch (tokenFor) {
                case 'azureManagement':
                    scope = 'https://management.azure.com//.default';
                    return new Promise(_this.getGenericTokenPromiseCallback({
                        scopes: [scope]
                    }, true));
                case 'adx':
                    scope = 'https://help.kusto.windows.net/user_impersonation';
                    return new Promise(_this.getGenericTokenPromiseCallback({
                        scopes: [scope]
                    }, true));
                case 'storage':
                    scope = 'https://storage.azure.com/user_impersonation';
                    return new Promise(_this.getGenericTokenPromiseCallback({
                        scopes: [scope]
                    }, true));
                case 'powerBI':
                    scope = 'https://analysis.windows.net/powerbi/api/.default';
                    return new Promise(_this.getGenericTokenPromiseCallback({
                        scopes: [scope]
                    }, true));
                default:
                    scope = _this.environmentToConstantMapping.scope;
                    return new Promise(_this.getGenericTokenPromiseCallback({
                        scopes: [scope]
                    }));
            }
        };
        this.environmentToConstantMapping =
            environmentToConstantMapping || this.environmentToConstantMapping;
        this.authContextConfig = {
            auth: {
                clientId: this.environmentToConstantMapping.clientId,
                authority: "" + this.environmentToConstantMapping.authority,
                redirectUri: this.environmentToConstantMapping.redirectUri,
                navigateToLoginRequestUrl: true
            },
            cache: {
                cacheLocation: 'localStorage',
                storeAuthStateInCookie: true
            }
        };
        this.authContext = new PublicClientApplication(this.authContextConfig);
    }
    return MsalAuthService;
}());

export { MsalAuthService as M };
//# sourceMappingURL=MsalAuthService-33afe8cb.js.map
