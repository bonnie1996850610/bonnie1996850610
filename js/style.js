// JavaScript Document

//================================= 
//			函數設定
//=================================

//版面相關設定
var viewport = function()
{
  var e = window, a = 'inner';
  if (!('innerWidth' in window )) {
	  a = 'client';
	  e = document.documentElement || document.body;
  }
  return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
}

//RWD範圍設置
var setDevice = function()
{	
  nWinW = viewport().width;
  nWinH = $(window).height();

  isPC = 0; isTablet = 0; isMobile = 0;
  if(nWinW <= 750){
  	isMobile = 1;
  }else if((nWinW > 750 && nWinW <= 1200)){
  	isTablet = 1
  }else if(nWinW > 1200){
  	isPC = 1;
  }
}


$(function(){

  $(".scrolltop").click(function(){
    $("body, html").animate({scrollTop: 0},800)
  })

  $(".burger").click(function(){
    $("body, html").toggleClass('nav-open');
  })

})


//捲軸偵測----------------------------------------------------

//scroll
function scrollMain(){
  eWin = $(window),
  hWin = eWin.height(),
  tScroll = eWin.scrollTop();
  
  tScrollTemp = tScroll;

  if(tScroll > tScrollTemp){
    dirScroll = "down";
  }else if(tScroll < tScrollTemp){
    dirScroll = "up";
  }

  


  // if(tScroll > 1){
  //   $(".scroll-top").css({opacity: 1})
  //   $(".logo-scroll").css({opacity: 1})
  //   $(".logo").css({opacity: 0})
  //   $("body").addClass("onScroll")
  // }else{
  //   $(".scroll-top").css({opacity: 0})
  //   $(".logo-scroll").css({opacity: 0})
  //   $(".logo").css({opacity: 1})
  //   $("body").removeClass("onScroll")
  // }

}

$(window).scroll(function(){	
	
});

//----------------------------------------------------

$(window).load(function(){	

});

//----------------------------------------------------

$(window).resize(function(){

});