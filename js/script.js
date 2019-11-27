const slider1 = tns({
    container: '.services__wrapper-carousel',
    items: 1,
    slideBy: 1,
    nav: false,
    autoplay: false,
    controls: false,
});

document.querySelector('.prev_services').onclick = function () {
    slider1.goTo('prev');
};

document.querySelector('.next_services').onclick = function () {
    slider1.goTo('next');
};


const slider2 = tns({
    container: '.license__wrapper-carousel',
    items: 1,
    slideBy: 1,
    nav: false,
    navPosition: 'top',
    autoplay: false,
    controls: false,
});


document.querySelector('.prev_license').onclick = function () {
    slider2.goTo('prev');
};

document.querySelector('.next_license').onclick = function () {
    slider2.goTo('next');
};



function stopDefAction(evt) {
    evt.preventDefault();
}
    
document.getElementById('clc').addEventListener(
    'click', stopDefAction, false
);


$(document).ready(function() {


    //Progress bar1 in Computation block
    $('#d1 label').on('click', function() {
        $('.clc-form__documents-wrapper__progress__green').css('width', '0%');
        $('#d1-progress, #d2-progress, #d3-progress, #d4-progress, #d5-progress').css('background-color', '#f5f6f8');
    });

    $('#d2 label').on('click', function() {
        $('.clc-form__documents-wrapper__progress__green').css('width', '25%');
        $('#d1-progress').css('background-color', '#7bb63c');
        $('#d2-progress, #d3-progress, #d4-progress, #d5-progress').css('background-color', '#f5f6f8');
    });

    $('#d3 label').on('click', function() {
        $('.clc-form__documents-wrapper__progress__green').css('width', '50%');
        $('#d1-progress, #d2-progress').css('background-color', '#7bb63c');
        $('#d3-progress, #d4-progress, #d5-progress').css('background-color', '#f5f6f8');
    });

    $('#d4 label').on('click', function() {
        $('.clc-form__documents-wrapper__progress__green').css('width', 'calc(75% - 10px)');
        $('#d1-progress, #d2-progress, #d3-progress').css('background-color', '#7bb63c');
        $('#d4-progress, #d5-progress').css('background-color', '#f5f6f8');
    });

    $('#d5 label').on('click', function() {
        $('.clc-form__documents-wrapper__progress__green').css('width', '100%');
        $('#d1-progress, #d2-progress, #d3-progress, #d4-progress').css('background-color', '#7bb63c');
        $('#d5-progress').css('background-color', '#f5f6f8');
    });






    //Progress bar2 in Computation block
    $('#q1 label').on('click', function() {
        $('.clc-form__quantity-wrapper__progress__green').css('width', '0%');
        $('#q1-progress, #q2-progress, #q3-progress, #q4-progress, #q5-progress').css('background-color', '#f5f6f8');
    });

    $('#q2 label').on('click', function() {
        $('.clc-form__quantity-wrapper__progress__green').css('width', '25%');
        $('#q1-progress').css('background-color', '#7bb63c');
        $('#q2-progress, #q3-progress, #q4-progress, #q5-progress').css('background-color', '#f5f6f8');
    });

    $('#q3 label').on('click', function() {
        $('.clc-form__quantity-wrapper__progress__green').css('width', 'calc(50% - 15px)');
        $('#q1-progress, #q2-progress').css('background-color', '#7bb63c');
        $('#q3-progress, #q4-progress, #q5-progress').css('background-color', '#f5f6f8');
    });

    $('#q4 label').on('click', function() {
        $('.clc-form__quantity-wrapper__progress__green').css('width', 'calc(75% - 11px)');
        $('#q1-progress, #q2-progress, #q3-progress').css('background-color', '#7bb63c');
        $('#q4-progress, #q5-progress').css('background-color', '#f5f6f8');
    });

    $('#q5 label').on('click', function() {
        $('.clc-form__quantity-wrapper__progress__green').css('width', '100%');
        $('#q1-progress, #q2-progress, #q3-progress, #q4-progress').css('background-color', '#7bb63c');
        $('#q5-progress').css('background-color', '#f5f6f8');
    });


    function validateForms(form) {
        $(form).validate({
            rules: {
                name: "required",
                phone: "required",
            },
            messages: {
                name: "Пожалуйста, введите своё имя",
                phone: "Пожалуйста, введите свой номер телефона",
            }
        });
    }

    // validateForms('#discount-form');
    // validateFormsMain('#modal-form');

    $('input[name=phone]').mask("+7 (999)-999-9999");



    $('#discount-form, #modal-form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            // type: "POST",
            // url: "mailer/smart.php",
            // data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#callback').fadeOut('slow')
            $('.overlay, #thanks').fadeIn('slow')
            $('form').trigger('reset');
        });
        return false;
    })

    $('.modal__close').on('click', function() {
        $('.overlay, #thanks, #callback').fadeOut('slow');
    });

    $('#callback__call1, #callback__call2, #callback__call3').on('click', function() {
        $('.overlay, #callback').fadeIn('slow');
    });

})