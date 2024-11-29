// Smooth Scrolling
document.querySelectorAll('nav a').forEach(anchor => {
	anchor.addEventListener('click', function(e) {
		e.preventDefault();
		const targetID = this.getAttribute('href').substring(0, this.getAttribute('href').length - 5); // Remove .html
		const targetSection = document.getElementById(targetID);
		if(targetSection) {
			window.scrollTo({
				top: targetSection.offsetTop,
				behavior: 'smooth'
			});
		}
	});
});

