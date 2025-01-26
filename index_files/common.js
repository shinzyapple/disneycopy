// /* common */

//* ページ内リンク スクロール */
$('a[href^="#"]').click(function(){
  var headerH = $('#header').height() - 105;
  var speed = 500;
  var href= $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top-headerH;
  $("html, body").animate({scrollTop:position}, speed, "swing");
  var headerHeight = $('#js-header-top-wrap').height();
  setTimeout(function(){
    $('#header').css({'top':- headerHeight});
  },550);
  return false;
});
$(function() {
  var topBtn = $('.pageTop');
  var speed = 500;
  var timer;
  topBtn.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      topBtn.fadeIn();
      clearTimeout(timer);
      timer = setTimeout(function () {
        topBtn.stop().fadeOut();
      }, 1000);
    } else {
      topBtn.fadeOut();
    }
  });
  topBtn.click(function () {
    $("html, body").animate({scrollTop:0}, speed, "swing");
    return false;
  });
});

//* carousel */
$('.js-carousel1').slick({
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide:0,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});
$('.js-carouselTop').slick({
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 700,
  dots: true,
  infinite: true,
  slidesToShow: 1,
  centerMode: true,
  centerPadding: "0",
  variableWidth: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});
$('.js-carousel2').slick({
  autoplay: false,
  slidesToShow:3,
  slidesToScroll: 1,
  dots: false,
  infinite: true,
  centerPadding: '40px',
  centerMode: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        arrows: false,
      }
    }
  ]
});
$(function(){
  let $item = $('.js-carousel2');
  for (let i = 0; i < $item.length; i++) {
    const itemLength = ($($item[i]).find('.slide').length);
    if (itemLength === 1) {
      ($($item[i]).addClass('onlyElement'));
    }
  }
});

$('.js-carousel3').slick({
  autoplay: false,
  slidesToShow:5,
  slidesToScroll: 1,
  dots: false,
  infinite: true,
  centerPadding: '80px',
  centerMode: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        centerPadding: '40px',
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
      }
    },
    {
      breakpoint: 481,
      settings: {
        centerPadding: '40px',
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
      }
    }
  ]
});

$('.js-carousel4').slick({
  autoplay: false,
  autoplaySpeed: 3000,
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide:0,
  // arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});

$('.js-carousel5').slick({
  autoplay: false,
  slidesToShow:2,
  slidesToScroll: 1,
  dots: false,
  infinite: true,
  centerPadding: '60px',
  centerMode: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        centerPadding: '40px',
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        arrows: false,
      }
    }
  ]
});
$('.js-carousel7').slick({
  autoplay: false,
  slidesToShow:3,
  slidesToScroll: 1,
  dots: false,
  infinite: true,
  centerPadding: '40px',
  centerMode: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        arrows: false,
      }
    }
  ]
});

// pcのときは、2番目をカレント表示してcenterModeの表示バグを解消
if (!window.matchMedia('(max-width: 767px)').matches) {
  $('.js-carousel5').each(function () {
    var option = $(this).slick('slickGetOption');
    if ($(this).slick('slickGetOption', 'slidesToShow') < option.context.slick.slideCount) {
      $(this).slick('slickGoTo', 1);
    }
  });
  $('.js-carousel2').each(function () {
    var option = $(this).slick('slickGetOption');
    if ($(this).slick('slickGetOption', 'slidesToShow') < option.context.slick.slideCount) {
      $(this).slick('slickGoTo', 1);
    }
  });
  $('.js-carousel7').each(function () {
    var option = $(this).slick('slickGetOption');
    if ($(this).slick('slickGetOption', 'slidesToShow') < option.context.slick.slideCount) {
      $(this).slick('slickGoTo', 1);
    }
  });
}

$( '.slider-wrap' ).each( function( i ) {

var $_t = $(this);
$_t.find('.js-carousel6').addClass( 'js-carousel6' + i ).slick( {
  //asNavFor: '.js-carousel6Tab ul',
  asNavFor: '.js-carousel6Tab' + i,
  autoplay: false,
  autoplaySpeed: 3000,
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide:0,
  arrows: false,
  swipe: false,
});
$_t.find('.js-carousel6Tab ul').addClass( 'js-carousel6Tab' + i ).slick( {
  //asNavFor: '.js-carousel6',
  asNavFor: '.js-carousel6' + i,
  slidesToShow: 5,
  arrows: false,
  focusOnSelect: true,
  swipe: true,
  // centerMode: true,
  centerPadding: '40px',
  responsive: [
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },{
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    }
  ]
});

});

$('.js-carousel8').slick({
  autoplay: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  dots: false,
  infinite: true,
  centerPadding: '60px',
  centerMode: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        centerPadding: '60px',
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        initialSlide: 1,
      }
    },{
      breakpoint: 768,
      settings: {
        centerPadding: '30px',
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        initialSlide: 1,
        arrows: false,
      }
    }
  ]
});
$('.js-carousel9').slick({
  autoplay: false,
  autoplaySpeed: 3000,
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide:0,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
      }
    }
  ]
});

(function() {
  var $carousel10 = $('.js-carousel10');
  var windowWidth = 0;
  var makeSlick = function() {
    $carousel10.slick({
      autoplay: false,
      slidesToShow:3,
      slidesToScroll: 1,
      dots: false,
      infinite: true,
      centerPadding: '40px',
      centerMode: true,
      arrows: true,
    });
    var option = $carousel10.slick('slickGetOption');
    if (option.context.slick && option.context.slick.slideCount <= 1) {
      $carousel10.slick('slickSetOption', 'dots', false);

      $carousel10.slick('slickSetOption', {
        responsive: [{
          breakpoint: 768,
          settings: {
            dots: false
          }
        }]
      });
    }
    if (option.context.slick && option.context.slick.slideCount <= 2) {
      $carousel10.slick('slickSetOption', 'centerMode', false, true);
    }
    if (option.context.slick && option.context.slick.slideCount === 0) {
      $carousel10.slick('unslick');
   }
  };
  var checkWindow = function() {
    if (windowWidth < 768 && 768 <= window.innerWidth) {
      makeSlick();
    } else if (window.innerWidth < 768 && 768 <= windowWidth) {
      $carousel10.slick('unslick');
    }
    windowWidth = window.innerWidth;
  }

  if ($carousel10.length > 0) {
    checkWindow();
    $(window).on('resize', checkWindow);
  }
})();

