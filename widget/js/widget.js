$(document).ready(function() {

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


    $('#lbw-asked-btn').on('click', function(){
        if(($('#lbw-bot2').css('display') == 'block')&&(!$('#lbw-asked-btn').hasClass('stopped'))) {
            var userText = $('#lbw-asked-input').val();
            $('#lbw-user1').css('display', 'block');
            $('#lbw-user1').text(userText);
            $('#lbw-asked-input').val("");
            $('#lbw-asked-btn').addClass('stopped');
            setTimeout(finalAct, 2000, "#qu-form");
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