viewportWidth = $(window).width();

//Waypoint transition for top image/headline

new Waypoint({
    element: document.getElementById('headline-trigger-1'),
    handler: direction => {
        if (direction === 'down') {        
          if(viewportWidth<768){
            $("#headline-layer-left").animate({left: '0px'}, 2000);
            $("#headline-layer-right").animate({right: '0px'}, 2000);
            $("#headline-layer-top").animate({top: '0px'}, 2000);
          } else {
            $("#headline-layer-left").animate({left: '-10%'}, 2000);
            $("#headline-layer-right").animate({right: '-10%'}, 2000);
            $("#headline-layer-top").animate({top: '-50%'}, 2000);
          }
        $("#headline-layer-man").animate({opacity: 1}, 2000);
        } else {
        $("#headline-layer-left").animate({left: '-50%'}, 2000);
        $("#headline-layer-right").animate({right: '-50%'}, 2000);
        $("#headline-layer-top").animate({top: '-100%'}, 2000);
        $("#headline-layer-man").animate({opacity: 0}, 2000);
        }
    },
    offset: '-10%',
});

new Waypoint({
    element: document.getElementById('placeholder-2'),
    handler: direction => {
        if (direction === 'down') {
            $("#headline-container").css({"position":"absolute","top":"auto","bottom":"0"});
        } else {
            $("#headline-container").css({"position":"fixed","top":"0px","bottom":"auto"});
        }
    },
    offset:'50%',
});

  // functions for diagram transition
  
  function transition_chart_in_1(pulse,label) {
    $(pulse).show();
    $(label).show();
  }

  function transition_chart_out_1(pulse,label) {
    $(pulse).hide();
    $(label).hide();
  }

  function transition_chart_2(pulse1,label1,pulse2,label2) {
    $(pulse1).hide();
    $(label1).hide();
    $(pulse2).show();
    $(label2).show();
  }

  function transition_showshot() {
    $(".screenshot-background").fadeIn(250);
  }

  function transition_hideshot() {
    $(".screenshot-background").fadeOut(250);
  }

  function transition_hidechangeshot(img) {
    $(".screenshot-background").fadeOut(250,function(){
      transition_changeimg(img);
    });
  }

  function transition_changeshot(img) {
    $(".screenshot-background").fadeOut(250, function(){
      $(".screenshot-img").attr("src",img);
      $(".screenshot-img").on('load',function(){
        $(".screenshot-background").fadeIn(250);
      });
    });
  } 

  function transition_changeimg(img) {
    $(".screenshot-img").attr("src",img);
  } 

