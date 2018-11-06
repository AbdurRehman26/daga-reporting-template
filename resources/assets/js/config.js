//Global
var app = app || {};
//Define Module
app.Config = (function () {
    const basePath = window.location.protocol + '//' + window.location.host;
    const apiUrl = basePath + '/api/';
    const appUrl = basePath + '/';
    
    let token = "";
    let actionId;
    let actionType = "";
    let googleApiKey  = 'AIzaSyDdcUDKZOfYStkCC6AOz0utjI11D9LUgjM';

    let configObject = {
        getApiUrl: () => apiUrl,

        getAppUrl: () => appUrl,

        getToken: () => token,
        
        getGoogleAPIKey: () => googleApiKey,


        setToken: v => {
            token = v;
        },
        cleanStorage: (callback) => {
            localStorage.clear();
            callback();
        },
    };
    return configObject;
})();
//Export Module
module.exports = app;