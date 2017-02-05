"use strict";

if ($("#block-login").length == 0) {
    let tmp = $('#inst25 .footer').html();
    $.ajax({
        url: "https://scele.cs.ui.ac.id/my/",
        type: 'GET',
        success: function (data) {
            $('#inst25 .content').html($(data).find('.block_my_enrolled_courses .content').html());
            let display_footer = $(data).find('.block_my_enrolled_courses .footer').html() + "<br>" + tmp;
            $('#inst25 .footer').html(display_footer);
            $('#inst25 ul').addClass("unlist");
        }
    });
}