// JavaScript Document


$(function(){
  function setScroll(){
    scrollMain();

    $(".imgHoverL").each(function(){
      var contList = $(this),
        tContList = contList.offset().top;

      if(tScroll > tContList - hWin * 0.9){
        contList.addClass('imgShowL');
      }else{
        contList.removeClass('imgShowL');
      }
    });

    $(".imgHoverR").each(function(){
      var contList = $(this),
        tContList = contList.offset().top;

      if(tScroll > tContList - hWin * 0.9){
        contList.addClass('imgShowR');
      }else{
        contList.removeClass('imgShowR');
      }
    });

    
  }

  setScroll();



  $(window).scroll(function(){
    setScroll();
  })

})


//----------------------------------------------------

$(window).load(function(){  
  scrollMain();
})


//----------------------------------------------------

$(window).on("scroll resize",function(){
  scrollMain()
});