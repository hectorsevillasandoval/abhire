jQuery(function($){

  $('.main__slider').flexslider({
      animation: "slide",
      controlNav: true
  });

  /* Adding the space of the submenu when this is displayed */

  if($('.navigation > ul > li').hasClass('current-menu-item') && $('.navigation > ul > li').hasClass('menu-item-has-children')){

      $('.navigation').css('margin-bottom', $('.submenu').outerHeight());

  }



});