$('.js-carousel1,' +
  '.js-carousel2,' +
  '.js-carousel3,' +
  '.js-carousel4,' +
  '.js-carousel5,' +
  '.js-carousel6,' +
  '.js-carousel7,' +
  '.js-carousel8,' +
  '.js-carousel9').each(function () {
  var option = $(this).slick('slickGetOption');

  // dots
  if (option.context.slick.slideCount <= 1) {
    $(this).slick('slickSetOption', 'dots', false);

    $(this).slick('slickSetOption', {
      responsive: [{
        breakpoint: 768,
        settings: {
          dots: false
        }
      }]
    });
  }

  // center mode
  if (option.context.slick.slideCount <= 2) {
    $(this).slick('slickSetOption', 'centerMode', false, true);
  }

  // unslick
  if (option.context.slick.slideCount === 0) {
    $(this).slick('unslick');
  }
});

window.addEventListener('load', function() {
  $('.js-carousel11').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    speed: 2000,
    arrows: false,
    swipe: false,
    draggable: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
      }
    ]
  });
});

//* お気に入り */
$('.favoriteBtn').click(function(){
  $(this).toggleClass('is-active');
  if($(this).hasClass('is-active')){
    if ($(this).data("label") ) {
      dataLayer.push({
        event: "trackClick",
        clickParams: {
          category: "renewal2018",
          action: "favorite_click",
          label: $(this).data("label")
        }
      });
    }
  }
  if ($(this).data("url") ) {
    var urlForLS = $(this).data("url");
    var imgForLS = $(this).data("image");
    var descriptionForLS = $(this).data("description");
    var titleForLS = $(this).data("title");
  } else {
    if ($('meta[property="og:url"]').attr('content')) {
      var urlForLS = $('meta[property="og:url"]').attr('content');
    } else {
      var urlForLS = '//'+location.host+location.pathname;
    }
    var imgForLS = $('meta[property="og:image"]').attr('content');
    var descriptionForLS = $('meta[property="og:description"]').attr('content');
    var titleForLS = $('title').html();
  }

  if($(this).hasClass('is-active')) {
    var saveData = {};
    var jsonData = {
        "img" : imgForLS,
        "description" : descriptionForLS,
        "title" : titleForLS
    };
    saveData[urlForLS] = jsonData;
    var favoriteBtn = localStorage.getItem("favoriteBtn");
    if (!favoriteBtn) {
      localStorage.setItem("favoriteBtn", JSON.stringify(saveData));
    }
    else {
      var data = $.parseJSON(favoriteBtn);
        data[urlForLS] = jsonData;
      localStorage.setItem("favoriteBtn", JSON.stringify(data));
    }
  }
  else {
    var favoriteBtn = localStorage.getItem("favoriteBtn");
    if (favoriteBtn) {
      var data = $.parseJSON(favoriteBtn);
      delete data[urlForLS];
      if (data) {
        localStorage.setItem("favoriteBtn", JSON.stringify(data));
      }
      else {
        localStorage.removeItem("favoriteBtn");
      }
    }
  }
});
jQuery(function($) {
  var favoriteKey = 'favoriteBtn';
  $('.favoriteBtn').each(function(index) {
    if ($(this).data("url")) {
      var urlForLS = $(this).data("url");
    } else if ($('meta[property="og:url"]').attr('content')) {
      var urlForLS = $('meta[property="og:url"]').attr('content');
    } else {
      var urlForLS = '//'+location.host+location.pathname;
    }
    var favoriteBtn = localStorage.getItem(favoriteKey);
    if (!favoriteBtn) {
        return true;
    }
    var data = $.parseJSON(favoriteBtn);
    if (data[urlForLS]) {
      $(this).addClass("is-active");
    } else {
      $(this).removeClass("is-active");
    }
  });
});

//* リストの高さを揃える */

$.fn.matchHeight._beforeUpdate = function (e) {
  $('.js-autoHeight').css('height', '');
  $('.panel2 ul li a').css('height', '');
  $('.panel3 ul li').css('height', '');
  $('.panel4 ul li').css('height', '');
  $('.linkList13 ul li').css('height', '');
  $('.linkList18 ul li').css('height', '');
  $('.linkList19 ul li').css('height', '');
  $('.linkList20 ul li .linkText').css('height', '');
  $('.linkList21 ul li .listTextArea').css('height', '');
  $('.column-2 .column-block').css('height', '');
  $('.column-2-2 .column-block').css('height', '');
  $('.ticketDetail .ticketPrice li').css('height', '');
  $('.button-inline .button-block .button > *').css('height', '');
  $('.mapCursorList li').css('height', '');
  $('.linkList1 li span').css('height', '');
  $('.linkList1 li a').css('height', '');
  $('.linkList2 li a').css('height', '');
  $('.linkList4 li a').css('height', '');
  $('.linkList8 li').css('height', '');
  $('.column-2-6 .column-block a').css('height', '');
  $('.latestNewsList li a').css('height', '');
  $('.linkList9 li').css('height', '');
  $('.hotelList li .heading3').css('height', '');
  $('.ticketPrice .target').css('height', '');
};

var startMatchHeight = function () {
  $('.js-autoHeight').matchHeight();
  $('.panel2 ul li a').matchHeight();
  $('.panel3 ul li').matchHeight();
  $('.panel4 ul li').matchHeight();
  $('.linkList13 ul li').matchHeight();
  $('.linkList18 ul li').matchHeight();
  $('.linkList19 ul li').matchHeight();
  $('.linkList20 ul li .linkText').matchHeight();
  $('.linkList21 ul li .linkText').matchHeight();
  $('.column-2 .column-block').matchHeight();
  $('.column-2-2 .column-block').matchHeight();
  $('.ticketDetail .ticketPrice li').matchHeight();
  $('.button-inline .button-block .button > *').matchHeight();
  $('.mapCursorList li').matchHeight();
  $('.linkList1 li span').matchHeight();
  $('.linkList1 li a').matchHeight();
  $('.linkList2 li a').matchHeight();
  $('.linkList3 li a').matchHeight();
  $('.linkList4 li a').matchHeight();
  $('.linkList8 li').matchHeight();
  $('.column-2-6 .column-block a').matchHeight();
  $('.latestNewsList li a').matchHeight();
  $('.linkList9 li').matchHeight();
  $('.slider5.overVisible .slide .slideTextArea .heading3').matchHeight();
  $('.hotelList li .heading3').matchHeight();
  $('.ticketPrice .target').matchHeight();
};

startMatchHeight();

