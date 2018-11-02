  //Require Module
  app = require('./config');
  //Define Module
  app.Chart = (() => {
    const config = app.Config;
    const dataApiUrl = config.getApiUrl();
    const routes = app.Routes;
    const template = app.Template;


    function generatePieChart(){


      AmCharts.makeChart("donut-chart1", {
        "type": "pie",
        "theme": "light",
        "innerRadius": "80%",
        "labelsEnabled": false,
        "gradientRatio": [-0.4, -0.4, -0.4, -0.4, -0.4, -0.4, 0, 0.1, 0.2, 0.1, 0, -0.2, -0.5],
        "dataProvider": [{
          "country": "Lithuania",
          "litres": 501.9
        }, {
          "country": "Czech Republic",
          "litres": 301.9
        }, {
          "country": "Ireland",
          "litres": 201.1
        }, {
          "country": "Germany",
          "litres": 165.8
        }, {
          "country": "Australia",
          "litres": 139.9
        }, {
          "country": "Austria",
          "litres": 128.3
        }],
        "balloonText": "[[value]]",
        "valueField": "litres",
        "titleField": "country",
        "balloon": {
          "drop": true,
          "adjustBorderColor": false,
          "color": "#FFFFFF",
          "fontSize": 16
        },
        "legend": {
          "position": "absolute",
          "maxColumns": 1,
          "top": 20,
          "align": "right"
        },
        "export": {
          "enabled": false
        }
      });


    }

    function generateBarChart(data){
      let dataProvider = [];
      for(key in data){
        dataProvider.push({
          'country' : key,
          'visits' : data[key],
          'color' : '#FF0F00'
        })
      }



      var chart = AmCharts.makeChart("chartdiv", {
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
          "enabled": false
        }

      });

    }


    function generateGaugeChart(){

      var gaugeChart = AmCharts.makeChart("gaugechart", {
        "type": "gauge",
        "theme": "light",
        "axes": [{
          "axisAlpha": 0,
          "tickAlpha": 0,
          "labelsEnabled": false,
          "startValue": 0,
          "endValue": 100,
          "startAngle": 0,
          "endAngle": 360,
          "legend": {
            "position": "absolute",
            "maxColumns": 1,
            "top": 210,
            "align": "center"
          },
          "bands": [{
            "color": "#eee",
            "startValue": 0,
            "endValue": 100,
            "radius": "100%",
            "innerRadius": "85%"
          }, {
            "color": "#84b761",
            "startValue": 0,
            "endValue": 80,
            "radius": "100%",
            "innerRadius": "85%",
            "balloonText": "90%"
          }]
        }],
        "export": {
          "enabled": true
        }
      });

    }


    return {
      generatePieChart: generatePieChart,
      generateBarChart: generateBarChart,
      generateGaugeChart: generateGaugeChart,

    }
  })();

  module.exports = app.Chart;
