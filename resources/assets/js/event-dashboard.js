//Require Module
app = require('./config');
//Define Module
$(document).ready(function() {

  initApplication();


});


function initApplication() {

  getGeneralValues();


  getChartsData()



}


function getGeneralValues() {

  var query = 'activity_data/total?total_interceptions=true&total_wet_sampling=true&total_sales=true&total_deals=true&total_teams=true';


  app.Dashboard.generateGetCall(query).then(response=>{

    var i = 1;
    $.each(response , (key, value)=>{
      $('.kpi-widget-'+i).html(value);
      i++;
    })


  });

}

function getChartsData() {

  let chartsType = [
  {
    chartId : 'chart-1',
    url : 'activity_data/charts-data?type=all',
  },
  {
    chartId : 'chart-2',
    url : 'activity_data/charts-data?type=lep',
  },
  {
    chartId : 'chart-3',
    url : 'activity_data/charts-data?type=lepp',
  },
  {
    chartId : 'chart-4',
    url : 'activity_data/charts-data?type=tin_pack',
  },
  {
    chartId : 'chart-5',
    url : 'activity_data/charts-data?type=did_not_buy',
  }

  ];


  let query = '';

  $.each(chartsType , (index, chartType)=>{

    console.log(chartType, index);

    query = chartType.url;

    app.Dashboard.generateGetCall(query).then(response=>{

      app.Chart.generateBarChart(chartType.chartId, response);


    });


  })


}