
//index head slider
var $mainDSlider =$('.main-slider.desktop .owl-carousel');
$mainDSlider.owlCarousel({
    items: 1,
    dots: false,
    draggable:false
});
$mainDSlider.parent().find('.prev').on('click',function () {

    //todo animation

    setTimeout(function () {
        $mainDSlider.trigger('prev.owl.carousel')
    },300)
});
$mainDSlider.parent().find('.next').on('click',function () {

    //todo animation

    setTimeout(function () {
        $mainDSlider.trigger('next.owl.carousel')
    },300)
});
//END index head slider

//blog slider
var $blogSlider = $('.blog-slider .owl-carousel');
$blogSlider.owlCarousel({
    items:3,
    dots:true,
    dotsContainer:$('[s-control="blog"] .slider__nav__container'),
    dotsEach:3
});


$('[s-control="blog"] .prev').on('click',function () {
    $blogSlider.trigger('prev.owl.carousel');
});
$('[s-control="blog"] .next').on('click',function () {
    $blogSlider.trigger('next.owl.carousel');
});

//---------------------
//newsSlider
var $newsSlider = $('.news-slider .owl-carousel');
$newsSlider.owlCarousel({
    items:3,
    dots:true,
    dotsContainer:$('[s-control="news"] .slider__nav__container'),
    // dotsEach:3
});

$('[s-control="news"] .prev').on('click',function () {
    $newsSlider.trigger('prev.owl.carousel');
});
$('[s-control="news"] .next').on('click',function () {
    $newsSlider.trigger('next.owl.carousel');
});

//toggle menu of blog & news
$('[s-group="one"]').on('click',function () {
    if(!$(this).hasClass('active')){
        $(this).parent().find('.active').removeClass('active');

        $(this).addClass('active');
        var src = $(this).attr('s-src');
        if(src == 'blog'){
            $('.blog-slider').show();
            $('.news-slider').hide();
            $('[s-control="blog"]').show();
            $('[s-control="news"]').hide();
        }else{
            $('.news-slider').show();
            $('.blog-slider').hide();
            $('[s-control="news"]').show();
            $('[s-control="blog"]').hide();
        }
    }else{
        return false
    }
})



//partnersSlider
var $partnersSlider = $('.partners-slider .owl-carousel');
$partnersSlider.owlCarousel({
    dots:true,
    margin:60,
    items:8,
    loop:true,
    dotsEach:3,
    dotsContainer:$('[s-control="partners"] .slider__nav__container'),
});

$('[s-control="partners"] .prev').on('click',function () {
    $partnersSlider.trigger('prev.owl.carousel');
});
$('[s-control="partners"] .next').on('click',function () {
    $partnersSlider.trigger('next.owl.carousel');
});
