let menuIcon = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');

let formBtn = document.querySelector('#user-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');

window.onscroll = () => {

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    searchBtn.classList.remove('bx-x');
    searchBar.classList.remove('active');
}

searchBtn.onclick = () => {
    searchBtn.classList.toggle('bx-x');
    searchBar.classList.toggle('active');
};

formBtn.onclick = () => {
    loginForm.classList.add('active');
}

formClose.onclick = () => {
    loginForm.classList.remove('active');
}

var swiper = new Swiper(".swiper", {
    spaceBetween: 20,
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction:false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable:true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },

        768: {
            slidesPerView: 2,
        },

        991: {
            slidesPerView: 3,
        },

    },
});
document.querySelector('.btn[href="#rooms"]')?.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#rooms').scrollIntoView({ behavior: 'smooth' });
});


