//=============================================
//           JQUERY DOCUMENT READY            =
//=============================================
$("document").ready(function() {

    var table = $('.datatable').DataTable( {
        dom: '<<"row justify-content-between align-items-center"<"col"lp><"col text-right"B>><t>>',
        fixedHeader: true,
        stateSave: true,
        buttons: ['excel','colvis']
    } );

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
$(window).on("resize", resize);
function resize() {
    
} //windows.resize


//=============================================
//             JQUERY WINDOW LOAD            ==
//=============================================
$(window).load(function() {






}); //windows.load