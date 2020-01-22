const slider1 = tns({
    container: '.part__carousel',
    items: 3,
    slideBy: 1,
    nav: false,
    navPosition: 'top',
    autoplay: false,
    controls: false,
    // gutter: 10
});



document.querySelector('.part__btn_prev').onclick = function () {
    slider1.goTo('prev');
};

document.querySelector('.part__btn_next').onclick = function () {
    slider1.goTo('next');
};



// function stopDefAction(evt) {
//     evt.preventDefault();
// }
    
// document.getElementById('calculator__form').addEventListener(
//     'click', stopDefAction, false
// );


$(document).ready(function() {

    function validateFormsMain(form) {
        $(form).validate({
            rules: {
                fromCity: "required",
                fromStreet: "required",
                fromHouse: "required",
                whereCity: "required",
                whereStreet: "required",
                whereHouse: "required",
                phone: "required",
                fromCityMobile: "required",
                whereCityMobile: "required",
                fromStreetMobile: "required",
                whereStreetMobile:"required",
            },
            messages: {
                fromCity: "Пожалуйста, заполните поле",
                fromStreet: "Пожалуйста, заполните поле",
                fromHouse: "Пожалуйста, заполните поле",
                whereCity: "Пожалуйста, заполните поле",
                whereStreet: "Пожалуйста, заполните поле",
                whereHouse: "Пожалуйста, заполните поле",
                fromCityMobile: "Пожалуйста, заполните поле",
                whereCityMobile: "Пожалуйста, заполните поле",
                fromStreetMobile: "Пожалуйста, заполните поле",
                whereStreetMobile:"Пожалуйста, заполните поле",
                phone: "Пожалуйста, введите свой номер телефона",
            }
        });
    }

    function validateForms(form) {
        $(form).validate({
            rules: {
                phone: "required",
            },
            messages: {
                phone: "Пожалуйста, введите свой номер телефона",
            }
        });
    }

    validateForms('#promo__form');
    validateFormsMain('#calculator__form');

    $('input[name=phone]').mask("+7 (999)-999-9999");



    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('.overlay, #thanks').fadeIn('slow');
            $('form').trigger('reset');
        });
        return false;
    })

    $('.modal__close').on('click', function() {
        $('.overlay, #thanks').fadeOut('slow');
    });

})