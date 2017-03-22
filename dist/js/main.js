jQuery(function($){


  $("#mobileNav").mmenu({
               "extensions": [
                 "effect-panels-zoom",
                  "theme-dark"
               ],
               "navbars": [
                  {
                     "position": "top",
                     "content": [
                        "searchfield"
                     ]
                  }
      ]
  });

  /*$(".products__wrapper").mmenu({

               offCanvas: false,

  });*/



  $('.main__slider').flexslider({
      animation: "slide",
      controlNav: true
  });

  /* Adding the space of the submenu when this is displayed */

  if($('.navigation > ul > li').hasClass('current-menu-item') && $('.navigation > ul > li').hasClass('menu-item-has-children')){

      $('.navigation').css('margin-bottom', $('.submenu').outerHeight());

  }



});
