const sections = document.querySelectorAll("section");
const navbarEle = document.querySelectorAll("#navbar a");

window.onscroll = () => {
	let current = "";

	sections.forEach((section) => {
		const sectionTop = section.offsetTop;
		if (pageYOffset > sectionTop - 60) {
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
// function hoverOver (i) {
// 	i.classList.add("fa-bounce");
// }
// function hoverOut (i) {
// 	i.classList.remove("fa-bounce");
// }