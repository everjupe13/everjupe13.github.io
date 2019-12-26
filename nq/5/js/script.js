const slider1 = tns({
    container: '.rates__carousel-inner',
    items: 1,
    slideBy: 1,
    nav: false,
    autoplay: false,
    controls: false,
});

document.querySelector('.prev').onclick = function () {
    slider1.goTo('prev');
};

document.querySelector('.next').onclick = function () {
    slider1.goTo('next');
};

const slider2 = tns({
    container: '.feedback__carousel',
    mode: 'gallery',
    animateDelay: '100000000',
    items: 1,
    slideBy: 1,
    nav: false,
    autoplay: false,
    controls: false,
    
});

document.querySelector('.feedback__btn').onclick = function () {
    slider2.goTo('next');
};


function stopDefAction(evt) {
    evt.preventDefault();
}

$(document).ready(function() {


    $('input[name=phone]').mask("+7 (999)-999-9999");

    $('#modal-form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#callback').fadeOut('');
            $('.overlay, #thanks').fadeIn('slow');
            $('#callback form').trigger('reset');
        });
        return false;
    });

    $('.modal__close').on('click', function() {
        $('.overlay, #thanks, #callback').fadeOut('slow');
    });

    $('.call-btn').on('click', function() {
        $('.overlay, #callback').fadeIn('slow');
    });


})