@extends('welcome',
[ 'hide_header' => false, 'hide_footer' => true, ])
@section('title', 'Location wise')
@section('class', 'skin-blue sidebar-mini layout-boxed')
@section('content')


<div class="dashboard-container-main content-wrapper" style="min-height: 1020px;">
  <div style="padding: 50px 30px; background: rgba(236, 238, 243, 1.0); z-index: 999999; font-size: 16px; font-weight: 600;">
    Over All Summary
  </div>
  <!-- Content Header (Page header) -->
  <div style="height:300px; padding: 20px 30px; background: white; z-index: 999999; font-size: 16px; font-weight: 600;">
    <div class="row col-md-12">
      <div class="col-md-6 form-group">
        <label>Select date:</label>
        <input type="date" class="form-control">

        <label style="margin-top:20px;">Select city:</label>
        <select id="select-city" class="form-control">
          <option value="1">Lahore</option>
          <option value="2">Pindi</option>
        </select>
        <label style="margin-top:20px;">Select team:</label>
        <select id="select-team" class="form-control">
          <option value="">Select Team</option>
          <option value="1">Team A</option>
          <option value="2">Team B</option>
          <option value="3">Team C</option>
          <option value="4">Team D</option>
          <option value="4">Team E</option>
          <option value="4">Team F</option>
        </select>


      </div>
      <div class="col-md-2 form-group">
        <label></label>
        <button id="apply-search-btn-location" type="button" class="btn btn-success form-control">Apply</button>
      </div>

    </div>


  </div>
  <section class="content">   <!-- Main content -->
    <div id="map"></div>
  </section>

  <!-- /.content -->
</div>






@endsection


<style type="text/css">

#map {
  height: 100%;
}

</style>