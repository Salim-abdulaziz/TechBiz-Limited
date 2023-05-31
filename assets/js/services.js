// document.addEventListener('DOMContentLoaded', function() {
//     var cardWrap = document.querySelector('.card-wrap');
//     var card = document.querySelector('.card');
//     var cardBg = document.querySelector('.card-bg');
//     var cardInfo = document.querySelector('.card-info');
//     var dataImage = cardWrap.getAttribute('data-image');
//     var width = 0;
//     var height = 0;
//     var mouseX = 0;
//     var mouseY = 0;
//     var mouseLeaveDelay = null;
  
//     function handleMouseMove(e) {
//       mouseX = e.pageX - cardWrap.offsetLeft - width / 2;
//       mouseY = e.pageY - cardWrap.offsetTop - height / 2;
//       updateCardStyle();
//       updateCardBgTransform();
//     }
  
//     function handleMouseEnter() {
//       clearTimeout(mouseLeaveDelay);
//     }
  
//     function handleMouseLeave() {
//       mouseLeaveDelay = setTimeout(function() {
//         mouseX = 0;
//         mouseY = 0;
//         updateCardStyle();
//         updateCardBgTransform();
//       }, 1000);
//     }
  
//     function updateCardStyle() {
//       var rX = mouseX / width * 30;
//       var rY = mouseY / height * -30;
//       card.style.transform = 'rotateY(' + rX + 'deg) rotateX(' + rY + 'deg)';
//     }
  
//     function updateCardBgTransform() {
//       var tX = mouseX / width * -40;
//       var tY = mouseY / height * -40;
//       cardBg.style.transform = 'translateX(' + tX + 'px) translateY(' + tY + 'px)';
//     }
  
//     function init() {
//       width = cardWrap.offsetWidth;
//       height = cardWrap.offsetHeight;
//       cardBg.style.backgroundImage = 'url(' + dataImage + ')';
//       cardWrap.addEventListener('mousemove', handleMouseMove);
//       cardWrap.addEventListener('mouseenter', handleMouseEnter);
//       cardWrap.addEventListener('mouseleave', handleMouseLeave);
//     }
  
//     init();
//   });
  


// ============the many_cards section=================
                    //a, jquery code
                        $(document).ready(function () {
                        var zindex = 10;

                        $("div.card").click(function (e) {
                            e.preventDefault();

                            var isShowing = false;

                            if ($(this).hasClass("show")) {
                            isShowing = true;
                            }

                            if ($("div.cards").hasClass("showing")) {
                            // a card is already in view
                            $("div.card.show").removeClass("show");

                            if (isShowing) {
                                // this card was showing - reset the grid
                                $("div.cards").removeClass("showing");
                            } else {
                                // this card isn't showing - get in with it
                                $(this).css({ zIndex: zindex }).addClass("show");
                            }

                            zindex++;
                            } else {
                            // no cards in view
                            $("div.cards").addClass("showing");
                            $(this).css({ zIndex: zindex }).addClass("show");

                            zindex++;
                            }
                        });
                        });
      //b, plain javascript
    //   document.addEventListener('DOMContentLoaded', function() {
    //     var zindex = 10;
      
    //     var cards = document.querySelectorAll('div.card');
    //     var cardContainer = document.querySelector('div.cards');
      
    //     cards.forEach(function(card) {
    //       card.addEventListener('click', function(e) {
    //         e.preventDefault();
      
    //         var isShowing = false;
      
    //         if (this.classList.contains('show')) {
    //           isShowing = true;
    //         }
      
    //         if (cardContainer.classList.contains('showing')) {
    //           // A card is already in view
    //           var showingCard = document.querySelector('div.card.show');
    //           showingCard.classList.remove('show');
      
    //           if (isShowing) {
    //             // This card was showing - reset the grid
    //             cardContainer.classList.remove('showing');
    //           } else {
    //             // This card isn't showing - get in with it
    //             this.style.zIndex = zindex;
    //             this.classList.add('show');
    //           }
      
    //           zindex++;
    //         } else {
    //           // No cards in view
    //           cardContainer.classList.add('showing');
    //           this.style.zIndex = zindex;
    //           this.classList.add('show');
      
    //           zindex++;
    //         }
    //       });
    //     });
    //   });
      










    //Making the navbar's background change colour on scrolling.
const navbar = document.getElementById('navBar');
window.addEventListener('scroll', () =>{
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    }else{
        navbar.classList.remove('scrolled');
    }
});

//Make the shape have a bounce effect
window.addEventListener("DOMContentLoaded", () => {
  const shapeContainer = document.getElementById("shape-container");
  const shape = document.createElement("div");
  shape.classList.add("shape");
  shapeContainer.appendChild(shape);
});