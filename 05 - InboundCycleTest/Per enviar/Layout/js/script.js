const form = document.querySelector('#form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

});

function myPopup() {
    const popup = document.querySelector("#myPopup");
    popup.classList.toggle("show");
};


const showPopup = document.querySelector("button");
showPopup.addEventListener('click', () => {
    myPopup();

});

// window.addEventListener('resize', () => {
//     const largura = window.innerWidth;
//     if (largura <= 425) {

//      document.querySelector('#icon-arrow')
//     }
// });

