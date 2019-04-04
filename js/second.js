$(document).ready(function() {
 
   $("a.arrow").click(function() {
    $(this).css('transform' ,'scale(0.5)', 'rotate(360deg)',
    'transition','.5s')
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
         duration: 1000,
         easing: "swing"
      });
      return false;
   });
});
/*sticky navigation*/
$(window).on('scroll', function(){
    if($(window).scrollTop()>=350){
        $('nav').addClass('sticky');
    } else{
        $('nav').removeClass('sticky')
    }


    if($(window).scrollTop()>=400){
        $('header').removeClass('goheader');
        $('header').css('position','static');
        $('nav').css('animation', '');
    } 
    
})

