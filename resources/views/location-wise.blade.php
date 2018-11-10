@extends('welcome',
[ 'hide_header' => false, 'hide_footer' => true, ])
@section('title', 'Location wise')
@section('class', 'skin-blue sidebar-mini layout-boxed')
@section('content')


<div class="dashboard-container-main content-wrapper" style="min-height: 1020px;">
  <div style="padding: 50px 30px; background: rgba(236, 238, 243, 1.0); z-index: 999999; font-size: 16px; font-weight: 600;">
    Over All Summary
    <a  id="activity_1_download_summary" style="display: none;"  class="btn btn-success pull-right" href="{{ route('download.summary' , ['activity' => '1']) }}" >Download</a>
    <a  id="activity_2_download_summary" class="btn btn-success pull-right" href="{{ route('download.summary', ['activity' => '1']) }}" >Download</a>

  </div>
  <!-- Content Header (Page header) -->
  
  <section class="content">








    <div class="nav-tabs-custom">
      <ul class="nav nav-tabs">
        <li ><a id="activity_1_download_summary-tab"  href="#activity_1" data-toggle="tab" aria-expanded="true">Activity 1</a></li>
        <li class="active"><a  id="activity_2_download_summary-tab" href="#activity_2" data-toggle="tab" aria-expanded="false">Activity 2</a></li>
      </ul>
      <div class="tab-content">
        <div class="tab-pane" id="activity_1">


          <div style="height:300px; padding: 20px 30px; background: white; z-index: 999999; font-size: 16px; font-weight: 600;">
            <div class="row col-md-12">
              <div class="col-md-6 form-group">
                <label>Select date:</label>
                <input id="filter-date" type="date" class="form-control">

                <label style="margin-top:20px;">Select city:</label>
                <select id="select-city" class="form-control">
                  <option value="1">Lahore</option>
                  <option value="2">Rawalpindi</option>
                </select>
                <label style="margin-top:20px;">Select team Member:</label>

                <div id="select-location-team-member" class="select-location-team-member"></div>

              </div>
              <div class="col-md-2 form-group">
                <label></label>
                <button id="apply-search-btn-location" type="button" class="btn btn-success form-control">Apply</button>
              </div>

            </div>


          </div>

          <div id="map1"></div>



        </div>
        <!-- /.tab-pane -->
        <div class="tab-pane  active" id="activity_2">


          <!-- Content Header (Page header) -->
          <div style="height:300px; padding: 20px 30px; background: white; z-index: 999999; font-size: 16px; font-weight: 600;">
            <div class="row col-md-12">
              <div class="col-md-6 form-group">
                <label>Select date:</label>
                <input id="filter-date" type="date" class="form-control">

                <label style="margin-top:20px;">Select city:</label>
                <select id="select-city" class="form-control">
                  <option value="1">Lahore</option>
                  <option value="2">Rawalpindi</option>
                </select>
                <label style="margin-top:20px;">Select team:</label>

                <div id="select-location-team-member"></div>

              </div>
              <div class="col-md-2 form-group">
                <label></label>
                <button id="apply-search-btn-location" type="button" class="btn btn-success form-control">Apply</button>
              </div>

            </div>


          </div>

          <div id="map2"></div>


        </div>
        <!-- /.tab-pane -->
        <!-- /.tab-pane -->
      </div>
      <!-- /.tab-content -->
    </div>


  </section>



</div>






@endsection




<style type="text/css">

#map1 , #map2 {
  height: 100%;
}

</style>