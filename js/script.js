$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
         $('div.menu').addClass('fix');
    } else {
         $('div.menu').removeClass('fix');
    }
}); 

var $doc = $('html, body');
$('.scrollSuave').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
}); 