//* タブ切り替え */
(function(){
  // var tabDetail = $('.js-tab .tab-detail .tab-detail-section');
  // tabMenu.click(function() {
  //   var index = tabMenu.index(this);
  //   tabDetail.hide();
  //   tabDetail.removeClass('is-active').fadeOut('slow');
  //   tabDetail.eq(index).addClass('is-active').fadeIn('slow');
  //   tabMenu.removeClass('is-active');
  //   $(this).addClass('is-active');
  // });
  var tabMenu = $('.js-tab .tab-change li');
  tabMenu.on('click', function() {
    var tabWrap = $(this).parents('.js-tab');
    var tabBtn = tabWrap.find('.tab-change li');
    var tabDetail = tabWrap.find('.tab-detail-section');
    var thisclass  =$(this).attr('class');
    tabBtn.removeClass('is-active');
    $(this).addClass('is-active');
    var elmIndex = tabBtn.index(this);
    tabDetail.hide();
    tabDetail.removeClass('is-active').fadeOut('slow');
    tabDetail.eq(elmIndex).addClass('is-active').fadeIn('slow');
    tabWrap.removeClass().addClass('js-tab is-' + thisclass);
    console.log(thisclass);
    return false;
  });

  if ($('.hotelSelect input[name="hotel"]').length
      && $('.hotelSelect input[name="hotel"]').parents('.js-tab').find('.tab-detail-section .'+$('.hotelSelect input[name="hotel"]:checked').val()).parents('.tab-detail-section').length) {
      $('.hotelSelect input[name="hotel"]').parents('.js-tab').find('.tab-detail-section').hide();
      $('.hotelSelect input[name="hotel"]').parents('.js-tab').find('.tab-detail-section .'+$('.hotelSelect input[name="hotel"]:checked').val()).parents('.tab-detail-section').addClass('is-active').fadeIn('slow');

  }
  $('.hotelSelect input[name="hotel"]').on('change', function() {
    var tabWrap = $(this).parents('.js-tab');
    var tabDetail = tabWrap.find('.tab-detail-section');
    var target = $(this).val();
    var tabDetailTaget = tabWrap.find('.tab-detail-section .'+target).parents('.tab-detail-section');
    if (tabDetailTaget.length) {
      tabDetail.hide();
      tabDetail.removeClass('is-active').fadeOut('slow');
      tabDetailTaget.addClass('is-active').fadeIn('slow');

      dataLayer.push({event: 'trackClick', clickParams: {category: 'renewal2018', action: 'tab_click', label: target}});
    }
    return false;
  });
})();

//* アコーディオン */
(function() {
  var acdTtl = $('.js-accordion .accordionTitle');
  var acdClose = $('.js-accordion .accordionClose');
  acdTtl.on('click', function() {
    $(this).toggleClass('is-active');
    $(this).next().slideToggle();
    $(".js-carousel4").slick("setPosition");
    $(".js-carousel2").slick("setPosition");
  });
  acdClose.on('click', function() {
    $(this).parent().siblings().removeClass('is-active');
    $(this).closest('.accordionDetail').slideToggle();
  });
})();

(function() {
  var prevWindowWidth = $(window).width();
  var acdTtl = $('.js-accordion2 .categoryTitle');
  var acdClose = $('.js-accordion2 .accordionClose');
  acdTtl.on('click', function() {
    if (window.matchMedia('(max-width: 767px)').matches) {
      $(this).toggleClass('is-active');
      $(this).next().slideToggle();
    }
  });
  acdClose.on('click', function() {
    $(this).parent().siblings().removeClass('is-active');
    $(this).parent().parent().slideToggle();
  });

  $(window).on('resize', function () {
    if (prevWindowWidth === $(window).width()) return;

    prevWindowWidth = $(window).width();

    if (!window.matchMedia('(max-width: 767px)').matches) {
      acdTtl.each(function (index, el) {
        var $el = $(el);
        // $el.addClass('is-active');
        $el.next().slideDown();
      });
    } else{
      acdTtl.each(function (index, el) {
        var $el = $(el);
        // $el.addClass('is-active');
        $el.next().slideUp();
      });
    }
  });
})();


/* ２カラム検索ボックス */
(function() {
  var acdTtl = $('.js-accordion3 .categoryTitle');
  var acdClose = $('.js-accordion3 .accordionClose');
  acdTtl.on('click', function() {
    if (window.matchMedia('(max-width: 767px)').matches) {
      $(this).toggleClass('is-active');
      $(this).next().slideToggle();
    }
  });
  acdClose.on('click', function() {
    $(this).parent().siblings().removeClass('is-active');
    $(this).parent().slideToggle();
  });

  $(window).on('resize', function () {
    if (!window.matchMedia('(max-width: 767px)').matches) {
      acdTtl.each(function (index, el) {
        var $el = $(el);
        $el.addClass('is-active');
        $el.next().slideDown();
      });
    }
  });
})();

//* ヘッダー固定 */
(function () {
  var $window = $(window);
  var $header = $('#header');
  var $main = $('#main');
  var $headerTopWrap = $('#js-header-top-wrap');
  var $headerTop = $('#js-header-top');
  var $headerGlobalMenu = $('#js-header-globalmenu');
  var $headerSubMenu = $('#js-header-submenu');
  var className = {
    fixed: 'is-fixed'
  };
  var prevScroll = $window.scrollTop();
  var prevWindowWidth = $(window).width();
  var isPinned = false;

  var isSpView = function () {
    return window.matchMedia('(max-width: 767px)').matches;
  };

  var updateHeader = function () {
    var status = {
      up: 0,
      down: 1
    };
    var direction;
    var headerTop = 0;

    if ($window.scrollTop() <= 0) {
      isPinned = false;
    }
    else if ($window.scrollTop() >= 0 && prevScroll > $window.scrollTop()) {
      direction = status.up;
    }
    else if ($window.scrollTop() >= 0 && prevScroll < $window.scrollTop()) {
      direction = status.down;
    }

    if (0 <= $window.scrollTop() && $window.scrollTop() < $headerTopWrap.outerHeight() && isPinned === false) {
      headerTop = -1 * $(window).scrollTop();
    }
    else {
      if (direction === status.up) {
        headerTop = Math.min(0, parseInt($header.css('top'), 10) - $(window).scrollTop() + prevScroll);
        isPinned = true;
      }
      else if (direction === status.down) {
        headerTop = Math.max(-1 * $headerTopWrap.outerHeight(), parseInt($header.css('top'), 10) - $(window).scrollTop() + prevScroll);
      }
    }

    $header.css({
      top: headerTop
    });

    prevScroll = $window.scrollTop();
  };

  var onResize = function () {
    if (prevWindowWidth !== $(window).width()) {
      prevWindowWidth = $(window).width();
      updateHeader();
    }
  };

  $window.on('resize', onResize.bind(this));
  $window.on('load scroll', updateHeader.bind(this));

}());


