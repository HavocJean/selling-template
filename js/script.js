$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
         $('div.menu').addClass('fix');
    } else {
         $('div.menu').removeClass('fix');
    }
}); 

/*
var $doc = $('html, body');
$('.scrollSuave').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
}); */

$('.scrollSuave').on('click', function() {
    $("html, body").animate({
      scrollTop: $('#' +$(this).data('section')).offset().top
    }, 500);
});

var alturas = {};
$('.section').each(function () {
    alturas[$(this).prop('id')] = $(this).offset().top
});
  
$(window).on('scroll', function() {
    for(var seccao in alturas) {
        if($(window).scrollTop() >= alturas[seccao]) {
            $('span').removeClass('ativo'); 
            $('span[data-section="' +seccao+ '"]').addClass('ativo'); 
        }
    }
});