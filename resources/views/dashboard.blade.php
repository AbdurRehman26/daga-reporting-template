@extends('welcome',
[ 'hide_header' => false, 'hide_footer' => true, ])
@section('title', 'Summary')
@section('class', 'skin-blue sidebar-mini layout-boxed')
@section('content')


<div class="dashboard-container-main content-wrapper" style="min-height: 1020px;">
  <div style="padding: 30px 30px; background: rgba(236, 238, 243, 1.0); z-index: 999999; font-size: 16px; font-weight: 600;">
    Over All Summary
  </div>
  <!-- Content Header (Page header) -->
  <!-- <div style="height:150px; padding: 20px 30px; background: white; z-index: 999999; font-size: 16px; font-weight: 600;">
    <div class="row col-md-12">
      
      <div class="col-md-6 form-group">
        <label>Select date:</label>
        <input min="2018-10-29" id="filter-date" type="date" class="form-control">
      </div>

      <div class="col-md-2 form-group">
        <label></label>
        <button id="apply-search-btn" type="button" class="btn btn-success form-control">Apply</button>
      </div>

    </div>


  </div>
-->
<!-- Main content -->
<section class="content">

  <div class="row">

    <div class="row col-md-12">  
      <div class="col-md-6">
        <!-- AREA CHART -->
        <div class="box box-primary">
          <div class="box-header with-border">
            <h3 class="box-title">Daily interceptions :</h3>
            <div class="box-tools pull-right">
            </div>
          </div>
          <div class="box-body">

            <div id="line-chart1"></div> 

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
            <h3 class="box-title">Daily sale targets: </h3>
            <div class="box-tools pull-right">
            </div>
          </div>
          <div class="box-body">

            <div id="line-chart2"></div> 
          </div>

          <!-- /.box-body -->
        </div>

        <!-- /.box -->
      </div>


    </div>
    <div class="row col-md-12">  
      <div class="col-md-12">
        <!-- AREA CHART -->
        <div class="box box-primary">
          <div class="box-header with-border">
            <h3 class="box-title">Daily wet sampling :</h3>
            <div class="box-tools pull-right">
            </div>
          </div>
          <div class="box-body">

            <div id="line-chart3"></div> 

          </div>
          <!-- /.box-body -->
        </div>
        <!-- /.box -->
      </div>


    </div>
    <!-- /.col (RIGHT) -->

  </div>
  

  <div class="row">

    <div class="col-md-12 row">

      <div class="col-md-3">
        <div class="small-box bg-aqua">
          <div class="inner">
            <h3 class="total-interception-value"></h3>

            <p>Total Interceptions</p>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="small-box bg-aqua">
          <div class="inner">
            <h3 class="total-wet-sampling-value"></h3>

            <p>Total WET Sampling</p>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="small-box bg-aqua">
          <div class="inner">
            <h3 class="total-sales-value"></h3>

            <p>Total Sales</p>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="small-box bg-aqua">
          <div class="inner">
            <h3 class="total-deals-value"></h3>

            <p>Total Deals Sold</p>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="small-box bg-aqua">
          <div class="inner">
            <h3 class="total-no-response-value"></h3>
            <p>No Response</p>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="small-box bg-aqua">
          <div class="inner">
            <h3 class="total-teams-value"></h3>
            <p>Number of teams working</p>
          </div>
        </div>
      </div>

    </div>

    <div class="row col-md-12">  
      <div class="col-md-7">
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
      <div class="col-md-5">
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


    </div>
    <!-- /.col (RIGHT) -->

  </div>
  <!-- /.row -->

  <div class="row"> 
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


  <div class="row"> 
    <div class="col-md-12">
      <!-- LINE CHART -->
      <div class="box box-primary">
        <div class="box-header with-border">
          <h3 class="box-title">Lahore Activity Summary:</h3>
          <div class="box-tools pull-right">
          </div>
        </div>
        <div class="box-body">

          <div id="chartdiv-lahore"></div>

        </div>
        <!-- /.box-body -->
      </div>

      <!-- /.box -->
    </div>
  </div>

  <div class="row"> 
    <div class="col-md-12">
      <!-- LINE CHART -->
      <div class="box box-primary">
        <div class="box-header with-border">
          <h3 class="box-title">Rawalpindi Activity Summary:</h3>
          <div class="box-tools pull-right">
          </div>
        </div>
        <div class="box-body">

          <div id="chartdiv-pindi"></div>

        </div>
        <!-- /.box-body -->
      </div>

      <!-- /.box -->
    </div>
  </div>


</section>
<!-- /.content -->
</div>






@endsection
