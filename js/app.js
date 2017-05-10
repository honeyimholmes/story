$(function(){

     $('.welcome').animate({
          opacity: 1
      }, 1000);

     $('.welcome-text').animate({
          opacity: 1
      }, 1000, function(){
           $(".welcome-fading").each(function(index) {
               $(this).delay(2500*index).fadeIn(2000);
               $(this).siblings().find('.blinking').remove();
            });
            
            
     });
    

    
    $('.button-no').on('click', function(){
        /*$('.welcome').css('background-color', '#ffffff');*/
        $('.welcome').css('background-image', 'url(img/no-bg.jpg)');
        $('.welcome-text').hide(500);
        $('.goodbye-text').show(800);
    });
    
    $('.button-yes').on('click', function(){
        $('.welcome').slideUp(400);
        $('.characters').slideDown(1000);
    });
    
    $('.janina').on('click', function(){
        $('.characters').slideUp(500);
        $('.thestory').show(1000);
        $('.story-beginning').attr('href', '#janina-ch-1');
    });
    
      $('.henryk').on('click', function(){
        $('.characters').slideUp(500);
        $('.thestory').show(1000);
        $('.story-beginning').attr('href', '#henryk-ch-1');
    });
    
    
    $('.story-beginning').on('click', function(e){
        e.preventDefault();
        $('.thestory').slideUp(500);
       if ($('.story-beginning').attr('href') == '#janina-ch-1') {
            $('.chapter-1-h').slideDown(1000)
        } else {
            $('.chapter-1-h').slideDown(1000)
        }
    });
    
    
    $('.game-yes').one('click', function(e){
        e.preventDefault();
        $('.game-no').off('click');
        $('.game-start').slideDown(1000);
        $('.start-test').show();
            
        $(window).scroll( function(){


            $('.hideme-2').each( function(i){

                var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();

                if( bottom_of_window > bottom_of_object ){

                    $(this).animate({'opacity':'1'},1000);

                };
            });
         });
            
            
           
          $('html, body').animate({
                    scrollTop: $("#start").offset().top
                }, 2000);
        
    
        });

    
    
     $('.game-no').one('click', function(e){
        e.preventDefault();
        $('.game-yes').off('click');
        $('.resign-test').show();
        $('.game-resign').slideDown(1000);
         
        $('html, body').animate({
                    scrollTop: $("#resign").offset().top
                }, 2000);

    });
    
     $('.sign-left').one('click', function(e){
        e.preventDefault();
        $('.sign-right').off('click');
        $('.aside-test').show();
        $('.chapter-7').slideDown(1000);
         
        $('html, body').animate({
                    scrollTop: $("#chapter7").offset().top
                }, 2000);

    });
    
    $('.sign-right').one('click', function(e){
        e.preventDefault();
        $('.sign-left').off('click');
        $('.main-test').show();
        $('.chapter-9').slideDown(1000);
         
        $('html, body').animate({
                    scrollTop: $("#chapter9").offset().top
                }, 2000);
        
                $(window).scroll( function(){


            $('.hideme-3').each( function(i){

                var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();

                if( bottom_of_window > bottom_of_object ){

                    $(this).animate({'opacity':'1'},1000);
                    $(this).animate({'left':'1'},1000);

                };
            });
                    

         });

    });

    $('.button-submit').on('click', function(){
        $('.chapter-2').effect('shake');
    });
   
    $(window).scroll( function(){


        $('.hideme').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'},500);

            }

        }); 

    });
    
    $('.btn-submit').on('click', function() {
        var input = $('.inputclass').val();
        if (input == 'block') {
            $('.game-elements-block').css('display', 'inline-block');
            $('.game-elements-block').animate({
                top: '300px'
            }, 2000);
        } else if (input == 'tree') {
            $('.game-elements-tree').css('display', 'inline-block');
            $('.game-elements-tree').animate({
                top: '265px'
            }, 2000);
        } else if (input == 'dog') {
            $('.game-elements-dog').css('display', 'inline-block');
            $('.game-elements-dog').animate({
                top: '320px'
            }, 2000);
        }
    });
    

    $('.parchment').on('click', function(){
        $('#dialog').dialog();
    });
                    
});
