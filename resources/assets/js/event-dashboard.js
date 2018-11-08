//Require Module
app = require('./config');
//Define Module
$(document).ready(function() {

  getGeneralValues();

  getCityGeneralValues(1);
  getCityGeneralValues(2);

  getLocationValues(1);

  var query = 'daily-target?interceptions=true'
  app.Dashboard.generateGetCall(query).then(response=>{
    app.Chart.generateLineChart(response.data, 'line-chart1');
  });

  var query = 'daily-target?quantity=true'
  app.Dashboard.generateGetCall(query).then(response=>{
    app.Chart.generateLineChart(response.data, 'line-chart2');
  });

  var query = 'daily-target?total_sampling_quantity=true'
  app.Dashboard.generateGetCall(query).then(response=>{
    app.Chart.generateLineChart(response.data, 'line-chart3');
  });






  $('#apply-search-btn').click(function(e){
    e.preventDefault();

    var dateValue = $('#filter-date').val();

    getGeneralValues(dateValue);


  });


  $('#apply-search-btn-city').click(function(e){
    e.preventDefault();

    var cityValue = $('#select-city').val();

    getGeneralValues(false , cityValue);


  });

  $('#apply-search-btn-team').click(function(e){
    e.preventDefault();

    var cityValue = $('#select-city').val();
    var teamValue = $('#select-team').val();

    getGeneralValues(false , cityValue, teamValue);


  });



});



function  getLocationValues(cityId) {
  var query = 'location-values';

    if(cityId){
      query+= '?city='+cityId;
    }

    app.Dashboard.generateGetCall(query).then(response=>{
      app.Map.initMap(response.data);

    })


}


function getGeneralValues(date, city, team) {

  var query = 'total_interceptions=true&total_wet_sampling=true&total_sales=true&total_deals=true&total_teams=true';


  if(date){
    query  += '&created_at='+date;
  }

  if(city){
    query += '&city='+city;
  }  

  if(team){
    query += '&team='+team;
  }

  app.Dashboard.getTotalRecords(query).then(response=>{
    $('.total-interception-value').html(response.data.total_interceptions);
    $('.total-wet-sampling-value').html(response.data.total_wet_sampling);
    $('.total-sales-value').html(response.data.total_sales);
    $('.total-deals-value').html(response.data.total_deals);
    $('.total-teams-value').html(response.data.total_teams);
    $('.total-no-response-value').html(response.data.total_no_response);

    app.Chart.generateBarChart(response.data);
    app.Chart.generateGaugeChart(response.data);

  });







  app.Dashboard.getBrandUsage(query).then(response=>{

    app.Chart.generatePieChart(response.data);

  });

  // var query = 'team';
  // app.Dashboard.generateGetCall(query).then(response=>{


  // });


}



function getCityGeneralValues(city) {

  var query = 'total_interceptions=true&total_wet_sampling=true&total_sales=true&total_deals=true&total_teams=true';

  if(city){
    query += '&city='+city;
  }  


  app.Dashboard.getTotalRecords(query).then(response=>{

    if(city == 1){

      app.Chart.generateLahoreBarChart(response.data);
    }else{
      app.Chart.generatePindiBarChart(response.data);

    }


  });


}