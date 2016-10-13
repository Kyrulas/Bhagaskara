$(document).ready(function() {
	$(window).resize(resizeWindow);
	resizeWindow();
	$(window).scroll(fixMenu);
	fixMenu();
});


var resizeWindow = function(){
	$('.nav-top__list').removeClass('responsive');
	var htmlWidth = parseInt($("html").width());
	$("html").css("font-size", "");
	if(htmlWidth > 1025){
		$("html").css('font-size',htmlWidth/118.9375);
	}else if(htmlWidth > 780){
		$("html").css('font-size',htmlWidth/73.214);
	}else if(htmlWidth > 580){
		$("html").css('font-size',htmlWidth/66.67);
	}else{
		$("html").css('font-size',htmlWidth/60);
	}
};
//fix nav top
var fixMenu = function(){
	$('.nav-top__list').removeClass('responsive');
	var nav = $('.nav-top');
	var font_size = parseInt($("html").css("font-size"));
	if($(this).scrollTop() > (65.625 * font_size)){
		nav.addClass("nav-fix");
	}else{
		nav.removeClass('nav-fix');
	}
} 
//menu responsive toggle
function menuToggle(){
	var menu = $(".nav-top__list");
	menu.toggleClass("responsive");
}
