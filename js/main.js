$(document).ready(function(){

    var header = $('#header');
    var headerBot = $('.header_bot_box');
    var headerBot2 = $('.header_bot');

    $('#main_nav .mn_floor1 > li > a').on('mouseover focusin', function(){
        header.addClass('nav_active');
    });

    $('.header_bot').on('mouseleave', function(){
        header.removeClass('nav_active');
    });

    $('.hb_right').on('focusin', function(){
      header.removeClass('nav_active');
      $('#main_nav .mn_floor1 li').removeClass('active');
    });


    var basicHeight = 90;
    // if($(window).outerWidth() <= 737){
    //   basicHeight = 100;
    // }
    // else{
    // }

    var marginHeight = 25;

//     var el = $('#first'),
//     curHeight = el.height(),
//     autoHeight = el.css('height', 'auto').height();
// el.height(curHeight).animate({height: autoHeight}, 1000)


    var megaTit = $('.mega_menu_tit');

    $('#main_nav .mn_floor1 > li > a').on('mouseover focusin', function(e){
        e.stopPropagation();
        var tg = $(this).parent();
        var idx = tg.index();
        tg.addClass('active').siblings().removeClass('active');
        $('.mega_menu_tit_deco ul li').eq(idx).addClass('active').siblings().removeClass('active');

        megaMenuHeight = tg.children('.mega_menu').height();
        var activeHeaderHeight = megaMenuHeight + basicHeight;


        // tg.children('.mega_menu').show();
        // tg.siblings().children('.mega_menu').hide();

        headerBot.stop().animate({
            height: activeHeaderHeight,
            paddingBottom: 25,
        }, 300);

        headerBot2.stop().animate({
          paddingBottom: 25,
        }, 300);

        tg.children('.mega_menu').css({
          opacity: 1,
          display: 'block',
      }).stop().animate({
          opacity: 1
      }, 300);

      tg.siblings().children('.mega_menu').css({
        opacity: 0,
        display: 'none',
    });

    });

    !$('.header_bot').on('mouseleave', function(e){
        e.stopPropagation();

        $('.mn_floor1 li').removeClass('active');
        zeroHeight = 0;


      // if($(window).outerWidth() <= 737){
      //   basicHeight = 100;
      // }

        var tg = $(this);
        headerBot.stop().animate({
          height: basicHeight,
          paddingBottom: 0,

      }, 300); 

      headerBot2.stop().animate({
        paddingBottom: 0,
      }, 300);


      $('.mega_menu').css({
        opacity: 1,
    }).stop().animate({
      opacity: 0,
    }, 300, function(){
        $(this).css('display', 'none');
    });


    });

    $('.main_nav_close_btn').on('click', function(){
      $('.mn_floor1 li').removeClass('active');
      header.removeClass('nav_active');

        var tg = $(this);
        headerBot.stop().animate({
          height: basicHeight,
          paddingBottom: 0,

      }, 300); 

      headerBot2.stop().animate({
        paddingBottom: 0,
      }, 300);


      $('.mega_menu').css({
        opacity: 1,
    }).stop().animate({
      opacity: 0,
    }, 300, function(){
        $(this).css('display', 'none');
    });
    });


    $('.hb_left, .hb_right').on('focusin', function(){
        headerBot.stop().animate({
            height: basicHeight,
        }, 400); 

        megaTit.stop(true, true).css('height', 'auto').animate({
            height: 0,
        }, 400);

    });

    $(window).on('resize', function(){
      if($(window).outerWidth() <= 737){
        headerBot.css('height', basicHeight + 'px');
      }
      else{
        headerBot.css('height', basicHeight + 'px');
      }
    });

    $('.all_menu_open a').each(function(){
      $(this).on('click', function(e){
        if($(window).width() > 1100){

        }
        if($(window).width() <= 1100){
          e.preventDefault();
          $(this).addClass('active');
          $('.all_menu').addClass('active');
          $('.all_menu').focus();
          $('html, body').addClass('fixed');
        }
      });
    });
    $('.all_menu_close').on('click', function(){
      $('.all_menu').removeClass('active');
      $('.all_menu_open').removeClass('active');
      $('html, body').removeClass('fixed');
    });

    $('.amlf_btn').on('click', function(){
      $(this).parent('li').addClass('active').siblings('li').removeClass('active');
    });

    $('.amlf2_btn button').each(function(){
      $(this).on('click', function(){
        $(this).closest('li').toggleClass('active');
        $(this).closest('li').siblings('li').removeClass('active');
      });
    });

    $(window).on('resize', function(){
      if($(window).width() > 1100){
        $('html, body').removeClass('fixed');
        $('.all_menu').removeClass('active');
        $('.all_menu_open').removeClass('active');
      }
    });

    $('.main_notice_slide').slick({
      infinite : true,
      autoplay : true,
      prevArrow: $('.mns_prev'),
      nextArrow: $('.mns_next'),
    });

    $('.mns_btn.onOff').on('click', function(){
      if($(this).hasClass('pause')){
          $(this).removeClass('pause').addClass('play');
          $('.main_notice_slide').slick('slickPause');
          $(this).children('.hidden_text').text('슬라이드 자동재생 시작');
      }
      else if($(this).hasClass('play')){
          $(this).removeClass('play').addClass('pause');
          $('.main_notice_slide').slick('slickPlay');
          $(this).children('.hidden_text').text('슬라이드 자동재생 정지');
      }
    });

    $('.mnss_1').slick({
      infinite : true,
      autoplay : true,
      speed: 1300,
      fade: true,
      prevArrow: $('.mss_prev1'),
      nextArrow: $('.mss_next1'),
    });

        $('.mss_onOff1').on('click', function(){
      if($(this).hasClass('pause')){
          $(this).removeClass('pause').addClass('play');
          $('.mnss_1').slick('slickPause');
          $(this).children('.hidden_text').text('슬라이드 자동재생 시작');
      }
      else if($(this).hasClass('play')){
          $(this).removeClass('play').addClass('pause');
          $('.mnss_1').slick('slickPlay');
          $(this).children('.hidden_text').text('슬라이드 자동재생 정지');
      }
    });

    $('.mnss_2').slick({
      infinite : true,
      autoplay : true,
      speed: 1300,
      fade: true,
      prevArrow: $('.mss_prev2'),
      nextArrow: $('.mss_next2'),
    });

    $('.mss_onOff2').on('click', function(){
      if($(this).hasClass('pause')){
          $(this).removeClass('pause').addClass('play');
          $('.mnss_2').slick('slickPause');
          $(this).children('.hidden_text').text('슬라이드 자동재생 시작');
      }
      else if($(this).hasClass('play')){
          $(this).removeClass('play').addClass('pause');
          $('.mnss_2').slick('slickPlay');
          $(this).children('.hidden_text').text('슬라이드 자동재생 정지');
      }
    });

    $('.fvsv_slide').slick({
      infinite : true,
      autoplay : false,
      draggable : false,
      speed: 300,
      slidesToShow: 4,
      prevArrow: $('.fvsv_prev'),
      nextArrow: $('.fvsv_next'),
      responsive: [
        {
          breakpoint: 1340,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 2,
          },

        }, 
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 676,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 2,
          },
        },
      ]
    });

    $('.mt_btn').each(function(){
      $(this).on('click', function(){
        $(this).closest('li').addClass('active').siblings().removeClass('active');
      });
    });

        $('.main_bot_slide').slick({
          infinite : true,
          autoplay : false,
          draggable : false,
          speed: 500,
          slidesToShow: 6,
          prevArrow: $('.mbs_prev'),
          nextArrow: $('.mbs_next'),
        });


        $('.fb_mega_btn').each(function(e){
          $(this).on('click', function(e){
          var height = $(this).siblings('.fb_megamenu').children('.fb_mega_container').outerHeight() + 25;
            e.preventDefault();
            $(this).parent('li').toggleClass('active').siblings('li').removeClass('active');
            $(this).parent('li').siblings('li').children('.fb_mega_btn').attr('aria-expanded', 'false');
            console.log(height);
            if($(this).parent('li').hasClass('active')){
              $(this).attr('aria-expanded', 'true');
              $(this).siblings('.fb_megamenu').css('visibility', 'visible');
              $(this).siblings('.fb_megamenu').css('height', '0');
              $(this).siblings('.fb_megamenu').animate({
                height: height,
                opacity: 1,
                visibility: 'visible'
              }, 200);
            }
            $('.fb_link_list > ul > li').each(function(){
              if($(this).hasClass('active') == false){
                $(this).children('.fb_mega_btn').attr('aria-expanded', 'false');
                $(this).children('.fb_megamenu').animate({
                  height: 0,
                  opacity: 0,
                  display: 'none',
                }, 200, function(){
                  $(this).css('visibility', 'hidden');
                });
              }
            });
            {

            }
          });
        });

        
        $(window).on('resize', function(){
          var rzheight = $('.has_mega.active').children().find('.fb_mega_container').outerHeight();
          console.log(rzheight);

          // $('.fb_mega_btn').each(function(){
          //   console.log(rzheight);
          //   if($(this).parent('.has_mega').hasClass('active')){
          //     $(this).siblings('.fb_megamenu').css('height', rzheight + 'px');
          //   }
          //   if($('.has_mega').hasClass('active') == false){
          //     $('.fb_megamenu').css('height', 0);
          //   }
          // });
        });

        $('.fbm_close').on('click', function(){
          $('.fb_link_list > ul > li').removeClass('active');
          $('.fb_mega_btn').attr('aria-expanded', 'false');
          $('.fb_megamenu').animate({
            height: 0,
            opacity: 0,
            visibility: 'hidden',
          }, 200, function(){
            $(this).css('visibility', 'hidden');
          });
        });

});