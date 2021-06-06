// menu data
let menus = [];


// remove
const menuList = document.querySelector('.menu-list');
menuList.addEventListener('click', e => {
  if (e.target.classList.contains('btn-remove')) {
    const removeMenu = e.target.previousElementSibling.innerHTML;
    menus.splice(menus.indexOf(removeMenu), 1);
    e.target.parentElement.remove();
  } else if (e.target.classList.contains('fa-trash')) {
    const removeMenu = e.target.parentElement.previousElementSibling.innerHTML;
    menus.splice(menus.indexOf(removeMenu), 1);
    e.target.parentElement.parentElement.remove();
  }
});


// append
function add() {
  const value = $('.input-append').val();
  menus.push(value);

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