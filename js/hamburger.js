$(document).ready(function () {
  $(".fullmenu_area").hide();
  let key = true;
  console.log(key);

  $(".hamburger").click(function () {
    if (key == true) {
      key = false;
      console.log(key);
      $(".fullmenu_area")
        .show()
        // .css({ right: "0px", width: "0", height: "0px" })
        .animate({
          right: "670px",
          width: "1030px",
          height: "970px",
        });
    }
  });

  $(".fullmenu_area").mouseleave(function () {
    key = true;
    console.log(key);
    $(this)
      //   .css({ right: "670px", width: "1030px" })
      .animate({ right: "0px", width: 0 });
  });
});
