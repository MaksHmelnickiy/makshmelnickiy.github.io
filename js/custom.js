$(window).load(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
	$('body').removeClass('loaded'); 
});
/* viewport width */
function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */
$(function(){
	/* placeholder*/	   
	$('input, textarea').each(function(){
 		var placeholder = $(this).attr('placeholder');
 		$(this).focus(function(){ $(this).attr('placeholder', '');});
 		$(this).focusout(function(){			 
 			$(this).attr('placeholder', placeholder);  			
 		});
 	});
	/* placeholder*/

	$('.button-nav').click(function(){
		$(this).toggleClass('active'), 
		$('.main-nav-list').slideToggle(); 
		return false;
	});
	
	/* components */
	
	/*
	
	if($('.styled').length) {
		$('.styled').styler();
	};
	if($('.fancybox').length) {
		$('.fancybox').fancybox({
			margon  : 10,
			padding  : 10
		});
	};
	if($('.slick-slider').length) {
		$('.slick-slider').slick({
			dots: true,
			infinite: false,
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 4,
			responsive: [
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				  }
				},
				{
				  breakpoint: 600,
				  settings: "unslick"
				}				
			]
		});
	};
	if($('.scroll').length) {
		$(".scroll").mCustomScrollbar({
			axis:"x",
			theme:"dark-thin",
			autoExpandScrollbar:true,
			advanced:{autoExpandHorizontalScroll:true}
		});
	};
	
	*/
	
	/* components */
	
	

});

var handler = function(){
	
	var height_footer = $('footer').height();	
	var height_header = $('header').height();		
	//$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});
	
	
	var viewport_wid = viewport().width;
	var viewport_height = viewport().height;
	
	if (viewport_wid <= 991) {
		
	}
	
}

$(window).bind('load', handler);
$(window).bind('resize', handler);

 $(function() {
    $( "#datepicker-js" ).datepicker();
  } );

 $(function() {
    $( "#datepicker-js-2" ).datepicker();
  } );


$('.language-js').click(function(){
$('.language-js').removeClass('active');
$(this).addClass('active');
});
$('.services__form__checkbox').click(function(){
$(this,'.services__form__checkbox').toggleClass('active');

});

 (function($){
		$(function() {
			$('.list__select').styler({
				selectSearch: true,
			});
		});
		})(jQuery);
$('.gamburger').click(function(){
	$('.menu-mobile').slideToggle();
})
$('.lang__select').wSelect();

        $('#demo, #demo-multi').change(function() {
          console.log($(this).val());
        });

        $('#demo').val('AU').change(); // should see in console
        $('#demo').val('PL').wSelect('change'); // should see the selected option change to three
        $('#demo').append().wSelect('reset');
        $('#demo').val('CA').change();
        
        $('#demo-multi').val(['soccer', 'archery']).change();

        // Testing append from one select to another.
        $('#demo option:last').appendTo('#demo-multi');
        $('#demo, #demo-multi').wSelect('reset');


$('.popup__wrapper').slick({
  arrows:true,
  infinite: true,
  speed: 500

});
$('.slider__list__item__img').click(function(){
	$('.popup').fadeIn()
})
$('.popup__element').click(function(){
	$('.popup').fadeOut()
})