

// // ######### who we are (about) rotate##########+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//  // You can change global variables here:

//  window.addEventListener('load', () => {


//  var radius = 150; // how big of the radius
//  var autoRotate = true; // auto rotate or not
//  var rotateSpeed = -80; // unit: seconds/360 degrees
//  var imgWidth = 120; // width of images (unit: px)
//  var imgHeight = 170; // height of images (unit: px)
 
//  // Link of background music - set 'null' if you dont want to play background music
//  var bgMusicURL = '';
//  var bgMusicControls = true; // Show UI music control
 
//  // ===================== start =======================
//  // animation start after 1000 miliseconds
//  setTimeout(init, 1000);
 
//  var odrag = document.getElementById('drag-container');
//  var ospin = document.getElementById('spin-container');
//  var aImg = ospin.getElementsByTagName('img');
//  var aVid = ospin.getElementsByTagName('video');
//  var aEle = [...aImg, ...aVid]; // combine 2 arrays
 
//  // Size of images
//  ospin.style.width = imgWidth + "px";
//  ospin.style.height = imgHeight + "px";
 
//  // Size of ground - depend on radius
//  var ground = document.getElementById('ground');
//  ground.style.width = radius * 3 + "px";
//  ground.style.height = radius * 3 + "px";
 
//  function init(delayTime) {
//    for (var i = 0; i < aEle.length; i++) {
//      aEle[i].style.transform = "rotateY(" + (i * (360 / aEle.length)) + "deg) translateZ(" + radius + "px)";
//      aEle[i].style.transition = "transform 1s";
//      aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
//    }
//  }
 
//  function applyTranform(obj) {
//    // Constrain the angle of camera (between 0 and 180)
//    if(tY > 180) tY = 180;
//    if(tY < 0) tY = 0;
 
//    // Apply the angle
//    obj.style.transform = "rotateX(" + (-tY) + "deg) rotateY(" + (tX) + "deg)";
//  }
 
//  function playSpin(yes) {
//    ospin.style.animationPlayState = (yes?'running':'paused');
//  }
 
//  var sX, sY, nX, nY, desX = 0,
//      desY = 0,
//      tX = 0,
//      tY = 10;
 
//  // auto spin
//  if (autoRotate) {
//    var animationName = (rotateSpeed > 0 ? 'spin' : 'spinRevert');
//    ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
//  }
 
//  // add background music
//  if (bgMusicURL) {
//    document.getElementById('music-container').innerHTML += `
//  <audio src="${bgMusicURL}" ${bgMusicControls? 'controls': ''} autoplay loop>    
//  <p>If you are reading this, it is because your browser does not support the audio element.</p>
//  </audio>
//  `;
//  }
 
//  // setup events
//  document.onpointerdown = function (e) {
//    clearInterval(odrag.timer);
//    e = e || window.event;
//    var sX = e.clientX,
//        sY = e.clientY;
 
//    this.onpointermove = function (e) {
//      e = e || window.event;
//      var nX = e.clientX,
//          nY = e.clientY;
//      desX = nX - sX;
//      desY = nY - sY;
//      tX += desX * 0.1;
//      tY += desY * 0.1;
//      applyTranform(odrag);
//      sX = nX;
//      sY = nY;
//    };
 
//    this.onpointerup = function (e) {
//      odrag.timer = setInterval(function () {
//        desX *= 0.95;
//        desY *= 0.95;
//        tX += desX * 0.1;
//        tY += desY * 0.1;
//        applyTranform(odrag);
//        playSpin(false);
//        if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
//          clearInterval(odrag.timer);
//          playSpin(true);
//        }
//      }, 17);
//      this.onpointermove = this.onpointerup = null;
//    };
 
//    return false;
//  };
 
//  document.onmousewheel = function(e) {
//    e = e || window.event;
//    var d = e.wheelDelta / 20 || -e.detail;
//    radius += d;
//    init(1);
//  }; });



