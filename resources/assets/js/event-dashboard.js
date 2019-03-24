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
    chartId : '',
    url : 'activity_data/charts-data',
  },
  {
    chartId : '',
    url : 'activity_data/charts-data?lep=1',
  },
  {
    chartId : '',
    url : 'activity_data/charts-data?lepp=1',
  },
  {
    chartId : '',
    url : 'activity_data/charts-data?tin_pack=1',
  },
  {
    chartId : '',
    url : 'activity_data/charts-data?did_not_buy=1',
  }

  ];


  let query = '';

  $.each(chartsType , (index, chartType)=>{

    console.log(chartType, index);

    query = chartType.url;

    app.Dashboard.generateGetCall(query).then(response=>{





    });


  })


}