// Waypoint transition for chart 1
const offsetVal = '90%';
  new Waypoint({
    element: document.getElementById('map1-1'),
    handler: direction => {if (direction === 'down') {
      transition_chart_in_1("#case1-1","#g-ai1-1");
    } else {
      transition_chart_out_1("#case1-1","#g-ai1-1");}},offset: offsetVal,}
  );

  new Waypoint({
    element: document.getElementById('map1-2'),
    handler: direction => {if (direction === 'down') {
      transition_changeimg("../img/fire-bus-global-times-chinese-webpage.jpg");
      $(".screenshot-img").on('load',function(){
        $(".screenshot-background").fadeIn(500);
      });
    } else {
      transition_hidechangeshot("");
    }},offset: offsetVal,}
  );
  
  new Waypoint({
    element: document.getElementById('map1-3'),
    handler: direction => {if (direction === 'down') {
      transition_changeshot("../img/fire-bus-photo.jpg");
    } else {
      transition_changeshot("../img/fire-bus-global-times-chinese-webpage.jpg");}},offset: offsetVal,}
  );

  new Waypoint({
    element: document.getElementById('map1-5'),
    handler: direction => {if (direction === 'down') {
      transition_hidechangeshot("");
      transition_chart_2("#case1-1","#g-ai1-1","#case1-2","#g-ai1-2");
    } else {
      transition_changeimg("../img/fire-bus-photo.jpg");
        $(".screenshot-img").on('load',function(){
          $(".screenshot-background").fadeIn(500);
        });
      transition_chart_2("#case1-2","#g-ai1-2","#case1-1","#g-ai1-1");
    }},offset: offsetVal,}
      
  );

  new Waypoint({
    element: document.getElementById('map1-6'),
    handler: direction => {if (direction === 'down') {
      transition_changeimg("../img/fire-bus-global-times-english-webpage.jpg");
      $(".screenshot-img").on('load',function(){
        $(".screenshot-background").fadeIn(500);
      });
    } else {      
      transition_hidechangeshot("");
    }},offset: offsetVal,}
  );

  new Waypoint({
    element: document.getElementById('map1-7'),
    handler: direction => {if (direction === 'down') {
      transition_chart_2("#case1-2","#g-ai1-2","#case1-3","#g-ai1-3");
      transition_hidechangeshot("");
    } else {
      transition_changeimg("../img/fire-bus-global-times-english-webpage.jpg");
        $(".screenshot-img").on('load',function(){
          $(".screenshot-background").fadeIn(500);
        });
      transition_chart_2("#case1-3","#g-ai1-3","#case1-2","#g-ai1-2");
    }},offset: offsetVal,}
  );

  new Waypoint({
    element: document.getElementById('map1-8'),
    handler: direction => {if (direction === 'down') {
      transition_changeimg("../img/fire-bus-sina-chinese-webpage.jpg");
      $(".screenshot-img").on('load',function(){
        $(".screenshot-background").fadeIn(500);
      });
    } else {
      transition_hidechangeshot("");
    }},offset: offsetVal,}
  );

  new Waypoint({
    element: document.getElementById('map1-9'),
    handler: direction => {if (direction === 'down') {
      transition_hidechangeshot("");
      transition_chart_2("#case1-3","#g-ai1-3","#case1-4","#g-ai1-4");
      transition_chart_2("#case1-3","#g-ai1-3","#case1-5","#g-ai1-5");
      transition_chart_2("#case1-3","#g-ai1-3","#case1-6","#g-ai1-6");
    } else {
      transition_changeimg("../img/fire-bus-sina-chinese-webpage.jpg");
        $(".screenshot-img").on('load',function(){
          $(".screenshot-background").fadeIn(500);
        });
      transition_chart_2("#case1-4","#g-ai1-4","#case1-3","#g-ai1-3");
      transition_chart_2("#case1-5","#g-ai1-5","#case1-3","#g-ai1-3");
      transition_chart_2("#case1-6","#g-ai1-6","#case1-3","#g-ai1-3");
      }},offset: offsetVal,}
  );

  new Waypoint({
    element: document.getElementById('map1-10'),
    handler: direction => {if (direction === 'down') {
      transition_chart_2("#case1-5","#g-ai1-5");
      transition_chart_2("#case1-6","#g-ai1-6");
      transition_changeimg("../img/fire-bus-sinchew-original-title-fb.jpg");
      $(".screenshot-img").on('load',function(){
        $(".screenshot-background").fadeIn(500);
      });
    } else {
      transition_chart_2("","","#case1-5","#g-ai1-5");
      transition_chart_2("","","#case1-6","#g-ai1-6");
      transition_hidechangeshot("");
      }},offset: offsetVal,}
  );

  new Waypoint({
    element: document.getElementById('map1-11'),
    handler: direction => {if (direction === 'down') {
      transition_changeshot("../img/fire-bus-sinchew-corrected-title-fb.jpg");
    } else {
      transition_changeshot("../img/fire-bus-sinchew-original-title-fb.jpg");
      }},offset: offsetVal,}
  );
  
  new Waypoint({
    element: document.getElementById('map1-13'),
    handler: direction => {if (direction === 'down') {
      transition_changeshot("../img/fire-bus-sinchew-apology-fb.jpg");
    } else {
      transition_changeshot("../img/fire-bus-sinchew-corrected-title-fb.jpg");
      }},offset: offsetVal,}
  );

  new Waypoint({
    element: document.getElementById('map1-14'),
    handler: direction => {if (direction === 'down') {
      transition_hidechangeshot("");
    } else {
      transition_changeimg("../img/fire-bus-sinchew-apology-fb.jpg");
        $(".screenshot-img").on('load',function(){
          $(".screenshot-background").fadeIn(500);
        });
      }},offset: offsetVal,}
  );

  new Waypoint({
    element: document.getElementById('map1-16'),
    handler: direction => {if (direction === 'down') {
      transition_chart_2("#case1-4","#g-ai1-4","#case1-8","#g-ai1-8");
    } else {
      transition_chart_2("#case1-8","#g-ai1-8","#case1-4","#g-ai1-4");
      }},offset: offsetVal,}
  );

  new Waypoint({
    element: document.getElementById('map1-16-1'),
    handler: direction => {if (direction === 'down') {
      transition_changeshot("../img/fire-bus-penanglang-fb-page.jpg");
    } else {
      transition_hidechangeshot("");
      }},offset: offsetVal,}
  );

  new Waypoint({
    element: document.getElementById('map1-17'),
    handler: direction => {if (direction === 'down') {
      transition_hidechangeshot("");
      transition_chart_2("#case1-8","#g-ai1-8","#case1-13","#g-ai1-12");
    } else {
      transition_changeimg("../img/fire-bus-penanglang-fb-page.jpg");
        $(".screenshot-img").on('load',function(){
          $(".screenshot-background").fadeIn(500);
        });
      transition_chart_2("#case1-13","#g-ai1-12","#case1-8","#g-ai1-8");
      }},offset: offsetVal,}
  );

  new Waypoint({
    element: document.getElementById('map1-17-1'),
    handler: direction => {if (direction === 'down') {
      transition_changeshot("../img/fire-bus-komnitikuantan-fb.jpg");
    } else {
      transition_hidechangeshot("");
      }},offset: offsetVal,}
  );

  new Waypoint({
    element: document.getElementById('map1-18'),
    handler: direction => {if (direction === 'down') {
      transition_hidechangeshot("");
      transition_chart_2("#case1-13","#g-ai1-12","#case1-5","#g-ai1-5");
    } else {
      transition_changeimg("../img/fire-bus-komnitikuantan-fb.jpg");
        $(".screenshot-img").on('load',function(){
          $(".screenshot-background").fadeIn(500);
        });
      transition_chart_2("#case1-5","#g-ai1-5","#case1-13","#g-ai1-12");
      }},offset: offsetVal,}
  );

  new Waypoint({
    element: document.getElementById('map1-18-1'),
    handler: direction => {if (direction === 'down') {
      transition_changeshot("../img/fire-bus-nanyang-webpage.jpg");
    } else {
      transition_hidechangeshot("");
      }},offset: offsetVal,}
  );

  new Waypoint({
    element: document.getElementById('map1-19'),
    handler: direction => {if (direction === 'down') {
      transition_changeshot("../img/fire-bus-nanyang-fb.jpg");
    } else {
      transition_changeshot("../img/fire-bus-nanyang-webpage.jpg");
      }},offset: offsetVal,}
  );

  new Waypoint({
    element: document.getElementById('map1-21'),
    handler: direction => {if (direction === 'down') {
      transition_hidechangeshot("");
      transition_chart_2("#case1-5","#g-ai1-5","#case1-9","#g-ai1-9");
    } else {
      transition_changeimg("../img/fire-bus-nanyang-fb.jpg");
        $(".screenshot-img").on('load',function(){
          $(".screenshot-background").fadeIn(500);
        });
      transition_chart_2("#case1-9","#g-ai1-9","#case1-5","#g-ai1-5");
      }},offset: offsetVal,}
  );

  new Waypoint({
    element: document.getElementById('map1-21-1'),
    handler: direction => {if (direction === 'down') {
      transition_changeshot("../img/fire-bus-ipohstation-fb.jpg");
    } else {
      transition_hidechangeshot("");
      }},offset: offsetVal,}
  );

  new Waypoint({
    element: document.getElementById('map1-25'),
    handler: direction => {if (direction === 'down') {
      transition_hidechangeshot("");
      transition_chart_2("#case1-9","#g-ai1-9","#case1-6","#g-ai1-6");
    } else {
      transition_changeimg("../img/fire-bus-ipohstation-fb.jpg");
        $(".screenshot-img").on('load',function(){
          $(".screenshot-background").fadeIn(500);
        });
      transition_chart_2("#case1-6","#g-ai1-6","#case1-9","#g-ai1-9");
      }},offset: offsetVal,}
  );

  new Waypoint({
    element: document.getElementById('map1-26'),
    handler: direction => {if (direction === 'down') {
      transition_changeimg("../img/fire-bus-orientaldaily-original-title-webpage.jpg");
      $(".screenshot-img").on('load',function(){
        $(".screenshot-background").fadeIn(500);
      });
    } else {
      transition_hidechangeshot("");
      }},offset: offsetVal,}
  );

  new Waypoint({
    element: document.getElementById('map1-27'),
    handler: direction => {if (direction === 'down') {
      transition_changeshot("../img/fire-bus-orientaldaily-fb.jpg");
    } else {
      transition_changeshot("../img/fire-bus-orientaldaily-original-title-webpage.jpg");
      }},offset: offsetVal,}
  );
  
  new Waypoint({
    element: document.getElementById('map1-28'),
    handler: direction => {if (direction === 'down') {
      transition_hidechangeshot("");
      transition_chart_2("#case1-6","#g-ai1-6","#case1-10","#g-ai1-10");
      transition_chart_2("#case1-6","#g-ai1-6","#case1-11");
      transition_chart_2("#case1-6","#g-ai1-6","#case1-12");
    } else {
      transition_changeimg("../img/fire-bus-orientaldaily-fb.jpg");
        $(".screenshot-img").on('load',function(){
          $(".screenshot-background").fadeIn(500);
        });
      transition_chart_2("#case1-10","#g-ai1-10","#case1-6","#g-ai1-6");
      transition_chart_2("#case1-11");
      transition_chart_2("#case1-12");
    }},offset: offsetVal,}
  );

