  //Require Module
  app = require('./config');
  //Define Module
  app.Chart = (() => {
    const config = app.Config;
    const dataApiUrl = config.getApiUrl();
    const routes = app.Routes;
    const template = app.Template;


    function generatePieChart(data, activity){

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

      var percentageValue = Math.round((tarangValue/totalValue) * 100);

      AmCharts.makeChart(activity+"donut-chart1", {
        "type": "pie",
        "theme": "light",
        "labelsEnabled": false,
        "dataProvider": dataProvider,
        "balloonText": "[[value]]",
        "valueField": "count",
        "titleField": "previous_usage",
        "allLabels": [{
          "text": "",
          "align": "center",
          "bold": true,
          "y": 150
        }, {
          "text" : '',
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
          "enabled": true,
          "menu": [{
            "format": "PNG",
            "class": "export-main",
            "multiplier": 2,
            "content": [ "Saved from:", window.location.href, {
              "image": "reference",
        "fit": [ 523.28, 769.89 ] // fit image to A4
      } ]
    }]
  }
});

    }

    function generateBarChart(data, activity){

      let dataProvider = [];
      for(key in data){
        if(key !== 'total_teams'){

          var color = app.Chart.getColorValue(key);

          dataProvider.push({
            'country' : key.replace('_' , ' '),
            'visits' : data[key],
            'color' : color
          })
          
        }
      }



      var chart = AmCharts.makeChart(activity+"chartdiv", {
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
            "multiplier": 2,
            "content": [ "Saved from:", window.location.href, {
              "image": "reference",
        "fit": [ 523.28, 769.89 ] // fit image to A4
      } ]
    }]
  }


});

    }



    function generateGaugeChart(data, activity){

      var  tarangValue = 0;
      let totalValue = 0;

      let dataProvider = [{
        'conversion' : 'Tarang',
        'count' : data.total_wet_sampling

      }];


      AmCharts.makeChart(activity+"gaugechart", {
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
          "enabled": true,
          "menu": [{
            "format": "PNG",
            "class": "export-main",
            "multiplier": 2,
            "content": [ "Saved from:", window.location.href, {
              "image": "reference",
        "fit": [ 523.28, 769.89 ] // fit image to A4
      } ]
    }]
  }

});


    }

    function generateLahoreBarChart(data, activity){
      let dataProvider = [];
      for(key in data){
        if(key !== 'total_teams' ){
          var color = app.Chart.getColorValue(key);


          dataProvider.push({
            'country' : key.replace('_' , ' '),
            'visits' : data[key],
            'color' : color
          })
          
        }
      }



      var chart = AmCharts.makeChart(activity+"chartdiv-lahore", {
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
            "multiplier": 2,
            "content": [ "Saved from:", window.location.href, {
              "image": "reference",
        "fit": [ 523.28, 769.89 ] // fit image to A4
      } ]
    }]
  }

});

    }

    function generatePindiBarChart (data, activity){
      let dataProvider = [];
      for(key in data){
        if(key !== 'total_teams' ){
          var color = app.Chart.getColorValue(key);

          dataProvider.push({
            'country' : key.replace('_' , ' '),
            'visits' : data[key],
            'color' : color
          })
          
        }
      }



      var chart = AmCharts.makeChart(activity+"chartdiv-pindi", {
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
            "multiplier": 2,
            "content": [ "Saved from:", window.location.href, {
              "image": "reference",
        "fit": [ 523.28, 769.89 ] // fit image to A4
      } ]
    }]
  }

});

    }

    function generateLineChart(data, chartId, activity) {

      var accumulatedValue = 0;
      var accumulatedTarget = 0;

      let targetDataProvider = []

      var thresholdValue = 0;

      if(chartId == 'line-chart1'){
        thresholdValue = 5616; // interceptions
      }

      if(chartId == 'line-chart2'){
        thresholdValue = 2808; // sales
      }

      if(chartId == 'line-chart3'){
        thresholdValue = 4493; // sampling
      }




      let dataProvider = [];

      var startDate = data[0].created_at_date;
      var endDate = data[data.length-1].created_at_date;


      console.log('start date' + startDate ,'end date' + endDate);

      for(key in data){
        accumulatedValue += parseInt(data[key].count);

        dataProvider.push({
          'date' : data[key].created_at_date,
          'value' : accumulatedValue
        });

        accumulatedTarget += thresholdValue;

      } 



      targetDataProvider = [{
        "finalDate": "2018-10-11",
        "finalValue": 19,
        "initialDate": "2018-10-02",
        "initialValue": 10,
        "lineColor": "#CC0000"
      }]



      var chart = AmCharts.makeChart(activity+chartId, {
        "type": "serial",
        "theme": "light",
        "marginRight":80,
        "autoMarginOffset":20,
        "dataDateFormat": "YYYY-MM-DD HH:NN",
        "dataProvider": dataProvider,
        "valueAxes": [{
          "axisAlpha": 0,
          "guides": [{
            "fillAlpha": 0.1,
            "fillColor": "#888888",
            "lineAlpha": 0,
            "toValue": 16,
            "value": 10
          }],
          "position": "left",
          "tickLength": 0
        }],
        "graphs": [{
          "balloonText": "[[category]]<br><b><span style='font-size:14px;'>value:[[value]]</span></b>",
          "bullet": "round",
          "dashLength": 3,
          "colorField":"color",
          "valueField": "value"
        }],
        "trendLines": [{
          "finalDate": startDate+" 12",
          "finalValue": thresholdValue,
          "initialDate": endDate+" 12",
          "initialValue": accumulatedTarget,
          "lineColor": "#CC0000"
        }],
        "chartScrollbar": {
          "scrollbarHeight":2,
          "offset":-1,
          "backgroundAlpha":0.1,
          "backgroundColor":"#888888",
          "selectedBackgroundColor":"#67b7dc",
          "selectedBackgroundAlpha":1
        },
        "chartCursor": {
          "fullWidth":true,
          "valueLineEabled":true,
          "valueLineBalloonEnabled":true,
          "valueLineAlpha":0.5,
          "cursorAlpha":0
        },
        "categoryField": "date",
        "categoryAxis": {
          "parseDates": true,
          "axisAlpha": 0,
          "gridAlpha": 0.1,
          "minorGridAlpha": 0.1,
          "minorGridEnabled": true
        },
        "export": {

          "enabled": true,
          "menu": [{
            "format": "PNG",
            "class": "export-main",
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
      if(key == 'total_interceptions'){
        return '#EB1C24';
      }
      if(key == 'total_wet_sampling'){
        return '#FDBB13';
      }
      if(key == 'total_sales'){
        return '#762B8F';
      }

      if(key == 'total_deals'){
        return '#A6CE39';
      }

      return '#EB1C24';

    }



    return {
      generatePieChart: generatePieChart,
      generateBarChart: generateBarChart,
      generateLahoreBarChart: generateLahoreBarChart,
      generatePindiBarChart: generatePindiBarChart,
      generateGaugeChart: generateGaugeChart,
      getColorValue : getColorValue,
      generateLineChart : generateLineChart

    }
  })();

  module.exports = app.Chart;
