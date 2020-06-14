$(document).ready(function(){
    $('#getRequest').click(function(){
        var nameCity = $('#nameCity').val();
        var latitude = $('#latitude').val();
        var longitude = $('#longitude').val();
        var numberInhabit = $('#numberInhabit').val();

        $('#nameCity').val('');
        $('#latitude').val('');
        $('#longitude').val('');
        $('#numberInhabit').val('');

        $.ajax({
            url: '/task',
            type: "POST",
            data: {
                "_token": $('meta[name="csrf-token"]').attr('content'),
                nameCity: nameCity, 
                latitude: latitude,
                longitude: longitude,
                numberInhabit: numberInhabit
            },
            dataType: "json",
            success: function(tasks) {
                if(tasks) { 
                    jQuery('#getRequestData').append(function(){
                        var res = '<tr><td>' + tasks.nameCity + '</td><td>'+ tasks.latitude +'</td><td>' + tasks.longitude + '</td><td>' + tasks.numberInhabit + '</td></tr>'
                        return res;
                    });
                    console.log(tasks);
                } else {
                    alert(tasks.message);
                }
                return false;
            }
        });
        return false; 
    });
});