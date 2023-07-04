setTimeout(function() {
 // ################ HERO SLIDER JS START################
            $('.slider').each(function() {
                var $this = $(this);
                var $group = $this.find('.slide_group');
                var $slides = $this.find('.slide');
                var bulletArray = [];
                var currentIndex = 0;
                var timeout;
                

                var hammer = new Hammer(this);

                hammer.on('swipeleft', function() {
                  if (currentIndex < ($slides.length - 1)) {
                    move(currentIndex + 1);
                  } else {
                    move(0);
                  }
                });
            
                hammer.on('swiperight', function() {
                  if (currentIndex !== 0) {
                    move(currentIndex - 1);
                  } else {
                    move($slides.length - 1);
                  }
                });


                function move(newIndex) {
                  var slideLeft, animateLeft;
                  
                  advance();
                  
                  // Check if the group is already animated or the current index is the same as the new index
                  if ($group.is(':animated') || currentIndex === newIndex) {
                    return;
                  }
                  
                  // Remove 'active' class from current bullet and add it to the new bullet
                  bulletArray[currentIndex].removeClass('active');
                  bulletArray[newIndex].addClass('active');
                  
                  // Determine the slide positions and animations based on the new index
                  if (newIndex > currentIndex) {
                    slideLeft = '100%';'transform 0.5s ease'
                    animateLeft = '-100%';
                    
                  } else {
                    slideLeft = '-100%';
                    animateLeft = '100%';
                  
                  }
                  
                  // Set the new slide's initial position and display it
                  $slides.eq(newIndex).css({
                    display: 'block',
                    left: slideLeft
                  });

                   // Animate the group to move to the new slide position
                  $group.animate({
                    left: animateLeft
                  }, function() {
                     // Hide the previous slide
                    $slides.eq(currentIndex).css({
                      display: 'none'
                    });
                    // Reset the new slide's position
                    $slides.eq(newIndex).css({
                      left: 0
                    });
                    // Reset the group's position
                    $group.css({
                      left: 0
                    });
                      // Update the current index
                    currentIndex = newIndex;
                  });
                }
                
                function advance() {
                  clearTimeout(timeout);
                  timeout = setTimeout(function() {
                    if (currentIndex < ($slides.length - 1)) {
                      move(currentIndex + 1);
                    } else {
                      move(0);
                    }
                  }, 5000);
                }
                
                $('.next_btn').on('click', function() {
                  if (currentIndex < ($slides.length - 1)) {
                    move(currentIndex + 1);
                  } else 
                    move(0);
                });
                
                $('.previous_btn').on('click', function() {
                  if (currentIndex !== 0) {
                    move(currentIndex - 1);
                  } else {
                    move(3);
                  }
                });
                
                $.each($slides, function(index) {
                  var $button = $('<a class="slide_btn">&bull;</a>');
                  
                  if (index === currentIndex) {
                    $button.addClass('active');
                  }
                  $button.on('click', function() {
                    move(index);
                  }).appendTo('.slide_buttons');
                  bulletArray.push($button);
                });
                
                advance();
              });
  // ################END OF HERO SLIDER JS ################
}, 100); // 0.1 seconds delay (1000 millisecond

// ###########dropdown-technologies#################
$(document).ready(function() {
  
  $(".selLabel").click(function () {
    $('.dropdown').toggleClass('active');
  });
  
  $(".dropdown-list li").click(function() {
    $('.selLabel').text($(this).text());
    $('.dropdown').removeClass('active');
    $('.selected-item p span').text($('.selLabel').text());
  });
  
});
// ##########################################################