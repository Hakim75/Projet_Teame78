var menu = document.querySelector(".menu");
var nav = document.querySelector(".overlay");

menu.addEventListener("click", function(){
    menu.classList.toggle("active");
    nav.classList.toggle("menu-open");
});

var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

  

$(document).ready(function() {

  // Check if element is scrolled into view
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return elemBottom <= docViewBottom && elemTop >= docViewTop;
  }

  $('.has-animation').each(function(index) {
    if($(window).scrollTop() + $(window).height() > $(this).offset().top + $(this).outerHeight() ){ 
      $(this).delay($(this).data('delay')).queue(function(){
          $(this).addClass('animate-in');
      });    
    }   
  });  

  // If element is scrolled into view, fade it in
  $(window).scroll(function() {
    $(".scroll-animations .animated").each(function() {
      if (isScrolledIntoView(this) === true) {
        $(this).addClass("fadeInLeft");
      }
    });
    
    $('.has-animation').each(function(index) {
      if($(window).scrollTop() + $(window).height() > $(this).offset().top ){ 
        $(this).delay($(this).data('delay')).queue(function(){
            $(this).addClass('animate-in');
        });    
      }   
    });   
  });

    // Click btn Animations
  $(".send").on("click", function() {
    var nbError = 0;

    $("form .require").each(function (){
      if($.trim($(this).val()) ==""){
      $(this).addClass("form-error animated shake").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
        function() {
          $(this).removeClass("animated shake");
        });
      nbError++;
      }
      else{
        $(this).removeClass("form-error");
      }
    });

    if(nbError==0){
      return true;
    } 

    return false;
  });

});


function background(c1, c2) {
  return {
    background: '-moz-linear-gradient(15deg, ' + c1 + ' 50%, ' + c2 + ' 50.1%)',
    background: '-o-linear-gradient(15deg, ' + c1 + ', ' + c2 + ' 50.1%)',
    background: '-webkit-linear-gradient(15deg, ' + c1 + ' 50%, ' + c2 + ')',
    background: '-ms-linear-gradient(15deg, ' + c1 + ' 50%, ' + c2 + ' 50.1%)',
    background: 'linear-gradient(15deg, ' + c1 + ' 50%,' + c2 + ' 50.1%)'
  }
}

function changeBg(c1, c2) {
  $('div.bg').css(background(c1, c2)).fadeIn(700, function() {
    $('.thematiques.mobile').css(background(c1, c2));
    $('.bg').hide();
  })
  $('span.bg').css({
    background: '-moz-linear-gradient(135deg, ' + c1 + ', ' + c2 + ')',
    background: '-o-linear-gradient(135deg, ' + c1 + ', ' + c2 + ')',
    background: '-webkit-linear-gradient(135deg, ' + c1 + ', ' + c2 + ')',
    background: '-ms-linear-gradient(135deg, ' + c1 + ', ' + c2 + ')',
    background: 'linear-gradient(135deg, ' + c1 + ',' + c2 + ')'
  });
}

$slider = $('.slider');

$slider.slick({
  arrows: false,
  dots: true,
  infinite: true,
  speed: 600,
  fade: true,
  focusOnSelect: true,
  customPaging: function(slider, i) {
    var color = $(slider.$slides[i]).data('color').split(',')[1];
    return '<a><svg width="100%" height="100%" viewBox="0 0 16 16"><circle cx="8" cy="8" r="6.215" stroke="' + color + '"></circle></svg><span style="background:' + color + '"></span></a>';
  }
}).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
  colors = $('figure', $slider).eq(nextSlide).data('color').split(',');
  color1 = colors[0];
  color2 = colors[1];
  $('.price').css({
    color: color1
  });
  changeBg(color1, color2);
  $('.btn').css({
    borderColor: color2
  });
});

$('.autoplay').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});