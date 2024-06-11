'use strict';

const hamburger__menu = document.querySelector('.hamburger-menu');
    if (hamburger__menu) {
        hamburger__menu.addEventListener('click', () => {
            console.log('menu clicked');
            const main__nav = document.querySelector('.nav-menu');
            if (main__nav.classList.contains('sidebar_open')) {
                main__nav.classList.remove('sidebar_open');
            } else {
                main__nav.classList.add('sidebar_open');
            }
        });
    }

