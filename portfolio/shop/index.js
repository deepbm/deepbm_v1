// login modal
$('.sign-in').click(() => {
  $('.alert-email').hide();
  $('.alert-pw').hide();
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

// alert message
$('form').on('submit', e => {
  // email
  if ($('.input-email').val() === '') {
    e.preventDefault();
    $('.alert-email').show();
  }

  // password
  if ($('.input-pw').val() === '') {
    e.preventDefault();
    $('.alert-pw').show();
  }
});


// top button
$(window).scroll(() => {
  if ($(window).scrollTop() > 200) {
    $('.btn-top').fadeIn();
  } else {
    $('.btn-top').fadeOut();
  }
});

$('.btn-top').click(() => {
  $(window).scrollTop(0);
});