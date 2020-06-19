<!DOCTYPE html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Regagro</title>
        
        <link rel="stylesheet" href="{{ URL::asset('style.css') }}">

    </head>
    <body>
        <div id="root"></div>
            <script src="{{mix('js/app.js')}}" ></script>
        </div>
    </body>
</html>
