$(document).ready(function() {
    
    $('[data-modal=callback]').on('click', function() {
        $('.overlay, #callback-form').fadeIn('slow');
    });
    $('.modal-form__close').on('click', function() {
        $('.overlay, #callback-form').fadeOut('slow');
    });

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

    validateForms('#callback-form form');
    validateForms('#discount form');

    $('input[name=phone]').mask("+7 (999)-999-9999");

})