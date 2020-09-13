$(function () {
    /* SCROLL TOP */
    $('#btn_up').click(function () {
        $('html,body').animate({scrollTop: 0}, 'slow');
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() < 300) {
            $('#btn_up').fadeOut();
        } else {
            $('#btn_up').fadeIn();
        }
    });
    /* MODAL */
    var target = '';
    $(document).delegate('[data-toogle="modal"]', 'click', function (evt) {
        evt.preventDefault();
        target = $(this).data('target');
        $('body').toggleClass('modal-open');
        $(target).show();
    });
    $(window).click(function (evt) {
        if (evt.target.className === 'modal' || evt.target.className === 'close') {
            $(target).hide();
            $('body').toggleClass('modal-open');
        }
    });
    /* NUMBER TEXTAREA */
    var textarea = document.querySelectorAll('textarea');
    Array.prototype.forEach.call(textarea, function (el) {
        if (el.maxLength > 0) {
            $('<div class="maxlength_show">' + el.value.length + '/' + el.maxLength + '<div>').appendTo(el.parentNode);
        }
    });
    $('textarea').keyup(function () {
        $this = $(this);
        $this.parent()
                .find('.maxlength_show')
                .html('<div class="maxlength_show">' + $this.val().length + '/' + $this.attr('maxLength') + '<div>');
    });
    /* INPUT ICON RENDER */
    $('.text_icon').keyup(function () {
        $(this).parent().find('.render_icon i').attr('class', this.value);
    });
});