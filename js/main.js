(function() {
  'use strict'

  var args = {};
  args.width = $(window).width();

  resize();
  update_caption();

  $('img.cover').ready(function() {
    $('a.shorts').on('click',function(e) {
      $('html, body').animate({
          scrollTop: $('#short-pieces').offset().top
      }, 500);
      return false;
    });

    $('a.preorder').on('click',function(e) {
      $('html, body').animate({
          scrollTop: $('#viking').offset().top
      }, 500);
      return false;
    });

    $('a.preorder-uk').on('click',function(e) {
      $('html, body').animate({
          scrollTop: $('#john-murray').offset().top
      }, 500);
      return false;
    });
  });

  function update_caption() {
    if(window.innerWidth < 1400) {
      d3.select('.caption').html('The UK and Commonwealth edition by John Murray');
    } else {
      d3.select('.caption').html('The UK and Commonwealth edition (left) and the North American edition (right)');
    }
  }

  function resize() {
    if(window.innerWidth < 488) {
      d3.select('p.endorsement-quote')
        .html("<span class='serif'>&ldquo;</span>Perfect for anyone wanting to understand the basics of&nbsp;Computer&nbsp;Science.<span class='serif'>&rdquo;</span> <span class='author-inline'>&mdash;Cesar Hidalgo, Director, Collective Learning group, MIT&nbsp;Media&nbsp;Lab</span>");

      d3.select('p.endorsement-author')
        .html('');
    } else {
      d3.select('p.endorsement-quote')
        .html("<span class='serif'>&ldquo;</span>Perfect for anyone wanting to understand the basics of&nbsp;Computer&nbsp;Science.<span class='serif'>&rdquo;</span>");

      d3.select('p.endorsement-author')
        .html('&mdash;Cesar Hidalgo, Director of the Collective Learning group at&nbsp;the&nbsp;MIT&nbsp;Media&nbsp;Lab');
    }
  }

  window.addEventListener('optimizedResize', function() {
    resize();
  });

  // from mdn / resize
  var throttle = function(type, name, obj) {
    obj = obj || window;
    var running = false;
    var func = function() {
      if (running) { return; }
        running = true;
        requestAnimationFrame(function() {
          obj.dispatchEvent(new CustomEvent(name));
          running = false;
        });
      };
    obj.addEventListener(type, func);
  };

  throttle("resize", "optimizedResize");

  window.addEventListener("optimizedResize", update_caption);
}());