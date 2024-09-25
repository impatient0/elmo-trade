$(document).ready(function () {
    $(window).scroll(function () {
        var target = $(this).scrollTop();
        if ($("#section_0").length > 0 && target >= $("#section_0").offset().top - window.innerHeight + 600) {
            $("#section_0").addClass("expandable");
        }
    });
});