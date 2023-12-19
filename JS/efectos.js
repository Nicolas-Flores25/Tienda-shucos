$(document).ready(function () {
    // Creamos la animacion para los links del nav

    $('.menu a').each(function (index, elemento) { // primer elemento = index
        $(this).css({
            'top': '-200px' //ocultamos los link 200 pixeles arriba
        });
        //Agregamos la animacino hata que baje a su lugar
        $(this).animate({
            'top': '0'
        }, 2000 + (index * 500)); //2 segundos mas uno + 500 milisengundos, el primero tardaría 2 segundos, el segundo 2500 milisegundos y consecutivamente.
    });


    //Header

    if ($(window).width()) {
        $('header .textos').css({
            opacity: 0,
            marginTop: '200px'

        })
        $('header .textos').animate({
            opacity: 1,
            marginTop: '120px'
        }, 1500)
    }


    //Realizamos las animacion de botones para cada seccin de la pagina.

    var acercaDe = $('#acerca_de').offset().top,
    menu = $('#platillos').offset().top,
    galeria = $('#galeria').offset().top,
    ubicacion = $('#ubicacion').offset().top;

    $('#btn_acerca').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: acercaDe - 160
        }, 500);
    });

    $('#btn_menu').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: menu + 760
        }, 500);
    });

    $('#btn_lugar').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: galeria + 3
        }, 700);
    });

    $('#btn_ubicacion').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: ubicacion
        }, 700);
    
    })

});

