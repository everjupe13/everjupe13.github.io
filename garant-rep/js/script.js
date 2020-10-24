$(document).ready(function() {

    // Smooth scroll
    $(".header-nav a[href^='#']").click(function() {
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top + "px"});
        return false;
    });

    // Tel link fix
    var number = $('#phone_link').attr('href');
    number = number.replace(/[^A-Za-z0-9_:+]/g, '').trim();
    $('#phone_link').attr('href', number);
    // console.log($('#phone_link').attr('href'));

});