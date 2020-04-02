$(document).ready(function() {

    $('.personal__item').on('click', function() {
        if(!$(this).hasClass('personal__item_active')){
            $(this).addClass('personal__item_active').siblings().removeClass('personal__item_active');

            if($(this).attr('id') == 'settings-wrap') {
                
                $('#settings').css('display', 'block');
                $('#download, #call, #integration').css('display', 'none');

            } else if($(this).attr('id') == 'download-wrap') {

                $('#download').css('display', 'block');
                $('#settings, #call, #integration').css('display', 'none');

            } else if($(this).attr('id') == 'call-wrap') {

                $('#call').css('display', 'block');
                $('#download, #settings, #integration').css('display', 'none');

            } else if($(this).attr('id') == 'integration-wrap') {

                $('#integration').css('display', 'block');
                $('#download, #call, #settings').css('display', 'none');

            }
        }

    });

});