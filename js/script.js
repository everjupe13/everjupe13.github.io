const slider1 = tns({
    container: '.calculator__slider',
    items: 1,
    slideBy: 1,
    nav: true,
    navPosition: 'top',
    autoplay: false,
    controls: false,
    // responsive: {
    //     310: {
    //         items: 1,
    //         nav: false,
    //     },
    //     576: {
    //         items: 1,
    //         nav: false,
    //     },
    //     769: {
    //         items: 1,
    //         nav: false,
    //     },
    //     1025: {
    //         items: 3,
    //         nav: false,
    //     }
    // }
});

function stopDefAction(evt) {
    evt.preventDefault();
}
    
document.getElementById('calculator__form').addEventListener(
    'click', stopDefAction, false
);


$(document).ready(function() {

    function validateForms(form) {
        $(form).validate({
            rules: {
                name: "required",
                phone: "required",
            },
            messages: {
                name: "Пожалуйста, введите свое имя",
                phone: "Пожалуйста, введите свой номер телефона",
            }
        });
    }

    validateForms('#promo__form');
    validateForms('#calculator__form');

    $('input[name=phone]').mask("+7 (999)-999-9999");

})