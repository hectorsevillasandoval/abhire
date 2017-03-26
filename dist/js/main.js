jQuery(function($){


  $("#mobileNav").mmenu({
               "extensions": [
                 "effect-panels-zoom",
                  "theme-dark",
                  "fullscreen"
               ],
               offCanvas	: {
          			zposition 	: "front",
          			position 	: "bottom"
          		},
               "navbars": [
                  {
                     "position": "top",
                     "content": [
                        "searchfield",
                        "close"
                     ]
                  }
      ]
  });

  $("#catNav").mmenu({
               "extensions": [
                 "effect-panels-zoom",
                  "fullscreen"
               ],
               offCanvas	: {
                zposition 	: "front",
                position 	: "bottom"
              },
              "navbar": {
                "title" : "Categories Navigation"
              },
               "navbars": [
                  {
                     "position": "top",
                     "content": [
                        "close"
                     ]
                  }
      ]
  });


  /*var categories_var_height = $(".products__categories-list").outerHeight()/2;

  $(".products__wrapper").css("min-height", categories_var_height);*/

$(".products__categories-nav").mmenu({

        offCanvas: false,
        navbar:
          {
            "title": "Categories"
          }



  });



  $('.main__slider').flexslider({
      animation: "slide",
      controlNav: true
  });

  /* Adding the space of the submenu when this is displayed */

  if($('.navigation > ul > li').hasClass('current-menu-item') && $('.navigation > ul > li').hasClass('menu-item-has-children')){

      $('.navigation').css('margin-bottom', $('.navigation .submenu').outerHeight());

  }



});
