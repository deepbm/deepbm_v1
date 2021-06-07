// login modal
$('.sign-in').click(() => {
  $('.modal').slideDown();
});

$('.btn-close').click(() => {
  $('.modal').slideUp();
});

// close button animation
$('.btn-close').mouseover(function() {
  $(this).css('transform', 'rotate(90deg)');
});

$('.btn-close').mouseleave(function() {
  $(this).css('transform', 'rotate(0)');
});