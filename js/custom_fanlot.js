$(function () {
    $('.nav-open').on("click", function (e) {
        e.preventDefault();

        $(this).toggleClass('nav-close');
    });

    $(".nav li a[href^='#'], .logo-s a, .logo a").on('click', function (e) {
        e.preventDefault();
        var hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 300, function () {
            window.location.hash = hash;
        });
    });
    var mainbottom = $('#Carousel').offset().top + $('#Carousel').height();

    $(window).on('scroll', function () {
        stop = Math.round($(window).scrollTop());
        if (stop > mainbottom) {
            $('.navbar').addClass('past-main');
            
        } else {
            $('.navbar').removeClass('past-main');
            
        }
    });
    $('.nav a').on('click', function () {
        $('.navbar-toggle').click()
    });
});