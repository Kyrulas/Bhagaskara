$( document ).ready(function() {

	var currentIndex = 0,
	items = $('.team__container .slide'),
	itemAmt = items.length;

	function cycleItems(){
		var item = $('.team__container .slide').eq(currentIndex);
		items.hide()
		item.css('display', 'inline-block');
	} 

	var autoslide = setInterval(function(){
		currentIndex +=1;
		if(currentIndex > itemAmt - 1){
			currentIndex = 0;
		}
		cycleItems();
		},);

	$('.team__arrows-next').click(function(){
		clearInterval(autoslide);
		currentIndex += 1;
		if(currentIndex > itemAmt - 1){
			currentIndex = 0;
		}
		cycleItems();
	})

	$('.team__arrows-prev').click(function(){
		clearInterval(autoslide);
		currentIndex -=1;
		if(currentIndex < 0){
			currentIndex = itemAmt - 1;
		}
		cycleItems();
	})
});