const OPEN_MENU_BTN = document.querySelector('.open-menu-btn');
const CLOSE_MENU_BTN = document.querySelector('.close-menu-btn');
const MOBILE_NAV = document.querySelector('.mobile-nav');
const OVERLAY = document.querySelector('.overlay');
const BODY = document.body;

const openMenu = () => {
    OPEN_MENU_BTN.classList.add('hidden');
    CLOSE_MENU_BTN.classList.remove('hidden');

    MOBILE_NAV.classList.remove('hidden');
    OVERLAY.classList.remove('hidden');

    BODY.style.overflow = "hidden";
}

const closeMenu = () => {
    OPEN_MENU_BTN.classList.remove('hidden');
    CLOSE_MENU_BTN.classList.add('hidden');

    MOBILE_NAV.classList.add('hidden');
    OVERLAY.classList.add('hidden');
    BODY.style.overflow = "scroll";
}

OPEN_MENU_BTN.addEventListener('click', openMenu);
CLOSE_MENU_BTN.addEventListener('click', closeMenu);
OVERLAY.addEventListener('click', closeMenu);