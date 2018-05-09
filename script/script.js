finish = false;
lock = false;
$(function()
{
});

//1/8
$("#rpg-icon-information").click(function () {
    $("#rpg-information").css("display","block");
    $("#rpg-default").css("display","none");
});

$("#rpg").hover(  //滑鼠離開卡片後會變回原本的介紹
  function(){
  }
  ,function()
  {
    $("#rpg-information").css("display","none");
    $("#rpg-default").css("display","block");
  });

//penguin
$("#penguin-icon-information").click(function () {
    $("#penguin-information").css("display","block");
    $("#penguin-default").css("display","none");
});

$("#penguin").hover(  //滑鼠離開卡片後會變回原本的介紹
  function(){
  }
  ,function()
  {
    $("#penguin-information").css("display","none");
    $("#penguin-default").css("display","block");
  });

//mr.Murder
$("#murder-icon-information").click(function () {
    $("#murder-information").css("display","block");
    $("#murder-default").css("display","none");
});

$("#murder").hover(  //滑鼠離開卡片後會變回原本的介紹
  function(){
  }
  ,function()
  {
    $("#murder-information").css("display","none");
    $("#murder-default").css("display","block");
  });

//ntut
$("#ntut-icon-information").click(function () {
    $("#ntut-information").css("display","block");
    $("#ntut-default").css("display","none");
});

$("#ntut").hover(  //滑鼠離開卡片後會變回原本的介紹
  function(){
  }
  ,function()
  {
    $("#ntut-information").css("display","none");
    $("#ntut-default").css("display","block");
  });

//a2
$("#a2-icon-information").click(function () {
    $("#a2-information").css("display","block");
    $("#a2-default").css("display","none");
});

$("#a2").hover(  //滑鼠離開卡片後會變回原本的介紹
  function(){
  }
  ,function()
  {
    $("#a2-information").css("display","none");
    $("#a2-default").css("display","block");
  });

//menu
// $(".menu-card > img").hover(
//   function(){
//     $(this).css('opacity','1');
//     if(finish == true)
//     {
//       //作品集
//       if($(this).attr('id') == 'menu-2')
//       {
//         //文字顯示名字
//         if($('.menu-content-name').css('display') != 'none')
//         {
//           TweenMax.staggerTo('.menu-content-name',0.5,{opacity:0,onComplete:ChangeMenuContentPortfolio},0.05);
//         }
//         //文字顯示聯絡我
//         if($('.menu-content-contact').css('display') != 'none')
//         {
//           TweenMax.staggerTo('.menu-content-contact',0.5,{opacity:0,onComplete:ChangeMenuContentPortfolio},0.05);
//         }
//         //文字顯示得獎紀錄
//         if($('.menu-content-award').css('display') != 'none')
//         {
//           TweenMax.staggerTo('.menu-content-award',0.5,{opacity:0,onComplete:ChangeMenuContentPortfolio},0.05);
//         }
//       }
//       //聯絡我
//       else if ($(this).attr('id') == 'menu-1') {
//         //文字顯示名字
//         if($('.menu-content-name').css('display') != 'none')
//         {
//           TweenMax.staggerTo('.menu-content-name',0.5,{opacity:0,onComplete:ChangeMenuContentContact},0.05);
//         }
//         //文字顯示作品集
//         if($('.menu-content-portfolio').css('display') != 'none')
//         {
//           TweenMax.staggerTo('.menu-content-portfolio',0.5,{opacity:0,onComplete:ChangeMenuContentContact},0.05);
//         }
//         //文字顯示得獎紀錄
//         if($('.menu-content-award').css('display') != 'none')
//         {
//           TweenMax.staggerTo('.menu-content-award',0.5,{opacity:0,onComplete:ChangeMenuContentContact},0.05);
//         }
//       }
//       //得獎紀錄
//       else if ($(this).attr('id') == 'menu-3') {
//         //文字顯示名字
//         if($('.menu-content-name').css('display') != 'none')
//         {
//           TweenMax.staggerTo('.menu-content-name',0.5,{opacity:0,onComplete:ChangeMenuContentAward},0.05);
//         }
//         //文字顯示作品集
//         if($('.menu-content-portfolio').css('display') != 'none')
//         {
//           TweenMax.staggerTo('.menu-content-portfolio',0.5,{opacity:0,onComplete:ChangeMenuContentAward},0.05);
//         }
//         //文字顯示聯絡我
//         if($('.menu-content-contact').css('display') != 'none')
//         {
//           TweenMax.staggerTo('.menu-content-award',0.5,{opacity:0,onComplete:ChangeMenuContentAward},0.05);
//         }
//       }
//     }
//   }
//   ,function()
//   {
//     $(this).css('opacity','0.8');
//   });
//
// $(".menu-card > img").click(function()
// {
//   if(!lock)
//   {
//     if (finish)
//     {
//       if ($(this).attr('id') == 'menu-1') {
//         if($('.menu-content-contact').css('display') != 'none')
//         {
//           TweenMax.staggerTo('.menu-content-contact',1,{color:'#1abc9c',opacity:0},0.05);
//           // TweenMax.staggerTo('.menu-card',0.5,{delay:1,opacity:0,display:'none',onComplete:ClearMenuContent},0.3);
//         }
//       }
//       else if ($(this).attr('id') == 'menu-2') {
//         if($('.menu-content-portfolio').css('display') != 'none')
//         {
//           TweenMax.staggerTo('.menu-content-portfolio',1,{color:'#1abc9c',opacity:0},0.05);
//           TweenMax.staggerTo('.menu-card',0.5,{delay:1,opacity:0,display:'none',onComplete:ClearMenuContent},0.3);
//           ShowPortfolio();
//         }
//       }
//       else if ($(this).attr('id') == 'menu-3') {
//         if($('.menu-content-award').css('display') != 'none')
//         {
//           TweenMax.staggerTo('.menu-content-award',1,{color:'#1abc9c',opacity:0},0.05);
//           // TweenMax.staggerTo('.menu-card',0.5,{delay:1,opacity:0,display:'none',onComplete:ClearMenuContent},0.3);
//         }
//       }
//     }
//     lock = true;
//     setTimeout(function(){lock = false},2500); //延遲2.5秒
//   }
// })

