//Require Module
app = require('./config');
//Define Module
$(document).ready(function() {

  getGeneralValues();

  $('#apply-search-btn').click(function(e){
    e.preventDefault();

    var dateValue = $('#filter-date').val();

    getGeneralValues(dateValue);


  });
  



});


function getGeneralValues(date) {


  var query = 'total_interceptions=true&total_wet_sampling=true&total_sales=true&total_deals=true&total_teams=true';


  if(date){
    query  += '&created_at='+date;
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
    console.log(response ,12122);

  });



}