// Get the button
let scrollToTopBtn = document.getElementById("scroll-to-top");
scrollToTopBtn.style.display = 'hidden';

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 750 || document.documentElement.scrollTop > 750) {
        scrollToTopBtn.style.display = "block";
        scrollToTopBtn.style.visibility = "visible";
        scrollToTopBtn.style.transitionDuration = ".33s"
        scrollToTopBtn.style.color = "var(--primary)";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}