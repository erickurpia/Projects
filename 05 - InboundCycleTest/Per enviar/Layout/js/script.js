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

window.addEventListener('resize', function () {
    let width = window.innerWidth;
    const arrow = document.querySelector("#icon-arrow");
    console.log(arrow);
    console.log(largura);
    if (width <= 768){
        arrow.classList.remove('fa-long-arrow-right');
        arrow.classList.add('fa-long-arrow-down');
    } else {
        arrow.classList.add('fa-long-arrow-right')
    }
});

