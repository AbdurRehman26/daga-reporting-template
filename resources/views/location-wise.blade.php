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
  <div style="height:150px; padding: 20px 30px; background: white; z-index: 999999; font-size: 16px; font-weight: 600;">
    <div class="row col-md-12">
      <div class="col-md-6 form-group">
        <label>Select date:</label>
        <input type="date" class="form-control">
      </div>
      <div class="col-md-2 form-group">
        <label></label>
        <button type="button" class="btn btn-success form-control">Apply</button>
      </div>

    </div>


  </div>

  <!-- Main content -->
  <section class="content">
    <div class="row">

      <!-- /.col (RIGHT) -->


        <div id="location-map"></div>
        


    </div>
    <!-- /.row -->

  </section>
  <!-- /.content -->
</div>






@endsection


<style type="text/css">
  
   #location-map {
        height: 100%;
      }

</style>