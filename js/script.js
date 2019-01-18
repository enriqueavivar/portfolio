var navbar_height = 40;

//Función para animar el movimiento entre Anchors
function scrollToAnchor(aid, speed){
    var aTag = $("#"+aid);
    $('html,body').animate({scrollTop: aTag.offset().top - navbar_height}, speed);
	console.log(aid+" "+aTag.offset().top);
}
//Función para ir al top con una velocidad
function scrollToTop(){
	$('html, body').animate({scrollTop: $('html').offset().top}, 'slow');
}
//Función para marcar el elemento actual como activo
function sectionSelected(section){
	$("ul.navbar-nav li").removeClass("active");
	$("#"+section+"-anchor").parent().addClass("active");
}

$(document).ready(function(){
	/* Eventos de click para los anchor */
	//Home
	$("#home-anchor").click(function (e) {
		e.preventDefault();
		scrollToTop();
	});
	//About me
	$("#about-me-anchor").click(function(e){
		e.preventDefault();
		scrollToAnchor("about-me","slow");
	});
	//Portfolio
	$("#portfolio-anchor").click(function(e){
		e.preventDefault();
		scrollToAnchor("portfolio","slow");
	});
	//Blog
	$("#blog-anchor").click(function(e){
		e.preventDefault();
		scrollToAnchor("blog","slow");
	});
	//Contacto
	$("#contact-anchor").click(function(e){
		e.preventDefault();
		scrollToAnchor("contact","slow");
	});
	//Botón de "Ver más" en el Hero Section
	$("#btn-hero").click(function(){
		scrollToAnchor("about-me", "slow");
	});

	$(document).on('scroll', function(){
		var scrollActual = $(window).scrollTop();

		//Desde home a about
		if (scrollActual >= $("html").offset().top-navbar_height) {
			sectionSelected("home");
		}
		if (scrollActual >= $("#about-me").offset().top-navbar_height) {
			sectionSelected("about-me");
		}
		if (scrollActual >= $("#portfolio").offset().top-navbar_height) {
			sectionSelected("portfolio");
		}
		if (scrollActual >= $("#blog").offset().top-navbar_height) {
			sectionSelected("blog");
		}
		if (scrollActual >= $("#contact").offset().top -navbar_height) {
			sectionSelected("contact");
		}
	});
});

