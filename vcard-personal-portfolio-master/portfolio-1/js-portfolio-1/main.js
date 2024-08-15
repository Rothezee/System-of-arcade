/* =================================
------------------------------------
	WebUni - Education Template
	Version: 1.0
 ------------------------------------ 
 ====================================*/


'use strict';


$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut(); 
	$("#preloder").delay(400).fadeOut("slow");


	/*------------------
		Gallery item
	--------------------*/
	if($('.course-items-area').length > 0 ) {
		var containerEl = document.querySelector('.course-items-area');
		var mixer = mixitup(containerEl);
	}

});

(function($) {

	/*------------------
		Navigation
	--------------------*/
	$('.nav-switch').on('click', function(event) {
		$('.main-menu').slideToggle(400);
		event.preventDefault();
	});


	/*------------------
		Background Set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});

	/*------------------
		Calendario
	--------------------*/
	$(function() {
        $("#fechaNacimiento").datepicker({
            dateFormat: "yy-mm-dd", // Formato de fecha deseado
            changeMonth: true,    // Permite cambiar el mes
            changeYear: true,     // Permite cambiar el año
            yearRange: "-100:+0"  // Rango de años, aquí puedes ajustarlo según tus necesidades
        });
    });

	/*------------------
		Realated courses
	--------------------*/
    $('.rc-slider').owlCarousel({
		autoplay:true,
		loop: true,
		nav:true,
		dots: false,
		margin: 30,
		navText: ['', '<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			576:{
				items:2
			},
			990:{
				items:3
			},
			1200:{
				items:4
			}
		}
	});


    /*------------------
		Accordions
	--------------------*/
	$('.panel-link').on('click', function (e) {
		$('.panel-link').removeClass('active');
		var $this = $(this);
		if (!$this.hasClass('active')) {
			$this.addClass('active');
		}
		e.preventDefault();
	});



	/*------------------
		Circle progress
	--------------------*/
	$('.circle-progress').each(function() {
		var cpvalue = $(this).data("cpvalue");
		var cpcolor = $(this).data("cpcolor");
		var cptitle = $(this).data("cptitle");
		var cpid 	= $(this).data("cpid");

		$(this).append('<div class="'+ cpid +'"></div><div class="progress-info"><h2>'+ cpvalue +'%</h2><p>'+ cptitle +'</p></div>');

		if (cpvalue < 100) {

			$('.' + cpid).circleProgress({
				value: '0.' + cpvalue,
				size: 176,
				thickness: 9,
				fill: cpcolor,
				emptyFill: "rgba(0, 0, 0, 0)"
			});
		} else {
			$('.' + cpid).circleProgress({
				value: 1,
				size: 176,
				thickness: 9,
				fill: cpcolor,
				emptyFill: "rgba(0, 0, 0, 0)"
			});
		}

	});

})(jQuery);

'use strict';

;( function ( document, window, index )
{
	var inputs = document.querySelectorAll( '.inputfile' );
	Array.prototype.forEach.call( inputs, function( input )
	{
		var label	 = input.nextElementSibling,
			labelVal = label.innerHTML;

		input.addEventListener( 'change', function( e )
		{
			var fileName = '';
			if( this.files && this.files.length > 1 )
				fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
			else
				fileName = e.target.value.split( '\\' ).pop();

			if( fileName )
				label.querySelector( 'span' ).innerHTML = fileName;
			else
				label.innerHTML = labelVal;
		});
	});
}( document, window, 0 ));