// list
$('.menu-list').click(e => {  
  // remove
  if (e.target.classList.contains('btn-remove') || e.target.classList.contains('fa-trash')) {
    $(e.target).parents('li').remove();
  }
});


// append
function add() {
  const value = $('.input-append').val();

  if (value) {
    $('.menu-list').append(`<li>
    <span class="item">${value}</span>
    <button class="btn btn-remove"><i class="fas fa-trash"></i></button>
  </li>`)
    $('.input-append').val('');
  } else {
    alert('Please input a text!');
  }
}

// enter key
$('.input-append').keydown(key => {
  if (key.keyCode === 13) {
    add();
  }
});

// ADD buttton
$('.btn-append').click(() => {
  add();
});


// reset
$('.btn-reset').click(() => {
  $('.menu-list').html('');
});