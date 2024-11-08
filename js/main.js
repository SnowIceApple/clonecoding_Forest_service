$(document).ready(function(){

    var header = $('#header');
    var headerBot = $('.header_bot_box');

    $('#main_nav .mn_floor1 > li > a').on('mouseover focusin', function(){
        header.addClass('nav_active');
    });

    !$('.header_bot').on('mouseleave focusout', function(){
        header.removeClass('nav_active');
    });


    var basicHeight = 0;
    if($(window).outerWidth() <= 737){
      basicHeight = 100;
    }
    else{
      basicHeight = 90;
    }

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


      if($(window).outerWidth() <= 737){
        basicHeight = 100;
      }

        var tg = $(this);
        headerBot.stop().animate({
          height: basicHeight,
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
      if($(window).outerWidth() <= 737){
        basicHeight = 100;
      }

        var tg = $(this);
        headerBot.stop().animate({
          height: basicHeight,
      }, 300); 
      $('.mega_menu').css({
        opacity: 0,
        display: 'none',
    }, 0);
    });


    $('.hb_left, .hb_right').on('focusin', function(){
      if($(window).outerWidth() <= 737){
        basicHeight = 100;
      }
        headerBot.stop().animate({
            height: basicHeight,
        }, 400); 

        megaTit.stop(true, true).css('height', 'auto').animate({
            height: 0,
        }, 400);

    });

    $(window).on('resize', function(){
      if($(window).outerWidth() <= 737){
        basicHeight = 100;
        headerBot.css('height', basicHeight + 'px');
      }
      else{
        basicHeight = 90;
        headerBot.css('height', basicHeight + 'px');
      }
    });

});