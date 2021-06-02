// title
const card = document.querySelectorAll('.card');

card.forEach((el, i) => {
  // show
  el.addEventListener('mouseover', e => {
    if (e.target.classList.contains(`portfolio${i+1}`)) {
      e.target.firstElementChild.classList.add('show');
    }
  });

  // hide
  el.addEventListener('mouseleave', e => {
    if (e.target.classList.contains(`portfolio${i+1}`)) {
      e.target.firstElementChild.classList.remove('show');
    }
  });
})