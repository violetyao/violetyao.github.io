$(function() {
	$(window).scroll(function() {
    var nav = $('#custom-nav');
    var top = 50;
    if ($(window).scrollTop() >= top) {
        nav.addClass('fixed');
    } else {
        nav.removeClass('fixed');
    }
});
});