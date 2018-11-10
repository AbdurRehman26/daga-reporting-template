@extends('welcome',
[ 'hide_header' => false, 'hide_footer' => true, ])
@section('title', 'City wise')
@section('class', 'skin-blue sidebar-mini layout-boxed')
@section('content')


<div class="dashboard-container-main content-wrapper" style="min-height: 1020px;">
  <div style="padding: 50px 30px; background: rgba(236, 238, 243, 1.0); z-index: 999999; font-size: 16px; font-weight: 600;">
    City Wise Summary
    <a  id="activity_1_download_summary" style="display: none;" class="btn btn-success pull-right" href="{{ route('download.summary' , ['activity' => '1']) }}" >Download</a>
    <a  id="activity_2_download_summary" class="btn btn-success pull-right" href="{{ route('download.summary', ['activity' => '1']) }}" >Download</a>

  </div>
  <!-- Content Header (Page header) -->
  
  <section class="content">


    <div class="nav-tabs-custom">
      <ul class="nav nav-tabs">
        <li><a id="activity_1_download_summary-tab"  href="#activity_1" data-toggle="tab" aria-expanded="true">Activity 1</a></li>
        <li class="active"><a  id="activity_2_download_summary-tab" href="#activity_2" data-toggle="tab" aria-expanded="false">Activity 2</a></li>
      </ul>
      <div class="tab-content">
        <div class="tab-pane" id="activity_1">





          <div style="height:200px; padding: 20px 30px; background: white; z-index: 999999; font-size: 16px; font-weight: 600;">
            <div class="row col-md-12">
              <div class="col-md-6 form-group">

                <label>Select date:</label>
                <input id="filter-date" type="date" class="form-control">
                <label style="margin-top:20px;">Select city:</label>
                <select id="select-city" class="form-control">
                  <option value="">Select City</option>
                  <option value="1">Lahore</option>
                  <option value="2">Rawalpindi</option>
                </select>
              </div>

              <div class="col-md-2 form-group">

                <label></label>
                <label></label>
                <label></label>
                <label></label>
                <label></label>
                <button id="apply-search-btn-city"  type="button" class="apply-city-search-button btn btn-success form-control">Apply</button>
              </div>

            </div>


          </div>









          <div class="row">

            <div class="col-md-12">  
              <div class="col-md-7">
                <!-- AREA CHART -->
                <div class="box box-primary">
                  <div class="box-header with-border">
                    <h3 class="box-title">Previous Brand Usage :</h3>
                    <div class="box-tools pull-right">
                    </div>
                  </div>
                  <div class="box-body">

                    <div class="donut-charts" id="activity_1-donut-chart1"></div> 

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
                    <h3 class="box-title">Conversion: </h3>
                    <div class="box-tools pull-right">
                    </div>
                  </div>
                  <div class="box-body">

                    <div class="gauge-charts" id="activity_1-gaugechart"></div> 
                  </div>

                  <!-- /.box-body -->
                </div>

                <!-- /.box -->
              </div>


            </div>
            <!-- /.col (RIGHT) -->



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

          </div>
          <!-- /.row -->

          <div class="row"> 
            <div class="col-md-9">
              <!-- LINE CHART -->
              <div class="box box-primary">
                <div class="box-header with-border">
                  <h3 class="box-title">Overall Activity Summary:</h3>
                  <div class="box-tools pull-right">
                  </div>
                </div>
                <div class="box-body">

                  <div  class="chartdiv" id="activity_1-chartdiv"></div>

                </div>
                <!-- /.box-body -->
              </div>

              <!-- /.box -->
            </div>
          </div>



        </div>
        <!-- /.tab-pane -->
        <div class="tab-pane active" id="activity_2">


          <div style="height:200px; padding: 20px 30px; background: white; z-index: 999999; font-size: 16px; font-weight: 600;">
            <div class="row col-md-12">
              <div class="col-md-6 form-group">
                <label>Select date:</label>
                <input id="filter-date" type="date" class="form-control">

                <label style="margin-top:20px;">Select city:</label>
                <select id="select-city" class="form-control">
                  <option value="">Select City</option>
                  <option value="1">Lahore</option>
                  <option value="2">Rawalpindi</option>
                </select>
              </div>

              <div class="col-md-2 form-group">

                <label></label>
                <label></label>
                <label></label>
                <label></label>
                <label></label>
                <button id="apply-search-btn-city" type="button" class="apply-city-search-button btn btn-success form-control">Apply</button>
              </div>

            </div>


          </div>


          <div class="row">

            <div class="col-md-12">  
              <div class="col-md-7">
                <!-- AREA CHART -->
                <div class="box box-primary">
                  <div class="box-header with-border">
                    <h3 class="box-title">Previous Brand Usage :</h3>
                    <div class="box-tools pull-right">
                    </div>
                  </div>
                  <div class="box-body">

                    <div class="donut-charts" id="activity_2-donut-chart1"></div> 

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
                    <h3 class="box-title">Conversion: </h3>
                    <div class="box-tools pull-right">
                    </div>
                  </div>
                  <div class="box-body">

                    <div class="gauge-charts" id="activity_2-gaugechart"></div> 
                  </div>

                  <!-- /.box-body -->
                </div>

                <!-- /.box -->
              </div>


            </div>
            <!-- /.col (RIGHT) -->



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

          </div>
          <!-- /.row -->

          <div class="row"> 
            <div class="col-md-9">
              <!-- LINE CHART -->
              <div class="box box-primary">
                <div class="box-header with-border">
                  <h3 class="box-title">Overall Activity Summary:</h3>
                  <div class="box-tools pull-right">
                  </div>
                </div>
                <div class="box-body">

                  <div class="chartdiv" id="activity_2-chartdiv"></div>

                </div>
                <!-- /.box-body -->
              </div>

              <!-- /.box -->
            </div>
          </div>



        </div>
        <!-- /.tab-pane -->
        <!-- /.tab-pane -->
      </div>
      <!-- /.tab-content -->
    </div>


  </section>



</div>






@endsection
