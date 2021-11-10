$(document).ready(function () {
  const parentText = $("#text1").text();
  const targetText = $("#text2").text();
  const childText = $("#text3").text();
  // console.log(`hello ${parentText}`);
  $("#button1").click(function () {
    $("#text2").text( parentText + targetText + childText + targetText);
  });

  $("#button2").click(function () {
    $("#text2").text(  childText + targetText);
  })


});
