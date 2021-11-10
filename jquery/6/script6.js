$(document).ready(function () {
  $(".link2").hover(function (){
      $("#dropdown1").css("visibility", "visible");
      $("#dropdown1").slideDown();
      $("#dropdown2").css("display", "none");}
      , function(){
        $("#dropdown1").css("display", "none");
    }
  )
  $("#dropdown1").hover(function (){
    $("#dropdown1").css("visibility", "visible");
    $("#dropdown1").slideDown();
    $("#dropdown2").css("display", "none");
}, function(){
    $("#dropdown1").css("display", "none");
})

  $(".link3").hover(function (){
    $("#dropdown2").css("visibility", "visible");
    $("#dropdown2").slideDown();
    $("#dropdown1").css("display", "none");
},function(){
    $("#dropdown2").css("display", "none");
})
$("#dropdown2").hover(function (){
    $("#dropdown2").css("visibility", "visible");
    $("#dropdown2").slideDown();
    $("#dropdown1").css("display", "none");
}, function(){
    $("#dropdown2").css("display", "none");
})

});
