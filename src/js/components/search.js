; (function() {
  const searchBox = document.querySelector('.search-box');
  const searchBtn = document.querySelector('.search-icon');
  // const searchBtnRight = document.querySelector('.search--right');
  const cancelBtn = document.querySelector('.close-icon');
  const searchInput = document.querySelector('input');
  const headerMenu = document.querySelector('.header__menu')
  const navbarInner = document.querySelector('.header__navbar--inner')

  // console.log(cancelBtn);

  // searchBtn.addEventListener('click', () => searchBox.classlist.add('open'));

  searchBtn.onclick = () => {
    headerMenu.classList.add('active');
    searchBox.classList.add('active');
    searchBtn.classList.add('active');
    searchInput.classList.add('active');
    cancelBtn.classList.add('active');
    navbarInner.classList.add('active');
    searchInput.focus();
  }

  cancelBtn.onclick = () => {
    headerMenu.classList.remove('active');
    headerMenu.classList.remove('active');
    searchBox.classList.remove('active');
    searchBtn.classList.remove('active');
    searchInput.classList.remove('active');
    cancelBtn.classList.remove('active');
    navbarInner.classList.remove('active');
    searchInput.value = '';
  }

  // searchBtnRight.onclick = () => {
  //   headerMenu.classList.add('active');
  // }

  // cancelBtn.onclick = () => {
  //   headerMenu.classList.remove('active');
  // }

  // BUG: при нажатии и на иконку поиска на главной стр. то пропадает навигация
})();
