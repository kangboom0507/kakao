$(function(){

    var swiper = new Swiper(".visual-wrap", {
        loop:true,  
        speed: 1000,
        parallax: true,
        pagination: {
            el: ".sc-visual .pagers",
            type: "fraction",
          },

        autoplay: {                
          delay:5000,
          disableOnInteraction: false,
        },
    });
 
   
})