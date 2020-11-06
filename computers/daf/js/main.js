$(document).ready(function(){

    var $page = $('html, body');
    $('a[href*="#"]').click(function(e) {
        e.preventDefault();
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 400);
        return false;
    });

});