//* language */
(function(){
  $('.js-languagemenu').click(function(){
    $(this).toggleClass('is-active');
    $(this).next().toggleClass('is-active');
  });

  $('.languagemenu .modalBtnClose_sp').on('click', function () {
    $('.js-languagemenu').removeClass('is-active');
    $('.js-languagemenu').next().removeClass('is-active');
  });

  $('.languagemenu .modalBtnClose').on('click', function () {
    $('.js-languagemenu').removeClass('is-active');
    $('.js-languagemenu').next().removeClass('is-active');
  });
})();

//* modal ターゲット指定*/
(function(){
  if($('.js-modal-open2').length){
    $('.js-modal-open2').click(function(){
      let target = $(this).data('target');
      let modalTarget = document.querySelector('.target_' + target);
      var $overlay = $('<div class="modalOverlay"></div>');
      $('body').addClass('lock');
      $('body').append($overlay);
      $overlay.fadeIn('slow');
      var modal = modalTarget;
      $(modal).wrap("<div class='modalWrap'></div>");
      $('.modalWrap').show();
      modalResize();
      $(modal).fadeIn('slow');
      $(modal).click(function(e){
        e.stopPropagation();
      });
      $('.modalWrap, .modalBtnClose, .bottom-BtnClose').off().click(function(){
        $overlay.fadeOut('slow');
        $(modal).fadeOut('slow');
        $('.modalWrap').fadeOut('slow',function(){
          $('body').removeClass('lock');
          $overlay.remove();
          $(modal).unwrap("<div class='modalWrap'></div>");
        });
      });

      $(window).on('resize', function(){
        modalResize();
      });
      function modalResize(){
        var h = $(window).height();
        var mh = $(modal).outerHeight(true);
        // $(modal).css({'top': 50 + 'px'});
      }
    });
  }
})();

//* modal */
(function(){
  $('.js-modal-open').click(function(){
    var $overlay = $('<div class="modalOverlay"></div>');
    $('body').addClass('lock');
    $('body').append($overlay);
    $('.modalOverlay').fadeIn('slow');
    var modal = $('.modalContent');
    $(modal).wrap("<div class='modalWrap'></div>");
    $('.modalWrap').show();
    modalResize();
    $(modal).fadeIn('slow');
    $(modal).click(function(e){
        e.stopPropagation();
    });
    $('.modalWrap, .modalBtnClose, .modalBtnClose2').off().click(function(){
      $overlay.fadeOut('slow');
      $(modal).fadeOut('slow');
      $('.modalWrap').fadeOut('slow',function(){
        $('body').removeClass('lock');
        $('.modalOverlay').remove();
        $(modal).unwrap("<div class='modalWrap'></div>");
        $overlay.remove();
     });
    });

    $(window).on('resize', function(){
      modalResize();
    });
    function modalResize(){
      var h = $(window).height();
      var mh = $(modal).outerHeight(true);
      // $(modal).css({'top': 50 + 'px'});
    }
  });
})();

//* modal */
(function(){
  $('.js-modal-sort').click(function(){
    var $overlay = $('<div class="modalOverlay"></div>');
    $('body').addClass('lock');
    $('body').append($overlay);
    $('.modalOverlay').fadeIn('slow');
    var modal = $('.leftNavigationWrap');
    $(modal).wrap("<div class='modalWrap'></div>");
    $('.modalWrap').show();
    modalResize();
    $(modal).fadeIn('slow');
    $(modal).click(function(e){
        e.stopPropagation();
    });
    $('.modalWrap, .modalBtnClose, .modalBtnClose2').off().click(function(){
      $overlay.fadeOut('slow');
      $(modal).fadeOut('slow');
      $('.modalWrap').fadeOut('slow',function(){
        $('body').removeClass('lock');
        $('.modalOverlay').remove();
        $(modal).unwrap("<div class='modalWrap'></div>");
        $overlay.remove();
     });
    });

    $(window).on('resize', function(){
      modalResize();
    });
    function modalResize(){
      var h = $(window).height();
      var mh = $(modal).outerHeight(true);
      // $(modal).css({'top': 50 + 'px'});
    }
  });
})();

//* modal */
(function(){
  $('.js-modal2').click(function(){
    $('body').addClass('lock');
    var modal = $(this).parents("[class^='linkList']").next('.modalContent2');
    $(modal).wrap("<div class='modalWrap'></div>");
    $('.modalWrap').show();
    modalResize();
    $(modal).fadeIn('slow');
    $(modal).click(function(e){
        e.stopPropagation();
    });
    $('.modalWrap, .modalBtnClose, .latestNews-BtnClose').off().click(function(){
      $(modal).fadeOut('slow');
      $('.modalWrap').fadeOut('slow',function(){
        $('body').removeClass('lock');
        $(modal).unwrap("<div class='modalWrap'></div>");
     });
    });

    $(window).on('resize', function(){
      modalResize();
    });
    function modalResize(){
      var h = $(window).height();
      var mh = $(modal).outerHeight(true);
      // $(modal).css({'top': 50 + 'px'});
    }
  });
})();


(function(){
  $('.js-modal').click(function(){
    $('body').addClass('lock');
    var modal = $(this).parents("[class^='linkList']").next('.modalContent');
    $(modal).wrap("<div class='modalWrap'></div>");
    $('.modalWrap').show();
    modalResize();
    $(modal).fadeIn('slow');
    $(modal).click(function(e){
        e.stopPropagation();
    });
    $('.modalWrap, .modalBtnClose, .latestNews-BtnClose').off().click(function(){
      $(modal).fadeOut('slow');
      $('.modalWrap').fadeOut('slow',function(){
        $('body').removeClass('lock');
        $(modal).unwrap("<div class='modalWrap'></div>");
     });
    });

    $(window).on('resize', function(){
      modalResize();
    });
    function modalResize(){
      var h = $(window).height();
      var mh = $(modal).outerHeight(true);
      // $(modal).css({'top': 50 + 'px'});
    }
  });
})();


// modal slick
(function(){
  var slider = $('.slider8').slick({
    initialSlide: 0,
    adaptiveHeight: true,
    infinite: true,
    dots: true,
    arrows: true
  });
  $('.js-modal').click(function(){
    var initialslide = $(this).attr('data-target') -1;
    slider.slick('slickGoTo', parseInt(initialslide, 10), true)
    slider.css('opacity',0);
    slider.animate({'z-index':1},300,function(){
      slider.slick('setPosition');
      slider.animate({'opacity':1});
    });
  });
  $('.js-modal2').click(function(){
    var initialslide = $(this).attr('data-target') -1;
    slider.slick('slickGoTo', parseInt(initialslide, 10), true)
    slider.css('opacity',0);
    slider.animate({'z-index':1},300,function(){
      slider.slick('setPosition');
      slider.animate({'opacity':1});
    });
  });
})();

