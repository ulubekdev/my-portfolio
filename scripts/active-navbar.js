const sections = document.querySelectorAll("section");
const navbarEle = document.querySelectorAll("#navbar a");
const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;


window.onscroll = () => {
	makeSticky();
	let current = "";

	sections.forEach((section) => {
		const sectionTop = section.offsetTop;
		if (pageYOffset > sectionTop - 60) {
			// console.log(sectionTop);
			// console.log(pageXOffset);
			current = section.getAttribute("id");
		}
	});

	navbarEle.forEach((a) => {
		a.classList.remove("active");
		if (a.classList.contains(current)) {
			a.classList.add("active");
		}
	});
};
function makeSticky() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky");
	} else {
		navbar.classList.remove("sticky");
	}
}
