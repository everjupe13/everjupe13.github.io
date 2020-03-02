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


function fun1() {
    var rng=document.getElementById('myRange'); //rng - это ползунок
    var i1=document.getElementById('demo'); // i1 - input
    i1.value=rng.value;

    var div=document.getElementById('test'); // div - блок test
    var rngRight= rng.value/30000
	div.style.width=rngRight+'%';
}

var ib=document.getElementById('demo');
    ib.onblur = function() {
        if (ib.value < 10000) {
            ib.value = 10000
        }
        else if (ib.value > 3000000) {
            ib.value = 3000000
        }
    }


function fun2() {
    var rng=document.getElementById('myRange'); //rng - это ползунок
    var i1=document.getElementById('demo');

    rng.value=i1.value;

    var div=document.getElementById('test'); // div - блок test
    var rngRight= rng.value/30000
	div.style.width=rngRight+'%';
}


// function stopDefAction(evt) {
//     evt.preventDefault();
// }
    
// document.getElementById('calculator__form').addEventListener(
//     'click', stopDefAction, false
// );


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

    $('input[name=phone]').mask("+7 (999)-999-9999");
    $('input[name=phonereg]').mask("+7 (999)-999-9999");
    $('input[name=work_phone]').mask("+7 (999)-999-9999");
    $('input[name=phone_anot]').mask("+7 (999)-999-9999");


    $('.screen1').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart1.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            // $('.overlay, #thanks').fadeIn('slow');
            $('.screen1').trigger('reset');
            $('#chlist-form1').fadeOut('slow');
            $('#chlist-form2').fadeIn('slow');
        });
        return false;
    })

    $('.screen2').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart2.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            // $('.overlay, #thanks').fadeIn('slow');
            $('.screen2').trigger('reset');
            $('#chlist-form2').fadeOut('slow');
            $('#chlist-form3').fadeIn('slow');
        });
        return false;
    })

    $('.screen3').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart3.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            // $('.overlay, #thanks').fadeIn('slow');
            $('.screen3').trigger('reset');
            $('#chlist-form3').fadeOut('slow');
            $('#chlist-form4').fadeIn('slow');
        });
        return false;
    })

    $('.screen4').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart4.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('.overlay, #thanks').fadeIn('slow');
            $('.screen4').trigger('reset');
            $('#chlist-form4').fadeOut('slow');
            $('#chlist-form1').fadeIn('slow');
        });
        return false;
    })

    $('.modal__close').on('click', function() {
        $('.overlay, #thanks').fadeOut('slow');
    });


    // $('#chlist-screen1').on('click', function() {
    //     $('#chlist-screen1').fadeOut('slow');
    // });

})