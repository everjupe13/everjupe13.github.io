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
    var rngRight= rng.value/10000
	div.style.width=rngRight+'%';
}

var ib=document.getElementById('demo');
    ib.onblur = function() {
        if (ib.value < '10000') {
            ib.value = '10000'
        }
        else if (ib.value > '1000000') {
            ib.value = '1000000'
        }
    }


function fun2() {
    var rng=document.getElementById('myRange'); //rng - это ползунок
    var i1=document.getElementById('demo');

    rng.value=i1.value;
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