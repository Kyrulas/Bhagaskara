$(document).ready(function() {
	$(window).resize(resizeWindow);
	resizeWindow();
});


var resizeWindow = function(){
	var htmlWidth = parseInt($("html").width());
	$("html").css("font-size", "");
	if(htmlWidth > 1025){
		$("html").css('font-size',htmlWidth/118.9375);
	}else if(htmlWidth > 800){
		$("html").css('font-size',htmlWidth/73.214);
	}else if(htmlWidth > 600){
		$("html").css('font-size',htmlWidth/66.67);
	}
};