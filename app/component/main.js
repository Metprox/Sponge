//=../bower_components/jquery/dist/jquery.js
//=../bower_components/jQuery-viewport-checker/src/jquery.viewportchecker.js


document.body.onload = function() {
    setTimeout(function() {
        var preloader = document.getElementById('page__preloader');
        if (!preloader.classList.contains('done')) {
            preloader.classList.add('done');
        }
    }, 1000);
}

$(document).ready(function() {
    $(".menu__buttonOpen").click(function() {
        $('.menu__nav--mobile').addClass('none')
        $(".menu__nav--mobile").addClass("animated fadeInRight");
        $('.page').addClass('nonePage');
        $(".menu__buttonClose").addClass("visibleBlock");
        $('.menu__buttonOpen').addClass('noneBlock');
        setTimeout(function() {

            if ($('.menu__nav--mobile').hasClass('fadeInRight')) {
                $('.menu__nav--mobile').removeClass('animated fadeInRight');
            }
        }, 500);
    });
});

$(document).ready(function() {
    $('.menu__buttonClose').click(function() {
        $(".menu__nav--mobile").addClass('animated fadeOutRight');
        $(".page").removeClass("nonePage");
        $(".menu__buttonClose").removeClass("visibleBlock");
        $(".menu__buttonOpen").removeClass("noneBlock");
        setTimeout(function() {
            if ($('.menu__nav--mobile').hasClass('fadeOutRight')) {
                $('.menu__nav--mobile').removeClass('animated fadeOutRight none');
            }
        }, 500);
    });

});

$(document).ready(function() {
    setTimeout(function() {

        $(".posts")
            .addClass("hidden")
            .viewportChecker({
                classToAdd: "visible animated lightSpeedIn",
                offset: 10
            });
    }, 1500);
});


$(document).ready(function() {
    setTimeout(function() {
        $(".posts__right--outtime")
            .addClass("hidden")
            .viewportChecker({
                classToAdd: "visible animated fadeInRight",
                offset: 10
            });
    }, 1500);
});


$(document).ready(function() {
    setTimeout(function() {
        $(".posts__left--outtime")
            .addClass("hidden")
            .viewportChecker({
                classToAdd: "visible animated fadeInLeft",
                offset: 10
            });
    }, 1500);
});
$(document).ready(function() {
    setTimeout(function() {
        $(".posts__second")
            .addClass("hidden")
            .viewportChecker({
                classToAdd: "visible animated lightSpeedIn",
                offset: 10
            });
    }, 1500);
});

$(document).ready(function() {
    $(".posts__right--block")
        .addClass("hidden")
        .viewportChecker({
            classToAdd: "visible animated fadeInRight",
            offset: 10
        });
});
$(document).ready(function() {
    $(".posts__left--block")
        .addClass("hidden")
        .viewportChecker({
            classToAdd: "visible animated fadeInLeft",
            offset: 10
        });
});
$(document).ready(function() {
    $(".posts__up--block")
        .addClass("hidden")
        .viewportChecker({
            classToAdd: "visible animated fadeInUp",
            offset: 10
        });
});

//=./menu/menu.js