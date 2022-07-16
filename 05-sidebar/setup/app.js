const btn = document.querySelector(`.sidebar-toggle`);
const sidebar = document.querySelector(`.sidebar`);
const close = document.querySelector(`.close-btn`);

btn.addEventListener(`click`, function () {
  sidebar.classList.toggle(`show-sidebar`);
});

close.addEventListener(`click`, function () {
  sidebar.classList.remove(`show-sidebar`);
});
