  //Require Module
  app = require('./config');
  //Define Module
  app.Chart = (() => {
    const config = app.Config;
    const dataApiUrl = config.getApiUrl();
    const routes = app.Routes;
    const template = app.Template;


    function generatePieChart(data){

      var  tarangValue = 0;
      let totalValue = 0;

      let dataProvider = [];

      for(key in data){

        if(data[key]['previous_usage'] == 'Tarang'){
          tarangValue = data[key].count;
        }else{
          totalValue += data[key].count;
        }

        dataProvider.push({
          "previous_usage" : data[key]['previous_usage'],
          "count" : data[key].count
        });

      }

      let percentageValue = Math.round((tarangValue/totalValue) * 100);

      AmCharts.makeChart("donut-chart1", {
        "type": "pie",
        "theme": "light",
        "innerRadius": "80%",
        "labelsEnabled": false,
        "gradientRatio": [-0.4, -0.4, -0.4, -0.4, -0.4, -0.4, 0, 0.1, 0.2, 0.1, 0, -0.2, -0.5],
        "dataProvider": dataProvider,
        "balloonText": "[[value]]",
        "valueField": "count",
        "titleField": "previous_usage",
        "allLabels": [{
          "text": "Tarang",
          "align": "center",
          "bold": true,
          "y": 150
        }, {
          "text": percentageValue+"%",
          "align": "center",
          "bold": false,
          "y": 180
        }],
        "balloon": {
          "drop": true,
          "adjustBorderColor": false,
          "color": "#FFFFFF",
          "fontSize": 16
        },
        "legend": {
          "position": "absolute",
          "maxColumns": 2,
          "top": 20,
          "align": "right"
        },
        "export": {
          "enabled": true
        }
      });

    }

    function generateBarChart(data){
      let dataProvider = [];
      for(key in data){
        if(key !== 'total_teams' && key !== 'total_no_response' ){

          dataProvider.push({
            'country' : key.replace('_' , ' '),
            'visits' : data[key],
            'color' : '#FF0F00'
          })
          
        }
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
          "enabled": true
        }

      });

    }



    function generateGaugeChart(data){

      var  tarangValue = 0;
      let totalValue = 0;

      let dataProvider = [{
        'conversion' : 'Tarang',
        'count' : data.total_wet_sampling

      }];


      AmCharts.makeChart("gaugechart", {
        "type": "pie",
        "theme": "light",
        "innerRadius": "80%",
        "labelsEnabled": false,
        "gradientRatio": [-0.4, -0.4, -0.4, -0.4, -0.4, -0.4, 0, 0.1, 0.2, 0.1, 0, -0.2, -0.5],
        "dataProvider": dataProvider,
        "balloonText": "[[value]]",
        "valueField": "count",
        "titleField": "conversion",
        "allLabels": [{
          "text": "conversion",
          "align": "center",
          "bold": true,
          "y": 150
        }, {
          "text": data.total_wet_sampling,
          "align": "center",
          "bold": false,
          "y": 180
        }],
        "balloon": {
          "drop": true,
          "adjustBorderColor": false,
          "color": "#FFFFFF",
          "fontSize": 16
        },
        "legend": {
          "position": "absolute",
          "maxColumns": 2,
          "top": 20,
          "align": "right"
        },
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
