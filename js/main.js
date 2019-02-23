//toggling collapsed menu
var $menuGroup = $('.sub-menu');
$menuGroup.on('show.bs.collapse','.collapse', function() {
    $menuGroup.find('.collapse.show').collapse('hide');
});
//close menu on click outside
$(document).on('click', function(event) {
    $target = $(event.target);
    if(!$target.closest('header').length &&
        $('.sub-menu__container').is(":visible")) {
        $menuGroup.find('.show').collapse('hide');
    }
});



//toggling collapsed direction blocks
var $dirGroup = $('#directionBlocks');
// $dirGroup.on('show.bs.collapse','.collapse', function() {
//     $dirGroup.find('.collapse.show').collapse('hide');
// });
//fix not to toggle shown slide
$('.directions a[data-toggle="collapse"]').on('click',function(){
    if($(this).attr('aria-expanded') === 'true' || ! $dirGroup.find('.collapsing')){
        return false
    }
})

// $('.directions a[data-toggle="collapse"]').on('click', function (event) {
//
//     var target = $(event.target).data('target');
//
//     var isOpen = $(target).hasClass('show');
//     var isOtherOpen = !! $(target).siblings('.collapse.show').length ;
//
//     if (isOpen ) return false;
//
//
//
// });

//toggling collapsed opportunity blocks
var $oppGroup = $('.opportunities__row--tiles');
$oppGroup.on('show.bs.collapse','.collapse', function() {
    $oppGroup.find('.collapse.show').collapse('hide');
    //todo[done] change bg of block
    $('.opportunities').attr('class','opportunities '+ $(this).attr('id'));
});
//fix not to toggle shown slide
$('.opportunities a[data-toggle="collapse"]').on('click',function(){
    if($(this).attr('aria-expanded') === 'true'){
        return false
    }
})

