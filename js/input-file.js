$('.upload-btn').on('click', function () {
    $(this).prev().val('');
    $(this).prev().click();
    $(this).next().hide();
});
$('#input-file').on('change', function (e) {
    var fileName = e.target.files[0].name;
    if (!!fileName) {
        $(this).parent().find('.files__container').show();
        $(this).parent().find('.files__container .text').text(fileName);
    } else {
        $(this).parent().find('.files__container').hide();
        $(this).parent().find('.files__container .text').empty();
    }
});
