$(document).ready(function () {
  // 서브에 마우스를 올렸을때
  $(".info>ul>li").hover(
    function () {
      $(this).find("a").addClass("act4");
    },
    function () {
      $(this).find("a").removeClass("act4");
    }
  );
});