// ########################### Image slider in about What we do
jQuery(document).ready(function ($) {
  
  var slideExtraHeight = 80;
  var wrapperPaddingLeft = 50;
  var wrapperPaddingRight = 50;
  var slideItem = 3;
  var spead = 150;
  var slideMargin = 20;
  var goNextInterval;
  var sliderWraper = $('#wrap-sh-slider').width();

  var slideCount = $('.sh-slider ul li').length;
  var slideWidth = (sliderWraper -  wrapperPaddingLeft - wrapperPaddingRight);
  var slideUlWidth = (slideWidth / slideItem) * slideCount * slideMargin - slideMargin;


  $('.sh-slider ul').css(
    {
      width: slideUlWidth,
      marginLeft: - slideWidth / slideItem
    }
  );
  var slideHeight = $('.sh-slider ul li').height();
  $('.sh-slider ul li').css(
    {
      width: slideWidth / slideItem,
      height: slideHeight,
      marginRight: slideMargin
    }
  );
  $('.sh-slider ul li:last-child').prependTo('.sh-slider ul');

  $('.sh-slider').css(
    {
      width: slideWidth + 2 * slideMargin,
      height: slideHeight,
      paddingTop: slideExtraHeight / 2,
      paddingBottom: slideExtraHeight / 2
    }
  );

  $('.sh-slider ul li:first-child').next().next().animate(
    {
      height:slideHeight + slideExtraHeight / 2,
      marginTop: -slideExtraHeight / 4,
      marginLeft:-slideMargin,
      marginRight:0,
      zIndex: 11
    },spead
  );
  removeShadow($('.sh-slider ul li:first-child'));
  removeShadow($('.sh-slider ul li:first-child').next().next().next().next());

  /**
  * Move left
  */
  function moveLeft() {
    setShadow($('.sh-slider ul li'));
    $('.sh-slider ul li:first-child').next().animate(
      {
        height:slideHeight + slideExtraHeight / 2,
        marginTop: -slideExtraHeight / 4,
        marginLeft:-slideMargin,
        marginRight:0, 
        zIndex: 11
      },spead
    );
                
    $('.sh-slider ul li:first-child').next().next().animate(
      {
        height:slideHeight,
        marginTop:0, marginLeft: 0,
        marginRight: slideMargin,
        zIndex: 1
      },spead
    );
        
    $('.sh-slider ul').animate({
      left: + slideWidth / slideItem
    }, spead, function () {
      $('.sh-slider ul li:last-child').prependTo('.sh-slider ul');
      $('.sh-slider ul').css('left', '');
    });
    
    removeShadow($('.sh-slider ul li:last-child'));
    removeShadow($('.sh-slider ul li:first-child').next().next().next());   
  };
  
  /**
   * Move right
   */
  function moveRight() {
    setShadow($('.sh-slider ul li'));
    $('.sh-slider ul li:last-child').prev().prev().animate(
      {
        height:slideHeight + slideExtraHeight / 2,
        marginTop: -slideExtraHeight / 4,
        marginLeft:-slideMargin,
        marginRight:1,
        zIndex: 11
      },spead
    );
    $('.sh-slider ul li:last-child').prev().prev().prev().animate(
      {
        height:slideHeight,
        marginTop:0,
        marginLeft: 0,
        marginRight: slideMargin,
        zIndex: 1
      },spead
    );
    $('.sh-slider ul').animate({
      left: - slideWidth / slideItem
    }, spead, function () {
      $('.sh-slider ul li:first-child').appendTo('.sh-slider ul');
      $('.sh-slider ul').css('left', '');
    });
    
    removeShadow($('.sh-slider ul li:last-child'));
    removeShadow($('.sh-slider ul li:last-child').prev().prev().prev().prev()); 
  };
  
  function setShadow(elem) {
    var shadowValue = '0px 10px 20px transparent';
    $(elem).css(
      {
        '-webkit-box-shadow' : shadowValue,
        '-moz-box-shadow' : shadowValue,
        'box-shadow' : shadowValue
      }
    );
  }
  
  function removeShadow(elem) {
    $(elem).css(
      {
        '-webkit-box-shadow' : 'none',
        '-moz-box-shadow' : 'none',
        'box-shadow' : 'none'
      }
    );
  }

  $('a.control_prev').click(function () {
    moveLeft();
      clearInterval(goNextInterval);  /*clears the interval to prevent conflict between going to left and goint to the right.*/
    goNextInterval=setInterval(moveRight, 2500);
        return;
});

  $('a.control_next').click(function () {
    moveRight();
    clearInterval(goNextInterval);  /*clears the interval to prevent conflict between going to left and goint to the right.*/
    goNextInterval=setInterval(moveRight, 2500);
  });

  goNextInterval=setInterval(moveRight, 2500);
});    
