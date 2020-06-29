import items from './menu.json';
import menuTemplate from './template/menu-data.hbs';

import './styles.css';
<<<<<<< HEAD
import '@pnotify/core/dist/BrightTheme.css';
import {error} from '@pnotify/core';
import fetchCountries from './script/fetchCountries.js';
import debounce from 'lodash.debounce';
import countryList from './template/country.hbs';
import country from './template/c-item.hbs';

let text = document.querySelector ('.input_text');

window.addEventListener ('keypress', e => {
  if (e.keyCode == 13) {
    e.preventDefault ();
  }
});

let search = async () => {
  if (text.value === '') {
    return;
  }
  let result = await fetchCountries (text.value);
  document.querySelector ('.js-result').innerHTML = '';
  if (!result) {
    showError ('No Countries Found');
  } else if (result.length > 10) {
    showError ('Too many matches found. Please enter a more specific query!');
  } else if (result.length === 1) {
    document.querySelector ('.js-result').innerHTML = country (result[0]);
  } else {
    document.querySelector ('.js-result').innerHTML = countryList (result);
  }
};
const showError = text => {
  error ({
    text: text,
    closer: false,
    sticker: false,
    destroy: true,
    delay: 500,
  });
};

text.addEventListener ('input', debounce (search, 500));
=======
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
>>>>>>> 17d584a9e72e8acae39e55ab4e817b7637b44f54
