import AOS from 'aos'

document.addEventListener('DOMContentLoaded', function() {
	AOS.init()

	var skills = document.getElementsByClassName('skill');
	var h = (window.innerHeight) * (.83);

	for(var i = 0; i < skills.length; i++) {
		skills[i].addEventListener('click', function(event){
			event.stopPropagation();
			this.classList.toggle('active');
		}, false);
	}

	
	window.addEventListener('scroll', function(e){

		if (pageYOffset < h) {
			document.getElementById('nav').classList.remove('nav_scrolled');
		} else {
			document.getElementById('nav').classList.add('nav_scrolled');
		}
	})

});
