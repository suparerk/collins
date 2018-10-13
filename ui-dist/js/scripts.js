//=============================================
//           JQUERY DOCUMENT READY            =
//=============================================
$("document").ready(function() {

    $(".btn-show-more-search").on("click", function() {
        $(".box-more-search").toggleClass("active");
        $(this).toggleClass("active");
    });

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



//=============================================
//    Add/Remove column datatable display
//=============================================
// add all column to current list
$('body').on('click', 'button.add-all', function(){
    $(this).removeClass('add').addClass('disabled');
    var element = $('#allColumn').each(function(){
        var li_element = $(this).html();
        $('#currentColumn').append(li_element);
    });
    $('#allColumn').find('.li').remove();
    $('#currentColumn').find('.li button').removeClass('add').addClass('remove');
});

// remove all column to current list
$('body').on('click', 'button.remove-all', function(){
    // $(this).removeClass('remove').addClass('disabled');
    var element = $('#currentColumn').each(function(){
        var li_element = $(this).html();
        $('#allColumn').append(li_element);
        $('#allColumn').find('.li.fixed').remove();
    });
    $('#currentColumn').find('.li:not(".fixed")').remove();
    $('#allColumn').find('.li button').removeClass('remove').addClass('add');
});

// add column current list
$('body').on('click', '#allColumn button', function(){
    $(this).removeClass('add').addClass('remove');
    var element = $(this).parents('.li').html();
    var target = $('#currentColumn');

    target.append('<li class="li">'+element+'</li>');
    $(this).parents('.li').remove();
});

// remove column current list
$('body').on('click', '#currentColumn .li:not(".fixed") button', function(){
    $(this).removeClass('remove').addClass('add');
    var element = $(this).parents('.li').html();
    var target = $('#allColumn');

    target.append('<li class="li">'+element+'</li>');
    $(this).parents('.li').remove();
});