// Waypoint transition for chart 3

  //first text box wihthout image
  new Waypoint({
    element: document.getElementById('map3-1'),
    handler: direction => {if (direction === 'down') {
      transition_chart_in_1("#case3-4","#g-ai3-4");
    } else {
      transition_chart_out_1("#case3-4","#g-ai3-4");
    }},offset: offsetVal,}
  );

  //show first image from empty image
  new Waypoint({
    element: document.getElementById('map3-2'),
    handler: direction => {if (direction === 'down') {
      transition_changeimg("../img/us-diplotmat-nanyang-webpage.jpg");
      $(".screenshot-img").on('load',function(){
        $(".screenshot-background").fadeIn(500);
      });
    } else {
      transition_hidechangeshot("");
    }},offset: offsetVal,}
  );

  //transition between 2 images
  new Waypoint({
    element: document.getElementById('map3-3'),
    handler: direction => {if (direction === 'down') {
      transition_changeshot("../img/us-diplotmat-nanyang-fb.png");
    } else {
      transition_changeshot("../img/us-diplotmat-nanyang-webpage.jpg");
    }},offset: offsetVal,}
  );

  //hide image and change chart, no image  
  new Waypoint({
    element: document.getElementById('map3-4'),
    handler: direction => {if (direction === 'down') {
      transition_hidechangeshot("");
      transition_chart_2("#case3-4","#g-ai3-4","#case3-3","#g-ai3-3");
    } else {
      transition_changeimg("../img/us-diplotmat-nanyang-fb.png");
        $(".screenshot-img").on('load',function(){
          $(".screenshot-background").fadeIn(500);
        });
      transition_chart_2("#case3-3","#g-ai3-3","#case3-4","#g-ai3-4");
    }},offset: offsetVal,}
  );

  //empty text box used to show image
  new Waypoint({
    element: document.getElementById('map3-4-1'),
    handler: direction => {if (direction === 'down') {
      transition_changeshot("../img/us-diplomat-ifeng-webpage.jpg")
    } else {
      transition_hidechangeshot("");
    }},offset: offsetVal,}
  );

  //hide image and change chart, no image  
  new Waypoint({
    element: document.getElementById('map3-5'),
    handler: direction => {if (direction === 'down') {
      transition_hidechangeshot("");
      transition_chart_2("#case3-3","#g-ai3-3","#case3-2","#g-ai3-2");
    } else {
      transition_changeimg("../img/us-diplomat-ifeng-webpage.jpg");
      $(".screenshot-img").on('load',function(){
        $(".screenshot-background").fadeIn(500);
      });
      transition_chart_2("#case3-2","#g-ai3-2","#case3-3","#g-ai3-3");
    }},offset: offsetVal,}
  );

  new Waypoint({
    element: document.getElementById('map3-6'),
    handler: direction => {if (direction === 'down') {
      transition_chart_2("#case3-2","#g-ai3-2","#case3-1","#g-ai3-1");
    } else {
      transition_chart_2("#case3-1","#g-ai3-1","#case3-2","#g-ai3-2");
    }},offset: offsetVal,}
  );

  //empty text box used to show image
  new Waypoint({
    element: document.getElementById('map3-6-1'),
    handler: direction => {if (direction === 'down') {
      transition_changeshot("../img/us-diplomat-wenweipo-webpage.jpg")
    } else {
      transition_hidechangeshot("");
    }},offset: offsetVal,}
  );

  //hide image and change chart, no image 
  new Waypoint({
    element: document.getElementById('map3-7'),
    handler: direction => {if (direction === 'down') {
      transition_hidechangeshot("");
      transition_chart_2("#case3-1","#g-ai3-1","#case3-5","");
      transition_chart_2("","","#case3-6","#g-ai3-6");
      transition_chart_2("","","#case3-7","");
    } else {
      transition_changeimg("../img/us-diplomat-wenweipo-webpage.jpg");
      $(".screenshot-img").on('load',function(){
        $(".screenshot-background").fadeIn(500);
      });
      transition_chart_2("#case3-5","","#case3-1","#g-ai3-1");
      transition_chart_2("#case3-6","#g-ai3-6","","");
      transition_chart_2("#case3-7","","","");
    }},offset: offsetVal,}
  );

  //empty text box used to show image
  new Waypoint({
    element: document.getElementById('map3-7-1'),
    handler: direction => {if (direction === 'down') {
      transition_changeshot("../img/us-diplomat-seehua-fb.jpg")
    } else {
      transition_hidechangeshot("");
    }},offset: offsetVal,}
  );

  //hide image and change chart, no image  
  new Waypoint({
    element: document.getElementById('map3-9'),
    handler: direction => {if (direction === 'down') {
      transition_hidechangeshot("");
      transition_chart_2("#case3-5","","#case3-8","#g-ai3-8");
      transition_chart_2("#case3-6","#g-ai3-6","","");
      transition_chart_2("#case3-7","","","");
    } else {
      transition_changeimg("../img/us-diplomat-seehua-fb.jpg");
      $(".screenshot-img").on('load',function(){
        $(".screenshot-background").fadeIn(500);
      });
      transition_chart_2("#case3-8","#g-ai3-8","#case3-5","");
      transition_chart_2("","","#case3-6","#g-ai3-6");
      transition_chart_2("","","#case3-7","");
    }},offset: offsetVal,}
  );

  //show image from no image
  new Waypoint({
    element: document.getElementById('map3-10'),
    handler: direction => {if (direction === 'down') {
      transition_changeshot("../img/us-diplomat-embassy-fb.jpg")
    } else {
      transition_hidechangeshot("");
    }},offset: offsetVal,}
  );

  //hide image and change chart, no image  
  new Waypoint({
    element: document.getElementById('map3-11'),
    handler: direction => {if (direction === 'down') {
      transition_hidechangeshot("");
      transition_chart_2("#case3-8","#g-ai3-8",".case3-10","#g-ai3-10");
    } else {
      transition_changeimg("../img/us-diplomat-embassy-fb.jpg");
      $(".screenshot-img").on('load',function(){
        $(".screenshot-background").fadeIn(500);
      });
      transition_chart_2(".case3-10","#g-ai3-10","#case3-8","#g-ai3-8");
    }},offset: offsetVal,}
  );

  //empty text box used to show image
  new Waypoint({
    element: document.getElementById('map3-11-1'),
    handler: direction => {if (direction === 'down') {
      transition_changeshot("../img/us-diplomat-jb-fb.png")
    } else {
      transition_hidechangeshot("");
    }},offset: offsetVal,}
  );

  //hide image and change chart, no image 
  new Waypoint({
    element: document.getElementById('map3-12'),
    handler: direction => {if (direction === 'down') {
      transition_hidechangeshot("");
      transition_chart_2(".case3-10","#g-ai3-10","#case3-9","#g-ai3-9");
    } else {
      transition_changeimg("../img/us-diplomat-jb-fb.png");
      $(".screenshot-img").on('load',function(){
        $(".screenshot-background").fadeIn(500);
      });
      transition_chart_2("#case3-9","#g-ai3-9",".case3-10","#g-ai3-10");
    }},offset: offsetVal,}
  );

  //show image from no image
  new Waypoint({
    element: document.getElementById('map3-13'),
    handler: direction => {if (direction === 'down') {
      transition_changeshot("../img/us-diplomat-radioantarabangsachina-fb.jpg")
    } else {
      transition_hidechangeshot("");
    }},offset: offsetVal,}
  );

  //hide image, last text box
  new Waypoint({
    element: document.getElementById('map3-13-1'),
    handler: direction => {if (direction === 'down') {
      transition_hidechangeshot("");
    } else {
      transition_changeimg("../img/us-diplomat-radioantarabangsachina-fb.jpg")
      $(".screenshot-img").on('load',function(){
        $(".screenshot-background").fadeIn(500);
      });
    }},offset: offsetVal,}
  );

