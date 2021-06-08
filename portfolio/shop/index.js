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


// 상품 더보기
$('.btn-more').click(() => {
  $('.btn-more').hide();
  $('.loader').show();
  let loading = setTimeout(dataLoading, 2000);
});

function dataLoading() {
  $.ajax({
    url: 'https://deepbm.github.io/data/data.json',
    method: 'GET',
    dataType: 'json'
  }).done(response => {
    $('.loader').hide();
    const count = response.length;
    for (let i = 0; i < count; i++) {
      const product = `<div class="col-12 col-md-6 col-lg-4">
    <div class="product">
      <img class="w-100" src="${response[i].image}" alt="fedora_hat">
      <div class="product-info">
        <p class="mt-3 mb-0">${response[i].product}</p>
        <p class="mt-1">${response[i].price}</p>
      </div>
    </div>
  </div>`;
      $('.row').append(product);
    }
  }).fail(() => {
    alert('새로고침 후 다시 시도해주세요.');
  });
}