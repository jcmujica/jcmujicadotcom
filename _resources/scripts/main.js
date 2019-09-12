import AOS from 'aos'

document.addEventListener('DOMContentLoaded', function() {
	AOS.init()


	var skills = document.getElementsByClassName('skill');
	
	for(var skill in skills) {
		skills[skill].addEventListener('click', function(event){
			event.target.classList.toggle('active');
			console.log(event.target);
		}, false);
	}

	// function

})