// Waypoint transition for chart 4

  //first text box wihthout image
  new Waypoint({
    element: document.getElementById('map4-1'),
    handler: direction => {if (direction === 'down') {
      transition_chart_in_1("#case4-2","#g-ai4-2");
    } else {
      transition_chart_out_1("#case4-2","#g-ai4-2");
    }},offset: offsetVal,}
  );

  //show first image from empty image
  new Waypoint({
    element: document.getElementById('map4-2'),
    handler: direction => {if (direction === 'down') {
      transition_changeimg("../img/weapon-beingoverseas-fb.jpg");
      $(".screenshot-img").on('load',function(){
        $(".screenshot-background").fadeIn(500);
      });
    } else {
      transition_hidechangeshot("");
    }},offset: offsetVal,}
  );

  //hide image and change chart, no image 
  new Waypoint({
    element: document.getElementById('map4-3'),
    handler: direction => {if (direction === 'down') {
      transition_hidechangeshot("");
      transition_chart_2("#case4-2","#g-ai4-2","#case4-1","#g-ai4-1");
    } else {
      transition_changeimg("../img/weapon-beingoverseas-fb.jpg")
      $(".screenshot-img").on('load',function(){
        $(".screenshot-background").fadeIn(500);
      });
      transition_chart_2("#case4-1","#g-ai4-1","#case4-2","#g-ai4-2");
    }},offset: offsetVal,}
  );

  //empty text box used to show image
  new Waypoint({
    element: document.getElementById('map4-3-1'),
    handler: direction => {if (direction === 'down') {
      transition_changeshot("../img/weapon-wenweipo-webpage.jpg")

    } else {
      transition_hidechangeshot("");
    }},offset: offsetVal,}
  );

  //hide image and change chart, no image 
  new Waypoint({
    element: document.getElementById('map4-4'),
    handler: direction => {if (direction === 'down') {
      transition_hidechangeshot("");
      transition_chart_2("#case4-1","#g-ai4-1","#case4-3","#g-ai4-3");
      transition_chart_2("","","#case4-4","#g-ai4-4");
    } else {
      transition_changeimg("../img/weapon-wenweipo-webpage.jpg")
      $(".screenshot-img").on('load',function(){
        $(".screenshot-background").fadeIn(500);
      });
      transition_chart_2("#case4-3","#g-ai4-3","#case4-1","#g-ai4-1");
      transition_chart_2("#case4-4","#g-ai4-4","","");
    }},offset: offsetVal,}
  );

  //empty text box used to show image
  new Waypoint({
    element: document.getElementById('map4-4-1'),
    handler: direction => {if (direction === 'down') {
      transition_changeshot("../img/weapon-grassroot-supportph-fb.png")
    } else {
      transition_hidechangeshot("");
    }},offset: offsetVal,}
  );  

  //hide image, last text box
  new Waypoint({
    element: document.getElementById('map4-5'),
    handler: direction => {if (direction === 'down') {
      transition_hidechangeshot("");
    } else {
      transition_changeimg("../img/weapon-grassroot-supportph-fb.png")
      $(".screenshot-img").on('load',function(){
        $(".screenshot-background").fadeIn(500);
      });
    }},offset: offsetVal,}
  );

