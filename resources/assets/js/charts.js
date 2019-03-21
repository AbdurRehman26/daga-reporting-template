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
            "label": "Download",
            "multiplier": 2,
            'text' : "Download",
            'label' : "Download",
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
        if(key !== 'total_teams' && key !== 'conversion_value' && key !== 'conversion'){

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



    function generateGaugeChart(data, activity){

      var  tarangValue = 0;
      let totalValue = 0;

      let dataProvider = [{
        'conversion' : 'Tarang',
        'count' : Math.round(data.conversion_value),
        "innerRadius": "65%"

      },
      {
        'conversion' : 'Tarang2',
        'count' : 100 - Math.round(data.conversion_value),
        "innerRadius": "65%"

      }];


      AmCharts.makeChart(activity+"gaugechart", {
        "type": "pie",
        "theme": "light",
        "innerRadius": "60%",
        "labelsEnabled": false,
        "dataProvider": dataProvider,
        "balloonText": "[[value]]",
        "valueField": "count",
        "titleField": "",
        "fontSize" : 18,
        "allLabels": [{
          "text": "conversion",
          "align": "center",
          "bold": true,
          "y": 140
        }, {
          "text": Math.round(data.conversion_value)+" %",
          "align": "center",
          "bold": true,
          "y": 160,
          "radius": "20%",
        }],
        "balloon": {
          "drop": true,
          "adjustBorderColor": false,
          "color": "#FFFFFF",
          "fontSize": 16
        },
        "legend": {},
        "export": {
          "enabled": true,
          "menu": [{
            "format": "PNG",
            "class": "export-main",
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

    function generateLahoreBarChart(data, activity){
      let dataProvider = [];
      for(key in data){
        if(key !== 'total_teams' && key !== 'conversion_value' && key !== 'conversion'){
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

    function generatePindiBarChart (data, activity){
      let dataProvider = [];
      for(key in data){
        if(key !== 'total_teams'  && key !== 'conversion_value' && key !== 'conversion'){
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



      for(key in data){


        if(data[key].created_at_date < '2018-12-14'){


          if(chartId == 'line-chart1'){
            if(data[key].created_at_date >= '2018-12-05'){
              thresholdValue = 3744;

            }else{
            // interceptions
            thresholdValue = 5616; 
          }

        }



        if(chartId == 'line-chart2'){

          if(data[key].created_at_date >= '2018-12-05'){
            thresholdValue = 1872;

          }else{
            // Sales
            thresholdValue = 2808; 
          }

        }



        if(chartId == 'line-chart2'){

          if(data[key].created_at_date >= '2018-12-05'){
           thresholdValue = 2995;

         }else{
            // Sales
            thresholdValue = 4493; 
          }

        }

      }

      accumulatedValue += parseInt(data[key].count);
      accumulatedTarget += thresholdValue;
      

      if(data[key].created_at_date != '0000-00-00'){
        dataProvider.push({
          'date' : data[key].created_at_date,
          'value' : accumulatedValue,
          'target' : accumulatedTarget,

        });

      }



    }



    if(chartId == 'line-chart1'){

      $('.daily-interception-target-value').html(accumulatedValue+'/'+accumulatedTarget);

      if(activity == 'activity_2-'){

        accumulatedTarget = 183456;

        $('.daily-interception-target-value').html(accumulatedValue+'/'+accumulatedTarget);

      }


      let dataProvider = [{
        'conversion' : 'Tarang',
        'count' : Math.round((accumulatedValue/accumulatedTarget) * 100),
        "innerRadius": "65%"

      },
      {
        'conversion' : '',
        'count' : 100 - (Math.round((accumulatedValue/accumulatedTarget) * 100)),
        "innerRadius": "65%"

      }];


      AmCharts.makeChart(activity+"gaugechart-daily-interception", {
        "type": "pie",
        "theme": "light",
        "innerRadius": "60%",
        "labelsEnabled": false,
        "dataProvider": dataProvider,
        "balloonText": "[[value]]",
        "valueField": "count",
        "fontSize": 30,
        "titleField": "",
        "allLabels": [{
          "text": "",
          "align": "center",
          "bold": true,
          "y": 150
        }, {
          "text": Math.round((accumulatedValue/accumulatedTarget) * 100)+" %",
          "align": "center",
          "bold": true,
          "y": 130,
          "radius": "20%",
        }],
        "balloon": {
          "drop": true,
          "adjustBorderColor": false,
          "color": "#FFFFFF",
          "fontSize": 16
        },
        "legend": {},
        "export": {
          "enabled": true,
          "menu": [{
            "format": "PNG",
            "class": "export-main",
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

    if(chartId == 'line-chart2'){

      $('.daily-sale-target-value').html(accumulatedValue+'/'+accumulatedTarget);

      if(activity == 'activity_2-'){

        accumulatedTarget = 91728;
        $('.daily-sale-target-value').html(accumulatedValue+'/'+accumulatedTarget);
      }

      let dataProvider = [{
        'conversion' : 'Tarang',
        'count' : Math.round((accumulatedValue/accumulatedTarget) * 100),
        "innerRadius": "65%"

      },
      {
        'conversion' : 'Tarang',
        'count' : 100 - (Math.round((accumulatedValue/accumulatedTarget) * 100)),
        "innerRadius": "65%"

      }];


      AmCharts.makeChart(activity+"gaugechart-daily-sale", {
        "type": "pie",
        "theme": "light",
        "innerRadius": "60%",
        "labelsEnabled": false,
        "dataProvider": dataProvider,
        "balloonText": "[[value]]",
        "valueField": "count",
        "titleField": "",
        "fontSize" : 30,
        "allLabels": [{
          "text": "",
          "align": "center",
          "bold": true,
          "y": 50
        }, {
          "text": Math.round((accumulatedValue/accumulatedTarget) * 100)+" %",
          "align": "center",
          "bold": true,
          "y":130,
          "radius": "20%",
        }],
        "balloon": {
          "drop": true,
          "adjustBorderColor": false,
          "color": "#FFFFFF",
          "fontSize": 16
        },
        "legend": {},
        "export": {
          "enabled": true,
          "menu": [{
            "format": "PNG",
            "class": "export-main",
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

    if(chartId == 'line-chart3'){

      $('.daily-wet-sampling-target-value').html(accumulatedValue+'/'+accumulatedTarget);

      if(activity == 'activity_2-'){

        accumulatedTarget = 146765;

        $('.daily-wet-sampling-target-value').html(accumulatedValue+'/'+accumulatedTarget);

      }
      let dataProvider = [{
        'conversion' : 'Tarang',
        'count' : Math.round((accumulatedValue/accumulatedTarget) * 100),
        "innerRadius": "65%"

      },
      {
        'conversion' : 'Tarang',
        'count' : 100 - (Math.round((accumulatedValue/accumulatedTarget) * 100)),
        "innerRadius": "65%"

      }];


      AmCharts.makeChart(activity+"gaugechart-daily-wet-sampling", {
        "type": "pie",
        "theme": "light",
        "innerRadius": "60%",
        "labelsEnabled": false,
        "dataProvider": dataProvider,
        "balloonText": "[[value]]",
        "valueField": "count",
        "titleField": "",
        "fontSize" : 30,
        "allLabels": [{
          "text": "",
          "align": "center",
          "bold": true,
          "y": 50
        }, {
          "text": Math.round((accumulatedValue/accumulatedTarget) * 100)+" %",
          "align": "center",
          "bold": true,
          "fontSize": 56,
          "y": 130,
          "radius": "20%",
        }],
        "balloon": {
          "drop": true,
          "adjustBorderColor": false,
          "color": "#FFFFFF",
          "fontSize": 56
        },
        "legend": {},
        "export": {
          "enabled": true,
          "menu": [{
            "format": "PNG",
            "class": "export-main",
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


    var chart = AmCharts.makeChart(activity+chartId, {
      "type": "serial",
      "theme": "light",
      "legend": {
        "horizontalGap": 10,
        "markerSize": 10,
        "data": [{
         "title": "Target",
         "color": "#EB1C24"
       }, {
         "title": "Achieved",
         "color": "#FDBB13"
       }]
     },

     "dataProvider": dataProvider,
     "valueAxes": [{
    // stackType control the stacking behaviour of the graphs
    // https://docs.amcharts.com/3/javascriptcharts/ValueAxis#stackType
    "stackType": "none",
    "position": "left"
  }],
  "graphs": [{
    "title": "Target",
    "valueField": "target",
    "fillAlphas": 0.6,
    "fillColors" : "#EB1C24",
  }, {
    "title": "Achieved",
    "valueField": "value",
    "fillAlphas": 0.6,
    "fillColors" : "#FDBB13",
  }],
  "chartScrollbar": {},
  "chartCursor": {},
  "categoryField": "date",
  "categoryAxis": {
    "parseDates": true,
    "minorGridEnabled": true
  },
  "export": {

    "enabled": true,
    "menu": [{
      "format": "PNG",
      "class": "export-main",
      "label": "Download",
      "multiplier": 2,
      "content": [ "Saved from:", window.location.href, {
        "image": "reference",
        "fit": [ 523.28, 769.89 ] ,

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
