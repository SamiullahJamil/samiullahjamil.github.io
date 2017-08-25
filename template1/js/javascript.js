$(document).ready(function() {// get the value of the bottom of the #main element by adding the offset of that element plus its height, set it as a variable
    var mainbottom = /*$('.about').offset().top + */$('.navbar').height();
// on scroll, 
    $(window).scroll(function(){
    // we round here to reduce a little workload
        var stop = Math.round($(window).scrollTop());
        if (stop > mainbottom) {
            $('.navbar').addClass('navbar-change');
        } else {
            $('.navbar').removeClass('navbar-change');
        }
    });
    $('a.scrollbtn').click(function(e) {
        e.preventDefault();
        var el = $(this).attr("href");
        var top = $(el).offset().top;
        $('body').animate({scrollTop:top-mainbottom},1000,'easeOutBounce');
    });
});