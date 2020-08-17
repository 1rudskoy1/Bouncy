var slideIndex = 1;
var FeedbackIndex = 1;
var TabsIndex = 1;
showSlides(slideIndex);
showFeedback(FeedbackIndex);
showTabs(TabsIndex);

function currentFeedback(n){
	showFeedback(FeedbackIndex = n);
}


function currentSlide(n){
	showSlides(slideIndex = n);
}

function currentTabs(n){
	showTabs(TabsIndex = n);
}

function showTabs(n){
	var i;
	var tabs = document.querySelectorAll('.tab');
	var icons = document.querySelectorAll('.tab-icon');
	for(i =0;i < tabs.length;i++){
		tabs[i].style.display = "none";
		icons[i].style.background = "#81868e";

	}
	tabs[TabsIndex - 1].style.display = "block";
	icons[TabsIndex-1].style.background = "#19bd9a";
}


function showSlides(n){
	var i;
	var slides = document.querySelectorAll(".person");
	var dots = document.querySelectorAll(".person .dot");
	for (i = 0; i <slides.length;i++){
		slides[i].style.display = " none";
	}

	for(i=0; i<dots.length; i++){
		dots[i].className = dots[i].className.replace("active","");
	}

	slides[slideIndex-1].style.display = "block";
}


function showFeedback(n){
	var blocks = document.querySelectorAll('.block');
	 for (i = 0; i < blocks.length;i++){
		blocks[i].style.display = "none";
 	}
 	blocks[FeedbackIndex- 1].style.display = "block";
}