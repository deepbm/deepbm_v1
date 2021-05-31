/* contact me */
$('.btn-contact').mouseover(() => {
  $('.btn-contact').html('deepbm27@gmail.com');
});

$('.btn-contact').mouseleave(() => {
  $('.btn-contact').html('Contact me');
});


/* ability */
$('.ability').mouseover(e => {
  $(e.target).css('transform', 'scale(1.1)');
});

$('.ability').mouseleave(e => {
  $(e.target).css('transform', 'scale(1)');
});