function stopDefAction(evt) {
    evt.preventDefault();
}
    
document.getElementById('causes-link').addEventListener(
    'click', stopDefAction, false
);

document.getElementById('request-link').addEventListener(
    'click', stopDefAction, false
);

document.getElementById('buy-link').addEventListener(
    'click', stopDefAction, false
);

function jump(h){
    var top = document.getElementById(h).offsetTop;
    window.scrollTo(0, top);
}

$(document).ready(function() {

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

    function closeOver(some) {
        $(some).fadeOut('fast');
    }
    
    $('input[name=phone]').mask("+7 (999)-999-9999");

    $('#call-form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#call-form').trigger('reset');
            setTimeout(closeOver, 1000, ".modal__overlay");
        });
        return false;
    });

    $('.modal__close').on('click', function() {
        $('.modal__overlay').fadeOut('slow');
    });

    $('#modal-call-btn').on('click', function() {
        $('.modal__overlay').fadeIn('slow');
    });

});