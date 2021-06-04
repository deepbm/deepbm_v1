// list
$('.to-do-list').click(e => {
  // done
  if (e.target.classList.contains('checkbox')) {
    if (e.target.classList.contains('fa-square')) {
      $(e.target).removeClass('fa-square');
      $(e.target).addClass('fa-check-square');
      $(e.target).next().addClass('done');
    } else {
      $(e.target).removeClass('fa-check-square');
      $(e.target).addClass('fa-square');
      $(e.target).next().removeClass('done');
    }
  }
  
  // remove
  if (e.target.classList.contains('btn-remove') || e.target.classList.contains('fa-trash')) {
    $(e.target).parents('li').remove();
  }
});


// append
function add() {
  const value = $('.input-append').val();

  if (value) {
    $('.to-do-list').append(`<li>
    <i class="far fa-square checkbox"></i>
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