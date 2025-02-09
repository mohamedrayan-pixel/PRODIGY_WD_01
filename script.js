// Change navbar background color on scroll
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#555';
    } else {
        navbar.style.backgroundColor = 'transparent';
    }
});
