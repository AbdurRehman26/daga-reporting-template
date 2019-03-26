@extends('welcome',
[ 'hide_header' => false, 'hide_footer' => true, ])
@section('title', 'Summary')
@section('class', 'skin-blue sidebar-mini layout-boxed')
@section('content')


<div class="dashboard-container-main content-wrapper" style="min-height: 1020px;">
  <div style="padding: 30px 30px; background: rgba(236, 238, 243, 1.0); z-index: 999999; font-size: 16px; font-weight: 600;">

   <a  id="activity_2_download_summary" class="btn btn-success pull-right" href="{{ route('download.attendance') }}" >Download</a>

    
  </div>

  <section class="content">





    <div class="nav-tabs-custom">
      <ul class="nav nav-tabs">

      </ul>
      <div class="tab-content">
        <div class="tab-pane active" id="activity_1">

         <div id="myGrid2"  style="height: 800px;width:1000px; overflow: hidden;" class="ag-theme-balham"></div>

       </div>

       <div id="pagination-demo"></div>

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
