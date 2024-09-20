$(document).ready(function () {
    let i = 0;
    $('.letter-image').each(function() {
        var src = $(this).attr('src');
        var id = `letter_${i}`;
        console.log(src);
        $(".letters-container").after(`<img src=${src} class="letter-full" id=${id}>`);
        $(this).on('click', function () {
            $("#" + id).css('opacity', '100%');
            $("#" + id).css('pointer-events', 'all');
            $('.dimmer').css('pointer-events', 'all');
            $('.dimmer').css('display', 'block');
            console.log(id + " : " + $("#" + id).length);
        });
        i++;
    });
    $('.dimmer').on('click', function () {
        console.log('lul');
        $('.letter-full').each(function () {
            $(this).css('opacity', '0%');
            $(this).css('pointer-events', 'none');            
        });
        $(this).css('pointer-events', 'none');
        $('.dimmer').css('display', 'none');
    });
});