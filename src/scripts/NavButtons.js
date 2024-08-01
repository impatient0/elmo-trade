$(document).ready(function () {
    let sections = ["services", "projects", "partners", "contacts"];

    for (let i = 0; i < sections.length; i++) {
        $(`#nav_btn_${sections[i]}`).on('click', function () {
            if ($('body').attr('id') == 'home') {
                var target = $(`#${sections[i]}`);
                console.log(`#${sections[i]}` + ' : ' + target.length);
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 500);
                window.history.pushState({}, '', `#${sections[i]}`);
            } else {
                window.location.href = `/#${sections[i]}`;                
            }
            return false;
        });
    }
});