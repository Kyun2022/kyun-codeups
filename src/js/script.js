jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  // ハンバーガー
  $(".js-hamburger").on("click", function () {
    if ($(".js-hamburger").hasClass("is-open")) {
      $(".js-drawer-menu").fadeOut();
      $(this).removeClass("is-open");
    } else {
      $(".js-drawer-menu").fadeIn();
      $(this).addClass("is-open");
    }
  });

  // Swiper
  const swiper = new Swiper(".verticalSlider", {
    direction: "vertical",
    loop: true,
    allowTouchMove: false,
    effect: "slide",
    speed: 3000,
    autoplay: {
      delay: 3000,
    },
  });

  // Swiperカード
  const mySwiperWrapper = document.querySelector(".swiper-wrapper");
  const swiperHorizon = new Swiper(".horizonSlider", {
    loop: true,
    effect: "slide",
    slidesPerView: 1.1,
    disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
    spaceBetween: 5, // スライド間の距離
    autoplay: {
      delay: 3500,
    },
    breakpoints: {
      // ブレイクポイント
      450: {
        // 画面幅450px以上で適用
        slidesPerView: 1.7,
        spaceBetween: 15, // スライド間の距離
      },
      600: {
        // 画面幅600px以上で適用
        slidesPerView: 2,
        spaceBetween: 23, // スライド間の距離
      },
      768: {
        // 画面幅768px以上で適用
        slidesPerView: 3,
        spaceBetween: 40, // スライド間の距離
      },
    },
    on: {
      slideChangeTransitionStart: function () {
        mySwiperWrapper.style.transitionTimingFunction = "linear";
      },
      resize: function () {
        swiperHorizon.autoplay.start();
      },
    },
    // 前後の矢印
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // 背景色アニメーション

  // 要素の取得とスピードの設定
  const box = $(".js-slideColor"),
    speed = 600;

  //.js-slideColorの付いた全ての要素に対して下記の処理を行う
  box.each(function () {
    $(".js-slideColor").append('<div class="is-view"></div>');
    const color = $(".js-slideColor").find($(".is-view")),
      image = $(this).find("img");
    let counter = 0;

    image.css("opacity", "0");
    color.css("width", "0%");
    //inviewを使って背景色が画面に現れたら処理をする
    color.on("inview", function () {
      if (counter === 0) {
        $(this)
          .delay(300)
          .animate({ width: "100%" }, speed, function () {
            image.css("opacity", "1");
            $(this).css({ left: "0", right: "auto" });
            $(this).animate({ width: "0%" }, speed);
          });
        counter = 1;
      }
    });
  });

  const box2 = $(".js-slideColor2"),
    speed2 = 600;
  //.js-slideColorの付いた全ての要素に対して下記の処理を行う

  box2.each(function () {
    $(".js-slideColor2").append('<div class="is-view2"></div>');
    const color2 = $(".js-slideColor2").find($(".is-view2")),
      image2 = $(this).find("img");
    let counter2 = 0;

    image2.css("opacity", "0");
    color2.css("width", "0%");
    //inviewを使って背景色が画面に現れたら処理をする
    color2.on("inview", function () {
      if (counter2 === 0) {
        $(this)
          .delay(300)
          .animate({ width: "100%" }, speed2, function () {
            image2.css("opacity", "1");
            $(this).css({ left: "0", right: "auto" });
            $(this).animate({ width: "0%" }, speed2);
          });
        counter2 = 1;
      }
    });
  });

  const box3 = $(".js-slideColor3"),
    speed3 = 600;
  //.js-slideColorの付いた全ての要素に対して下記の処理を行う

  box3.each(function () {
    $(".js-slideColor3").append('<div class="is-view3"></div>');
    const color3 = $(".js-slideColor3").find($(".is-view3")),
      image3 = $(this).find("img");
    let counter3 = 0;

    image3.css("opacity", "0");
    color3.css("width", "0%");
    //inviewを使って背景色が画面に現れたら処理をする
    color3.on("inview", function () {
      if (counter3 === 0) {
        $(this)
          .delay(300)
          .animate({ width: "100%" }, speed3, function () {
            image3.css("opacity", "1");
            $(this).css({ left: "0", right: "auto" });
            $(this).animate({ width: "0%" }, speed3);
          });
        counter3 = 1;
      }
    });
  });
});

const box4 = $(".js-slideColor4"),
  speed4 = 600;
//.js-slideColorの付いた全ての要素に対して下記の処理を行う

box4.each(function () {
  $(".js-slideColor4").append('<div class="is-view4"></div>');
  const color4 = $(".js-slideColor4").find($(".is-view4")),
    image4 = $(this).find("img");
  let counter4 = 0;

  image4.css("opacity", "0");
  color4.css("width", "0%");
  //inviewを使って背景色が画面に現れたら処理をする
  color4.on("inview", function () {
    if (counter4 === 0) {
      $(this)
        .delay(300)
        .animate({ width: "100%" }, speed4, function () {
          image4.css("opacity", "1");
          $(this).css({ left: "0", right: "auto" });
          $(this).animate({ width: "0%" }, speed4);
        });
      counter4 = 1;
    }
  });
});
