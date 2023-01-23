(function(){


  if (window.matchMedia('(min-width: 767px)').matches) {
    return;
  }

  const showMore = document.querySelector('.show-more');
  const teamLength = document.querySelectorAll('.team__item').length;
  let items = 4;

  showMore?.addEventListener('click', (e) => {
    items += 2;
    const array = Array.from(document.querySelector('.team__list').children);
    const visibleItems = array.slice(0, items);

    visibleItems.forEach(el => el.classList.add('is-visible'));

    if (visibleItems.length === teamLength) {
      showMore.style.display = "none";
    }
  });

})();
