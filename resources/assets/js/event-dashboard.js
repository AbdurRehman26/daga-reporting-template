//Require Module
app = require('./config');
//Define Module
$(document).ready(function() {

  initApplication();


});


function initApplication() {

  getGeneralValues();

}


function getGeneralValues() {

  var query = 'total_interceptions=true&total_wet_sampling=true&total_sales=true&total_deals=true&total_teams=true';


  app.Dashboard.getTotalRecords(query).then(response=>{

  });


}