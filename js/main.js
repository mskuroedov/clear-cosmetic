//toggling collapsed menu
var $menuGroup = $('.sub-menu');
$menuGroup.on('show.bs.collapse','.collapse', function() {
    $menuGroup.find('.collapse.show').collapse('hide');
});
//toggling collapsed direction blocks
var $dirGroup = $('#directionBlocks');
$dirGroup.on('show.bs.collapse','.collapse', function() {
    $dirGroup.find('.collapse.show').collapse('hide');
});
//toggling collapsed opportunity blocks
var $oppGroup = $('.opportunities__row--tiles');
$oppGroup.on('show.bs.collapse','.collapse', function() {
    $oppGroup.find('.collapse.show').collapse('hide');
    console.log($(this))
    //todo change bg of block
});
//TODO незакрывающийся колаапс
$('.directions [aria-expanded="true"]').on('click',function (e) {
   e.preventDefault();
});

