// AOS Instance
AOS.init();

// swiper
const slide = new Swiper(".produ_slider", {
    slidesPerView: "auto",
    loop : true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
})

// slick
$('.promo_slider').slick({
    slide:'li',
    infinite:true,
    slidesToShow:1,
    sldiesToScroll:1,
    arrows:true,
    draggable:true,
    prevArrow: $('.prev'), nextArrow: $('.next')
})

// HEADER 영역
var menu = document.querySelectorAll('.gnb > li');
var contents = document.querySelectorAll('section');
console.log(menu);
console.log(contents);

for(var i = 0 ; i < menu.length ; i++){
    menu[i].addEventListener('click',function(e){ 
        e.preventDefault();
        var idx = this.getAttribute('data-num');
        console.log(idx);
        var tt = contents[idx].offsetTop;
        window.scroll(0,tt);
    })
}

// topbtn
$('.topbtn').click(function(){
    window.scroll(0,0);
});

