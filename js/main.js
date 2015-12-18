
var level = 1;
var solved = 0;
var changelevel = function() {
	$('.level').hide().filter('[data-level='+level+']').fadeIn();
}



$(document).ready(function() {

	changelevel();




	$('.spots li').on('click',function() {
		var pair = $(this).addClass('solved').attr('data-pair');
		$('.level[data-level="'+level+'"] [data-pair='+pair+']').addClass('solved');
		solved++;  //increase by 1
if ( $('[data-pair='+pair+']').opacity == 0) {
			$(this).css('opacity') = '1';
		}
		;
		if (solved == 4) {
			solved = 0;
			level++;


	
			changelevel();
		}

		

	});
	




	

		// if (hero.css("opacity")=="100"){
		// 	$('.1st').hide();
		// }
   // var wrong = document.getElementById('wrong');
   // $('.container').on('click',function() {
  	// 	$(this).on('click');
   		
   //  		wrong.load();
   //  		wrong.play();

   //  });


  var right = document.getElementById('right1');
   $('.spots li').on('click',function() {
   		$(this).on('click');
   		$(this).off('click')
   		right.load();
   		right.play();

   });


   // if ( right == play() ){
   // 	 	 wrong.stop();
   // }



  // Function to update counters on all elements with class counter
  var doUpdate = function() {
    $('.countdown').each(function() {
      var count = parseInt($(this).html());
      if (count !== 0) {
        $(this).html(count - 1);
    }
      if (count == 0) {
        
        $('.level[data-level]').css(({opacity:0}))
        $('.gameover1').css(({opacity:1}))
        $('.gameover2').css(({opacity:1}));


        
      }
    });
  };

  // Schedule the update to happen once every second
  setInterval(doUpdate, 1000);
});


$(document).ready( function(){
    $.fn.snow();
});

(function($){$.fn.snow=function(options){var $flake=$('<div id="flake" />').css({'position':'absolute','top':'-50px'}).html('&#10052;'),documentHeight=$(document).height(),documentWidth=$(document).width(),defaults={minSize:10,maxSize:20,newOn:500,flakeColor:"#FFFFFF"},options=$.extend({},defaults,options);var interval=setInterval(function(){var startPositionLeft=Math.random()*documentWidth-100,startOpacity=0.5+Math.random(),sizeFlake=options.minSize+Math.random()*options.maxSize,endPositionTop=documentHeight-40,endPositionLeft=startPositionLeft-100+Math.random()*200,durationFall=documentHeight*10+Math.random()*5000;$flake.clone().appendTo('body').css({left:startPositionLeft,opacity:startOpacity,'font-size':sizeFlake,color:options.flakeColor}).animate({top:endPositionTop,left:endPositionLeft,opacity:0.2},durationFall,'linear',function(){$(this).remove()});},options.newOn);};})(jQuery);



