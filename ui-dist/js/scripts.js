//=============================================
//           JQUERY DOCUMENT READY            =
//=============================================
$("document").ready(function() {

    $(".btn-show-more-search").on("click", function() {
        $(".box-more-search").toggleClass("active");
        $(this).toggleClass("active");
    });

    // $('.selectpicker').selectpicker();
    // $('.datepicker').datepicker();

    // Custom Scrollbar
    // if ($(window).outerWidth() > 768) {
    //     $("nav.side-navbar").mCustomScrollbar({
    //         scrollInertia: 200
    //     });
    // }

    // Side Navbar Functionality
    if ($(window).outerWidth() > 768) {
    $('nav.side-navbar').hover( 
            function () { 
                $(this).removeClass('shrink'); 
                $('.page').removeClass('active');
            }, 
            function () { 
                $(this).addClass('shrink');
                $('.page').addClass('active');
            } 
        );
    }
    // $('#toggle-btn, #toggle-btn-open').on('click', function (e) {
    //     e.preventDefault();
    //     if ($(window).outerWidth() > 768) {
    //         $('nav.side-navbar').toggleClass('shrink');
    //         $('.page').toggleClass('active');
    //     } else {
    //         $('nav.side-navbar').toggleClass('show-sm');
    //         $('.page').toggleClass('active-sm');
    //     }
    // });

    // External links to new window
    $('.external').on('click', function (e) {

        e.preventDefault();
        window.open($(this).attr("href"));
    });

    resize();
    
});//document.ready

//=============================================
//           JQUERY WINDOW RESIZE            =
//=============================================
$(window).on('resize', resize);
function resize() {
    
} //windows.resize


//=============================================
//             JQUERY WINDOW LOAD            ==
//=============================================
$(window).on('load', function(){






}); //windows.load
