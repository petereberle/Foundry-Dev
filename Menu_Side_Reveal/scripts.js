
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

	}

	});

});