const headWrap = document.querySelector(".header__wrapper");
const buttonBurger = document.querySelector(".header__burger");
const headLink = document.querySelectorAll(".header__item-link");
const travelLink = document.querySelectorAll(".travel__country-item");


buttonBurger.addEventListener("click", () => {
    headWrap.classList.toggle('open');
});

headLink.forEach((link) => {
    link.addEventListener('click', () => {
        headWrap.classList.toggle('open');
        onLinkClick();
        link.classList.add('active-tab');
    });
});

function onLinkClick() {
    headLink.forEach((link) => {
        link.classList.remove('active-tab');
    })
};

travelLink.forEach((tlink) => {
    tlink.addEventListener('click', () => {
        onTLinkClick();
        tlink.classList.add('active-tab');
    });
});

function onTLinkClick() {
    travelLink.forEach((tlink) => {
        tlink.classList.remove('active-tab');
    })
};

