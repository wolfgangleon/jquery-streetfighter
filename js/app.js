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
  		$('.ryu-ready').hide();
  		$('.ryu-throwing').show();
  		$('.hadouken').show().animate(
  			{'left':'20%'}, 500, function(){
  			$(this).hide();
  			$(this).css('left','0%');}
  		);
  	})

	.mouseup(function() {
  		$('.ryu-throwing').hide();
  		$('.ryu-ready').show();
	});

});