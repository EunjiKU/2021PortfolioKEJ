$(function(){
// 
// 
// AOS
AOS.init();


// SWIPER
var swiper = new Swiper(".webpub_slider", {
    slidesPerView: 1,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
});


// 헤더영역 - 마우스오버 시
$('#header nav').stop().hover(function(){
    $(this).animate({padding:0,width:"110px",height:"358px"});
    $(".gnb").delay(200).fadeIn(400);
    $(".header_btn").css({display:"none"});
},function(){
    $(this).animate({padding:0,width:"68px",height:"68px"});
    $(".gnb").fadeOut(400);
    $(".header_btn").css({display:"block"});
});


// 헤더영역 - 화면 스크롤시
var menu = document.querySelectorAll('.gnb > li');
var contents = document.querySelectorAll('section');
var lastPos = 0;

for(var i = 0 ; i < menu.length ; i++){
    menu[i].addEventListener('click',function(e){
        e.preventDefault();
        var idx = this.getAttribute('data-num');
        var tt = contents[idx].offsetTop;
        var scrollInterval = setInterval(function(){
            if(tt - window.pageYOffset > 50 || window.pageYOffset - tt > 50){
                if(tt > lastPos){
                    window.scrollBy(0, 55);
                }else{
                    window.scrollBy(0, -55);
                }
            }else{
                clearInterval(scrollInterval);
                window.scrollTo(0, tt);
                lastPos = tt;   // lastPod = 1200
            }
        },15);
    })
}


// 헤더영역 - 메뉴 active
window.addEventListener('scroll',function(){
    var sct = this.pageYOffset;

    for(var i = 0 ; i < contents.length ; i++){
        if(contents[i].offsetTop <= sct+500){
            var idx = contents[i].getAttribute('data-num');

            for(var a = 0 ; a < menu.length ; a++){
                menu[a].classList.remove('active');
            }
            menu[idx].classList.add('active');
        }
    }
});


// HOME영역-타자
var titname = document.querySelector(".titname");
var name = "구은지";
var index = 0;

function typing(){
    titname.textContent += name[index++];
    if(index + 1 > name.length){
        clearInterval(typingani);
        $("#main_sec .title span").animate({width:"50%"});
    }
}
function blink(){
    titname.classList.toggle("active");
}
var typingani = setInterval(typing, 300);
var blinkani = setInterval(blink, 500);


// ABOUT영역-형광펜
$(window).scroll(function(){
    // 스크롤이 500왔을 때 효과주기
    var sct = $(this).scrollTop();
    // 833-300=533
    var sec = ($("#about_sec").offset().top) - 300
    if(sct > sec){
        $('.colorpen').animate({width:"262px"});
    }
});


// ABOUT영역 - HISTORY
$(window).scroll(function(){
    // 스크롤이 900왔을 때 효과주기
    var sct = $(this).scrollTop();
    var his = document.querySelectorAll('.history_box ul li');
    // 1237-300=937
    var sec = ($(".history_box").offset().top) - 300
    
    if(sct > sec){
        for(var z = 0 ; z < his.length ; z++){
            // his[z].addEventListener('click',function(){alert('dd');});
            his[z].classList.add('active');
        }
    }
});


//  DESIGN 영역 - lightbox
$('a.modal').click(function(e){
    e.preventDefault();
    var imgs = this.getAttribute('data-img');
    $('.blackbox, .imgbox').fadeIn();

    if(this.getAttribute('data-img') == 'jpg'){
        $(".imgbox").html("<img src='"+ $(this).attr("href")+"' alt='이미지'/>");
        console.log('제이피지if');
    }else{
        $(".imgbox").html("<video src='"+ $(this).attr("href")+"'  autoplay loop muted ></video>");
        console.log('비디오if');
    }
});

$('.blackbox').click(function(){
    $(this).fadeOut();
    $(".imgbox").fadeOut();
});
//
//
});