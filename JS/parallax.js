$(document).ready(function () {
    //Accedemos al tamaño de la ventana porque en mobiles el parallax no esta permitido:

    //Accedemos al valor del scroll de la ventana junto aol callback donde queremos acceder el ancho y el alto de la ventana
    $(window).scroll(function () {
        var ventanawidth = $(window).width();//Accedemos al ancho
        //Si la ventana es mas pequeña que 420px no se permite:
        if (ventanawidth > 420) {
            var scroll = $(window).scrollTop();  //Accedemos al posicionamiento vertical     del scroll
            $('header .textos').css({ //Modificamos el header la clase .textos
                'transform': 'translate(0px,' + (scroll / 2) + '%) '//Utilizamos el transfomr para transformar el movimiento en Y donde  el valor en Y lo cambiamos por el lugar donde se encuentra el  scroll dividido en 2, el resultado es el el valor a utilizar en porcentaje.
            });

            $('.acerca_de article').css({
                'transform': 'translate(0px, ' + (scroll / -13) + '%)'
            })
        }
    });

    $(window).resize(function (){
        var windowChange
        if (windowChange > 800) {
            var scroll = $(window).scrollTop();

            $('.acerca_de article').css({
                'transform': 'translate(0px, ' + (scroll / -19) + '%)'
            })
            $('header .textos').css({ 
                'transform': 'translate(0px,' + (scroll / 2) + '%)'
            })
        }
    
    });

})