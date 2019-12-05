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

const slider3 = tns({
    container: '.pluses__carousel',
    items: 1,
    slideBy: 1,
    gutter: 10,
    nav: false,
    navPosition: 'top',
    autoplay: false,
    controls: false,
});

document.querySelector('.prev_pluses').onclick = function () {
    slider3.goTo('prev');
};

document.querySelector('.next_pluses').onclick = function () {
    slider3.goTo('next');
};



function stopDefAction(evt) {
    evt.preventDefault();
}
    
// document.getElementById('clc').addEventListener(
//     'click', stopDefAction, false
// );


$(document).ready(function() {

    $('input[name=phone]').mask("+7 (999)-999-99-99");

    $('#discount-form, #modal-form, #cost-form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            // type: "POST",
            // url: "mailer/smart.php",
            // data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#callback, #cost').fadeOut('slow');
            $('.overlay, #thanks').fadeIn('slow');
            $('form').trigger('reset');
        });
        return false;
    })


    $('.modal__close').on('click', function() {
        $('.overlay, #thanks, #callback, #cost').fadeOut('slow');
    });

    $('.cost-call').on('click', function() {
        $('.overlay, #cost').fadeIn('slow');
    });

    $('#cost__call1').on('click', function() {
        $('.overlay, #callback').fadeIn('slow');
    });


})