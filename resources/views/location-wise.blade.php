@extends('welcome',
[ 'hide_header' => false, 'hide_footer' => true, ])
@section('title', 'Ads')
@section('class', 'skin-blue sidebar-mini layout-boxed')
@section('content')


<div class="content-wrapper" style="min-height: 1020px;">
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

      <div class="col-md-9">  
        <div class="col-md-6">
          <!-- AREA CHART -->
          <div class="box box-primary">
            <div class="box-header with-border">
              <h3 class="box-title">Previous Brand Usage :</h3>
              <div class="box-tools pull-right">
              </div>
            </div>
            <div class="box-body">

              <div id="donut-chart1"></div> 

            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
        <!-- /.col (LEFT) -->
        <div class="col-md-6">
          <!-- LINE CHART -->
          <div class="box box-primary">
            <div class="box-header with-border">
              <h3 class="box-title">Trial: </h3>
              <div class="box-tools pull-right">
              </div>
            </div>
            <div class="box-body">

              <div id="gaugechart"></div> 

            </div>
            <!-- /.box-body -->
          </div>

          <!-- /.box -->
        </div>

        
        <div class="col-md-12">
          <!-- LINE CHART -->
          <div class="box box-primary">
            <div class="box-header with-border">
              <h3 class="box-title">Overall Activity Summary:</h3>
              <div class="box-tools pull-right">
              </div>
            </div>
            <div class="box-body">

              <div id="chartdiv"></div>

            </div>
            <!-- /.box-body -->
          </div>

          <!-- /.box -->
        </div>


      </div>
      <!-- /.col (RIGHT) -->

      <div class="col-md-3">

        <div class="small-box bg-aqua">
          <div class="inner">
            <h3>150</h3>

            <p>Total Interceptions</p>
          </div>
        </div>

        <div class="small-box bg-aqua">
          <div class="inner">
            <h3>150</h3>

            <p>Total WET Sampling</p>
          </div>
        </div>

        <div class="small-box bg-aqua">
          <div class="inner">
            <h3>150</h3>

            <p>Total Sales</p>
          </div>
        </div>

        <div class="small-box bg-aqua">
          <div class="inner">
            <h3>150</h3>

            <p>Total Deals Sold</p>
          </div>
        </div>

        <div class="small-box bg-aqua">
          <div class="inner">
            <h3>150</h3>

            <p>Number of teams working</p>
          </div>
        </div>

      </div>

    </div>
    <!-- /.row -->

  </section>
  <!-- /.content -->
</div>






@endsection
