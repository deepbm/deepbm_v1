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


// modal
const portfolioCount = card.length;
for (let i = 1; i <= portfolioCount; i++) {
  // show
  $(`.portfolio${i}`).click(() => {
    $(`.modal${i}`).fadeIn();
  });

  // hide
  $(`.modal${i}`).click(e => {
    if (e.target.classList.contains('black-background') || e.target.classList.contains('btn-close')) {
      $(`.modal${i}`).fadeOut();
    }
  });
}