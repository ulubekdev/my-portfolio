function sendMail() {
    var link = "mailto:ulubekdev@gmail.com"
             + "?cc=myCCaddress@example.com"
             + "&subject=" + encodeURIComponent("From My Website")
             + "&body=" + encodeURIComponent(document.getElementById('message').value)
    ;
    window.location.href = link;
}