import tabs from './modules/tabs';
import timer from './modules/timer';
import cards from './modules/cards';
import calc from './modules/calc';
import forms from './modules/forms';
import slider from './modules/slider';
import modal from './modules/modal';
import {showModalWindow} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {  
  
  const modalTimer = setInterval(() => showModalWindow('.modal', modalTimer), 30000);

  tabs(".tabheader__item", ".tabcontent", ".tabheader__items", 'tabheader__item_active');
  modal('[data-modal]', '.modal', modalTimer);
  timer('.timer', '2023-11-08');
  cards();
  calc();
  forms('form', modalTimer);
  slider({
    container: '.offer__slider',
    nextArrow: '.offer__slider-next',
    prevArrow: '.offer__slider-prev',
    slide: '.offer__slide',
    totalCounter: '#total',
    currentCounter: '#current',
    wrapper: '.offer__slider-wrapper',
    field: '.offer__slider-inner'
  });

});