var slide_banner = document.querySelector('.slide_banner'),
	slide_button = document.querySelector('.button'),
	slide_menu_position = 0;
	
slide_button.addEventListener('click',function(){
	if (slide_menu_position == 0) {
		slide_banner.style.setProperty('left','0');
		slide_menu_position = 1;
	}
	else if (slide_menu_position == 1) {
		slide_banner.style.setProperty('left','-301px');
		slide_menu_position = 0;	
	}
});