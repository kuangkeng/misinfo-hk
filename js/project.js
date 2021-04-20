//Waypoint transition for top image/headline

new Waypoint({
    element: document.getElementById('headline-trigger-1'),
    handler: direction => {
        if (direction === 'down') {console.log('monsters come');
        $("#headline-layer-left").animate({left: '0px'}, 2000);
        $("#headline-layer-right").animate({right: '0px'}, 2000);
        $("#headline-layer-top").animate({top: '0px'}, 2000);
        $("#headline-layer-man").animate({opacity: 1}, 2000);
        } else {
        console.log('monsters leave');
        $("#headline-layer-left").animate({left: '-50%'}, 2000);
        $("#headline-layer-right").animate({right: '-50%'}, 2000);
        $("#headline-layer-top").animate({top: '-100%'}, 2000);
        $("#headline-layer-man").animate({opacity: 0}, 2000);
        }
    },
    offset: '-50%',
});

new Waypoint({
    element: document.getElementById('placeholder-2'),
    handler: direction => {
        if (direction === 'down') {console.log('headline moves');
            $("#headline-container").css({"position":"absolute","top":"auto","bottom":"0"});
        } else {
        console.log('headline sticks');
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
    $(".screenshot-background").fadeIn(1000);
    console.log("show shot");
  }

  function transition_hideshot() {
    $(".screenshot-background").fadeOut(1000);
    console.log("hide shot");
  }

  function transition_hidechangeshot(img) {
    $(".screenshot-background").fadeOut(1000,function(){
      transition_changeimg(img);
      console.log("hide and change shot");
    });
  }

  function transition_changeshot(img) {
    $(".screenshot-background").fadeOut(500, function(){
      $(".screenshot-img").attr("src",img);
      $(".screenshot-img").on('load',function(){
        $(".screenshot-background").fadeIn(500);
      });
    });
    console.log("show shot,change img");
  } 

  function transition_changeimg(img) {
    $(".screenshot-img").attr("src",img);
    console.log("change img");
  } 

// Waypoint transition for diagrams
const offsetVal = '90%';
  new Waypoint({
    element: document.getElementById('map-1'),
    handler: direction => {if (direction === 'down') {
      transition_chart_in_1("#case1-1","#g-ai0-1");} else {
      transition_chart_out_1("#case1-1","#g-ai0-1");}},offset: offsetVal,}
  );

  new Waypoint({
    element: document.getElementById('map-2'),
    handler: direction => {if (direction === 'down') {
      transition_showshot();} else {
      transition_hideshot();}},offset: offsetVal,}
  );

  new Waypoint({
    element: document.getElementById('map-3'),
    handler: direction => {if (direction === 'down') {
      transition_changeshot("./img/fire-bus-photo.jpg");
    } else {
      transition_changeshot("./img/fire-bus-global-times-chinese-webpage.jpg");}},offset: offsetVal,}
  );

  new Waypoint({
    element: document.getElementById('map-5'),
    handler: direction => {if (direction === 'down') {
      transition_hideshot();
      transition_chart_2("#case1-1","#g-ai0-1","#case1-2","#g-ai0-2");
    } else {
      transition_chart_2("#case1-2","#g-ai0-2","#case1-1","#g-ai0-1");
      transition_showshot();
    }},offset: offsetVal,}
      
  );

  new Waypoint({
    element: document.getElementById('map-6'),
    handler: direction => {if (direction === 'down') {
      transition_changeshot("./img/fire-bus-global-times-english-webpage.jpg");
    } else {      
      transition_hidechangeshot("./img/fire-bus-photo.jpg");
    }},offset: offsetVal,}
  );

  new Waypoint({
    element: document.getElementById('map-7'),
    handler: direction => {if (direction === 'down') {
      transition_chart_2("#case1-2","#g-ai0-2","#case1-3","#g-ai0-3");
      transition_hideshot();
    } else {
      transition_chart_2("#case1-3","#g-ai0-3","#case1-2","#g-ai0-2");
      transition_showshot();
    }},offset: offsetVal,}
  );

  new Waypoint({
    element: document.getElementById('map-8'),
    handler: direction => {if (direction === 'down') {
      transition_changeshot("./img/fire-bus-sina-chinese-webpage.jpg");
    } else {
      transition_hidechangeshot("./img/fire-bus-global-times-english-webpage.jpg");
    }},offset: offsetVal,}
  );

  new Waypoint({
    element: document.getElementById('map-9'),
    handler: direction => {if (direction === 'down') {
      transition_hideshot();
      transition_chart_2("#case1-3","#g-ai0-3","#case1-4","#g-ai0-4");
      transition_chart_2("#case1-3","#g-ai0-3","#case1-5","#g-ai0-5");
      transition_chart_2("#case1-3","#g-ai0-3","#case1-6","#g-ai0-6");
      transition_chart_2("#case1-3","#g-ai0-3","#case1-7","#g-ai0-7");
    } else {
      transition_showshot();
      transition_chart_2("#case1-4","#g-ai0-4","#case1-3","#g-ai0-3");
      transition_chart_2("#case1-5","#g-ai0-5","#case1-3","#g-ai0-3");
      transition_chart_2("#case1-6","#g-ai0-6","#case1-3","#g-ai0-3");
      transition_chart_2("#case1-7","#g-ai0-7","#case1-3","#g-ai0-3");
      }},offset: offsetVal,}
  );

  new Waypoint({
    element: document.getElementById('map-10'),
    handler: direction => {if (direction === 'down') {
      transition_chart_2("#case1-5","#g-ai0-5");
      transition_chart_2("#case1-6","#g-ai0-6");
      transition_chart_2("#case1-7","#g-ai0-7");
      transition_changeshot("./img/fire-bus-sinchew-original-title-fb.jpg");
    } else {
      transition_chart_2("","","#case1-5","#g-ai0-5");
      transition_chart_2("","","#case1-6","#g-ai0-6");
      transition_chart_2("","","#case1-7","#g-ai0-7");
      transition_hidechangeshot("./img/fire-bus-sina-chinese-webpage.jpg");
      }},offset: offsetVal,}
  );

  new Waypoint({
    element: document.getElementById('map-11'),
    handler: direction => {if (direction === 'down') {
      transition_changeshot("./img/fire-bus-sinchew-fb-edit-history.png");
    } else {
      transition_changeshot("./img/fire-bus-sinchew-original-title-fb.jpg");
      }},offset: offsetVal,}
  );

  new Waypoint({
    element: document.getElementById('map-12'),
    handler: direction => {if (direction === 'down') {
      transition_changeshot("./img/fire-bus-sinchew-corrected-title-fb.jpg");
    } else {
      transition_changeshot("./img/fire-bus-sinchew-fb-edit-history.png");
      }},offset: offsetVal,}
  );
  
  new Waypoint({
    element: document.getElementById('map-13'),
    handler: direction => {if (direction === 'down') {
      transition_changeshot("./img/fire-bus-sinchew-apology-fb.jpg");
    } else {
      transition_changeshot("./img/fire-bus-sinchew-corrected-title-fb.jpg");
      }},offset: offsetVal,}
  );

  new Waypoint({
    element: document.getElementById('map-14'),
    handler: direction => {if (direction === 'down') {
      transition_hideshot();
    } else {
      transition_showshot();
      }},offset: offsetVal,}
  );

  new Waypoint({
    element: document.getElementById('map-16'),
    handler: direction => {if (direction === 'down') {
      transition_chart_2("#case1-4","#g-ai0-4","#case1-8","#g-ai0-8");
    } else {
      transition_chart_2("#case1-8","#g-ai0-8","#case1-4","#g-ai0-4");
      }},offset: offsetVal,}
  );

  new Waypoint({
    element: document.getElementById('map-16-1'),
    handler: direction => {if (direction === 'down') {
      transition_changeshot("./img/fire-bus-penanglang-fb-page.jpg");
    } else {
      transition_hidechangeshot("./img/fire-bus-sinchew-apology-fb.jpg");
      }},offset: offsetVal,}
  );

  new Waypoint({
    element: document.getElementById('map-17'),
    handler: direction => {if (direction === 'down') {
      transition_hideshot();
      transition_chart_2("#case1-8","#g-ai0-8","#case1-13","#g-ai0-13");
    } else {
      transition_chart_2("#case1-13","#g-ai0-13","#case1-8","#g-ai0-8");
      transition_showshot();
      }},offset: offsetVal,}
  );

  new Waypoint({
    element: document.getElementById('map-17-1'),
    handler: direction => {if (direction === 'down') {
      transition_changeshot("./img/fire-bus-komnitikuantan-fb.jpg");
    } else {
      transition_hidechangeshot("./img/fire-bus-penanglang-fb-page.jpg");
      }},offset: offsetVal,}
  );

  new Waypoint({
    element: document.getElementById('map-18'),
    handler: direction => {if (direction === 'down') {
      transition_hideshot();
      transition_chart_2("#case1-13","#g-ai0-13","#case1-5","#g-ai0-5");
    } else {
      transition_chart_2("#case1-5","#g-ai0-5","#case1-13","#g-ai0-13");
      transition_showshot();
      }},offset: offsetVal,}
  );

  new Waypoint({
    element: document.getElementById('map-18-1'),
    handler: direction => {if (direction === 'down') {
      transition_changeshot("./img/fire-bus-nanyang-webpage.jpg");
    } else {
      transition_hidechangeshot("./img/fire-bus-komnitikuantan-fb.jpg");
      }},offset: offsetVal,}
  );

  new Waypoint({
    element: document.getElementById('map-19'),
    handler: direction => {if (direction === 'down') {
      transition_changeshot("./img/fire-bus-nanyang-fb.jpg");
    } else {
      transition_changeshot("./img/fire-bus-nanyang-webpage.jpg");
      }},offset: offsetVal,}
  );

  new Waypoint({
    element: document.getElementById('map-20'),
    handler: direction => {if (direction === 'down') {
      transition_changeshot("./img/fire-bus-nanyang-edit-history-fb.png");
    } else {
      transition_changeshot("./img/fire-bus-nanyang-fb.jpg");
      }},offset: offsetVal,}
  );
  new Waypoint({
    element: document.getElementById('map-21'),
    handler: direction => {if (direction === 'down') {
      transition_hideshot();
      transition_chart_2("#case1-5","#g-ai0-5","#case1-9","#g-ai0-9");
    } else {
      transition_chart_2("#case1-9","#g-ai0-9","#case1-5","#g-ai0-5");
      transition_showshot();
      }},offset: offsetVal,}
  );

  new Waypoint({
    element: document.getElementById('map-21-1'),
    handler: direction => {if (direction === 'down') {
      transition_changeshot("./img/fire-bus-ipohstation-fb.jpg");
    } else {
      transition_hidechangeshot("./img/fire-bus-nanyang-edit-history-fb.png");
      }},offset: offsetVal,}
  );

  new Waypoint({
    element: document.getElementById('map-25'),
    handler: direction => {if (direction === 'down') {
      transition_hideshot();
      transition_chart_2("#case1-9","#g-ai0-9","#case1-6","#g-ai0-6");
    } else {
      transition_chart_2("#case1-6","#g-ai0-6","#case1-9","#g-ai0-9");
      transition_showshot();
      }},offset: offsetVal,}
  );

  new Waypoint({
    element: document.getElementById('map-26'),
    handler: direction => {if (direction === 'down') {
      transition_changeshot("./img/fire-bus-orientaldaily-original-title-webpage.jpg");
    } else {
      transition_hidechangeshot("./img/fire-bus-ipohstation-fb.jpg");
      }},offset: offsetVal,}
  );

  new Waypoint({
    element: document.getElementById('map-27'),
    handler: direction => {if (direction === 'down') {
      transition_changeshot("./img/fire-bus-orientaldaily-fb.jpg");
    } else {
      transition_changeshot("./img/fire-bus-orientaldaily-original-title-webpage.jpg");
      }},offset: offsetVal,}
  );
  
  new Waypoint({
    element: document.getElementById('map-28'),
    handler: direction => {if (direction === 'down') {
      transition_hidechangeshot("");
      transition_chart_2("#case1-6","#g-ai0-6","#case1-10","#g-ai0-10");
      transition_chart_2("#case1-6","#g-ai0-6","#case1-11");
      transition_chart_2("#case1-6","#g-ai0-6","#case1-12");
    } else {
      transition_chart_2("#case1-10","#g-ai0-10","#case1-6","#g-ai0-6");
      transition_chart_2("#case1-11");
      transition_chart_2("#case1-12");
      transition_changeshot("./img/fire-bus-orientaldaily-fb.jpg");
    }},offset: offsetVal,}
  );