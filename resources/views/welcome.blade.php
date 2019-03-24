<!doctype html>
<html lang="en">
@include('includes.head')

<body class="@yield('class')">
	<div class="wrapper">
	@include('includes.header')
	@include('includes.left-navbar')
		
    @yield('content')

    @yield('after-footer')
    @yield('scripts')
	</div>

</body>
</html>
