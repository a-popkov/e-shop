let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach((el) => {
  el.addEventListener('click', (e) => {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach((btn) => {
      btn.classList.remove('tabs-nav__btn--active')
    });

    e.currentTarget.classList.add('tabs-nav__btn--active');

    tabsItem.forEach((el) => {
      el.classList.remove('tabs-item--active');
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active')
  });
});