// Waypoint transition for chart 5

  //first text box wihthout image
  new Waypoint({
    element: document.getElementById('map5-1'),
    handler: direction => {if (direction === 'down') {
      transition_chart_in_1("#case5-3","#g-ai5-4");
    } else {
      transition_chart_out_1("#case5-3","#g-ai5-4");
    }},offset: offsetVal,}
  );

  //empty text box used to show image
  new Waypoint({
    element: document.getElementById('map5-1-1'),
    handler: direction => {if (direction === 'down') {
      transition_changeshot("../img/plot-rakyat-fb.jpeg")
    } else {
      transition_hidechangeshot("");
    }},offset: offsetVal,}
  );  

  //hide image and change chart, no image 
  new Waypoint({
    element: document.getElementById('map5-2'),
    handler: direction => {if (direction === 'down') {
      transition_hidechangeshot("");
      transition_chart_2("#case5-3","#g-ai5-4","#case5-2","#g-ai5-3");
    } else {
      transition_changeimg("../img/plot-rakyat-fb.jpeg")
      $(".screenshot-img").on('load',function(){
        $(".screenshot-background").fadeIn(500);
      });
      transition_chart_2("#case5-2","#g-ai5-3","#case5-3","#g-ai5-4");
    }},offset: offsetVal,}
  );

  //empty text box used to show image
  new Waypoint({
    element: document.getElementById('map5-2-1'),
    handler: direction => {if (direction === 'down') {
      transition_changeshot("../img/plot-epochtimes-youtube.jpg")
    } else {
      transition_hidechangeshot("");
    }},offset: offsetVal,}
  );  

  //hide image and change chart, no image 
  new Waypoint({
    element: document.getElementById('map5-3'),
    handler: direction => {if (direction === 'down') {
      transition_hidechangeshot("");
      transition_chart_2("#case5-2","#g-ai5-3","#case5-3","#g-ai5-5");
    } else {
      transition_changeimg("../img/plot-epochtimes-youtube.jpg")
      $(".screenshot-img").on('load',function(){
        $(".screenshot-background").fadeIn(500);
      });
      transition_chart_2("#case5-3","#g-ai5-5","#case5-2","#g-ai5-3");
    }},offset: offsetVal,}
  );

  //empty text box used to show image
  new Waypoint({
    element: document.getElementById('map5-3-1'),
    handler: direction => {if (direction === 'down') {
      transition_changeshot("../img/police-rape-fb.jpg")
    } else {
      transition_hidechangeshot("");
    }},offset: offsetVal,}
  ); 

  //hide image and change chart, no image 
  new Waypoint({
    element: document.getElementById('map5-4'),
    handler: direction => {if (direction === 'down') {
      transition_hidechangeshot("");
      transition_chart_2("#case5-3","#g-ai5-5","#case5-1","#g-ai5-1");
    } else {
      transition_changeimg("../img/police-rape-fb.jpg")
      $(".screenshot-img").on('load',function(){
        $(".screenshot-background").fadeIn(500);
      });
      transition_chart_2("#case5-1","#g-ai5-1","#case5-3","#g-ai5-5");
    }},offset: offsetVal,}
  );

  //empty text box used to show image
  new Waypoint({
    element: document.getElementById('map5-4-1'),
    handler: direction => {if (direction === 'down') {
      transition_changeshot("../img/police-rape-dayushow-youtube.jpg")
    } else {
      transition_hidechangeshot("");
    }},offset: offsetVal,}
  );   

  //hide image and change chart, no image 
  new Waypoint({
    element: document.getElementById('map5-5'),
    handler: direction => {if (direction === 'down') {
      transition_hidechangeshot("");
      transition_chart_2("#case5-1","#g-ai5-1","#case5-4","#g-ai5-6");
      transition_chart_2("","","#case5-5","#g-ai5-7");
    } else {
      transition_changeimg("../img/police-rape-dayushow-youtube.jpg")
      $(".screenshot-img").on('load',function(){
        $(".screenshot-background").fadeIn(500);
      });
      transition_chart_2("#case5-4","#g-ai5-6","#case5-1","#g-ai5-1");
      transition_chart_2("#case5-5","#g-ai5-7","","");
    }},offset: offsetVal,}
  );

  //show image from no image
  new Waypoint({
    element: document.getElementById('map5-6'),
    handler: direction => {if (direction === 'down') {
      transition_changeshot("../img/police-rape-fb-2.png")
    } else {
      transition_hidechangeshot("");
    }},offset: offsetVal,}
  );

  //hide image and change chart, no image 
  new Waypoint({
    element: document.getElementById('map5-7'),
    handler: direction => {if (direction === 'down') {
      transition_hidechangeshot("");
      transition_chart_2("#case5-4","#g-ai5-6","#case5-2","#g-ai5-2");
      transition_chart_2("#case5-5","#g-ai5-7","","");
    } else {
      transition_changeimg("../img/police-rape-fb-2.png")
      $(".screenshot-img").on('load',function(){
        $(".screenshot-background").fadeIn(500);
      });
      transition_chart_2("#case5-2","#g-ai5-2","#case5-4","#g-ai5-6");
      transition_chart_2("","","#case5-5","#g-ai5-7");
    }},offset: offsetVal,}
  );

  //empty text box used to show image
  new Waypoint({
    element: document.getElementById('map5-7-1'),
    handler: direction => {if (direction === 'down') {
      transition_changeshot("../img/police-rape-epochtimes-youtube.jpg")
    } else {
      transition_hidechangeshot("");
    }},offset: offsetVal,}
  );   

  //empty text box to hide the image for last text
  new Waypoint({
    element: document.getElementById('map5-7-2'),
    handler: direction => {if (direction === 'down') {
      transition_hidechangeshot("");
    } else {
      transition_changeshot("../img/police-rape-epochtimes-youtube.jpg");
    }},offset: offsetVal,}
  );