(function(){
  var slider = $('.slider9').slick({
    initialSlide: 0,
    adaptiveHeight: true,
    infinite: true,
    dots: false,
    draggable: false,
    arrows: false
  });
  $('.js-modal').click(function(){
    var initialslide = $(this).attr('data-target') -1;
    slider.slick('slickGoTo', parseInt(initialslide, 10), true)
    slider.css('opacity',0);
    slider.animate({'z-index':1},300,function(){
      slider.slick('setPosition');
      slider.animate({'opacity':1});
    });
  });
  $('.js-modal2').click(function(){
    var initialslide = $(this).attr('data-target') -1;
    slider.slick('slickGoTo', parseInt(initialslide, 10), true)
    slider.css('opacity',0);
    slider.animate({'z-index':1},300,function(){
      slider.slick('setPosition');
      slider.animate({'opacity':1});
    });
  });
})();


// js scroll
// - calender tab
(function () {
  var requestAnimationFrame =window.requestAnimationFrame ||window.mozRequestAnimationFrame ||window.webkitRequestAnimationFrame ||window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
  var cancelAnimationFrame =window.cancelAnimationFrame ||window.mozcancelAnimationFrame ||window.webkitcancelAnimationFrame ||window.mscancelAnimationFrame;
  window.cancelAnimationFrame = cancelAnimationFrame;

  $('.js-scroll-wrap').each(function () {
    var $scrollWrap = $(this);
    var $scrollContents = $(this).find('.js-scroll-contents');
    var $headerSubMenuArrow = $('#js-header-submenu .header-submenu-arrow');
    var $headerSubMenuLeft = $('#js-header-submenu .header-submenu-left');
    var lastX = 0;
    var canScroll = false;
    var canClick = true;
    var className = {
      active: 'is-active'
    };
    var animationId = null;
    var timer = null;

    var moveContents = function (x) {
      if ($scrollWrap.width() >= $scrollContents.width()) return;

      var nowX = parseInt($scrollContents.css('marginLeft'), 10);
      var newX = nowX + x;
      var minX = -1 * ($scrollContents.width() - $scrollWrap.width());

      $headerSubMenuLeft.css('opacity', '1');
      if (newX >= 0) {
        newX = 0;
        $headerSubMenuLeft.css('opacity', '0');
      }
      else if (newX <= minX) {
        newX = minX;
      }

      $scrollContents.css('marginLeft', newX);
    };

    var resizeContents = function () {
      var width = 0;
      $scrollContents.children().each(function (index, el) {
        width += $(el).outerWidth(true) + 0.5;
      });

      $scrollContents.css({
        width: width + 'px'
      });
    };

    var initScrollContentsPosition = function () {
      var $activeMenu = $scrollContents.find('> .' + className.active);

      if ($activeMenu.length === 0) return;

      var newX = (($scrollWrap.width() - $activeMenu.width()) / 2) - $activeMenu.offset().left

      moveContents(newX);
    };

    var onTouchstart = function (e) {
      canClick = true;
      lastX = e.originalEvent.touches[0].clientX;
    };

    var onTouchmove = function (e) {
      var thisX = e.originalEvent.touches[0].clientX;
      var diffX = thisX - lastX;

      if (Math.abs(diffX) >= 5) {
        canClick = false;
      }

      moveContents(diffX);

      lastX = thisX;
    };

    var onTouchend = function () {
      canClick = true;
      $headerSubMenuArrow.fadeOut();
    };

    var onResize = function () {
      resizeContents();
    };

    var onMousedown = function (e) {
      e.preventDefault();

      canClick = true;
      canScroll = true;

      lastX = e.clientX;
    };

    var onMousemove = function (e) {
      if (canScroll) {
        var thisX = e.clientX;
        var diffX = thisX - lastX;

        if (Math.abs(diffX) >= 5) {
          canClick = false;
        }

        moveContents(diffX);

        lastX = thisX;
      }
    };

    var onMouseup = function () {
      canScroll = false;
    };

    var onMouseleave = function () {
      canScroll = false;
    };

    var onClick = function (e) {
      if (canClick === false) {
        e.preventDefault();
      }
    };

    var onMousedownButton = function(e) {
      timer = setTimeout(onHold.bind(this, e), 100);
    };

    var onMouseupButton = function() {
      clearTimeout(timer);
      window.cancelAnimationFrame(animationId);
    };

    var onHold = function(e) {
      var direction = $(e.target).hasClass('btn-prev') ? 1 : -1;
      var speed = 18;
      loop();
      function loop() {
        moveContents(speed * direction);
        animationId = window.requestAnimationFrame(loop.bind(this));
      }
    };

    if ($scrollWrap.length !== 0 && $scrollContents.length !== 0) {
      // fixed content width
      resizeContents();

      // init position
      initScrollContentsPosition();

      // add event
      $(window).on('resize', onResize.bind(this));

      $scrollContents
        .on('mousedown', onMousedown.bind(this))
        .on('mouseup', onMouseup.bind(this))
        .on('mouseleave', onMouseleave.bind(this))
        .on('touchstart', onTouchstart.bind(this))
        .on('touchmove', onTouchmove.bind(this))
        .on('touchend', onTouchend.bind(this));

      $scrollContents.find('a').on('click', onClick.bind(this));

      $(document).on('mousemove', onMousemove.bind(this));
      // 20190306 ボタン押下時のイベント追加
      $(this).find('.btn-next').on('mousedown', onMousedownButton.bind(this)).on('mouseup', onMouseupButton.bind(this));
      $(this).find('.btn-prev').on('mousedown', onMousedownButton.bind(this)).on('mouseup', onMouseupButton.bind(this));
    }
  });
})();


// modal slick
(function(){
  var cTdl = $('.checkboxArea #calendar-tdl');
  var cTds = $('.checkboxArea #calendar-tds');
  var cOpen = $('.checkboxArea #calendar-openTime');
  var cTicket = $('.checkboxArea #calendar-ticket');
  cTdl.click(function(){
    $('.calendarTable .tdl').slideToggle();
    $('.calendarTableSp .tdl').slideToggle();

    if (!cTdl.is(':checked') && !cTds.is(':checked')) {
      $('.calendarTableSp thead').css('display','none');
    }
    else {
      $('.calendarTableSp thead').css('display','');
    }
  });
  cTds.click(function(){
    $('.calendarTable .tds').slideToggle();
    $('.calendarTableSp .tds').slideToggle();

    if (!cTdl.is(':checked') && !cTds.is(':checked')) {
      $('.calendarTableSp thead').css('display','none');
    }
    else {
      $('.calendarTableSp thead').css('display','');
    }
  });
  cOpen.click(function(){
    $('.calendarTable .openTime').slideToggle();
    $('.calendarTableSp .openTime').slideToggle();
  });
  cTicket.click(function(){
    $('.calendarTable .ticket').slideToggle();
    $('.calendarTableSp .ticket').slideToggle();
  });
})();



