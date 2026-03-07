$(document).ready(function(){
    $('.click-window').click(function(){
        $('.layer').fadeIn();
        $('body').css('overflow' , 'hidden');
    });
    $('.exit-btn h2').click(function(){
        $('.layer').fadeOut();
        $('body').css('overflow' , 'auto');
        

    })
    $('.layer').click(function(){
        $('.layer').fadeOut();
        $('body').css('overflow' , 'auto');
    })
})