$(document).ready(function() {

    window.onload = function() {
        setTimeout(autoWidget, 5500);
    };

    function autoWidget() {
        $('#lbw-close').focus().click();
    }

    $('#lbw-close').on('click', function() {
        $('#lbw-body').toggleClass('lbw-body-active');

        if(!$('#lbw-body').hasClass('first-active')) {
            $('#lbw-body').addClass('first-active');
            start();
        }

    });

    function start() {
        $('#lbw-bot1').delay(1500).fadeIn(400);
        $('#lbw-bot2').delay(3000).fadeIn(400);
        // For testing
        // $('#lbw-bot1').fadeIn(400);
        // $('#lbw-bot2').fadeIn(400);

    }

    function finalAct(someId) {
        $(someId).fadeIn('slow');
    }

    function showMyText(text, placeId, inputId) {
        $(placeId).css('display', 'block');
        $(placeId).text(text);
        $(inputId).val();
    }

    $('#lbw-asked-input').keypress(function(e) {
        if(e.which == 13) {
            $(this).blur();
            $('#lbw-asked-btn').focus().click();
        }
    });

    $('#lbw-asked-btn').on('click', function(){
        if(($('#lbw-bot2').css('display') == 'block')&&(!$('#lbw-asked-btn').hasClass('stopped'))) {
            $('#lbw-asked-btn').addClass('stopped');
            var userText = $('#lbw-asked-input').val();
            $('#lbw-user1').css('display', 'block');
            $('#lbw-user1').text(userText);
            $('#lbw-asked-input').val("");
            setTimeout(finalAct, 2500, "#qu-form");
        }
    });

    $('#qu-form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            // type: "POST",
            // url: "mailer/smart.php",
            // data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#qu-form').trigger('reset');
        });
        return false;
    });

});