function hamburger() {
	let nav = document.getElementById("myTopnav");
	if (nav.className === "topnav") {
		nav.className += " responsive";
	} else {
		nav.className = "topnav";
	}
}
