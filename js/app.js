window.onload = function () {
    var i = 0;
    var txt = 'Warren here. Hello!'; /* The text */
    var speed = 100; /* The speed/duration of the effect in milliseconds */

    function typeWriter() {
        if (i < txt.length) {
            document.querySelector(".typewriter h1").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    setTimeout(typeWriter, 2000);

    var body = document.getElementsByTagName("body")[0];
    var toggle = document.getElementById("light-toggle");
    var icon = toggle.getElementsByTagName("i")[0];
    var rabbit = document.getElementsByClassName("rabbit")[0];
    var rabbitdark = document.getElementsByClassName("rabbit-dark")[0];

    toggle.addEventListener("click", function() {
        if (body.classList.contains("dark")) {
            body.classList.remove("dark");
            toggle.classList.remove("dark");
            icon.classList.add("fa-moon");
            icon.classList.remove("fa-sun");
            rabbit.classList.remove("dark");
            rabbitdark.style.opacity = 0;
        }
        else {
            body.classList.add("dark");
            toggle.classList.add("dark");
            icon.classList.add("fa-sun");
            icon.classList.remove("fa-moon");
            rabbit.classList.add("dark");
            rabbitdark.style.opacity = 1;
        }
    })
}
window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0;
    setTimeout(function() {
        window.location.href = href
    }, 500)
}
document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1;
})