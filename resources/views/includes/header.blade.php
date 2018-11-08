<header class="main-header">
  <!-- Logo -->
  <a href="/" class="logo">
    
    <!-- mini logo for sidebar mini 50x50 pixels -->
    <img style="height:45px;" src="/img/Engro_Corporation.svg.png" class="user-image" alt="User Image">
    <img  style="height:50px;" src="/img/app_icon.png" class="user-image" alt="User Image">
    
  </a>
  <!-- Header Navbar: style can be found in header.less -->
  <nav class="navbar navbar-static-top">
    <!-- Sidebar toggle button-->
    
    <div class="navbar-custom-menu">
      <ul class="nav navbar-nav">
        
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



      <li class="dropdown user user-menu">
        <img src="https://www.ialm.academy/upload/user-dummy.png" class="user-image" alt="User Image">
      </li>
    </ul>
  </div>
</nav>
</header>
