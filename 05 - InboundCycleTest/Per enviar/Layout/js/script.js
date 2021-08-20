const form = document.querySelector('#form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputName = event.target.querySelector('#name');
    const inputSurname = event.target.querySelector('#surname');
    const inputEmail = event.target.querySelector('#email');
    const checkbox = event.target.querySelector('#legal');

    const nameLength = inputName.value.length;
    const surnameLength = inputSurname.value.length;
    const emailLength = inputEmail.value.length;
    const boxChecked = checkbox.checked;
    
    if ( nameLength <= 0 || surnameLength <= 0 || emailLength <= 0) {
        myPopup('Los campos son obligatorios ');
    }else if (!boxChecked){
        myPopup('Hay que aceptar la política de privacidad');
    }else {
        myPopup('¡Muchas gracias!')
    }
});

window.addEventListener('resize',  () => {
    let width = window.innerWidth;
    const arrow = document.querySelector("#icon-arrow");
    console.log(arrow);
    console.log(width);
    if (width <= 768){
        arrow.classList.remove('fa-long-arrow-right');
        arrow.classList.add('fa-long-arrow-down');
    } else {
        arrow.classList.add('fa-long-arrow-right')
    }
});


function myPopup(msg, isValid) {
    const popup = document.querySelector("#myPopup");
    popup.innerHTML = msg;   
    popup.classList.toggle("show");
    setTimeout((teste) => popup.classList.remove("show"), 3000);

    if (!isValid) {
        popup.classList.remove('popuptext');
        popup.classList.add('popuptextbad');
    }
};



