(function() {
  'use strict'

  var args = {};
  args.width = $(window).width();

  resize();

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

  window.onresize = resize;

  function resize() {
    if(window.innerWidth < 1400) {
      d3.select('.caption').html('The UK and Commonwealth edition by John Murray');
    } else {
      d3.select('.caption').html('The UK and Commonwealth edition (left) and the North American edition (right)');
    }
  }
}());