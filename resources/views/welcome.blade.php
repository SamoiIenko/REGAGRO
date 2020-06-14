<!DOCTYPE html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Regagro</title>
        
        <link rel="stylesheet" href="{{ URL::asset('style.css') }}">

        <script src="{{ URL::asset('jquery-3.5.1.js') }}"></script>
        <script src="{{ URL::asset('script.js') }}"></script>

    </head>
    <body>
        <div class="content">
            <form class="formData" method="POST" action="#">
                <p>Название города<input required type="text" placeholder="Введите название города" id="nameCity"><br>
                <p>Широта<input required type="text" placeholder="Введите широту" id="latitude"><br>
                <p>Долгота<input required type="text" placeholder="Введите долготу" id="longitude"><br>
                <p>Количество населения<input required type="text" placeholder="Введите количество населения" id="numberInhabit"><br>
                <button type="button" id="getRequest">Отправить</button>
            </form>

            <table id="getRequestData">
                <tr>
                    <th>Название города</th>
                    <th>Широта</th>
                    <th>Долгота</th>
                    <th>Количество населения</th>
                </tr>
                @foreach ($tasks as $task) 
                    <tr><td>{{$task->name_city}}</td>
                        <td>{{$task->latitude}}</td>
                        <td>{{$task->longitude}}</td>
                        <td>{{$task->number_inhabit}}</td>
                    </tr> 
                @endforeach   
            </table>
        </div>
    </body>
</html>
