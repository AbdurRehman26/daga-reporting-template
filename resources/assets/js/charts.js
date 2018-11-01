
$(document).ready(function() {

  generatePieChart();
  generateBarChart();
  generateGaugeChart();


});



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


function generateBarChart(){
  
var chart = AmCharts.makeChart("chartdiv", {
    "type": "serial",
    "theme": "light",
    "marginRight": 70,
    "dataProvider": [{
      "country": "USA",
      "visits": 3025,
      "color": "#FF0F00"
    }, {
      "country": "China",
      "visits": 1882,
      "color": "#FF6600"
    }, {
      "country": "Japan",
      "visits": 1809,
      "color": "#FF9E01"
    }, {
      "country": "Germany",
      "visits": 1322,
      "color": "#FCD202"
    }, {
      "country": "UK",
      "visits": 1122,
      "color": "#F8FF01"
    }, {
      "country": "France",
      "visits": 1114,
      "color": "#B0DE09"
    }, {
      "country": "India",
      "visits": 984,
      "color": "#04D215"
    }, {
      "country": "Spain",
      "visits": 711,
      "color": "#0D8ECF"
    }, {
      "country": "Netherlands",
      "visits": 665,
      "color": "#0D52D1"
    }, {
      "country": "Russia",
      "visits": 580,
      "color": "#2A0CD0"
    }, {
      "country": "South Korea",
      "visits": 443,
      "color": "#8A0CCF"
    }, {
      "country": "Canada",
      "visits": 441,
      "color": "#CD0D74"
    }],
    "valueAxes": [{
      "axisAlpha": 0,
      "position": "left",
      "title": "Visitors from country"
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
