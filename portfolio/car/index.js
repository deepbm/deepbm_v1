// side menu
$('.menu-trigger').click(() => {
  $('.side-menu').css('transform', 'translateX(0)');
});

$('.btn-close').click(() => {
  $('.side-menu').css('transform', 'translateX(400px)');
});

// previous button
$('.fa-chevron-left').click(() => {
  $('.side-menu').children().hide();
  $('.sub-menu').show();
});

// side menu - buy
$('.menu-list-buy').click(() => {
  $('.sub-menu').hide();
  $('.sub-menu-buy').show();
});

// side menu - service
$('.menu-list-service').click(() => {
  $('.sub-menu').hide();
  $('.sub-menu-service').show();
});

// side menu - why volvo
$('.menu-list-why-volvo').click(() => {
  $('.sub-menu').hide();
  $('.sub-menu-why-volvo').show();
});

// side menu - more
$('.menu-list-more').click(() => {
  $('.sub-menu').hide();
  $('.sub-menu-more').show();
});