// const customSelect = document.querySelectorAll('#select');

// customSelect.forEach(el => {
//   el.addEventListener('click', (e) => {
//     e.currentTarget.classList.toggle('open');

//     if (e.target.classList.contains('custom-select__item')) {
//       let text = e.target.textContent;

//       e.currentTarget.querySelector('.custom-select__input').textContent = text;
//     }
//   })
// })

import {Select} from '../functions/select';
// import './select/styles.scss'

const select = new Select('#select', {
  placeholder: 'По умолчанию ...',
  selectedId: '5',
  data: [
    {id: '1', value: 'Популярные'},
    {id: '2', value: 'Высокий рейтинг'},
    {id: '3', value: 'Сначала дешёвые'},
    {id: '4', value: 'Сначала дорогие'},
    {id: '5', value: 'По умолчанию ...'}
  ],
  onSelect(item) {
    // console.log('Selected Item', item)
  }
})

const selectNumber = new Select('#select-number', {
  placeholder: '12',
  selectedId: '1',
  data: [
    {id: '1', value: '12'},
    {id: '2', value: '20'},
    {id: '3', value: '32'}
  ],
  onSelect(item) {
    // console.log('Selected Item', item)
  }
})


// select.select('4')
window.s = select
window.s = selectNumber
