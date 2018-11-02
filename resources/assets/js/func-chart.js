//Require Module
app = require('./config');
//Define Module
app.ChartsData = (() => {
    const config = app.Config;
    const dataApiUrl = config.getApiUrl();
    const routes = app.Routes;
    const template = app.Template;


    function getChartData(query){
        let url = dataApiUrl  + 'chart-data?'+query;
        return $.get(url);
    }

    return {
        getChartData: getChartData,
    }
})();

module.exports = app.ChartsData;
