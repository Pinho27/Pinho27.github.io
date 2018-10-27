$(document).ready(function(){
    $('.header').height($(window).height());

    AOS.init();

    $("#btn-more").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#section2").offset().top
        }, 2000);
    });

    $('#div-backgroud1').css("background-image", "url(https://source.unsplash.com/" + window.screen.availWidth + "x" + window.screen.availHeight + "/?nature,water,tech)");
});