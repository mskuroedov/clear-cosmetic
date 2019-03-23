window.addEventListener('load', (event) => {
    $('.loader').animate({
        opacity:0
    },500);
    setTimeout(function () {
        $('.loader').hide();
    },600)
});