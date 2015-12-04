
var level = 1;
var solved = 0;
var changelevel = function() {
	$('.level').hide().filter('[data-level='+level+']').fadeIn();
}



$(document).ready(function() {

	changelevel();


/*
	$('.hero1').on('click',function() {
		$('.hero1').css({'opacity':'100'});
});
	$('.hero2').on('click',function() {
		$('.hero2').css({'opacity':'100'});
});

	$('.hero3').on('click',function() {
		$('.hero3').css({'opacity':'100'});
});

	$('.hero4').on('click',function() {
		$('.hero4').css({'opacity':'100'});
});*/
	

	$('.spots li').on('click',function() {
		var pair = $(this).addClass('solved').attr('data-pair');
		$('[data-pair='+pair+']').addClass('solved');
		solved++;  //increase by 1

		if (solved == 4) {
			solved = 0;
			level++;
			changelevel();
		}

	});
	




	// var hero = $('.hero1').on('click',function() ++ $('.hero2').on('click',function()++ $('.hero3').on('click',function()++ $('.hero4').on('click',function()

	// 	if (hero.css("opacity")=="100"){
	// 		$('.1st').hide();
	// 	}
   var wrong = document.getElementById('wrong');
   $('.level').on('click',function() {
  		$(this).on('click');
   		
    		wrong.load();
    		wrong.play();

    });


  var right = document.getElementById('right');
   $('.hero1').on('click',function() {
   		$(this).on('click');
   		$(this).off('click')
   		right.load();
   		right.play();

   });



  // Function to update counters on all elements with class counter
  var doUpdate = function() {
    $('.countdown').each(function() {
      var count = parseInt($(this).html());
      if (count !== 0) {
        $(this).html(count - 1);
      }
    });
  };

  // Schedule the update to happen once every second
  setInterval(doUpdate, 1000);
});


	
  // $('.hero1').on('click',function() {
		// $('.right').click(function() {

		// 	if ($('.right').paused == false) {
		// 		$('.right').pause();
			
		// 	} else  {
		// 		$('.right').load();
		// 		$(this).play();
		// 	}
            
  //       });



	


	//  if ($(".hero1").css("opacity")=="100"){
 // 	$('.hero2').css({'opacity':'0'});
 // 		$('.hero3').css({'opacity':'0'});
 // 		$('.hero4').css({'opacity':'0'});
	//  }else{
 // 	$('.hero1').css({'opacity':'0'});
 //  }
 // 
   		// console.log ( "good job!" );	
   		// $(this).off('click')
   		// $(this).removeClass('hero');
   		// $(this).addClass('shown');




// if (num >1)

//  
  



