  //Require Module
  app = require('./config');
  //Define Module
  app.Chart = (() => {
    const config = app.Config;
    const dataApiUrl = config.getApiUrl();
    const routes = app.Routes;
    const template = app.Template;


    const cities = {
      1 : 'Karachi',
      2 : 'Sindh',
      3 : 'Lahore',
      4 : 'Punjab',
      5 : 'Islamabad',
      6 : 'Peshaward'
    }



    function generateBarChart(chartId, data){


      console.log(data);
      let dataProvider = [];




      for(var key in data){
          var color = app.Chart.getColorValue(key);

          dataProvider.push({
            'country' : cities[data[key].team_id],
            'visits' : data[key].count,
            'color' : color
          })
          
      }

      console.log(dataProvider , chartId)

      var chart = AmCharts.makeChart(chartId, {
        "type": "serial",
        "theme": "light",
        "marginRight": 70,
        "dataProvider": dataProvider,
        "valueAxes": [{
          "axisAlpha": 0,
          "position": "left",
          "title": "Summary"
        }],
        "startDuration": 1,
        "graphs": [{
          "balloonText": "<b>[[category]]: [[value]]</b>",
          "fillColorsField": "color",
          "fillAlphas": 0.9,
          "lineAlpha": 0.2,
          "type": "column",
          "valueField": "visits"
        }],
        "chartCursor": {
          "categoryBalloonEnabled": false,
          "cursorAlpha": 0,
          "zoomable": false
        },
        "categoryField": "country",
        "categoryAxis": {
          "gridPosition": "start",
          "labelRotation": 45
        },
        "export": {
          "enabled": true,
          "menu": [{
            "format": "PNG",
            "class": "export-main",
            "label": "Download",
            "label": "Download",
            "multiplier": 2,
            "content": [ "Saved from:", window.location.href, {
              "image": "reference",
        "fit": [ 523.28, 769.89 ] // fit image to A4
      } ]
    }]
  }


});

    }



  function getColorValue(key) {
    if(key == 0){
      return '#EB1C24';
    }
    if(key == 1){
      return '#FDBB13';
    }
    if(key == 2){
      return '#762B8F';
    }

    if(key == 3){
      return '#A6CE39';
    }

    return '#EB1C24';

  }



  return {
    generateBarChart: generateBarChart,
    getColorValue : getColorValue
  }
})();

module.exports = app.Chart;
