$(document).ready(function(){
	$(.intro-text).on("hover",function(){
		$(this).addClass("shake");
	});
	$(.intro-text).on("mouseleave",function(){
		$(this).removeClass("shake");
	});
	


});

