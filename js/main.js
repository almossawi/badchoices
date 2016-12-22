(function() {
  'use strict'

  var global = {};
  global.width = $(window).width();

  $('img.cover').ready(function() {
    //positionPlateGuy();
    //showHideEndorsement();

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

  function showHideEndorsement() {
    var doc = document.documentElement;
    var scrollTop = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
    var opacity = d3.select('.endorsement')
      .style('opacity');
        
    if (scrollTop > Number.parseInt(d3.select('.cover').style('margin-top')) - 110 && opacity !== 0) {
      d3.select('.endorsement')
        .transition()
        .duration(500)
        .style('opacity', 0);
    }
    else if(opacity !== 1) {
      d3.select('.endorsement')
        .transition()
        .duration(500)
        .style('opacity', 1);
    }
  }

  function positionPlateGuy() {
    var h = $(window).height();
    var w = $(window).width();
    var height_adjust_multiplier = 12;

    var h_image = document.getElementsByClassName('cover')[0].height;
    if(h_image == 0 || h_image == undefined) {
      h_image = 720;
    }

   var plate_guy = d3.select('.cover')
    .style('margin-top', function() {
      var margin_top = h - h_image + (h_image / height_adjust_multiplier);
      return (margin_top < 0)
        ? (h < (h_image - 20))
          ? '80px'
          : 0
        : margin_top + 'px';
    })

    if(plate_guy.style('opacity') == '0') {
      plate_guy
        .transition()
        .duration(1000)
          .style('opacity', 1);
    }

    //console.log(h, h_image);
  }

  /*window.onresize = function(event) {
    if($(window).width() != global.width) {
      // update width
      global.width = $(window).width();

      positionPlateGuy();
      showHideEndorsement();
    }
  };
  
  window.onscroll = function() {
    showHideEndorsement();
 };*/
}());