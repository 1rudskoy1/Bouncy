function slide(classes, target){
	let slides = document.querySelectorAll(classes);
	let tabs = document.querySelectorAll(target);
	let i = 0;
	for (i = 1; i <slides.length;i++){
		slides[i].style.display = " none";
	}
	for (i = 0; i < tabs.length; i++) {
		tabs[i].addEventListener("click", function(e){
			if(e.target.classList.contains("active") === false){
				for(let j = 0; j < tabs.length; j++){
					tabs[j].classList.remove("active");
					slides[j].style.display = "none";
				}
					e.target.classList.add("active");
					slides[$(e.target).index()].style.display = "block";

			}	
		});
	}	
}
slide(".person", ".Team .dot");
slide(".block", ".Testiomonials .dot");
slide(".tab", ".icons-icon");
