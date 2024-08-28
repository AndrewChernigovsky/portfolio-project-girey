const headWrap = document.querySelector(".header__wrapper");
const buttonBurger = document.querySelector(".header__burger");
const headLink = document.querySelectorAll(".header__item-link");


buttonBurger.addEventListener("click", () => {
    headWrap.classList.toggle('open');
});

headLink.forEach((link) => {
    link.addEventListener('click', () => {
        headWrap.classList.toggle('open');
    });
});