(function(){
  $(window).on('load resize', function(){
    $('.newsText').each(function() {
      var $target = $(this);
      // オリジナルの文章を取得する
      var html = $target.html();
      // 対象の要素を、高さにautoを指定し非表示で複製する
      var $clone = $target.clone();
      $clone
        .css({
          display: 'none',
          position : 'absolute',
          overflow : 'visible'
        })
        .width($target.width())
        .height('auto');
      // DOMを一旦追加
      $target.after($clone);
      // 指定した高さになるまで、1文字ずつ消去していく
      while((html.length > 0) && ($clone.height() > $target.height())) {
        html = html.substr(0, html.length - 1);
        $clone.html(html + '...');
      }
      // 文章を入れ替えて、複製した要素を削除する
      $target.html($clone.html());
      $clone.remove();
    });
  });
})();


(function(){
  $(window).on('load resize', function(){
    var switched = false;
    var updateTables = function () {
        if (($(window).width() < 767) && !switched) {
            switched = true;
            $("table.responsive").each(function (i, element) {
                splitTable($(element));
            });
            return true;
        }
        else if (switched && ($(window).width() > 767)) {
            switched = false;
            $("table.responsive").each(function (i, element) {
                unsplitTable($(element));
            });
        }
    };
    $(window).load(updateTables);
    $(window).bind("resize", updateTables);

    function splitTable(original) {
        original.wrap("<div class='table-wrapper' />");
        var copy = original.clone();
        copy.find("td:not(:first-child), th:not(:first-child)").css("display", "none");
        copy.removeClass("responsive");
        original.closest(".table-wrapper").append(copy);
        copy.wrap("<div class='pinned' />");
        original.wrap("<div class='scrollable' />");
    }

    function unsplitTable(original) {
        original.closest(".table-wrapper").find(".pinned").remove();
        original.unwrap();
        original.unwrap();
    }
  });
})();

// アンカースクロール
(function(){
  var preload = function () {
    var $def = $.Deferred();
    var $imgs = $('img');
    var imgCount = 0;
    var maxCount = $imgs.length;

    $imgs.each(function () {
      var tmpImg = new Image();

      tmpImg.onload = function () {
        imgCount ++;

        if (imgCount === maxCount) $def.resolve();
      };
      tmpImg.onerror = function () {
        maxCount --;

        if (imgCount === maxCount) $def.resolve();
      };

      tmpImg.src = this.src;
    });

    return $def.promise();
  };

  var anchorScroll = function () {
    var $target = $(location.hash.replace(/(%|:|=)/g, '\\$1'));

    if ($target.length === 0) return;

    preload().then(function () {
      $('html, body').animate({
        scrollTop: $target.offset().top - $('#header').height() + parseInt($('#header').css('top'), 10)
      }, 400);
    });
  };

  window.addEventListener('load', function () {
    anchorScroll();
  }, false);

})();

// ヘッダー１段のみ表示
// (function(){
//   $('.submenu_none .header-globalmenu .gmenu-tdr').click(function(){
//     $(this).parent().children().removeClass('is-active');
//     $(this).addClass('is-active');
//     $('.submenu_none .header-submenu-warp').css('height','auto');
//     $('.submenu_none .header-submenu').removeClass('is-active');
//     $('.submenu_none .is-tdr').addClass('is-active');
//     $('body').removeClass('no-submenu');
//     return false;
//   });
//   $('.submenu_none .header-globalmenu .gmenu-tdl').click(function(){
//     $(this).parent().children().removeClass('is-active');
//     $(this).addClass('is-active');
//     $('.submenu_none .header-submenu-warp').css('height','auto');
//     $('.submenu_none .header-submenu ').removeClass('is-active');
//     $('.submenu_none .is-tdl').addClass('is-active');
//     $('body').removeClass('no-submenu');
//     return false;
//   });
//   $('.submenu_none .header-globalmenu .gmenu-tds').click(function(){
//     $(this).parent().children().removeClass('is-active');
//     $(this).addClass('is-active');
//     $('.submenu_none .header-submenu-warp').css('height','auto');
//     $('.submenu_none .header-submenu ').removeClass('is-active');
//     $('.submenu_none .is-tds').addClass('is-active');
//     $('body').removeClass('no-submenu');
//     return false;
//   });
//   $('.submenu_none .header-globalmenu .gmenu-hotel').click(function(){
//     $(this).parent().children().removeClass('is-active');
//     $(this).addClass('is-active');
//     $('.submenu_none .header-submenu-warp').css('height','auto');
//     $('.submenu_none .header-submenu ').removeClass('is-active');
//     $('.submenu_none .is-hotel').addClass('is-active');
//     $('body').removeClass('no-submenu');
//     return false;
//   });
// })();

// no-submenu
(function () {
  if ($('.submenu_none').length !== 0) {
    $('body').addClass('no-submenu');
  }
})();

// iframeArea打ち消し
(function () {
  if ($('.iframeArea').length !== 0) {
    $('body').addClass('no-pbClass');
  }
})();


// ３点リーダー
$(document).ready(function(){
  $('.slider2 .heading3 , .slider10 .heading3 , .slider12 .heading3 , .linkList22 .heading3, .linkList23 .heading3').each(function() {
    var $target = $(this);
    var html = $target.html();
    var $clone = $target.clone();
    $clone
      .css({
        display: 'none',
        position : 'absolute',
        overflow : 'visible'
      })
      .width($target.width())
      .height('auto');
    $target.after($clone);
    while((html.length > 0) && ($clone.height() > $target.height())) {
      html = html.substr(0, html.length - 1);
      $clone.html(html + '...');
    }
    $target.html($clone.html());
    $clone.remove();
  });
});

