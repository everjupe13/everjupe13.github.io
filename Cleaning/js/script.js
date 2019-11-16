const slider1 = tns({
    container: '.cost__carousel',
    items: 3,
    slideBy: 1,
    navPosition: 'bottom',
    autoplay: false,
    controls: false,
    responsive: {
        310: {
            items: 1,
            nav: false,
        },
        576: {
            items: 1,
            nav: false,
        },
        769: {
            items: 1,
            nav: false,
        }
    }
});

document.querySelector('.prev__cost').onclick = function () {
    slider1.goTo('prev');
};

document.querySelector('.next__cost').onclick = function () {
    slider1.goTo('next');
};


const slider2 = tns({
    container: '.result__carousel',
    items: 2,
    slideBy: 'page',
    nav: false,
    autoplay: false,
    controls: false,
    responsive: {
        310: {
            items: 2,
        },
        575: {
            items: 2,
        }
    }
});

const slider4 = tns({
    container: '.result__carousel-h',
    items: 2,
    slideBy: 'page',
    nav: false,
    autoplay: false,
    controls: false,
    axis: 'vertical',
    responsive: {
        310: {
            items: 2,
        },
        575: {
            items: 2,
        }
    }
});

document.querySelector('.prev__result-h').onclick = function () {
    slider4.goTo('prev');
};

document.querySelector('.next__result-h').onclick = function () {
    slider4.goTo('prev');
};

document.querySelector('.prev__result').onclick = function () {
    slider2.goTo('prev');
};

document.querySelector('.next__result').onclick = function () {
    slider2.goTo('next');
};

const slider3 = tns({
    container: '.feedback__wrapper-carousel',
    items: 1,
    slideBy: 1,
    nav: false,
    autoplay: false,
    controls: false,
    responsive: {
        310: {
            items: 1,
            center: true,
            gutter: 15,
            loop: true,
        },
        575: {
            items: 1,
            center: true,
            gutter: 10,
            loop: true,
        }
    }
});

document.querySelector('.prev__feedback').onclick = function () {
    slider3.goTo('prev');
};

document.querySelector('.next__feedback').onclick = function () {
    slider3.goTo('next');
};




$(document).ready(function() {
    
    $('[data-modal=callback]').on('click', function() {
        $('.overlay, #callback-form').fadeIn('slow');
    });
    $('[data-modal=calculator]').on('click', function() {
        $('.overlay, #calculator-modal').fadeIn('slow');
    });
    $('.modal-form__close').on('click', function() {
        $('.overlay, #callback-form, #calculator-modal').fadeOut('slow');
        $('#modal-sizes, #modal-calendar, #modal-date').fadeOut('slow');
        $('#modal-items, #modal-items, #modal-calculator-button').fadeIn('fast');
        $('.calculator__progress').css('width', '25%');
    });

    $('#modal-calculator-button').on('click', function() {
        $('#modal-items, #modal-calculator-button').fadeOut('slow');
        $('#modal-sizes').fadeIn('slow');
        $('.calculator__progress').css('width', '50%');
    });

    $('#modal-sizes-button').on('click', function() {
        $('#modal-sizes').fadeOut('slow');
        $('#modal-calendar, #modal-calendar-button').fadeIn('slow');
        $('.calculator__progress').css('width', '75%');
    });

    $('#modal-calendar-button').on('click', function() {
        $('#modal-calendar, #modal-calendar-button').fadeOut('slow');
        $('#modal-date').fadeIn('slow');
        $('.calculator__progress').css('width', '100%');
    });

    $('.calculator__block').on('click', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
    });

    $('#calculator-button').on('click', function() {
        $('#items, #calculator-button').fadeOut('slow');
        $('#sizes').fadeIn('slow');
    });

    $('#sizes-button').on('click', function() {
        $('#sizes').fadeOut('slow');
        $('#calendar, #calendar-button').fadeIn('slow');
    });

    $('#calendar-button').on('click', function() {
        $('#calendar, #calendar-button').fadeOut('slow');
        $('#date').fadeIn('slow');
    });



    $('.next__result').on('click', function() {
        $('.result__arrow').fadeOut('fast');
        $('.result__arrow').fadeIn('fast');
    })

    $('.prev__result').on('click', function() {
        $('.result__arrow').fadeOut('fast');
        $('.result__arrow').fadeIn('fast');
    })

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
    validateForms('#modal-sizes form');

    $('input[name=phone]').mask("+7 (999)-999-9999");

})