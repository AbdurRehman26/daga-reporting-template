//Require Module
app = require('./config');
//Define Module
$(document).ready(function() {

  initApplication();


});


function initApplication() {

  getGeneralValues();


  getChartsData()


  getActivityData();


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


  });


}

function getActivityData() {


 var columnDefs = [
 {headerName: "Team", field: "team_id"},
 {headerName: "BA ID", field: "ba_id"},
 {headerName: "Ba Name", field: "ba_name"},
 {headerName: "Customer Name", field: "customer_name"},
 {headerName: "Customer Number", field: "customer_number"},
 {headerName: "CNIC", field: "cnic"},
 {headerName: "Sale", field: "sale"},
 {headerName: "LEP", field: "lep"},
 {headerName: "LEPP", field: "lepp"},
 {headerName: "TIN PACK", field: "tin_pack"},
 {headerName: "DID NOT BUY", field: "did_not_buy"},
 {headerName: "Primary", field: "primary"},
 {headerName: "Secondary", field: "secondary"},
 {headerName: "Time", field: "time"},
 {headerName: "Date", field: "date"},
 {headerName: "Location", field: "location"},
 ];



 query = 'activity_data?pagination=true';
    // specify the data
    var rowData = [];

    app.Dashboard.generateGetCall(query).then(response=>{

      rowData = response.data;

    // let the grid know which columns and what data to use
    var gridOptions = {
      columnDefs: columnDefs,
      rowData: rowData
    };

  // lookup the container we want the Grid to use
  var eGridDiv = document.querySelector('#myGrid');

  // create the grid passing in the div to use together with the columns & data we want to use
  new agGrid.Grid(eGridDiv, gridOptions);

});

  }