// 画像トリミング
var trimingImage = function () {
  $('.maskSquare').each(function(){
    var $this = $(this);
    var $img = $this.find('img');
    var tmpImg = new Image();

    tmpImg.onload = function () {
      var imgWidth = $img.width();
      var imgHeight = $img.height();

      $img.css({
        width: (imgWidth > imgHeight) ? 'auto' : '101%',
        height: (imgWidth > imgHeight) ? '101%' : 'auto'
      });
    };

    tmpImg.src = $img.attr('src');
  });
  $('.maskRectangle').each(function(){
    var $this = $(this);
    var $img = $this.find('img');
    var tmpImg = new Image();

    tmpImg.onload = function () {
      var imgWidth = $img.width();
      var imgHeight = $img.height();
      var ratio = imgHeight / imgWidth;

      $img.css({
        width: (ratio <= 0.5625) ? 'auto' : '102%',
        height: (ratio <= 0.5625) ? '101%' : 'auto'
      });
    };

    tmpImg.src = $img.attr('src');
  });
};
trimingImage();

jQuery(function($) {
  $('.js-carousel-facility > div > div').each(function(index, element){
    if ($(element).find('.linkList7').size() == 0) {
       $(element).remove();
    }
  });

  $('.js-carousel-facility-Tab ul li').each(function(index, element){
      var name = $(element).attr("id").split('_');
      if (name[1]) {
        if ($('.js-carousel-facility > div #'+ name[1]).size() == 0) {
          $(element).remove();
        }
      }
  });

  if ($('.js-carousel-facility-Tab ul li').size() == 0) {
    $('.js-carousel-facility-Tab').remove();
  }

  $('.js-carousel-facility > div').slick({
    asNavFor: '.js-carousel-facility-Tab ul',
    autoplay: false,
    autoplaySpeed: 3000,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide:0,
    arrows: false,
    draggable: false,
    swipe: false,
  });
  $('.js-carousel-facility-Tab ul').slick({
    asNavFor: '.js-carousel-facility > div',
    slidesToShow: 6,
    arrows: false,
    focusOnSelect: true,
    swipe: true,
    draggable: true,
    // centerMode: true,
    // centerPadding: '60px',
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          // centerPadding: '13%',
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      }
    ]
  });
});

// 初回表示モーダル
// (function ($) {
//   var $modal = $('.modalContent.initial-modal');
//   var $modalWrap = $('<div class="modalWrap"></div>');

//   // scroll固定
//   $('body').addClass('lock');

//   // overlayのdivでwrap
//   $modal.wrap($modalWrap);

//   $modalWrap = $modal.parent();

//   $modalWrap.show();
//   modalResize();

//   $modal.fadeIn('slow');
//   $modal.click(function(e){
//     e.stopPropagation();
//   });
//   $('.modalContent.initial-modal, .modalBtnClose').off().click(function(){
//     $modal.fadeOut('slow');
//     $modalWrap.fadeOut('slow',function(){
//       $('body').removeClass('lock');
//       $modal.unwrap($modalWrap);
//     });
//   });

//   $(window).on('resize', function(){
//     modalResize();
//   });
//   function modalResize(){
//     var h = $(window).height();
//     var mh = $modal.outerHeight(true);
//   }
// })($);

// mutationObserver for .linkList13
if (document.querySelector('.linkList13 ul') !== null) {
  var observer = new MutationObserver(function () {
    startMatchHeight();
    trimingImage();
  });

  observer.observe(document.querySelector('.linkList13 ul'), {
    childList: true
  });
}
if (document.querySelector('.linkList14 ul') !== null) {
  var observer = new MutationObserver(function () {
    startMatchHeight();
    trimingImage();
  });

  observer.observe(document.querySelector('.linkList14 ul'), {
    childList: true
  });
}

(function() {
  var timeStamp = 0;
  window.addEventListener('message', function(e) {
    if (!(e.data > 0)) return;
    var $QuestionnaireFrame = document.querySelector('#frame');
    if ($QuestionnaireFrame) {
      // iframe描画時
      if (timeStamp === 0) {
        // エラー文言分の高さを足す
        var height = parseFloat(e.data) + 80;
        $QuestionnaireFrame.style.height = height + 'px';
        // iframeのJS実行後にロードが完了するケースに備え、loadイベントも登録する
        window.addEventListener('load', function() {
          // エラー文言分の高さを足す
          var height = parseFloat(e.data) + 80;
          $QuestionnaireFrame.style.height = height + 'px';
        });
        timeStamp = e.timeStamp;
        // アンケート回答完了時
      } else {
        $QuestionnaireFrame.style.height = e.data + 'px';
        // iframe先頭へスクロール
        var headerHeight = document.querySelector('header') ? document.querySelector('header').offsetHeight : 0;
        var iframeTop = $QuestionnaireFrame.getBoundingClientRect().top;
        var scrollY = window.pageYOffset || document.documentElement.scrollTop;
        var absoluteTop = scrollY + iframeTop - headerHeight;
        window.scrollTo(0, absoluteTop);
      }
    }
  });
})();

// quantity
(function () {
  $('.js-quantity').each(function(){
    let quantity = $(this).find('ul li').length;
    $(this).addClass('is-quantity' + quantity);
  });
}());

// selectカスタマイズ
(function () {
  let active = true;
  let selectButtonH = $('.js-selectCustomize .selectButton').height();
  let selectListH = $('.js-selectCustomize .selectList').height();
  $('.js-selectCustomize .selectButton').click(function(){
    if (active) {
      $('.js-selectCustomize .selectBox').height(selectButtonH + selectListH).addClass('is-active');
      active = false;
    } else {
      $('.js-selectCustomize .selectBox').height(selectButtonH).removeClass('is-active');
      active = true;
    }
  });
  $('.js-selectCustomize .selectList label').click(function(){
    $('.js-selectCustomize .selectButton').text(this.textContent);
    $('.js-selectCustomize .selectBox').height(selectButtonH).removeClass('is-active');
    active = true;
    // data-urlをみてあれば実行
    if ($(this).data('url')) {
      window.location.href = $(this).data('url');
    }
    // data-tabをみてあれば実行
    if ($(this).data('tab')) {
      var target = $(this).data('tab');
      var tabDetail = $('.tab-detail-section');
      var tabDetailTarget = document.querySelector(".tab-" + target);
      tabDetail.removeClass('is-active').fadeOut();
      $(tabDetailTarget).fadeIn('slow');
    }
  });
}());

