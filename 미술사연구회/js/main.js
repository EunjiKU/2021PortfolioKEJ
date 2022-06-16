$(function(){
    // Swiper plugin
    const slider1 = new Swiper('.main_slider',{
        slidesPerView: 1,
        loop: true,
        autoplay:{
            delay:3000,
        },
    });
    const slider2 = new Swiper('.book_slider',{
        slidesPerView: 3,
        spaceBetween:30,
        slidesPerGroup:1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: "",
            clickable: true,
        },
        navigation: {
            nextEl: "",
            prevEl:"",
        },
        breakpoints: {
            1024: {
                slidesPerView: 2,
                spaceBetween:20,
            },
        }
    });
    const slider3 = new Swiper('.schedule_list',{
        slidesPerView: 3,
        spaceBetween:30,
        slidesPerGroup:3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: "",
            clickable: true,
        },
        navigation: {
            nextEl: "",
            prevEl:"",
        },
        breakpoints: {
            1024: {
                slidesPerView: 2,
                slidesPerGroup:2,
                spaceBetween:20,
            },
            768: {
                slidesPerView: 1,
                slidesPerGroup:1,
                spaceBetween:20,
            },
        }
    });
    const slider4 = new Swiper('.scheduelre_slider',{
        slidesPerView: 3,
        spaceBetween:30,
        slidesPerGroup:1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.swiper-pagination1',
            clickable: true,
        },
        breakpoints: {
            1024: {
                slidesPerView: 2,
                spaceBetween:20,
            },
        }
    });
    const slider5 = new Swiper('.sns_slider',{
        slidesPerView: 1,
        slidesPerGroup:1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.swiper-pagination2',
            clickable: true,
        },
    });
    const slider6 = new Swiper('.site_slider',{
        slidesPerView: 5,
        slidesPerGroup:1,
        spaceBetween:50,
        loop:true,
        autoplay:{
            delay:3000,
        },
        breakpoints: {
            1024: {
                slidesPerView: 3,
                spaceBetween:20,
            },
        }
    });



    // HEADER 영역 - pc
    const pcgnb = document.querySelectorAll('.pc_gnb > li');
    const header = document.getElementById('header');
    const logo = document.querySelector('.logo a img');

    for(var i = 0 ; i < pcgnb.length ; i++){
        pcgnb[i].addEventListener('mouseover',function(){
            for(var j = 0 ; j < pcgnb.length ; j++){
                pcgnb[j].classList.remove('active');
                pcgnb[j].firstChild.style.color = "#333";
            }
            this.classList.add('active');
            this.firstChild.style.color = "white";
            $(logo).attr("src","./img/로고2.png");
            $('.util li a, .util li a i').css({color:"#333"});
            $('header').css("background-color","white");
            $('.gnb_bg').css({"opacity":"0.8"});
        }),
        pcgnb[i].addEventListener('mouseleave',function(){
            for(var i = 0 ; i < pcgnb.length ; i++){
                for(var j = 0 ; j < pcgnb.length ; j++){
                    pcgnb[j].firstChild.style.color = "white";
                }
                pcgnb[i].classList.remove('active');
                $(logo).attr("src","./img/로고1.png");
                $('.util li a, .util li a i').css({color:"white"});
                $('header').css("background-color","transparent");
                $('.gnb_bg').css({"opacity":"0"});
            }
        });
    }

    

    // HEADER 영역 - tablet
    // 햄버거버튼 클릭시
    $('.ham_btn').click(function(){
        $('.m_nav').animate({"right":"-2%"});
        $('.gnb_bg').animate({"opacity":"0.8"});
    });
    $('.x_btn').click(function(){
        $('.m_nav').animate({"right":"-56%"});
        $('.gnb_bg').animate({"opacity":"0"});
    });
    // 메뉴 오버 시
    var mgnb = document.querySelectorAll('.m_gnb > li > a');

    for(var i = 0 ; i < mgnb.length ; i++){        
        mgnb[i].addEventListener('click',function(){
            for(var j = 0 ; j < mgnb.length ; j++){
                mgnb[j].classList.remove('active');
            }
            $('.sub_gnb').slideUp();
            $(this).parent().children(".sub_gnb").stop().slideToggle();
            this.classList.toggle('active');
        });
    }



    // NEWS 영역 - tab
    const tabmenu = document.querySelectorAll('.tab_menu li')
    const tabcon = document.querySelectorAll('.tab_con ul')

    for(var i = 0 ; i < tabmenu.length ; i++){
        tabmenu[i].addEventListener('click',function(e){
            e.preventDefault();
            for(var j = 0 ; j < tabmenu.length ; j++){
                tabmenu[j].classList.remove('active');
                tabcon[j].style.display = 'none';
            }
            this.classList.add('active');
            selecon = $(this).children().children().attr('href');
            document.querySelector(selecon).style.display = "block";
        });
    }
});