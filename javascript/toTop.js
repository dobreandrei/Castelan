window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
        document.getElementById("toTopBtn").style.display = "block";
    } else {
        document.getElementById("toTopBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox
} 
