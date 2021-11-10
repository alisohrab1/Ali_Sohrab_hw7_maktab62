$(document).ready(function () {
  $("#button1").click(function () {
    $("#box1").fadeIn();
    $("#box2").fadeOut();
  });
  $("#button2").click(function () {
    $("#box1").fadeOut();
    $("#box2").fadeIn();
  });
});
