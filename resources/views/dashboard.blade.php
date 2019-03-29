@extends('welcome',
[ 'hide_header' => false, 'hide_footer' => true, ])
@section('title', 'Summary')
@section('class', 'skin-blue sidebar-mini layout-boxed')
@section('content')


<div class="dashboard-container-main content-wrapper" style="min-height: 1020px;">
  <div style="padding: 30px 30px; background: rgba(236, 238, 243, 1.0); z-index: 999999; font-size: 16px; font-weight: 600;">
    Over All Summary

    <a  id="activity_2_download_summary" class="btn btn-success pull-right" href="{{ route('download') }}" >Download</a>

    <a  id="activity_2_download_summary" style="margin-right : 20px;" class="btn btn-success pull-right" href="{{ route('download.agency' , ['id' => 1]) }}" >Download Data</a>


  </div>



<div style="padding: 30px 30px; background: rgba(236, 238, 243, 1.0); z-index: 999999; font-size: 16px; font-weight: 600;">
    

          <div style="height:200px; padding: 20px 30px; background: white; z-index: 999999; font-size: 16px; font-weight: 600;">
            <div class="row col-md-12">
              <div class="col-md-6 form-group">

                <label>Select date:</label>
                <input type="date" class="filter-date form-control">
                <label style="margin-top:20px;">Select city:</label>
                <select class="select-city form-control">
                  <option value="">All</option>
                  <option value="1">Karachi</option>
                  <option value="2">Sindh</option>
                  <option value="3">Lahore</option>
                  <option value="4">Punjab</option>
                  <option value="5">Islamabad</option>
                  <option value="6">Peshawar</option>
                </select>
              </div>

              <div class="col-md-2 form-group">

                <label></label>
                <label></label>
                <label></label>
                <label></label>
                <label></label>
                <button id="apply-search-btn"  type="button" class="apply-city-search-button btn btn-success form-control">Apply</button>
              </div>

            </div>


          </div>




  </div>

<section class="content">



  <div class="nav-tabs-custom">
    <ul class="nav nav-tabs">
      <li><a id="activity_1_download_summary-tab" class="active"  href="#activity_1" data-toggle="tab" aria-expanded="true"></a></li>
    </ul>
    <div class="tab-content">
      <div class="tab-pane active" id="activity_1">


        <div class="row">


            <div class="col-md-3">
              <div class="small-box bg-aqua">
                <div class="inner">
                  <h3 class="kpi-widget-9"></h3>
                  <p>Productive Calls</p>
                </div>
              </div>
            </div>


          <div class="col-md-12 row">

            <div class="col-md-3">
              <div class="small-box bg-aqua">
                <div class="inner">
                  <h3 class="kpi-widget-1"></h3>
                  <p>Total Interceptions</p>
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div class="small-box bg-aqua">
                <div class="inner">
                  <h3 class="kpi-widget-2"></h3>

                  <p>Total NICs</p>
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div class="small-box bg-aqua">
                <div class="inner">
                  <h3 class="kpi-widget-3"></h3>

                  <p>Total Contacts</p>
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div class="small-box bg-aqua">
                <div class="inner">
                  <h3 class="kpi-widget-4"></h3>

                  <p>Total Sales</p>
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div class="small-box bg-aqua">
                <div class="inner">
                  <h3 class="kpi-widget-5"></h3>
                  <p>LEP</p>
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div class="small-box bg-aqua">
                <div class="inner">
                  <h3 class="kpi-widget-6"></h3>
                  <p>LEPP</p>
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div class="small-box bg-aqua">
                <div class="inner">
                  <h3 class="kpi-widget-7"></h3>
                  <p>TIN PACK</p>
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div class="small-box bg-aqua">
                <div class="inner">
                  <h3 class="kpi-widget-8"></h3>
                  <p>DID NOT BUY</p>
                </div>
              </div>
            </div>

          </div>


          <div class=" row col-md-12">
            <!-- AREA CHART -->
            <div class="box box-primary">
              <div class="box-header with-border">
                <h3 class="box-title">Total Interceptions :</h3>
                <div class="box-tools pull-right">
                </div>
              </div>
              <div class="box-body">

                <div class="chartdiv" id="chart-1"></div> 

              </div>
              <!-- /.box-body -->
            </div>
            <!-- /.box -->
          </div>


          <!-- /.col (RIGHT) -->

        </div>

        <!-- /.row -->


        <div class="row"> 
          <div class="col-md-12">
            <!-- LINE CHART -->
            <div class="box box-primary">
              <div class="box-header with-border">
                <h3 class="box-title">LEP:</h3>
                <div class="box-tools pull-right">
                </div>
              </div>
              <div class="box-body">

                <div class="chartdiv" id="chart-2"></div>

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
                <h3 class="box-title">LEPP:</h3>
                <div class="box-tools pull-right">
                </div>
              </div>
              <div class="box-body">

                <div class="chartdiv" id="chart-3"></div>

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
                <h3 class="box-title">TIN PACK:</h3>
                <div class="box-tools pull-right">
                </div>
              </div>
              <div class="box-body">

                <div class="chartdiv-lahore" id="chart-4"></div>

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
                <h3 class="box-title">DID NOT BUY:</h3>
                <div class="box-tools pull-right">
                </div>
              </div>
              <div class="box-body">

                <div class="chartdiv-pindi" id="chart-5"></div>

              </div>
              <!-- /.box-body -->
            </div>

            <!-- /.box -->
          </div>
        </div>


      </div>
      
      <!-- /.tab-pane -->
      <!-- /.tab-pane -->
      <!-- /.tab-pane -->
    </div>
    <!-- /.tab-content -->
  </div>

</section>
<!-- /.content -->
</div>






@endsection
