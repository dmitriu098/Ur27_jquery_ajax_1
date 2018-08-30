
$(document).ready(function() {


    $('.color-item>span').bind('click', function() {

        removeClass();

        $(this).parent().addClass('active');


        var color = {
            'red': ['images/red.jpg', ['l', 'xl', 'xxxl'], 10],
            'blue':['images/blue.jpg', ['s', 'm', 'l', 'xl'], 6],
            'green':['images/green.jpg', ['s', 'sm', 'm', 'l', 'xl'], 7] ,
            'yellow':['images/yellow.jpg', ['s', 'm', 'l', 'xxl'],35],
            'black':['images/black.jpg', ['sm', 'm', 'l', 'xxl'],52],
            'white':['images/white.jpg', ['s', 'm', 'l', 'xxl'],4]
        };

        var index = $(this).data('color');//помещаем данные цвета в кеш jquery

        $(this).attr('data-size',color[index][1]);//данные отображаются в DOM - дереве
        $(this).data('size',color[index][1]);//помещаем данные про размер в кеш jquery, в DOM изменения не видны



        $('img').attr({src: color[index][0], alt: index});

//Добавление размеров
        //AJAX ()//
/*
        $.ajax({
            method: "GET",
            url: "productDz.json"

        })
            .done(function(data) {
                var div = $('<div></div>');
                $('.card-color').after(div);

                 for(key in data){
                     for(var i=0; i<data[key].length; i++){
                         alert(data['red'][i].name);
                         //не полуцчеться достучаться до data.key.name
                     }

                 }


                $(div).addClass('card-size');
                for(var i =0;i<data.length;i++){
                    var span = $('<span class="size"></span>');
                    span.text(data.index[i][0]);
                    $(div).append(span);
                }


                /*
                for (var i = 0; i < 5; i++) {
                    alert(data.red[i].name);
                }
                */

           // });

//стандартный вывод из массива цветов
        var div = $('<div></div>');
        $('.card-color').after(div);
        $(div).addClass('card-size');
        for(var i =0;i<color[index][1].length;i++){
            var span = $('<span class="size"></span>');
            span.text(color[index][1][i]);
            $(div).append(span);
            }




//Конец Добавление размеров

//Валидация формы

        var validator = $( "#myform" ).validate({

            rules: {
                amount: {
                    required: true,
                    number: true,
                    maxlength: 3,
                    max: color[index][2]
                }
            },

            messages: {
                amount: {
                    required: "Обязательное поле!",
                    number: "Проверьте правильность ввода",
                    maxlength: "Длина строки не более 3-х символов",
                    max: "Числа должны быть от 1 до" + ' ' + color[index][2]
                }
            }
        });

//Конец валидации формы
    });

});



function removeClass(){
    $('span').parent().removeClass('active');
    $('.card-size').remove();

}

