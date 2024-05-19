$(document).ready(function () {
  $("#ab").mouseenter(function () {
    $("#ab").text("Aswin Biju");
  })
  $("#ab").mouseleave(function () {
    $("#ab").text("AB");
  })
  $("#me").animate(
    {
      right: "-70px",
    },
    1500,
    function () {
      $(".circle").fadeIn(1000, function () {
        $("#circleone").css("animation", "crone 10s infinite");
        $("#circletwo").css("animation", "crtwo 10s infinite");
        // $("#base").css("animation", "ba_movedown 2s infinite").css("animation-delay", "10s");
      });
    }
  );
  function born() {
    $("#born").css("bottom", "50px").css("display", "none");
    var deferred = $.Deferred();
    $("#born").fadeIn(function () {
      function up() {
        $("#born").animate({
          top: "-37px"
        }, 1000, function () {
          setTimeout(function () {
            $("#born").animate({
              top: "30px"
            }, 1700, function () {
              // $("#born").css("bottom", "100px");
              $("#born").css("top", "-100px");
              $("#born").css("display", "none");
              deferred.resolve();
            });
          }, 1500)
        });
      }
      up();
    });
    return deferred.promise();
  }
  function raise() {
    $("#raise").css("bottom", "50px").css("display", "flex");
    var deferred = $.Deferred();
    function up() {
      $("#raise").animate({
        top: "-37px"
      }, 1000, function () {
        setTimeout(function () {
          $("#raise").animate({
            top: "30px"
          }, 1700, function () {
            $("#raise").css("top", "-100px");
            $("#raise").css("display", "none");
            deferred.resolve();
          });
        }, 1500)
      });
    }
    up();
    return deferred.promise();
  }
  function based() {
    $("#base").css("bottom", "50px").css("display", "none");
    var deferred = $.Deferred();
    $("#base").fadeIn(function () {
      function up() {
        $("#base").animate({
          top: "-37px"
        }, 1000, function () {
          setTimeout(function () {
            $("#base").animate({
              top: "30px"
            }, 1700, function () {
              $("#base").css("top", "-100px");
              $("#base").css("display", "none");
              deferred.resolve();
            });
          }, 1500)
        });
      }
      up();
    });
    return deferred.promise();
  }
  function loop() {
    born().then(raise).then(based).then(loop);
  }
  loop();
});
