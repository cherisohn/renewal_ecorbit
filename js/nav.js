$(document).ready(function () {
  $(".submn").hide();

  //hover
  $(".mainmn > li").hover(
    function () {
      // $(".sub").hide();

      $(".submn").each(function () {
        //0~3
        var tg = $(this);
        if (tg.show()) {
          //보인다에 대한 참/거짓 구분
          $(this).hide(); //현재 조건문에서 참인 경우에 대상 this를 숨김
        }
      });

      $(this)
        .stop() //이전에 작동했던 애니메이션들 모두 정지
        .find(".submn")
        .show()
        .css({ opacity: "0" })
        .animate({ opacity: "1" });

      // 버튼에 클래스 적용
      $(".mainmn > li > a").removeClass("act"); //클래스 스타일 미적용
      $(this).find("a").addClass("act"); //클래스 스타일 적용
    },
    function () {
      $(".submn").hide();
      $(this).find("a").removeClass("act");
    }
  );
  // 서브에 마우스를 올렸을때
  $(".submn>li").hover(
    function () {
      $(this).find("a").addClass("act2");
    },
    function () {
      $(this).find("a").removeClass("act2");
    }
  );
});
