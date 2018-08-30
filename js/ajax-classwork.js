
$(document).ready(function() {
   $('#btn').bind('click', function(){
       $.ajax({
           method: "GET",
           url: "tovary.json"

       })
           .done(function(data) {
               for(var i=0; i<5;i++){
                   //  alert(data.items[i].name);
                   $('.container').append('<div class="col-lg-8 col-lg-offset-2">\n' +
                       '\t\t\t\t<div class="product-card">\n' +
                       '\t\t\t\t\t<div class="row">\n' +
                       '\t\t\t\t\t\t<div class="col-lg-5">\n' +

                       '\t\t\t\t\t\t</div>\n' +
                       '\n' +
                       '\t\t\t\t\t\t<div class="col-lg-7">\n' +
                       '\t\t\t\t\t\t\t<div class="card-control">\n' +
                       '\t\t\t\t\t\t\t\t<h1>'+data.items[i].name+'</h1>\n' +
                       '\t\t\t\t\t\t\t\t<p class="card-text">Описание товара</p>\n' +
                       '\t\t\t\t\t\t\t\t<ul class="card-color">\n' +
                       '\t\t\t\t\t\t\t\t\t<li class="color-item " ><span data-color=\'white\'></span></li>\n' +
                       '\t\t\t\t\t\t\t\t\t<li class="color-item"><span data-color=\'red\' ></span></li>\n' +
                       '\t\t\t\t\t\t\t\t\t<li class="color-item"><span data-color=\'blue\'></span></li>\n' +
                       '\t\t\t\t\t\t\t\t\t<li class="color-item"><span data-color=\'green\'></span></li>\n' +
                       '\t\t\t\t\t\t\t\t\t<li class="color-item"><span data-color=\'yellow\'></span></li>\n' +
                       '\t\t\t\t\t\t\t\t\t<li class="color-item"><span data-color=\'black\'></span></li>\n' +
                       '\t\t\t\t\t\t\t\t</ul>\n' +
                       '\n' +
                       '\t\t\t\t\t\t\t\t<form action="" id="myform">\n' +
                       '\t\t\t\t\t\t\t\t\t<label for="amount">Количество</label>\n' +
                       '\t\t\t\t\t\t\t\t\t<input type="text" id="amount" name="amount" placeholder="0" maxlength="3">\n' +
                       '\t\t\t\t\t\t\t\t</form>\n' +
                       '\n' +
                       '\t\t\t\t\t\t\t\t<div class="card-price">\n' +
                       '\t\t\t\t\t\t\t\t\t<h2>Цена</h2>\n' +
                       '\t\t\t\t\t\t\t\t\t<span id="price">'+data.items[i].price+' <sup>&#36;</sup></span>\n' +
                       '\t\t\t\t\t\t\t\t</div>\n' +
                       '\n' +
                       '\n' +
                       '\t\t\t\t\t\t\t\t<div class="card-size">\n' +
                       '\t\t\t\t\t\t\t\t\t<span class="size">L</span>\n' +
                       '\t\t\t\t\t\t\t\t\t<span class="size">XL</span>\n' +
                       '\t\t\t\t\t\t\t\t\t<span class="size">L</span>\n' +
                       '\t\t\t\t\t\t\t\t</div>\n' +
                       '\t\t\t\t\t\t\t</div>\n' +
                       '\t\t\t\t\t\t</div>\n' +
                       '\n' +
                       '\n' +
                       '\t\t\t\t\t</div>\n' +
                       '\n' +
                       '\n' +
                       '\n' +
                       '\n' +
                       '\t\t\t\t</div>\n' +
                       '\t\t\t</div>');
               }


           });
   }) ;
});