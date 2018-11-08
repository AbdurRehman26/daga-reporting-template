//Require Module
app = require('./config');
//Define Module
app.Dashboard = (() => {
    const config = app.Config;
    const dataApiUrl = config.getApiUrl();
    const routes = app.Routes;
    const template = app.Template;


    function getTotalRecords(query){
        let url = dataApiUrl  + 'stats?'+query;
        return $.get(url);
    }


    function getBrandUsage(query){
        let url = dataApiUrl  + 'stats-brand-usage?'+ query;
        return $.get(url);
    }


    function generateGetCall(query){
        let url = dataApiUrl  + query;
        return $.get(url);
    }


    return {
        getTotalRecords: getTotalRecords,
        getBrandUsage: getBrandUsage,
        generateGetCall : generateGetCall
    }
})();

module.exports = app.Dashboard;
