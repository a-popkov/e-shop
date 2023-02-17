const shapeGrid = document.querySelector('.shape-grid');
const shapeRow = document.querySelector('.shape-rows');
const shapeList = document.querySelector('.catalog-grid__list');

shapeGrid.addEventListener('click', (e) => {
  shapeRow.classList.remove('active');
  shapeGrid.classList.add('active');
  shapeList.classList.remove('catalog-grid__list--row');
  shapeList.classList.add('catalog-grid__list--grid');
});

shapeRow.addEventListener('click', (e) => {
  shapeGrid.classList.remove('active');
  shapeRow.classList.add('active');
  shapeList.classList.add('catalog-grid__list--row');
  shapeList.classList.remove('catalog-grid__list--grid');
});



// template вставка контента

// const productInfo = document.querySelector('.product__info');
// const template = document.getElementById('template');
// const clone = template.content.cloneNode(true);

//     if (shapeList.classList.contains('.catalog-grid__list--grid')) {
//     template.createElement.remove('#template')
//   }

//   if ('content' in document.createElement('template')) {
//     // Вставляем склонированный контент на страницу
//     productInfo.appendChild(clone);
//   }
