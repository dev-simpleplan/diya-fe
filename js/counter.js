//   counter js
var counted1 = 0;
var counted2 = 0;

$(window).scroll(function() {
  // First section
  var oTop1 = $('.inner-acc:first').offset().top - window.innerHeight;
  if (counted1 == 0 && $(window).scrollTop() > oTop1) {
    $('.inner-acc:first span.num-counter').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({ countNum: $this.text() }).animate(
        { countNum: countTo },
        {
          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
          }
        }
      );
    });
    counted1 = 1;
  }

  // Second section
  var oTop2 = $('.inner-acc:last').offset().top - window.innerHeight;
  if (counted2 == 0 && $(window).scrollTop() > oTop2) {
    $('.inner-acc:last span.num-counter').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({ countNum: $this.text() }).animate(
        { countNum: countTo },
        {
          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
          }
        }
      );
    });
    counted2 = 1;
  }
});

// counter js ends