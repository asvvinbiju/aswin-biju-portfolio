$(document).ready(function () {

  function ab() {
    $("#ab").mouseenter(function () {
      $("#ab").text("Aswin Biju");
    })
    $("#ab").mouseleave(function () {
      $("#ab").text("AB");
    })
  }

  function profile_animation() {
    $("#me").mouseenter(function(){
      $(this).attr("src", "PSX_20240602_124520.jpg")
    });
    $("#me").mouseleave(function(){
      $(this).attr("src", "PSX_20240602_124506.jpg")
    })
  }
  profile_animation();
  ab();
});