//偵測滾輪事件
// $(window).mousewheel(function(event) {
//    deltaX = event.deltaX;
//    deltaY = event.deltaY;
//    // console.log(lock);
//    if(deltaY == 1 && finish && !lock)
//    {
//      lock = true;
//      TweenMax.from('#menu',0.5,{onComplete:ChangeMenuContentName});
//      setTimeout(function(){lock = false},2500); //延遲2.5秒
//    }
// });

function ChangeWordsWeb()
{
  $(".game").css("display","none");
  $('.web').css('display','inline-block');
}

function ChangeMenuContentPortfolio() {
  $('.menu-content-name').css('display','none');
  $('.menu-content-contact').css('display','none');
  $('.menu-content-award').css('display','none');
  $('.menu-content-portfolio').css('display','inline-block');
  $('.menu-content-portfolio').css('opacity','1');
  $('.menu-content-portfolio').css('color','white');
  TweenMax.staggerFrom('.menu-content-portfolio',0.5,{opacity:0},0.1);
}

function ChangeMenuContentContact() {
  $('.menu-content-name').css('display','none');
  $('.menu-content-portfolio').css('display','none');
  $('.menu-content-award').css('display','none');
  $('.menu-content-contact').css('display','inline-block');
  $('.menu-content-contact').css('opacity','1');
  $('.menu-content-contact').css('color','white');
  TweenMax.staggerFrom('.menu-content-contact',0.5,{opacity:0},0.1);
}

function ChangeMenuContentAward() {
  $('.menu-content-name').css('display','none');
  $('.menu-content-portfolio').css('display','none');
  $('.menu-content-contact').css('display','none');
  $('.menu-content-award').css('display','inline-block');
  $('.menu-content-award').css('opacity','1');
  $('.menu-content-award').css('color','white');
  TweenMax.staggerFrom('.menu-content-award',0.5,{opacity:0},0.1);
}

//回主選單
function ChangeMenuContentName()
{
  ClearMenuContent();
  $('#portfolio').css('display','none');
  $('.menu-content-name').css('display','inline-block');
  $('.menu-content-name').css('opacity','1');
  $('.menu-content-name').css('color','white');
  //卡片初始設定
  $('.menu-card').css('display','block');
  $('.menu-card').css('opacity','1');
  $('.menu-card > img').css('opacity','0.8');
  TweenMax.staggerFrom('.menu-card',0.5,{opacity:0,x:2000},0.3);
  TweenMax.staggerFrom('.menu-content-name',0.5,{delay:1,opacity:0},0.05);
}

