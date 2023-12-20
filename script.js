$(document).ready(function(){
    $("#menu").on("click", function(){
        $("#overlay").css("display", "block");
        $(".mobile-menu").removeClass('move-close').addClass('move').css("display", "grid");
    });

    $(".btn-close-menu").on("click", function(){
        $("#overlay").css("display", "none");
        $(".mobile-menu").removeClass('move').addClass('move-close');

    });

});