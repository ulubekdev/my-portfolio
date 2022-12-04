const sections = document.querySelectorAll("section");
const navbarEle = document.querySelectorAll("#navbar a");

const navbar = document.querySelector("#navbar");

function stcky () {
	if(pageYOffset > 40) {
		navbar.classList.add("sticky");
	} else {
		navbar.classList.remove("sticky");
	}
}

window.onscroll = () => {
	stcky();
	let current = "";

	sections.forEach((section) => {
		const sectionTop = section.offsetTop;
		if (pageYOffset > sectionTop - 40) {
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