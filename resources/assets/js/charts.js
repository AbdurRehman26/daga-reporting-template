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

      var percentageValue = Math.round((tarangValue/totalValue) * 100);

      AmCharts.makeChart("donut-chart1", {
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
          "enabled": true
        }
      });

    }

    function generateBarChart(data){
      let dataProvider = [];
      for(key in data){
        if(key !== 'total_teams' && key !== 'total_no_response' ){

          var color = app.Chart.getColorValue(key);

          dataProvider.push({
            'country' : key.replace('_' , ' '),
            'visits' : data[key],
            'color' : color
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

    function generateLahoreBarChart(data){
      let dataProvider = [];
      for(key in data){
        if(key !== 'total_teams' && key !== 'total_no_response' ){
          var color = app.Chart.getColorValue(key);


          dataProvider.push({
            'country' : key.replace('_' , ' '),
            'visits' : data[key],
            'color' : color
          })
          
        }
      }



      var chart = AmCharts.makeChart("chartdiv-lahore", {
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

    function generatePindiBarChart (data){
      let dataProvider = [];
      for(key in data){
        if(key !== 'total_teams' && key !== 'total_no_response' ){
          var color = app.Chart.getColorValue(key);

          dataProvider.push({
            'country' : key.replace('_' , ' '),
            'visits' : data[key],
            'color' : color
          })
          
        }
      }



      var chart = AmCharts.makeChart("chartdiv-pindi", {
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

    function generateLineChart(data, chartId) {
      
      let dataProvider = [];
      for(key in data){
        dataProvider.push({
          'year' : data[key].created_at_date,
          'value' : parseInt(data[key].count)
        })
      }

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




      var chart = AmCharts.makeChart(chartId, {
        "type": "serial",
        "theme": "light",
        "marginTop":0,
        "marginRight": 80,
        "dataProvider": dataProvider,
        "valueAxes": [{
          "axisAlpha": 0,
          "position": "left",
          "maximum" : thresholdValue
        }],
        "graphs": [{
          "id":"g1",
          "balloonText": "[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>",
          "bullet": "round",
          "bulletSize": 8,
          "lineColor": "#d1655d",
          "lineThickness": 2,
          "negativeLineColor": "#637bb6",
          "type": "smoothedLine",
          "valueField": "value"
        }],
        "chartScrollbar": {
          "graph":"g1",
          "gridAlpha":0,
          "color":"#888888",
          "scrollbarHeight":55,
          "backgroundAlpha":0,
          "selectedBackgroundAlpha":0.1,
          "selectedBackgroundColor":"#888888",
          "graphFillAlpha":0,
          "autoGridCount":true,
          "selectedGraphFillAlpha":0,
          "graphLineAlpha":0.2,
          "graphLineColor":"#c2c2c2",
          "selectedGraphLineColor":"#888888",
          "selectedGraphLineAlpha":1

        },
        "chartCursor": {
          "categoryBalloonDateFormat": "YYMD",
          "cursorAlpha": 0,
          "valueLineEnabled":true,
          "valueLineBalloonEnabled":true,
          "valueLineAlpha":0.5,
          "fullWidth":true
        },
        "categoryField": "year",
        "categoryAxis": {
          "parseDates": true,
          "minorGridAlpha": 0.1,
          "minorGridEnabled": true
        },
        "export": {
          "enabled": true
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
