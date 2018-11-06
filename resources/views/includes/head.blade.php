<head>
    <title>@yield('title') | Tarang Admin</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <base href="{{url('/')}}"> @yield('before-base-css')
    <link href="{{url(mix('css/app.css'))}}" rel="stylesheet">
    <link rel="shortcut icon" type="image/png" href="{{asset('images/favicon.png')}}" /> 
    <!-- map key -->

    
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDdcUDKZOfYStkCC6AOz0utjI11D9LUgjM"
    async defer></script>

    <script src="{{url(mix('js/admin-app.js'))}}"></script>

    <link rel="stylesheet" href="https://www.amcharts.com/lib/3/plugins/export/export.css" type="text/css" media="all" />

    <script src="https://www.amcharts.com/lib/3/amcharts.js"></script>
    <script src="https://www.amcharts.com/lib/3/pie.js"></script>
    <script src="https://www.amcharts.com/lib/3/serial.js"></script>
    <script src="https://www.amcharts.com/lib/3/gauge.js"></script>
    <script src="https://www.amcharts.com/lib/3/themes/light.js"></script>

    <script src="https://www.amcharts.com/lib/3/plugins/export/export.min.js"></script>

</head>