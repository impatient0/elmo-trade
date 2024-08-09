$(document).ready(function () {
    $(window).scroll(function () {
        var target = $(this).scrollTop();
        if (target >= $("#section_0").offset().top - window.innerHeight + 600) {
            $(".gallery-section").addClass("expandable");
        }
    });
});