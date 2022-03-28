'use strict';
const getClass = (className) => {
  return document.querySelector(className);
};
const modal = getClass('.modal');
const overlay = getClass('.overlay');
const btn = getClass('.close-modal');
const hidden = document.querySelectorAll('.hidden');
console.log(hidden);
const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = () => {
  if (!modal.classList.contains('hidden')) {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
};
const btns = document.querySelectorAll('.show-modal');
for (const iterator of btns) iterator.addEventListener('click', openModal);

btn.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
  if (e.code === 'Escape') closeModal();
});

overlay.addEventListener('click', closeModal);
