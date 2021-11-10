$(document).ready(function () {
  $("#box").hover(
    function () {
      // alert("on")
      $(this).css("background-color", "blue");
    },
    function () {
      // alert("off")
      $(this).css("background-color", "red");
    }
  );
});
