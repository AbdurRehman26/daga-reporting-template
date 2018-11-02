//Require Module
app = require('./config');
//Define Module
$(document).ready(function() {


  var query = 'total_interceptions=true&total_wet_sampling=true&total_sales=true&total_deals=true&total_teams=true';

  app.Dashboard.getTotalRecords(query).then(response=>{
    $('.total-interception-value').html(response.data.total_interceptions);
    $('.total-wet-sampling-value').html(response.data.total_wet_sampling);
    $('.total-sales-value').html(response.data.total_sales);
    $('.total-deals-value').html(response.data.total_deals);
    $('.total-teams-value').html(response.data.total_teams);

    app.Chart.generatePieChart();
    app.Chart.generateBarChart(response.data);
    app.Chart.generateGaugeChart();



  })
  

});
