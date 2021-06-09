/* contact me */
$('.btn-contact').mouseover(() => {
  $('.btn-contact').html('deepbm27@gmail.com');
});

$('.btn-contact').mouseleave(() => {
  $('.btn-contact').html('Contact me');
});


/* ability */
$('.ability i').mouseover(e => {
  $(e.target).css('transform', 'scale(1.1)');
});

$('.ability i').mouseleave(e => {
  $(e.target).css('transform', 'scale(1)');
});