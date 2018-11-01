//Require Module
app = require('./config');
//Define Module
app.Dashboard = (() => {
    const config = app.Config;
    const dataApiUrl = config.getApiUrl();
    const routes = app.Routes;
    const template = app.Template;


    function getTotalInterceptions(){
        let url = dataApiUrl  + 'stats?total_interceptions=true'

        return $.get(url);
    }

    return {
        getTotalInterceptions: getTotalInterceptions,
    }
})();

module.exports = app.Dashboard;