// Waypoint transition for chart 6

    //first text box wihthout image
  new Waypoint({
    element: document.getElementById('map6-1'),
    handler: direction => {if (direction === 'down') {
      transition_chart_in_1("#case6-4","#g-ai6-5");
    } else {
      transition_chart_out_1("#case6-4","#g-ai6-5");
    }},offset: offsetVal,}
  );

  //show first image from empty image
  new Waypoint({
    element: document.getElementById('map6-2'),
    handler: direction => {if (direction === 'down') {
      transition_changeimg("../img/us-plot-video-chinese-embassy-fb.jpg");
      $(".screenshot-img").on('load',function(){
        $(".screenshot-background").fadeIn(500);
      });
    } else {
      transition_hidechangeshot("");
    }},offset: offsetVal,}
  );

  //hide image and change chart, no image 
  new Waypoint({
    element: document.getElementById('map6-3'),
    handler: direction => {if (direction === 'down') {
      transition_hidechangeshot("");
      transition_chart_2("#case6-4","#g-ai6-5","#case6-3","#g-ai6-3");
    } else {
      transition_changeimg("../img/us-plot-video-chinese-embassy-fb.jpg")
      $(".screenshot-img").on('load',function(){
        $(".screenshot-background").fadeIn(500);
      });
      transition_chart_2("#case6-3","#g-ai6-3","#case6-4","#g-ai6-5");
    }},offset: offsetVal,}
  );

  //show image from no image
  new Waypoint({
    element: document.getElementById('map6-4'),
    handler: direction => {if (direction === 'down') {
      transition_changeshot("../img/us-plot-video-ciao-youtube.jpg")
    } else {
      transition_hidechangeshot("");
    }},offset: offsetVal,}
  );

  //hide image and change chart, no image 
  new Waypoint({
    element: document.getElementById('map6-7'),
    handler: direction => {if (direction === 'down') {
      transition_hidechangeshot("");
      transition_chart_2("#case6-3","#g-ai6-3","#case6-2","#g-ai6-2");
    } else {
      transition_changeimg("../img/us-plot-video-ciao-youtube.jpg")
      $(".screenshot-img").on('load',function(){
        $(".screenshot-background").fadeIn(500);
      });
      transition_chart_2("#case6-2","#g-ai6-2","#case6-3","#g-ai6-3");
    }},offset: offsetVal,}
  );

  //show image from no image
  new Waypoint({
    element: document.getElementById('map6-8'),
    handler: direction => {if (direction === 'down') {
      transition_changeshot("../img/us-plot-video-ziondaily-youtube.jpg")
    } else {
      transition_hidechangeshot("");
    }},offset: offsetVal,}
  );

  //hide image and change chart, no image 
  new Waypoint({
    element: document.getElementById('map6-9'),
    handler: direction => {if (direction === 'down') {
      transition_hidechangeshot("");
      transition_chart_2("#case6-2","#g-ai6-2","#case6-4","#g-ai6-4");
    } else {
      transition_changeimg("../img/us-plot-video-ciao-youtube.jpg")
      $(".screenshot-img").on('load',function(){
        $(".screenshot-background").fadeIn(500);
      });
      transition_chart_2("#case6-4","#g-ai6-4","#case6-2","#g-ai6-2");
    }},offset: offsetVal,}
  );

  //show image from no image
  new Waypoint({
    element: document.getElementById('map6-10'),
    handler: direction => {if (direction === 'down') {
      transition_changeshot("../img/ned-video-chinese-embassy-fb.jpg")
    } else {
      transition_hidechangeshot("");
    }},offset: offsetVal,}
  );

  //hide image and change chart, no image 
  new Waypoint({
    element: document.getElementById('map6-11'),
    handler: direction => {if (direction === 'down') {
      transition_hidechangeshot("");
      transition_chart_2("#case6-4","#g-ai6-4","#case6-1","#g-ai6-1");
    } else {
      transition_changeimg("../img/ned-video-chinese-embassy-fb.jpg")
      $(".screenshot-img").on('load',function(){
        $(".screenshot-background").fadeIn(500);
      });
      transition_chart_2("#case6-1","#g-ai6-1","#case6-4","#g-ai6-4");
    }},offset: offsetVal,}
  );

  //empty text box used to show image
  new Waypoint({
    element: document.getElementById('map6-11-1'),
    handler: direction => {if (direction === 'down') {
      transition_changeshot("../img/ned-video-beijingreview-youtube.jpg")
    } else {
      transition_hidechangeshot("");
    }},offset: offsetVal,}
  );  

  //hide image, last text box
  new Waypoint({
    element: document.getElementById('map6-12'),
    handler: direction => {if (direction === 'down') {
      transition_hidechangeshot("");
    } else {
      transition_changeimg("../img/ned-video-beijingreview-youtube.jpg")
      $(".screenshot-img").on('load',function(){
        $(".screenshot-background").fadeIn(500);
      });
    }},offset: offsetVal,}
  );

  //launch chart
  new Waypoint({
    element: document.getElementById('container_chart'),
    handler: direction => {if (direction === 'down') {
      makechart();
    }},offset: 'bottom-in-view'
  });

