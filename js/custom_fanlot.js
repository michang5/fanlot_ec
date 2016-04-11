$(function () {
    $('.nav-open').on("click", function (e) {
        e.preventDefault();

        $(this).toggleClass('nav-close');
    });

//    $(".nav li a[href^='#'], .logo-s a, .logo a").on('click', function (e) {
//        e.preventDefault();
//        var hash = this.hash;
//
//        $('html, body').animate({
//            scrollTop: $(hash).offset().top
//        }, 300, function () {
//            window.location.hash = hash;
//        });
//    });
    var mainbottom = $('#page-header').offset().top + $('#page-header').height();

    $(window).on('scroll', function () {
        stop = Math.round($(window).scrollTop());
        if (stop > mainbottom) {
            $('#top-header').addClass('past-main');
            
        } else {
            $('#top-header').removeClass('past-main');
            
        }
    });
//    $('.nav a').on('click', function () {
//        $('.navbar-toggle').click()
//    });
    
    $('.dropdown-menu input, .dropdown-menu label').click(function(e) {
        e.stopPropagation();
    });
    
    
});