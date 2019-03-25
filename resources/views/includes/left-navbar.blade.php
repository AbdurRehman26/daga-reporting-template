<aside class="main-sidebar">
  <!-- sidebar: style can be found in sidebar.less -->
  <section class="sidebar" style="height: auto;">
    
    <ul class="sidebar-menu tree" data-widget="tree">
      <li class="header">MAIN NAVIGATION</li>
      <li class="left-bar-link active treeview menu-open">
        <a href="{{route('agency-panel')}}">
          <i class="fa fa-th"></i> <span>Activity Data</span>
          <span class="pull-right-container">
          </span>
        </a>
      </li>
      <li class="left-bar-link  active treeview menu-open">
        <a href="{{route('attendance')}}">
          <i class="fa fa-th"></i> <span>Attendance</span>
          <span class="pull-right-container">
          </span>
        </a>
      </li>


      <li class="header">Account</li>
      <li>
        
        <a href="{{ route('logout') }}"
        onclick="event.preventDefault();
        document.getElementById('logout-form').submit();">
        Logout
      </a>

      <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
        {{ csrf_field() }}
      </form>

      
    </li>
    
  </ul>
</section>
<!-- /.sidebar -->
</aside>