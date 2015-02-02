$(document).ready(function () {
	$('.ryu').mouseenter(function() {
    	$('.ryu-still').hide();
    	$('.ryu-ready').show();
  	})
  	.mouseleave(function() {
    	$('.ryu-still').show();
    	$('.ryu-ready').hide();
 	 })

  	.mousedown(function(){
  		playHadouken();
  		$('.ryu-ready').hide();
  		$('.ryu-throwing').show();
  		$('.hadouken').finish().show().animate(
  			{'left':'20%'}, 900, function(){
  			$(this).hide();
  			$(this).css('left','0%');}
  		);
  	})

	.mouseup(function() {
  		$('.ryu-throwing').hide();
  		$('.ryu-ready').show();
	});

  $(this).keydown(function (e) {
        if (e.which == 88) {
       // console.log('key was pressed');
            $('.ryu-still').hide();
            $('.ryu-ready').hide();
            $('.ryu-cool').show();
        };   
  })

  .keyup(function (e){
        if (e.which == 88){
           //console.log('the key is unpressed')
            $('.ryu-cool').hide();
            $('.ryu-ready').show();
        };
  });

}); //end document javascript.

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}