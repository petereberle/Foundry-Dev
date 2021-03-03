$(document).ready(function (){

	$("#hamburger").on("click", function(){

		$('#side_menu_wrapper').animate({marginLeft: '100vw'}, 500);

		// $('header').css('borderBottom' , 'solid .012px white');

		$('#side_menu_wrapper').addClass("active");

		$('#content').css('filter', 'blur(1px)');

		$('#contact_content').css('filter', 'blur(1px)');

		// $('#menu').css('display', 'none');

	});

	$("#xit").on("click", function(){

	if ( $('#side_menu_wrapper').hasClass('active') ){

		$('#side_menu_wrapper').animate({marginLeft: '0'}, 500);

		// $('header').css('borderBottom' , 'solid .012px #bebec1');

		$('#content').css('filter', 'blur(0px)');

		$('#contact_content').css('filter', 'blur(0px)');

		$('#side_menu_wrapper').removeClass("active");

		// $('#menu').css('display', 'flex');

	}

	});



// Open Project Details

var winHeight = $(window).height() - 50;
var winWidth = $(window).width() - 50;

var openMenu = $('#side_menu_wrapper').hasClass('active');

var pause_slideshow = false;

// $('#content').on("click", function explode(){


// 	if( !($('#side_menu_wrapper').hasClass('active')) ) {
	
// 			$('#content').css('position', 'relative');
// 			$('#content').animate({padding: '25px'});
	
// 			$('#content').addClass('reduced');
	
// 			$('header').css('position', 'relative');
// 			$('#slide_wrapper').animate({width: '85%'},200);
// 			$('#info_wrapper').animate({opacity: '1'});
// 			$('#info_wrapper').css('display', 'flex');
	
// 			$("#hamburger").css('filter', 'invert(1)');
// 			$("#logo").css('filter', 'invert(1)');
	
// 			$('#slides').css('display', 'block');
	
// 			$('#content').css('cursor', 'inherit');

// 			$('#full_attribution').removeClass('fullscreen');

// 			pause_slideshow = true;

// 		}

// });



// $('#slides').on("click", function exitExplode(){

// 	if ( $('#content').hasClass('reduced') ) {

// 	$('#content').css('position', 'absolute');
// 	$('#content').animate({padding: '0'});

// 	$('#content').removeClass('reduced');

// 	$('header').css('position', 'absolute');
// 	$('#slide_wrapper').animate({width: '100%'});
// 	$('#info_wrapper').animate({opacity: '0'});
// 	$('#info_wrapper').css('display', 'none');

// 	$("#hamburger").css('filter', 'invert(0)');
// 	$("#logo").css('filter', 'invert(0)');

// 	$('#slides').css('display', 'none');

// 	$('#content').css('cursor', 'crosshair');

// 	$('#full_attribution').addClass('fullscreen');

// 	pause_slideshow = false;


// 	}

// });

//Ajax Slide Change

var image = $('#slide_container'),
	header = $('#prod_heading'),
	descrip = $('#prod_description'),
	artist = $('#artist'),
	work = $('#work'),
	year = $('#year'),
	material = $('#material'),
	artistFull = $('#full_artist'),
	workFull = $('#full_work'),
	yearFull = $('#full_year'),
	materialFull = $('#full_material');

var i = 0;

image.css('background-image', 'url(' + slide_pulls[0].image1 + ')');
// header.html(slide_pulls[0].header);
// descrip.children().last('<p>').html(slide_pulls[0].description);

artist.html(slide_pulls[0].artist);
work.html(slide_pulls[0].work);
year.html(slide_pulls[0].year);
material.html(slide_pulls[0].material);

artistFull.html(slide_pulls[0].artist);
workFull.html(slide_pulls[0].work);
yearFull.html(slide_pulls[0].year);
materialFull.html(slide_pulls[0].material);

//Slide Selector

var i;

for (i = 0; i < slide_pulls.length; i++){

	var work_year = slide_pulls[i].year;

	document.getElementById("archive_menu").innerHTML += "<p class='work_year'>" + work_year + "</p><a class='archive_year' class='filter' slide-id='" + i + "' year-id='" + work_year + "'><div class='thumbnail' style=\"background-image:url('" + slide_pulls[i].image1 + "')\"></div><p class='thumnail_caption'>" + slide_pulls[i].work + "</p></a>"

}

$('.filter').on("click", function(){

	var slideID = $(this).attr('slide-id');

	var r = true;

	move(slideID, r);

});

// var archive = $('#archive_menu');

// var archiveCount = archive.length;

// for (c = 0, c < archiveCount, c++){

// 	var children = archive[c].children('archive_year').attr('year-id');



// 	console.log(children);

// }


var tags = [...document.getElementsByClassName('work_year')];
var texts = new Set(tags.map(x => x.innerHTML));
tags.forEach(tag => {
  if(texts.has(tag.innerHTML)){
    texts.delete(tag.innerHTML);
  }
  else{
    tag.remove()
  }
})

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

		image.animate({opacity: '1'}, 100, bound_trans(direction));

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

function move(e , r){

	if (r === undefined){

		image.animate({opacity: '0'}, 100, translate());

	} else {
		translate();
	}

	

	function translate(){

	image.css('background-image', 'url(' + slide_pulls[e].image1 + ')');
	header.html(slide_pulls[e].header);
	descrip.children().last('<p>').html(slide_pulls[e].description);

	artist.html(slide_pulls[e].artist);
	work.html(slide_pulls[e].work);
	year.html(slide_pulls[e].year);
	material.html(slide_pulls[e].material);

	artistFull.html(slide_pulls[e].artist);
	workFull.html(slide_pulls[e].work);
	yearFull.html(slide_pulls[e].year);
	materialFull.html(slide_pulls[e].material);

}

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

	// var slideshow = window.setInterval(function(){

	// 	if( !pause_slideshow ){

	// 		trans_slide(1);
	// 	}

	// }, 4000);

//CONTACT

	//MAP

var map = L.map('mapid', {
    center: [46.06362892338259, -118.36210206931129],
    zoom: 16,
    zoomControl: true
  });   

L.tileLayer('https://api.maptiler.com/maps/toner/{z}/{x}/{y}.png?key=UqsRtrg9BcWIXlx6LquC', {
	maxZoom: 20,
//    mapbox://styles/mapbox/satellite-streets-v11
	accessToken: 'UqsRtrg9BcWIXlx6LquC'
}).addTo(map);

var markerIcon = L.icon({
	iconUrl: 'location.svg',
	iconSize: [38, 95],
	iconAnchor: [0,0]
});

L.marker([46.06362892338259, -118.36210206931129], {icon: markerIcon}).addTo(map);


});

//PROJECTS

