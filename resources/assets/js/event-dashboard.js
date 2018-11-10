//Require Module
app = require('./config');
//Define Module
$(document).ready(function() {




  var activity = 'activity_2-';

  initApplication(activity);

    /// ACtivity 2 




    $('#apply-search-btn').click(function(e){
      e.preventDefault();

      var dateValue = $('.tab-pane.active #filter-date').val();

      getGeneralValues(dateValue);


    });


    $('.apply-city-search-button').click(function(e){
      e.preventDefault();



      var cityValue = $('.tab-pane.active #select-city').val();
      var dateValue = $('.tab-pane.active #filter-date').val();


      getGeneralValues(dateValue , cityValue);


    });

    $('.apply-search-btn-team').click(function(e){
      e.preventDefault();

      var cityValue = $('.tab-pane.active #select-city').val();
      var teamValue = $('.tab-pane.active #select-team').val();

      getGeneralValues(false , cityValue, teamValue);


    });


    $('#apply-search-btn-location').click(function(e){
      e.preventDefault();

      var dateValue = $('.tab-pane.active #filter-date').val();
      var cityId = $('.tab-pane.active #select-city').val();
      var teamMember = $('.tab-pane.active #select-team-member').val();


      getLocationValues(cityId, dateValue, teamMember);


    });


    var query = 'team-member'
    app.Dashboard.generateGetCall(query).then(response=>{
      var data = response.data;
      for(key in data){
        var selectBox = '<select id="select-team-member" class="form-control"><option value="">Select Team</option>';

        for(key in data){
          selectBox += '<option value="'+data[key].name+'">'+data[key].name+'</option>'
        }

        selectBox += '</select>';
        $('.select-location-team-member').html(selectBox);

      }


    });



    $('#activity_1_download_summary-tab').click(function(){
      $('#activity_2_download_summary').hide();
      $('#activity_1_download_summary').show();

      var activity = 'activity_1-';

      initApplication(activity);


    });

    $('#activity_2_download_summary-tab').click(function(){

      $('#activity_1_download_summary').hide();
      $('#activity_2_download_summary').show();
      
      var activity = 'activity_2-';

      initApplication(activity);

    });


  });


function initApplication(activity) {

  if(!activity){

    activity = $('.tab-pane.active').attr('id');

  }

  getGeneralValues(false, false, false, activity);
  getCityGeneralValues(1, activity);
  getCityGeneralValues(2, activity);

  getLocationValues(1 , false, false,  activity)


  var query = 'daily-target?interceptions=true&activity='+activity;
  app.Dashboard.generateGetCall(query).then(response=>{
    app.Chart.generateLineChart(response.data, 'line-chart1',activity);
  });

  var query = 'daily-target?quantity=true&activity='+activity;
  app.Dashboard.generateGetCall(query).then(response=>{
    app.Chart.generateLineChart(response.data, 'line-chart2',activity);
  });

  var query = 'daily-target?total_sampling_quantity=true&activity='+activity;
  app.Dashboard.generateGetCall(query).then(response=>{
    app.Chart.generateLineChart(response.data, 'line-chart3',activity);
  });






}





function  getLocationValues(cityId, dateValue, teamMember , activity) {

  if(!activity){
    activity = $('.tab-pane.activity').attr('id');
  }

  var query = 'location-values';

  if(cityId){
    query+= '?city='+cityId;
  }

  if(dateValue){
    query += '&created_at='+dateValue;
  }

  if(teamMember){
    query += '&ba_id='+teamMember;
  }

  if(activity){
    query += '&activity='+activity;
  }


  app.Dashboard.generateGetCall(query).then(response=>{
    app.Map.initMap(cityId, response.data);

  })

}


function getGeneralValues(date, city, team, activity) {

  if(!activity){

    activity = $('.tab-pane.active').attr('id');
  }

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

  if(activity){
    query += '&activity='+activity;
  }

  app.Dashboard.getTotalRecords(query).then(response=>{
    $('.tab-pane.active .total-interception-value').html(response.data.total_interceptions);
    $('.tab-pane.active .total-wet-sampling-value').html(response.data.total_wet_sampling);
    $('.tab-pane.active .total-sales-value').html(response.data.total_sales);
    $('.tab-pane.active .total-deals-value').html(response.data.total_deals);
    $('.tab-pane.active .total-teams-value').html(response.data.total_teams);
    $('.tab-pane.active .total-no-response-value').html(response.data.total_no_response);

    app.Chart.generateBarChart(response.data, activity);
    app.Chart.generateGaugeChart(response.data, activity);

  });







  app.Dashboard.getBrandUsage(query).then(response=>{

    app.Chart.generatePieChart(response.data, activity);

  });

  // var query = 'team';
  // app.Dashboard.generateGetCall(query).then(response=>{


  // });

}



function getCityGeneralValues(city, activity) {

  var query = 'total_interceptions=true&total_wet_sampling=true&total_sales=true&total_deals=true&total_teams=true';

  if(city){
    query += '&city='+city;
  }  


  if(activity){
    query += '&activity='+activity;
  }

  app.Dashboard.getTotalRecords(query).then(response=>{

    if(city == 1){

      app.Chart.generateLahoreBarChart(response.data, activity);
    }else{
      app.Chart.generatePindiBarChart(response.data, activity);

    }


  });


}