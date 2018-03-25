
//Open and close Navbar
window.addEventListener("keyup", function(e) {
  if (e.keyCode == 27) closeNav();
}, false);

const checkNav =() => {
  if (document.body.classList.contains('hamburger-active')) {
    closeNav();
}

  else {
  openNav();
  }
}

const closeNav = () => {
  document.body.classList.remove('hamburger-active');
}

const openNav = () => {
  document.body.classList.add('hamburger-active');
}

document.getElementById('hamburger').addEventListener('click', checkNav);

//Counter for levels
$('.count').each(function () {
  $(this).prop('Counter',0).animate({
      Counter: $(this).text()
  }, {
      duration: 4000,
      easing: 'swing',
      step: function (now) {
          $(this).text(Math.ceil(now));
      }
  });
});

//Function that hide and show title and text in card
$(document).ready(function(){
  $('.card').addClass("hidden");

  $('.card').hover(function() {
    var $this = $(this);

    if ($this.hasClass("hidden")) {
      $(this).removeClass("hidden").addClass("visible");

    } else {
      $(this).removeClass("visible").addClass("hidden");
    }
  });
});

//Function that blurs image
$(document).ready(function(){
  $('.card').mouseover(function() {
    let $this = $(this);
      $($this).addClass("hover-effect");
  })
  $('.card').mouseout(function() {
    let $this = $(this);
      $($this).removeClass("hover-effect");
  })
})
