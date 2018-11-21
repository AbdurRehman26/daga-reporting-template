@extends('welcome',
[ 'hide_header' => false, 'hide_footer' => true, ])
@section('title', 'Summary')
@section('class', 'skin-blue sidebar-mini layout-boxed')
@section('content')


<div class="dashboard-container-main content-wrapper" style="min-height: 1020px;">
  <div style="padding: 30px 30px; background: rgba(236, 238, 243, 1.0); z-index: 999999; font-size: 16px; font-weight: 600;">
    Over All Summary

    <a  id="activity_1_download_summary"  style="display: none;" class="btn btn-success pull-right" href="{{ route('download.summary' , ['activity' => '1']) }}" >Download</a>
    <a  id="activity_2_download_summary" class="btn btn-success pull-right" href="{{ route('download.summary', ['activity' => '2']) }}" >Download</a>

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



  <div class="nav-tabs-custom">
    <ul class="nav nav-tabs">
      <li><a id="activity_1_download_summary-tab"  href="#activity_1" data-toggle="tab" aria-expanded="true">Activity 1</a></li>
      <li   class="active"><a  id="activity_2_download_summary-tab" href="#activity_2" data-toggle="tab" aria-expanded="false">Activity 2</a></li>
    </ul>
    <div class="tab-content">
      <div class="tab-pane" id="activity_1">


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


          <div class="col-md-12 row">

            <div class="col-md-4">

              <div class="box box-primary">
                <div class="box-header with-border">
                  <h3 class="box-title">Daily interceptions: </h3>
                  <div class="box-tools pull-right">
                  </div>
                </div>
                <div class="box-body">

                  <div class="small-box bg-aqua">
                    <div class="inner">
                      <h3 class="daily-interception-target-value"></h3>

                    </div>
                  </div>

                </div>

                <!-- /.box-body -->
              </div>
            </div>

            <div class="col-md-4">

              <div class="box box-primary">
                <div class="box-header with-border">
                  <h3 class="box-title">Daily sales: </h3>
                  <div class="box-tools pull-right">
                  </div>
                </div>
                <div class="box-body">

                  <div class="small-box bg-aqua">
                    <div class="inner">
                      <h3 class="daily-sale-target-value"></h3>

                    </div>
                  </div>

                </div>

                <!-- /.box-body -->
              </div>
            </div>

            <div class="col-md-4">

              <div class="box box-primary">
                <div class="box-header with-border">
                  <h3 class="box-title">Daily wet sampling: </h3>
                  <div class="box-tools pull-right">
                  </div>
                </div>
                <div class="box-body">

                  <div class="small-box bg-aqua">
                    <div class="inner">
                      <h3 class="daily-wet-sampling-target-value"></h3>

                    </div>
                  </div>

                </div>

                <!-- /.box-body -->
              </div>
            </div>

          </div>



          <div class="col-md-12 row">

            <div class="col-md-4">

              <div class="box box-primary">
                <div class="box-header with-border">
                  <h3 class="box-title">Daily interceptions: </h3>
                  <div class="box-tools pull-right">
                  </div>
                </div>
                <div class="box-body">

                  <div class="gauge-charts" id="activity_1-gaugechart-daily-interception"></div> 

                </div>

                <!-- /.box-body -->
              </div>


            </div>

            <div class="col-md-4">
              <div class="box box-primary">
                <div class="box-header with-border">
                  <h3 class="box-title">Daily sales: </h3>
                  <div class="box-tools pull-right">
                  </div>
                </div>
                <div class="box-body">

                  <div class="gauge-charts" id="activity_1-gaugechart-daily-sale"></div> 
                </div>

                <!-- /.box-body -->
              </div>

            </div>

            <div class="col-md-4">
              <div class="box box-primary">
                <div class="box-header with-border">
                  <h3 class="box-title">Daily wet sampling: </h3>
                  <div class="box-tools pull-right">
                  </div>
                </div>
                <div class="box-body">

                  <div class="gauge-charts" id="activity_1-gaugechart-daily-wet-sampling"></div> 
                </div>

                <!-- /.box-body -->
              </div>

            </div>

          </div>


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

                    <div class="line-chart" id="activity_1-line-chart1"></div> 

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
                    <h3 class="box-title">Daily sale: </h3>
                    <div class="box-tools pull-right">
                    </div>
                  </div>
                  <div class="box-body">

                    <div class="line-chart" id="activity_1-line-chart2"></div> 
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

                    <div class="line-chart-big" id="activity_1-line-chart3"></div> 

                  </div>
                  <!-- /.box-body -->
                </div>
                <!-- /.box -->
              </div>


            </div>
            <!-- /.col (RIGHT) -->

          </div>









          <div class="row col-md-12">  
            <div class="col-md-7">
              <!-- AREA CHART -->
              <div class="box box-primary">
                <div class="box-header with-border">
                  <h3 class="box-title">Current Brand Usage :</h3>
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
                  Non-Product users, who have sampled hot TEA made by Product

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

                <div class="chartdiv" id="activity_1-chartdiv"></div>

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

                <div class="chartdiv-lahore" id="activity_1-chartdiv-lahore"></div>

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

                <div class="chartdiv-pindi" id="activity_1-chartdiv-pindi"></div>

              </div>
              <!-- /.box-body -->
            </div>

            <!-- /.box -->
          </div>
        </div>


      </div>
      


      <div class="tab-pane active" id="activity_2">


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


          <div class="col-md-12 row">

            <div class="col-md-4">

              <div class="box box-primary">
                <div class="box-header with-border">
                  <h3 class="box-title">Daily interceptions: </h3>
                  <div class="box-tools pull-right">
                  </div>
                </div>
                <div class="box-body">

                  <div class="small-box bg-aqua">
                    <div class="inner">
                      <h3 class="daily-interception-target-value"></h3>

                    </div>
                  </div>

                </div>

                <!-- /.box-body -->
              </div>
            </div>

            <div class="col-md-4">

              <div class="box box-primary">
                <div class="box-header with-border">
                  <h3 class="box-title">Daily sales: </h3>
                  <div class="box-tools pull-right">
                  </div>
                </div>
                <div class="box-body">

                  <div class="small-box bg-aqua">
                    <div class="inner">
                      <h3 class="daily-sale-target-value"></h3>

                    </div>
                  </div>

                </div>

                <!-- /.box-body -->
              </div>
            </div>

            <div class="col-md-4">

              <div class="box box-primary">
                <div class="box-header with-border">
                  <h3 class="box-title">Daily wet sampling: </h3>
                  <div class="box-tools pull-right">
                  </div>
                </div>
                <div class="box-body">

                  <div class="small-box bg-aqua">
                    <div class="inner">
                      <h3 class="daily-wet-sampling-target-value"></h3>

                    </div>
                  </div>

                </div>

                <!-- /.box-body -->
              </div>
            </div>

          </div>



          <div class="col-md-12 row">

            <div class="col-md-4">

              <div class="box box-primary">
                <div class="box-header with-border">
                  <h3 class="box-title">Daily interceptions: </h3>
                  <div class="box-tools pull-right">
                  </div>
                </div>
                <div class="box-body">

                  <div class="gauge-charts active" id="activity_2-gaugechart-daily-interception"></div> 
                </div>

                <!-- /.box-body -->
              </div>


            </div>

            <div class="col-md-4">
              <div class="box box-primary">
                <div class="box-header with-border">
                  <h3 class="box-title">Daily sales: </h3>
                  <div class="box-tools pull-right">
                  </div>
                </div>
                <div class="box-body">

                  <div class="gauge-charts active" id="activity_2-gaugechart-daily-sale"></div> 
                </div>

                <!-- /.box-body -->
              </div>

            </div>

            <div class="col-md-4">
              <div class="box box-primary">
                <div class="box-header with-border">
                  <h3 class="box-title">Daily wet sampling: </h3>
                  <div class="box-tools pull-right">
                  </div>
                </div>
                <div class="box-body">

                  <div class="gauge-charts active" id="activity_2-gaugechart-daily-wet-sampling"></div> 
                </div>

                <!-- /.box-body -->
              </div>

            </div>

          </div>


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

                    <div class="line-chart active" id="activity_2-line-chart1"></div> 

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
                    <h3 class="box-title">Daily sale: </h3>
                    <div class="box-tools pull-right">
                    </div>
                  </div>
                  <div class="box-body">

                    <div class="line-chart active" id="activity_2-line-chart2"></div> 
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

                    <div class="line-chart-big active" id="activity_2-line-chart3"></div> 

                  </div>
                  <!-- /.box-body -->
                </div>
                <!-- /.box -->
              </div>


            </div>
            <!-- /.col (RIGHT) -->

          </div>









          <div class="row col-md-12">  
            <div class="col-md-7">
              <!-- AREA CHART -->
              <div class="box box-primary">
                <div class="box-header with-border">
                  <h3 class="box-title">Current Brand Usage :</h3>
                  <div class="box-tools pull-right">
                  </div>
                </div>
                <div class="box-body">

                  <div class="donut-charts active" id="activity_2-donut-chart1"></div> 

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
                  <div class="gauge-charts active" id="activity_2-gaugechart"></div> 
                  Non-Product users, who have sampled hot TEA made by Product

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

                <div class="chartdiv active" id="activity_2-chartdiv"></div>

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

                <div class="chartdiv-lahore active" id="activity_2-chartdiv-lahore"></div>

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

                <div class="chartdiv-pindi active" id="activity_2-chartdiv-pindi"></div>

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
