(function($, window, document) {

    $(function() {
   
      $('a').on('click touchend', function(e) {
          var el = $(this);
          var link = el.attr('href');
          window.location = link;
      });
   
      $('#contact').click(function(){
        $(this).toggleClass('active');
        $('.text ul').toggleClass('active');
      });
   
    });
   
   }(window.jQuery, window, document));
   