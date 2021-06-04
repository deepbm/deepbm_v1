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
});