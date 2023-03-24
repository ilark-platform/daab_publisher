/*헤더고정*/
$(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
    if(scrollTop != 0) $('#header').addClass('scroll');
    else $('#header').removeClass('scroll');
});

/*메뉴 열고닫기*/
var acc = document.getElementsByClassName("switch");
var i;

for (i = 0; i < acc.length; i++) {
acc[i].addEventListener("click", function() {
    
    this.classList.toggle("switch-active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
        panel.style.display = "none";
        
    } else {
        panel.style.display = "block";
    }
});
}

/*상단 공지 고정*/
$(".notice__close").click(function(){
    $(this).parents(".main__notice").css("display","none") 
 });

/*위로가기 버튼*/
var Flag_clrBtn = 0; 
        
function hideBtn() { 
    document.getElementById("TopBtn").style.display = "none";
}

function fx_TopBtn() { 
    if ( window.pageYOffset >= 600 ) { 
        document.getElementById("TopBtn").style.display = "block"; 
        document.getElementById("TopBtn").style.animationName = "fadein"; 
        Flag_clrBtn = 1; 
    } else if ( window.pageYOffset < 600 && Flag_clrBtn ) { 
        Flag_clrBtn = 0; 
        document.getElementById("TopBtn").style.animationName = "fadeout"; 
        document.getElementById("TopBtn").style.animationFillMode = "forwards"; 
//                setTimeout( hideBtn, 300 ); 
    } 
} 

function topFunction() { 
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
} document.addEventListener("scroll",fx_TopBtn);

/*bottom up modal*/
$('.js-click-modal').click(function(){
    $('.modal-bottomUp').addClass('modal-open');
    });

    $('.js-close-modal').click(function(){
    $('.modal-bottomUp').removeClass('modal-open');
    });

/*modal 부모창 스크롤 방지*/
    var posY;
        
    $(".js-click-modal").on("click", function(e){
        posY = $(window).scrollTop();
        
        $("html, body").addClass("not_scroll");
        $(".modal-bottomUp").css("display","block");
    });
    
    $(".js-close-modal").on("click", function(){
        $("html, body").removeClass("not_scroll");
        $(".modal-bottomUp").css("display","none");
        posY = $(window).scrollTop(posY);
    });