$(document).ready(function() {

    $('input[name=promo__phone]').mask("+7 (999)-999-9999");

    $('#promo__form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart1.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('.overlay, #thanks').fadeIn('slow');
            $('#promo__form').trigger('reset');
        });
        return false;
    })

    $('.modal-callback__form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart2.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('.overlay, #thanks').fadeIn('slow');
            $('.modal-callback__form').trigger('reset');
        });
        return false;
    })

    $('.modal-close').on('click', function() {
        $('.overlay, #thanks').fadeOut('slow');
    });

    $('#call-callback').on('click', function() {
        $('.overlay, #callback').fadeIn('slow');
    })
})