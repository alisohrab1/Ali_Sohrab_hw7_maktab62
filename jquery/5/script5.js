$(document).ready(function () {
   
    $("#button1").click(function(){
        $("#box1").slideUp();
        $("p").css("visibility","visible" )
        $("p").fadeIn();

    })
    $("#button2").click(function(){
        $("#box1").slideDown();
        // $("p").css("visibility","hidden" )
        $("p").fadeOut();
    })
    $("#button3").click(function(){
        $("#box1").slideToggle();
        // $("p").css("visibility","hidden" )
        $("p").fadeToggle();
    })
});