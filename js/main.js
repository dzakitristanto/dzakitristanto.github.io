$(document).ready(function(){


    let $btns = $('.portfolio-area .button-group button'); 

    $btns.click(function(e){

        $('.portfolio-area .button-group .button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.portfolio-area .photos').isotope({
            filter : selector


        });

        return false;
    });

    
});

$(document).ready(function(){

    $('.navbar-toggler, .overlay').on('click', function(){
        $('.MobileMenu, .overlay').toggleClass('open');
    });
});

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
        });

        $('.scroll-up-btn').click(function(){
            $('html').animate({scrollTop: 0});
            // // removing smooth scroll on slide-up button click
            // $('html').css("scrollBehavior", "auto");
        });
    
        $('.navbar .menu li a').click(function(){
            // applying again smooth scroll on menu items click
            $('html').css("scrollBehavior", "smooth");
        });
});

// Transisi Scroll

// $('.page-scroll').on('click',function(e){

//     // ambil isi href
//     var tujuan = $(this).attr('href');

//     // tangkap element ybs
//     var elemenTujuan = $(tujuan);

//     // pindahkan scrol

//     $('html').animate({
//         scrollTop: elemenTujuan.offset().top
//     },0);

//     e.preventDefault();

// });

// end Transisi

// navbarr

$(window).scroll(function(){

    $('nav').toggleClass('scrolled',$(this).scrollTop()>50);
});

// end navbar

$('.navbar-nav>li>a, .overlay').on('click', function(){
    $('.navbar-collapse, .overlay').toggleClass('open');
});


// active clik navbar
$(document).on('click', '.nav-item', function(){
    $(this).addClass('active').siblings().removeClass('active');
});
// end active clik navbar