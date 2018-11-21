//Require Module
app = require('./config');
//Define Module
$(document).ready(function() {


  var activity = 'activity_2-';

  initApplication(activity);



    $('.apply-city-search-button').click(function(e){
      e.preventDefault();



      var cityValue = $('.tab-pane.active .select-city').val();
      var dateValue = $('.tab-pane.active .filter-date').val();


      getGeneralValues(dateValue , cityValue);


    });

    $('.apply-search-btn-team').click(function(e){
      e.preventDefault();

      var cityValue = $('.tab-pane.active .select-city').val();
      var teamValue = $('.tab-pane.active .select-team').val();

      getGeneralValues(false , cityValue, teamValue);


    });


    $(document).on('click' , '#apply-search-btn-location' , function(e){
      e.preventDefault();

      var dateValue = $('.tab-pane.active .filter-date').val();
      var cityId = $('.tab-pane.active .select-city').val();
      var teamMember = $('.tab-pane.active .select-team').val();


      getLocationValues(cityId, dateValue, teamMember);


    });


    var query = 'team-member'
    app.Dashboard.generateGetCall(query).then(response=>{
      var data = response.data;
      for(key in data){
        var selectBox = '<select id="select-team-member" class="select-team-member form-control"><option value="">Select Team</option>';

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


    teamSelectionMethods();


  });


function teamSelectionMethods(){

    $(document).on('change' , '.tab-pane.active .select-city' , function(){
      console.log($(this).val() , 11111);
      if($(this).val()){


        $('.select-team-box').show();

        if($(this).val() == 1){

          $('.lahore-team').show();
          $('.pind-team').hide();

        }else{

          $('.pind-team').show();
          $('.lahore-team').hide();

        }




      }else{
        $('.select-team-box').hide();
        $('.select-team-box-class').each(function(){
          $(this).val('');
        });
      }


      $('.select-team-box-class').each(function(){
        $(this).val('');
      });


    });





}


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



  teamSelectionMethods();



}





function  getLocationValues(cityId, dateValue, teamMember , activity) {
  console.log(activity , 111);

  if(!activity){
    activity = $('.tab-pane.active').attr('id');
  }

  var query = 'location-values?time=1';

  if(cityId){
    query+= '&city='+cityId;
  }

  if(dateValue){
    query += '&created_at='+dateValue;
  }

  if(teamMember){
    query += '&team='+teamMember;
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
    activity += '-';

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

  var downloadButton = 'download/summary?'
  
  if(activity == 'activity_2-'){
    $('#activity_2_download_summary').attr('href' , downloadButton+query);
  }else{
    $('#activity_1_download_summary').attr('href' , downloadButton+query);
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