// カレンダー高さ調整
(function () {
  $('.calendarTable td .tdl').matchHeight();
  $('.calendarTable td .tds').matchHeight();
}());
// 各TOPの幅調整
(function () {
  if ($('.topState').length >= 1) {
    if (navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') > 0 || navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('Android') > 0) {
      function topStateW(w){
        let wList = new Array();
        $(w).each(function(index){
          wList[index] = $(this).width();
        });
        let maxW = Math.max.apply(null, wList);
        $(w).width(maxW);
        $(window).on("orientationchange", function() {
          location.reload();
        });
      }
    } else {
      function topStateW(w){
        let wList = new Array();
        $(w).each(function(index){
          wList[index] = $(this).width();
        });
        let maxW = Math.max.apply(null, wList);
        $(w).width(maxW);
        $(window).resize(function () {
          var winW = $(window).width();
          if (winW <= 767) {
            $(w).width(maxW * 0.75);
          } else {
            $(w).width(maxW * 1);
          }
        });
      }
    }
    topStateW('.topState .texArea dt');
    topStateW('.topState .texArea dd');
  }
}());
// (function () {
//   if ($('.timeTable').length >= 1) {
//     function topStateW(w){
//       let wList = new Array();
//       $(w).each(function(index){
//         wList[index] = $(this).width();
//         $(this).parent().next().children('.operationTime').width(wList[index]);
//       });
//     }
//     topStateW('.timeTable ul li:first-child .operationTime');
//   }
// }());

// popup アンケート
(function () {
  $('.inqueryModal .inqueryModal-closeBtn').on('click', function () {
    $('.inqueryModal').addClass('is-close');
    setTimeout(function() {
      $('.inqueryModal').removeClass('is-open');
    }, 1000);
  });
}());

// ticket banner
(function () {
  if ($('.ticketPopup').length === 1) {
    var checkDisplay = $('.ticketPopup #ticketDisplay1');
    if ($.cookie('ticket_popup')) {
      $('.ticketPopup').removeClass('is-active');
      checkDisplay.attr('checked', true).prop('checked', true).change();
      console.log('checkあり');
    }else{
      setTimeout(function() {
        $('.ticketPopup').addClass('is-active');
        checkDisplay.removeAttr('checked').prop('checked', false).change();
      }, 500);
      console.log('checkなし');
    }
    $('.ticketPopup .ticketPopup-closeBtn').on('click', function () {
      $('.ticketPopup').removeClass('is-active');
      if (checkDisplay.prop('checked') == true) {
        $.cookie('ticket_popup','1', {expires: 365});
      } else {
        $.removeCookie('ticket_popup');
      }
    });
  }
}());

// popup banner
(function () {
  if ($('.bnrCharPopup').length === 1) {
    var cookieName = 'popup_banner';

    if (!Cookies.get(cookieName) && $('.bnrCharPopup').length !== 0) {
      // cookieのセット
      Cookies.set(cookieName, 1, {
        expires: 1
      });

      setTimeout(function() {
        $('.bnrCharPopup').addClass('is-active');
      }, 1000);

      $('.bnrCharPopup .pupupBtnClose').on('click', function () {
        $('.bnrCharPopup').removeClass('is-active');
      });
    }
  }
}());

// item list 5件表示
(function () {
  $(function() {
    $('.js-expandablePanel').each(function() {
      let panel = $(this);
      let items = panel.find('[class*="linkList"] li');
      let moreBtn = panel.find('.js-showMoreButton button');
      let name = panel.data('name');
      let limit = panel.data('limit');
      let headerHeight = $('#header').outerHeight() + 20; // #header の高さを取得

      var loadActive = loadContents(name);

      if (loadActive) {
        if (moreBtn.data('active') != loadActive) {
          if (loadActive == 'open') {
            ViewOpen();
          } else {
            ViewClose();
          }
        }
      }

      moreBtn.on('click', function() {
        if (moreBtn.data('active') == 'open') {
          ViewClose();

          // スクロールで .js-expandablePanel のトップに移動し、header の高さ分だけ下にずらす
          $('html, body').animate({
            scrollTop: panel.offset().top - headerHeight
          }, 500); // 500ミリ秒でスクロール

          _pushState(name , 'close' , true);
        } else {
          ViewOpen();
          _pushState(name , 'open' , true);
        }
      });
      function ViewOpen() {
            items.show();
            items.removeClass('gradient');
            moreBtn.text(moreBtn.data('closetext'));
            moreBtn.closest('.showMoreButton').addClass('is-close');
            moreBtn.data('active' , 'open');

      }
      function ViewClose() {
        items.slice((limit + 1)).slideUp();
        if (items.length > limit) {
          items.eq(limit).addClass('gradient');
        }
        moreBtn.closest('.showMoreButton').removeClass('is-close');
        moreBtn.text(moreBtn.data('opentext'));

        moreBtn.data('active' , 'close');

      }
    });



    $('.js-tab .tab-change-2').each(function() {
        var tabWrap = $(this).parents('.js-tab');
        var tabWrapName = $(this).data('name');
        var tabBtn = $(this).find('li');
        var tabDetail = tabWrap.find('.tab-detail-section');

        var initTabActive = tabWrap.find('li.is-active');
        var hashTabActive = loadContents(tabWrapName);
        if (hashTabActive) {
          tabBtn.each(function() {
            if ($(this).data('name') == hashTabActive) {
              initTabActive = $(this);
            }
          });
        }
        if (!initTabActive) {
          initTabActive = tabBtn.eq(0);
        }
        ViewChange(initTabActive);

        tabBtn.on('click', function() {
          ViewChange(this);
          var tabName = $(this).data('name');
          _pushState(tabWrapName , tabName , true);
          return false;
        });

        function ViewChange(elm)
        {
          var thisclass  =$(elm).attr('class');
          tabBtn.removeClass('is-active');
          $(elm).addClass('is-active');
          var elmIndex = tabBtn.index(elm);
          tabDetail.hide();
          tabDetail.removeClass('is-active').fadeOut('slow');
          tabDetail.eq(elmIndex).addClass('is-active').fadeIn('slow');
          tabWrap.removeClass().addClass('js-tab is-' + thisclass);
        }

    });


    function _pushState(key , value , replace)
    {
      if (location.hash.match(new RegExp(key+'=[0-9a-zA-Z]+'))) {
        hash = location.hash.replace(new RegExp(key+'=[0-9a-zA-Z]+'), key+'='+value);
      } else if (location.hash.match(/#/)) {
        hash = location.hash + '&'+key+'=' + value;
      }  else {
        hash = '#'+key+'=' + value;
      }

      if (window.history && window.history.pushState) {
        if (replace) {
          window.history.replaceState(null, null, hash);
        } else {
          window.history.pushState(null, null, hash);
        }
      }
    }

    function loadContents(key)
    {
      if (location.hash.match(/#/)) {
        var value =location.hash.match(new RegExp(key+'=([0-9a-zA-Z]+)'))

        if (value) {
          return value[1];
        }
      }
      return '';
    }
  });
}());