function ClearMenuContent() {
  $('.menu-content-name').css('display','none');
  $('.menu-content-portfolio').css('display','none');
  $('.menu-content-contact').css('display','none');
  $('.menu-content-award').css('display','none');
}

//換頁

function ShowHome()
{
  $("#animation").css("display","none");
  $("#home").css("display","block");
  // $('#menu').css('background-image','url(img/background/protfolio.png)');
  $('#menu').css('background-color','rgb(30,44,60)');
  $('#body').css('background-color','white');
}

function ShowMenu()
{
  $('.menu-card').css('display','none');
  $('#home').css('display','none');
  $('#menu').css('position','relative');
  $('#menu').css('display','block');
  $('#menu').css('z-index','1');
  $('#menu').css('opacity','1');
  // $('.menu-content-name').css('display','inline-block');
  // $('.menu-img-area').css('background-image','url(img/background/black.png)');
}

function ShowPortfolio() {
  $("#portfolio").css('display','block');
  $('.icon-menu').css('display','block');
  $('.menu-content-name').css('disply','none');
  $('.menu-content-contact').css('display','none');
  $('.menu-content-award').css('display','none');
  $('.menu-content-portfolio').css('display','inline-block');
  $('.menu-content-portfolio').css('opacity','0');
  $('.menu-content-portfolio').css('color','white');
}

function FinishCardAnimation() {
  finish = true;
}


//進場動畫
  TweenMax.from("#words_welcome",1,{opacity:0,x:1000,delay:0.5});
  TweenMax.staggerFrom(".portfolio",0.5,{opacity:0,delay:1.5},0.1);
  // TweenMax.staggerTo(".words",2,{opacity:0,ease:Bounce.easeOut,x:400,delay:1},0.2);
//退場動畫
  TweenMax.to("#words_welcome",1,{opacity:0,x:-1000,delay:2.9});
  TweenMax.to("#words_protfolio",1,{opacity:0,x:-1000,delay:3,onComplete:ShowHome});
//home
  TweenMax.from("#words_desinger",1,{opacity:0,y:-1000,delay:4,onComplete:ShakeWordsGame});
  TweenMax.to(".game",0.5,{delay:6,opacity:0,y:$('#words_desinger').offset().top+1000,onComplete:ChangeWordsWeb});
  TweenMax.from('.web',0.5,{opacity:0,y:$('#words_desinger').offset().top-1000,delay:6.5})
//introduce退場
  TweenMax.staggerTo('.web',0.2,{y:$('#words_desinger').offset().top-80,color:'rgb(245,139,172)',delay:7},0.1);
  TweenMax.staggerTo('.web',0.2,{y:$('#words_desinger').offset().top,color:'rgb(245,139,172)',delay:7.2},0.1);
  TweenMax.staggerTo('.introduce',0.1,{delay:8.1,x:$('#words_desinger').offset().left-100,opacity:0},0.03);
//menu
  TweenMax.to('#home',1.43,{delay:8.1,opacity:0,onComplete:ShowMenu});
  TweenMax.from('#menu',1,{delay:8.6,opacity:0,onComplete:ShowPortfolio});
  // TweenMax.staggerFrom('.menu-content-name',0.5,{delay:12,opacity:0,onComplete:ClearMenuContent},0.05);
  TweenMax.staggerFrom('.menu-content-portfolio',0.5,{opacity:0,delay:10.6},0.1);
  TweenMax.staggerFrom('.course',1,{opacity:0,x:$('.course').offset().left+1000,delay:11.6},0.5);
//利用GSAP實現晃動特效 416.95 316.66
function Shake(object)
{
  var objectY = $(object).offset().top;
  TweenMax.to(object,0.5,{y:objectY-100,ease:Bounce.easeOut,color:'rgb(245,139,172)',delay:0.5});
}

function ShakeWordsGame()
{
  Shake(".game");
}

function Mouse(event)
{
  mouse = event.button;
  // console.log(lock);
  // console.log("當前頁面與頂端距離:"+$(document).scrollTop());
  // console.log($("#words_desinger").offset().top);
  // TweenMax.to('#menu-img-portfolio',1,{opacity:0,y:1000});
}
