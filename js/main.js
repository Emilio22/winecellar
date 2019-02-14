function initMap() {
    const loc = {
        lat: 38.950730,
        lng: -92.331380
    };

    const map = new google.maps.Map(document.querySelector('.map'), {
        zoom: 15,
        center: loc
    });

    const marker = new google.maps.Marker({
        position: loc,
        map: map
    });
}




//sticky nav
window.onscroll = function () {
    myFunction()
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}