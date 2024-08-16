$(document).ready(function () {
    let sections = ["services", "projects", "partners", "contacts"];

    for (let i = 0; i < sections.length; i++) {
        $(`#nav_btn_${sections[i]}`).on('click', function () {
            var target = $(`#${sections[i]}`);
            if (sections[i] == "projects") {
                window.location.href = "/projects";
                return false;
            }
            if ($('body').attr('id') == 'home') {
                $('html, body').animate({
                    scrollTop: target.offset().top - (sections[i] == "services" ? ($(window).height() - target.outerHeight(true)) : 0) / 2
                }, 500);
                window.history.pushState({}, '', `#${sections[i]}`);
            } else {
                window.location.href = `/#${sections[i]}`;
            }
            return false;
        });
    }
});