$(document).ready(function (){

	$("#hamburger").on("click", function(){

		$('#side_menu_wrapper').animate({marginRight: '100vw'}, 500);

		// $('header').css('borderBottom' , 'solid .012px white');

		$('#side_menu_wrapper').addClass("active");

		$('#content').css('filter', 'blur(5px)');

	});

	$("#xit").on("click", function(){

	if ( $('#side_menu_wrapper').hasClass('active') ){

		$('#side_menu_wrapper').animate({marginRight: '0'}, 500);

		// $('header').css('borderBottom' , 'solid .012px #bebec1');

		$('#content').css('filter', 'blur(0px)');

		$('#side_menu_wrapper').removeClass("active");

	}

	});



// Open Project Details

var winHeight = $(window).height() - 50;
var winWidth = $(window).width() - 50;

$('#content').on("click", function explode(){

	var openMenu = $('#side_menu_wrapper').hasClass('active');


	if( !openMenu ) {
	
			$('#content').css('position', 'relative');
			$('#content').animate({padding: '25px'});
	
			$('#content').addClass('reduced');
	
			$('header').css('position', 'relative');
			$('#slide_wrapper').animate({width: '85%'});
			$('#info_wrapper').animate({opacity: '1'});
			$('#info_wrapper').css('display', 'flex');
	
			$("#hamburger").css('filter', 'invert(1)');
			$("#logo").css('filter', 'invert(1)');
	
			$('#slides').css('display', 'block');
	
			$('#content').css('cursor', 'inherit');
		}


});



$('#slides').on("click", function exitExplode(){

	if ( $('#content').hasClass('reduced') ) {

	$('#content').css('position', 'absolute');
	$('#content').animate({padding: '0'});

	$('#content').removeClass('reduced');

	$('header').css('position', 'absolute');
	$('#slide_wrapper').animate({width: '100%'});
	$('#info_wrapper').animate({opacity: '0'});
	$('#info_wrapper').css('display', 'none');

	$("#hamburger").css('filter', 'invert(0)');
	$("#logo").css('filter', 'invert(0)');

	$('#slides').css('display', 'none');

	$('#content').css('cursor', 'crosshair');

	}

});



});