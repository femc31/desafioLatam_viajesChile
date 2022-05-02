/**** metodo para activar los tooltips que seran utilizados en los iconos de la seccion quienes somos y los iconos del footer ****/
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});


/**** evento doble clic para cambiar el color del texto "VIAJES CHILE" del footer de color blanco a color rojo, con negrita y tamaño de fuente en 20 pixeles ****/
$(".texto-pie-pagina").on('dblclick', function(event) {
    $(".texto-pie-pagina").css('color', 'crimson');
    $(".texto-pie-pagina").css('font-weight', '700');
    $(".texto-pie-pagina").css('font-size', '20px');
    console.log("cambiar el color del texto");
});

/**** eventos clic para poder desaparecer el texto de las tarjetas al hacer clic sobre el titulo de cada carta ****/
document.getElementById('carta-titulo-1').onclick = function(){
    $("#carta-texto-1").toggle();
};

document.getElementById('carta-titulo-2').onclick = function(){
    $("#carta-texto-2").toggle();
};

document.getElementById('carta-titulo-3').onclick = function(){
    $("#carta-texto-3").toggle();
};

document.getElementById('carta-titulo-4').onclick = function(){
    $("#carta-texto-4").toggle();
};