$(document).ready(function () {
    $("#button1").click(function () {
        $("#button1 > span").removeClass("icon1");
        $("#button1 > span").addClass("icon2");
        $("#panel1").slideDown("slow");
        $("#panel2").slideUp("slow");
        $("#panel3").slideUp("slow");

    })
    $("#button2").click(function () {
        $(this).removeClass("hover");
        $("#panel2").slideDown("slow");
        $("#panel1").slideUp("slow");
        $("#panel3").slideUp("slow");
    })
    $("#button3").click(function () {
        $(this).removeClass("hover");
        $("#panel3").slideDown("slow");
        $("#panel1").slideUp("slow");
        $("#panel2").slideUp("slow");
    })
    $("button0").click(function(){
        $(this).css("background-color","white");
    })

    $("button").hover(function () {
        $(this).addClass("hover");

    },function(){
        $(this).removeClass("hover");
    }
    )

    

});