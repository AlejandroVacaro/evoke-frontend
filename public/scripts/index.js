window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.pageYOffset > 100) {
        navbar.style.backgroundColor = '#114c5f';
    } else {
        navbar.style.backgroundColor = 'transparent';
    }
});

document.getElementById('mobile-menu').addEventListener('click', function() {
    const navList = document.querySelector('.nav-list');
    this.classList.toggle('is-active');
    navList.classList.toggle('active');
});

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.pageYOffset > 100) {
        navbar.style.backgroundColor = '#114c5f';
    } else {
        navbar.style.backgroundColor = 'transparent';
    }
});

