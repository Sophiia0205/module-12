import items from './menu.json';
import menuTemplate from './template/menu-data.hbs';

import './styles.css';
console.log(items);
console.log(menuTemplate);

const ref = {
  itemFeed: document.querySelector('.js-menu'),
};

buildItemFeed(items);

function buildItemFeed(items) {
  const markup = items.map(item => menuTemplate(item)).join('');

  ref.itemFeed.insertAdjacentHTML('beforeend', markup);
}

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switchControl = document.querySelector('#theme-switch-control');
const body = document.body;

switchControl.addEventListener('change', e => {
  if (e.target.checked) {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    localStorage.setItem('theme', Theme.DARK);
  } else {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    localStorage.setItem('theme', Theme.LIGHT);
  }
});

const currentTheme = localStorage.getItem('theme');
// console.log(currentTheme);
if (currentTheme) {
  body.classList = currentTheme;

  if (currentTheme === Theme.DARK) {
    switchControl.checked = true;
  }
}
