$(function() {
  $('body').scrollspy();

  // Animate scrolling
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  $(".timeline-trigger, .timeline-content h2").click(function() {

    var item_mark = $(this).data("item"),
        $item = $(".item-"+item_mark);

    if (!$item.is(".active")) {
      $item
        .slideDown()
          .addClass("active");
      $(".glyphicon-"+item_mark)
        .removeClass("glyphicon-plus-sign")
          .addClass("glyphicon-minus-sign");

    }else {
      $item
        .slideUp()
          .removeClass("active");
      $(".glyphicon-"+item_mark)
        .removeClass("glyphicon-minus-sign")
          .addClass("glyphicon-plus-sign");
    }

  });
});
