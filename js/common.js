$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});
$(window).on('load resize', function(){
  if (window.innerWidth < 1024) {
console.log($(".o-navsp").height());
    $('.o-navsp-tgl').css('top',$(".o-navsp").height());
  }
});
$(function() {
  $('.o-nav-toggle').click(function(){
    $('.o-navsp').toggleClass('openNav');
  });
  $('.menubar__sp__tgl a').click(function(){
    $('.o-navsp').removeClass('openNav');
  });
  $('.subToggle').click(function(){
    $('.o-navsp').removeClass('openNav');
  });
});
