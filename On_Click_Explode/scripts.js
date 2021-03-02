$(document).ready(function (){

	$("#hamburger").on("click", function(){

		$('#side_menu_wrapper').animate({marginRight: '100vw'}, 500);

		// $('header').css('borderBottom' , 'solid .012px white');

		$('#side_menu_wrapper').addClass("active");

		$('#content').css('filter', 'blur(5px)');

		$('#menu').css('display', 'none');

	});

	$("#xit").on("click", function(){

	if ( $('#side_menu_wrapper').hasClass('active') ){

		$('#side_menu_wrapper').animate({marginRight: '0'}, 500);

		// $('header').css('borderBottom' , 'solid .012px #bebec1');

		$('#content').css('filter', 'blur(0px)');

		$('#side_menu_wrapper').removeClass("active");

		$('#menu').css('display', 'flex');

	}

	});



// Open Project Details

var winHeight = $(window).height() - 50;
var winWidth = $(window).width() - 50;

var openMenu = $('#side_menu_wrapper').hasClass('active');

$('#content').on("click", function explode(){


	if( !($('#side_menu_wrapper').hasClass('active')) ) {
	
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

			$('#full_attribution').removeClass('fullscreen');

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

	$('#full_attribution').addClass('fullscreen');


	}

});

//Ajax Slide Change

var image = $('#slide_container'),
	header = $('#prod_heading'),
	descrip = $('#prod_description'),
	artist = $('#artist'),
	work = $('#work'),
	year = $('#year'),
	material = $('#material');

var i = 0;


image.css('background-image', 'url(' + slide_pulls[0].image1 + ')');

$('#arrow_left').on("click", function(s){

	trans_slide(-1);
	s.stopPropagation();

	});

$('#arrow_right').on("click", function(s){

	trans_slide(1);
	s.stopPropagation();

	});

function trans_slide(direction){
	if( !($('#side_menu_wrapper').hasClass('active')) ) {

		image.animate({opacity: '1'}, 250, bound_trans(direction));

		function bound_trans(){

				if (direction < 1 && !0){
					i = (i-1);
					move(i);
				}

				if (direction >= 1 && !0){
					i = (i+1)%slide_pulls.length;
					move(i);
				}
		}

	}
}

function move(e){

	image.css('background-image', 'url(' + slide_pulls[e].image1 + ')');
	header.html(slide_pulls[e].header);
	descrip.children().last('<p>').html(slide_pulls[e].description);

	artist.html(slide_pulls[e].artist);
	work.html(slide_pulls[e].work);
	year.html(slide_pulls[e].year);
	material.html(slide_pulls[e].material);

	image.animate({opacity: '0'}, 100);

}

$(document).keydown(function(e) {
    switch (e.which) {
        case 37:
            e.preventDefault(), trans_slide(-1);
            break;
        case 39:
            e.preventDefault(), trans_slide(1);
            break;
    }
});


});