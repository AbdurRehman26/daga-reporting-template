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

    return {
        getTotalRecords: getTotalRecords,
    }
})();

module.exports = app.Dashboard;
