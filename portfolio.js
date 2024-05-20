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
  }

  function text_transition() {

    function friend() {
      $("#frnd").css("bottom", "50px").css("display", "none");
      var deferred = $.Deferred();
      $("#frnd").fadeIn(function () {
        function up() {
          $("#frnd").animate({
            top: "-37px"
          }, 1000, function () {
            setTimeout(function () {
              $("#frnd").animate({
                top: "30px"
              }, 1700, function () {
                // $("#frnd").css("bottom", "100px");
                $("#frnd").css("top", "-100px");
                $("#frnd").css("display", "none");
                deferred.resolve();
              });
            }, 1500)
          });
        }
        up();
      });
      return deferred.promise();
    }
    function know() {
      $("#know").css("bottom", "50px").css("display", "flex");
      var deferred = $.Deferred();
      function up() {
        $("#know").animate({
          top: "-37px"
        }, 1000, function () {
          setTimeout(function () {
            $("#know").animate({
              top: "30px"
            }, 1700, function () {
              $("#know").css("top", "-100px");
              $("#know").css("display", "none");
              deferred.resolve();
            });
          }, 1500)
        });
      }
      up();
      return deferred.promise();
    }
    function internet() {
      $("#internet").css("bottom", "50px").css("display", "none");
      var deferred = $.Deferred();
      $("#internet").fadeIn(function () {
        function up() {
          $("#internet").animate({
            top: "-37px"
          }, 1000, function () {
            setTimeout(function () {
              $("#internet").animate({
                top: "30px"
              }, 1700, function () {
                $("#internet").css("top", "-100px");
                $("#internet").css("display", "none");
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
      friend().then(know).then(internet).then(loop);
    }
    loop();
  }

  function page_animation() {

    //page projects container animation
    $("#pro_container").mouseenter(function () {
      $(this).animate({
        // height: "300px",
        width: "250px",
        bottom: "50px",
      });
      $("#pro").animate({
        fontSize: "20px",
        fontweight: "bold",
        paddingleft: "25px",
        padding: "10px",
        margin: "1px",
        borderRadius: "10px"
      });
    });
    $("#pro_container").mouseleave(function () {
      $(this).animate({
        // height: "150px",
        width: "200px",
        bottom: "0"
      });
      $("#pro").animate({
        fontSize: "15px",
        fontweight: "bold",
        paddingleft: "25px",
        padding: "10px",
        margin: "1px",
        borderRadius: "7px"
      })
    });

    //page About container animation

    $("#info_container").mouseenter(function () {
      $(this).animate({
        // height: "300px",
        width: "250px",
        bottom: "50px",
      });
      $("#info").animate({
        fontSize: "20px",
        fontweight: "bold",
        paddingleft: "25px",
        padding: "10px",
        margin: "1px",
        borderRadius: "10px"
      });
    });
    $("#info_container").mouseleave(function () {
      $(this).animate({
        // height: "150px",
        width: "200px",
        bottom: "0"
      });
      $("#info").animate({
        fontSize: "15px",
        fontweight: "bold",
        paddingleft: "25px",
        padding: "10px",
        margin: "1px",
        borderRadius: "7px"
      });
    });

    //page contact conatiner animation

    $("#c_container").mouseenter(function () {
      $(this).animate({
        // height: "300px",
        width: "250px",
        bottom: "50px",
      });
      $("#cont").animate({
        fontSize: "20px",
        fontweight: "bold",
        paddingleft: "25px",
        padding: "10px",
        margin: "1px",
        borderRadius: "10px"
      });
    });
    $("#c_container").mouseleave(function () {
      $(this).animate({
        // height: "150px",
        width: "200px",
        bottom: "0"
      });
      $("#cont").animate({
        fontSize: "15px",
        fontweight: "bold",
        paddingleft: "25px",
        padding: "10px",
        margin: "1px",
        borderRadius: "7px"
      })
    });
  }

  function page_open() {
    $("#pro").click(function () {
      $("#note_container").fadeOut();
      $("#pages").animate({
        top: "100%"
      }, function () {
        $("#pro_frame").animate({
          left: "-20px"
        });
      });
    });

    $("#info").click(function () {
      $("#note_container").fadeOut();
      $("#pages").animate({
        top: "100%"
      }, function () {
        $("#info_frame").animate({
          left: "-20px"
        });
      });
    });

    $("#cont").click(function () {
      $("#note_container").fadeOut();
      $("#pages").animate({
        top: "100%"
      }, function () {
        $("#cont_frame").animate({
          left: "-20px"
        });
      });
    });
  }
  page_open();

  function page_close() {
    $("#pro_close").click(function () {
      $("#pro_frame").animate({
        left: "-830px"
      }, function () {
        $("#note_container").fadeIn(1000);
        $("#pages").animate({
          top: "80%"
        }, 1000);
      })
    })

    $("#info_close").click(function () {
      $("#info_frame").animate({
        left: "-830px"
      }, function () {
        $("#note_container").fadeIn(1000);
        $("#pages").animate({
          top: "80%"
        }, 1000);
      })
    })

    $("#cont_close").click(function () {
      $("#cont_frame").animate({
        left: "-830px"
      }, function () {
        $("#note_container").fadeIn(1000);
        $("#pages").animate({
          top: "80%"
        }, 1000);
      })
    })
  }
  page_close();

  page_animation();
  text_transition();
  profile_animation();
  ab();
});
