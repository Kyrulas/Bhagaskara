$(document).ready(function() {
	$(window).resize(resizeWindow);
	resizeWindow();
});


var resizeWindow = function(){
	var htmlWidth = parseInt($("html").width());
	$("html").css("font-size", "");
	if(htmlWidth > 1025){
		$("html").css('font-size',htmlWidth/118.9375);
	}else if(htmlWidth > 780){
		$("html").css('font-size',htmlWidth/73.214);
	}else if(htmlWidth > 580){
		$("html").css('font-size',htmlWidth/66.67);
	}
};

//menu responsive toggle
function menuToggle(){
	var menu = $(".nav-top__list");
	menu.toggleClass("responsive");
}