//chart for Chinese embassy FB page
function makechart() {
  Highcharts.setOptions({
      lang: {
        thousandsSep: ','
      }
  }),
  $('#container_chart').highcharts({
    chart: {
        type: 'line',
        backgroundColor: '#222',
    },
    title:{text:null},
    xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: {year: '%b %Y'},
        showLastLabel: true, 
        labels:{
          style:{color:'#fff',fontFamily: 'Roboto,"Helvetica Neue",Arial',}
        }, 
        showLastLabel: true, 
        endOnTick: true,       
    },
    yAxis: {   
        title: {
          text: 'Number of followers',
          style: {
            color: '#fff',
            fontSize: '11px',
            fontFamily: 'Roboto,"Helvetica Neue",Arial',
          },  
        },
        labels:{
          style:{color:'#fff',fontFamily: 'Roboto,"Helvetica Neue",Arial',}
        },
        gridLineColor: '#333',
        endOnTick: false,
    },
    credits: {enabled: false},
    tooltip: {xDateFormat: '%e %b %Y',},
    legend: {enabled: false},
    plotOptions: {
        series: {
            dataLabels: {
                enabled: false,
                style: {fontSize: '11px',},
                format: '{point.y:,.0f}',
            },
            lineWidth: 3,
        },
        line: {marker: {enabled: false}},
    },    
    series: [ 
      {name: "Followers", color:"#CC3333", 
        data :[
          [Date.UTC(2019,4,26), 22316],
          [Date.UTC(2019,5,2), 22654],
          [Date.UTC(2019,5,9), 22896],
          [Date.UTC(2019,5,16), 23002],
          [Date.UTC(2019,5,23), 23055],
          [Date.UTC(2019,5,30), 23150],
          [Date.UTC(2019,6,7), 23276],
          [Date.UTC(2019,6,14), 23340],
          [Date.UTC(2019,6,21), 23364],
          [Date.UTC(2019,6,28), 23395],
          [Date.UTC(2019,7,4), 23485],
          [Date.UTC(2019,7,11), 23878],
          [Date.UTC(2019,7,18), 23941],
          [Date.UTC(2019,7,25), 23960],
          [Date.UTC(2019,8,1), 24017],
          [Date.UTC(2019,8,8), 24042],
          [Date.UTC(2019,8,15), 24070],
          [Date.UTC(2019,8,22), 24428],
          [Date.UTC(2019,8,29), 25106],
          [Date.UTC(2019,9,6), 25347],
          [Date.UTC(2019,9,13), 25498],
          [Date.UTC(2019,9,20), 25565],
          [Date.UTC(2019,9,27), 25641],
          [Date.UTC(2019,10,3), 25725],
          [Date.UTC(2019,10,10), 25788],
          [Date.UTC(2019,10,17), 25859],
          [Date.UTC(2019,10,24), 25930],
          [Date.UTC(2019,11,1), 25999],
          [Date.UTC(2019,11,8), 26066],
          [Date.UTC(2019,11,15), 26346],
          [Date.UTC(2019,11,22), 26600],
          [Date.UTC(2019,11,29), 26681],
          [Date.UTC(2020,0,5), 26726],
          [Date.UTC(2020,0,12), 26845],
          [Date.UTC(2020,0,19), 27205],
          [Date.UTC(2020,0,26), 29399],
          [Date.UTC(2020,1,2), 30990],
          [Date.UTC(2020,1,9), 32348],
          [Date.UTC(2020,1,16), 32728],
          [Date.UTC(2020,1,23), 32934],
          [Date.UTC(2020,2,1), 33546],
          [Date.UTC(2020,2,8), 34358],
          [Date.UTC(2020,2,15), 48022],
          [Date.UTC(2020,2,22), 51050],
          [Date.UTC(2020,2,29), 51278]
        ]
      },
    ],
  })
  // chart_waypoint.disable()
};