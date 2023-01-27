import { THEMES } from './constans.js';

const listElement = document.getElementById('list');

// const printSelect = value => {
//   if (value === 'animals') {
//     listElement.textContent = Object.values(THEMES)[0];
//   } else if (value === 'countries') {
//     listElement.textContent = Object.values(THEMES)[1];
//   } else {
//     listElement.textContent = '';
//   }
// };

const printSelect = word => {
  listElement.innerHTML = '';
  Object.values(THEMES[word]).forEach(value => {
    const elementLi = document.createElement('li');
    elementLi.textContent = value;
    listElement.append(elementLi);
  });
};

export { printSelect };
