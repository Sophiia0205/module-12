import './styles.css';
import '@pnotify/core/dist/BrightTheme.css';
import { error } from '@pnotify/core';
import fetchCountries from './script/fetchCountries.js';
import debounce from 'lodash.debounce';
import countryList from './template/country-item.hbs';
import country from './template/modal-item.hbs';

let text = document.querySelector('.input_text');

window.addEventListener('keypress', e => {
  if (e.keyCode == 13) {
    e.preventDefault();
  }
});

let search = async () => {
  if (text.value === '') {
    return;
  }
  let result = await fetchCountries(text.value);
  document.querySelector('.js-result').innerHTML = '';
  if (!result) {
    showError('No Countries Found');
  } else if (result.length > 10) {
    showError('Too many matches found. Please enter a more specific query!');
  } else if (result.length === 1) {
    document.querySelector('.js-result').innerHTML = country(result[0]);
  } else {
    document.querySelector('.js-result').innerHTML = countryList(result);
  }
};
const showError = text => {
  error({
    text: text,
    closer: false,
    sticker: false,
    destroy: true,
    delay: 500,
  });
};

text.addEventListener('input', debounce(search, 500));
