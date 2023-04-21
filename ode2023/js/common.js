//header gnb
function myFunction() {
  var x = document.getElementById("header");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//collapsible component
var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
coll[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var content = this.nextElementSibling;
  if (content.style.maxHeight){
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  } 
});
} 


//product list hover effect
$(document).ready(function () {
  $(".thumb .logo").mouseover(function () {
      $(this).addClass("add");
  });
  $(".thumb .logo").mouseleave(function () {
      $(this).removeClass("add");
  });
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

/*비밀번호 show hidden 버튼*/
function psw() {
var x = document.getElementById("pswFirst");
if (x.type === "password") {
    x.type = "text";
} else {
    x.type = "password";
}
}
/*비밀번호확인 show hidden 버튼*/
function psw2() {
var x = document.getElementById("pswSecond");
if (x.type === "password") {
    x.type = "text";
} else {
    x.type = "password";
}
}

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


/* tab menu */
function tabMenu(evt, tabMenu) {
var i, tabcontent, tablinks;

tabcontent = document.getElementsByClassName("tabcontent");
for (i = 0; i < tabcontent.length; i++) {
  tabcontent[i].style.display = "none";
}

tablinks = document.getElementsByClassName("tablinks");
for (i = 0; i < tablinks.length; i++) {
  tablinks[i].className = tablinks[i].className.replace(" active", "");
}

document.getElementById(tabMenu).style.display = "block";
evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();


/* bookmark/like toggle button */
function bookmarkBtn(x) {
  x.classList.toggle("scrap-check");}
function likeBtn(x) {
    x.classList.toggle("like-check");
}

