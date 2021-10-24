jQuery.noConflict();
(function($) {//HEADERslide
var $slide = $(".slide")
  .slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    speed: 2000,
    autoplaySpeed: 4000,
    autoplay: true,
    pauseOnHover: false,   //ホバーしたときにスライドを一時停止しない　
  })
  .on({
    beforeChange: function(event, slick, currentSlide, nextSlide) {
      $(".slick-slide", this).eq(currentSlide).addClass("prev-slide");
      $(".slick-slide", this).eq(nextSlide).addClass("slide-animation");
    },
    afterChange: function() {
      $(".prev-slide", this).removeClass("prev-slide slide-animation");
    }
  });
$slide.find(".slick-slide").eq(0).addClass("slide-animation");
})(jQuery)

//CAFEslide
//img\pager_ico_active.png
jQuery.noConflict();
(function($) {
  $('.slider').on('init', function (event, slick, currentSlide, nextSlide) {
		slideItem=$(".slide-wrapper")
		for(let i=0; i < slick.slideCount; i++){
			let slideImg = slideItem.filter(function(){return($(this).data('slick-index') === i)}).find("img").clone()
			let dot = $(".slick-dots").find("li").eq(i).find("button")
			let src = slideImg.attr('src',"pager_ico_active.png")
			dot.css("background",`url(${src})`)
			dot.css("background-size","contain")
		}
	});
$(".slide-wrapper").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  infinite: true,
  dots: true,
});
/*$(".slick-dots li button").on('click', function () {
  $(".slick-dots li button").removeClass('slick-dotsItem');
  $(this).removeClass('slick-dots li button:before');
  $(this).addClass('slick-dotsItem:before');
});*/
})(jQuery)

jQuery.noConflict();
(function($) {
  //CAFEmenu
    $(".menu li").on('click', function () {
      $(".menu li").removeClass('current');
      $(this).addClass('current');
    // ID値に応じて、表示する内容と非表示にする内容を設定する。
      var val = $(this).attr('id');
  if(val == "1"){
    $('ul#1').show(); //show() 表示
    $('ul#2').hide(); //hide() 非表示
    $('ul#3').hide();
    $('ul#4').hide();
  }else if(val == "2"){
    $('ul#1').hide();
    $('ul#2').show(); 
    $('ul#3').hide();
    $('ul#4').hide(); 
  }else if(val == "3"){
    $('ul#1').hide();
    $('ul#2').hide(); 
    $('ul#3').show();
    $('ul#4').hide();  
  }else if(val == "4"){
    $('ul#1').hide();
    $('ul#2').hide(); 
    $('ul#3').hide();
    $('ul#4').show();  
  };
    });
  //slick
  $(".slider-for").slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
})(jQuery)

//HAIR SALON
jQuery.noConflict();
(function($) {
$(".slide-box").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  infinite: true,
  dots: true,
});
})(jQuery)

// 地図を作成.
    var map = L.map('map');
    // タイルレイヤーを作成し、地図にセットする.
    L.tileLayer('http://tile.openstreetmap.jp/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '<small>&copy;</small> <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors',
    }).addTo(map);
    // 地図の中心座標とズームレベルを設定する.
    map.setView([32.7745866 , 130.6821], 15);
    // マーカー.
    var marker = L.marker([32.7745866 , 130.6821]).addTo(map);
    // クラスターグループの作成.
    var markers = L.markerClusterGroup();
    markers.addLayer(
        L.marker([32.7745866 , 130.6821])
    );
    markers.addLayer(
        L.marker([32.7745866 , 130.6821])
    );
    // クラスターグループをマップに追加.
    map.addLayer(markers);
    L.map('mapDiv', {
  dragging: false, // マウスドラッグによるパン操作を不可
  touchZoom: false, // タッチによるズーム操作を不可
  scrollWheelZoom: false, // スクロールによるズーム操作を不可
  doubleClickZoom: false, // ダブルクリックによるズーム操作を不可
  boxZoom: false, // [Shift] + ドラッグによるボックスズーム操作を不可
  tap: false, // タップによるズーム操作を不可
  keyboard: false, // キーボードによる操作を不可
  zoomControl: false // ズーム コントロールの非表示
}).setView([32.7745866 , 130.6821], 15);
