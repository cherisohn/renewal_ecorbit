$(document).ready(function () {
  // 서브에 마우스를 올렸을때
  $(".sub_mn>li").hover(
    function () {
      $(this).find("a").addClass("act3");
    },
    function () {
      $(this).find("a").removeClass("act3");
    }
  );
});
