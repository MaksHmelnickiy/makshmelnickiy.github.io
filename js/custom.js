
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
	$('.gamburger__link__img').toggleClass('fade')
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
  speed: 500,
  autoplay:true

});
$('.slider__list__item__img').click(function(){
	$('.popup').fadeIn();
	$('.slick-next').click();
	
	
})

$('.popup__element').click(function(){
	$('.popup').fadeOut()
})

$(document).ready(function() {
			$(".checklist .checkbox-select ").click(
				function(event) {
					event.preventDefault();
					$(this).parent().addClass("selected");
					$(this).parent().find(":checkbox").attr("checked","checked");
					
				}
			);
			
			$(".checklist .checkbox-deselect").click(
				function(event) {
					event.preventDefault();
					$(this).parent().removeClass("selected");
					$(this).parent().find(":checkbox").removeAttr("checked");
					
				}
			);
			
		});
