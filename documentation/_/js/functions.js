(function($){
/* Sticky Menu */
$(document).ready(function (){
   var $window = $(window),
       $stickyEl = $('#contents'),
       elTop = $stickyEl.offset().top;
   $window.scroll(function() {
        $stickyEl.toggleClass('sticky', $window.scrollTop() > elTop);
    });
});
/* Tabbed Content */
 $(".tab_content").hide();
 $("ol.tabs li:first").addClass("active").show();
 $(".tab_content:first").show();
 $("ol.tabs li").click(function() {
  $("ol.tabs li").removeClass("active");
  $(this).addClass("active");
  $(".tab_content").hide();
  var activeTab = $(this).find("a").attr("href");
  $(activeTab).fadeIn();
  return false;
});
})(window.jQuery);