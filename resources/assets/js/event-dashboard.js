//Require Module
app = require('./config');
//Define Module
$(document).ready(function() {

  initApplication();


});


function initApplication() {

  $('#apply-search-btn').click(function(){  

    var date = $('.filter-date').val();
    var city_id = $('.select-city').val();

    getGeneralValues(date, city_id);


    getChartsData(date, city_id);





  });



  getGeneralValues();


  getChartsData()


  getActivityData();
  

  getAttendanceData();


  if(!$('#myGrid2').length && !$('#myGrid').length){

    $('.left-bar-link').hide();

  }

  $('.filter-date').daterangepicker();

}


function getGeneralValues(date, city_id) {

  var query = 'activity_data/total?total_interceptions=true&total_wet_sampling=true&total_sales=true&total_deals=true&total_teams=true';

  if(date){
    query += '&date='+date;
  }

  if(city_id){
    query += '&city_id='+city_id;
  }



  app.Dashboard.generateGetCall(query).then(response=>{

    var i = 1;
    $.each(response , (key, value)=>{
      $('.kpi-widget-'+i).html(value);
      i++;
    })


  });

}

function getChartsData(date, city_id) {

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
  }];


  let query = '';

  $.each(chartsType , (index, chartType)=>{

    console.log(chartType, index);

    query = chartType.url;

    if(date){
      query += '&date='+date;
    }

    if(city_id){
      query += '&city_id='+city_id;
    }



    app.Dashboard.generateGetCall(query).then(response=>{

      app.Chart.generateBarChart(chartType.chartId, response);


    });


  });


}

function getActivityData(page) {



  var columnDefs = [
  {headerName: "Team", field: "team_id"},
  {headerName: "BA ID", field: "ba_id"},
  {headerName: "CNIC", field: "cnic"},
  {headerName: "Customer Name", field: "customer_name"},
  {headerName: "Customer Number", field: "customer_number"},
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
  
  if(page){
    query+='&page='+page;  
  }


    // specify the data
    var rowData = [];

    app.Dashboard.generateGetCall(query).then(response=>{

      rowData = response.data;
      pagination = response.pagination;

      console.log(pagination);

    // let the grid know which columns and what data to use
    var gridOptions = {
      columnDefs: columnDefs,
      rowData: rowData
    };

  // lookup the container we want the Grid to use
  var eGridDiv = document.querySelector('#myGrid');

  // create the grid passing in the div to use together with the columns & data we want to use
  new agGrid.Grid(eGridDiv, gridOptions);

  initPagination(pagination);

});

  }


  function initPagination(pagination) {


    $('#pagination-demo').twbsPagination({
      totalPages: pagination.pages.length,
      visiblePages: 5,
      next: 'Next',
      prev: 'Prev',
      onPageClick: function (event, page) {


        $('#myGrid').html('');
        $('#myGrid2').html('');



        getActivityData(page);
        getAttendanceData(page);


      }
    });



  }

  function getAttendanceData(page) {


   var columnDefs = [
   {headerName: "BA ID", field: "ba_id"},
   {headerName: "Time", field: "time"},
   {headerName: "Date", field: "date"},
   {headerName: "Location", field: "location"}
   ];



   query = 'attendance?pagination=true';


   if(page){
    query+='&page='+page;  
  }


    // specify the data
    var rowData = [];
    var pagination = [];

    app.Dashboard.generateGetCall(query).then(response=>{

      rowData = response.data;
      pagination = response.pagination;

      console.log(pagination);
    // let the grid know which columns and what data to use
    var gridOptions = {
      columnDefs: columnDefs,
      rowData: rowData
    };

  // lookup the container we want the Grid to use
  // var eGridDiv = document.querySelector('#myGrid2');
  var eGridDiv = document.querySelector('#myGrid2');

  // create the grid passing in the div to use together with the columns & data we want to use
  new agGrid.Grid(eGridDiv, gridOptions);

  initPagination(pagination);


});

  }


