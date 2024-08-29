const headWrap = document.querySelector(".header__wrapper");
const buttonBurger = document.querySelector(".header__burger");
const headLinks = document.querySelectorAll(".header__item-link");
const travelLinks = document.querySelectorAll(".travel__country-item");
const travelImages = document.querySelectorAll(".travel__pictures-item");
// let a = Object.keys(travelLinks);
// function massive() {
//     return Object.keys(travelLinks);
// };
// let b = massive();
// for (let bs of b) {
//     console.log(bs);
// }
// console.log(b);
// const travelLinksId = document.getElementById('Italy');
// const id = travelLinksId.id;
// console.log(id);
// console.log(Object.keys(travelLinks));


// function idTravelLinksMassiveId() {
//     for (let idTravelLinks = 0; idTravelLinks < travelLinks.length; idTravelLinks++) {
//         idTravelLinksMassive = travelLinks[idTravelLinks].id;
//         console.log(idTravelLinksMassive);
//     };
// };
// idTravelLinksMassiveId();

// function idTravelImagesMassiveId() {
//     for (let idTravelImages = 0; idTravelImages < travelImages.length; idTravelImages++) {
//         idTravelImagesMassive = travelImages[idTravelImages].id;
//         console.log(idTravelImagesMassive);
//     };
// };
// idTravelImagesMassiveId();



// let a = masid();
// console.log(a);


buttonBurger.addEventListener("click", () => {
    headWrap.classList.toggle('open');
});

headLinks.forEach((link) => {
    link.addEventListener('click', () => {
        headWrap.classList.toggle('open');
        onLinkClick();
        link.classList.add('active-tab');
    });
});

function onLinkClick() {
    headLinks.forEach((link) => {
        link.classList.remove('active-tab');
    });
};

travelLinks.forEach((travelLink) => {
    travelLink.addEventListener('click', () => {
        // travelImages.forEach((image) => {
        //     image.classList.remove('active-tab');
        //     console.log(image.id);
        // });
        let a = travelLink.id;
        console.log(a);
        // c();

        // onTLinkClick();
        // removeImage();
        // travelLink.classList.add('active-tab');
    });
});

// function c() {
//     travelImages.forEach((travelImage) => {
//         let b = travelImage.id;
//         console.log(b);
//     });
// };

// function onTLinkClick() {
//     travelLinks.forEach((travelLink) => {
//         travelLink.classList.remove('active-tab');
//     });
// };

// travelImages.classList.remove('active-tab');
// function removeImage() {
//     travelImages.forEach((image) => {
//         image.classList.remove('active-tab');
//     });
// };

// function imageCount() {
//     travelImages.forEach((image) => {
//         console.log(image.id);
//     });
//     return 0;
// };
// console.log(imageCount());