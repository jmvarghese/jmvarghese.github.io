// Smooth Scrolling
document.querySelectorAll('nav a').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		// Get target ID by removing ".html" from the href attribute
		let targetID = this.getAttribute('href');
		if (targetID.includes('.html')) {
			targetID = targetID.replace('.html', '');
		}
		// Scroll to the corresponding section
		const targetSection = document.getElementById(targetID);
		if (targetSection) {
			window.scrollTo({
				top: targetSection.offsetTop,
				behavior: 'smooth'
			});
		}
	});
});

// Include HTML content for Navbar and Footer
function includeHTML(file, elementId) {
	const element = document.getElementById(elementId);
	if (element) {
		fetch(file)
			.then(response => {
				if (!response.ok) throw new Error("Failed to load " + file);
				return response.text();
			})
			.then(data => {
				element.innerHTML = data;
			})
			.catch(error => console.error(error));
	}
}

// Load Navbar and Footer after DOM is ready
document.addEventListener("DOMContentLoaded", () => {
	includeHTML("components/navbar.html", "navbar");
	includeHTML("components/footer.html", "footer");
});
