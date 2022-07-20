$(function(){

    //top
    $(window).scroll(function(){
        curr = $(window).scrollTop();
    
        if (curr > 0) {
            $(".header-area").addClass('top');
        } else {
            $('.header-area').removeClass('top');
        }
    })


    //gnb
    $('.gnb-item').hover(function(e){
        e.preventDefault();
    
        $(".header-area").addClass('top');
        $(this).find('.sub-box').show();
      },function(){
        $('.header-area').removeClass('top');
        $(this).find('.sub-box').hide();
        
      })
    

    //sub-menu
    $('.menu').click(function(e){
        e.preventDefault();

        $('.sub-menu').toggleClass('on');
        $('.header-area').toggleClass('color');
        
    })
      
    //footer 
    $(".policy-select").click(function(e){
        e.preventDefault();

        $(this).find('.policy-box').stop().slideToggle();
     
    
    })


    //이미지 올라오기
    gsap.from('.person-wrap .gnb-item', {
        scrollTrigger:".person-wrap .gnb-item",
        y:300,
        duration:3,
        scrub:2,
        opacity:0,
     })

     //이미지 올라오기
    gsap.from('.services-wrap .gnb-item', {
        scrollTrigger:".services-wrap gnb-item",
        y:300,
        duration:3,
        scrub:2,
        opacity:0,
     })

   
})