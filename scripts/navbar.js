const sections = document.querySelectorAll("section");
const navbarEle = document.querySelectorAll(".topnav a");
const navbar = document.querySelector('.topnav');

let sticky = navbar.offsetTop;

window.onscroll = () => {
	stcky();
	let curr = ""
	sections.forEach((section) => {
		let secTop = section.offsetTop;
		if( window.pageYOffset + 10 > secTop ) {
			curr = section.getAttribute("id");
		}
	});
	navbarEle.forEach((a) => {
		a.classList.remove("active");
		if(a.classList.contains(curr)) {
			a.classList.add("active");
		}
	})
};

function stcky() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky");
	} else {
		navbar.classList.remove("sticky");
	}
}
