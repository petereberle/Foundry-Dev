
$(document).ready(function (){

	$("#hamburger").on("click", function(){

		$('#side_menu_wrapper').css('display', 'block');

		$("#hamburger").css('opacity', '0');

		// $('header').css('borderBottom' , 'solid .012px white');

		$('#menu_side').animate({opacity: '1'}, 700);

		$('#side_menu_wrapper').addClass("active");

		$('#content').css('filter', 'blur(5px) opacity(25%)');

	});

	$("#xit").on("click", function(){

	if ( $('#side_menu_wrapper').hasClass('active') ){

		$('#menu_side').animate({opacity: '0'}, 700);

		$("#hamburger").css('opacity', '1');

		$('#side_menu_wrapper').css('display', 'none');

		// $('header').css('borderBottom' , 'solid .012px #bebec1');

		$('#content').css('filter', 'blur(0px)');

	}

	});

});