'use strict';
const getClass = (className) => {
    return document.querySelector(className);
}
const modal = getClass('.modal');
const overlay = getClass('.overlay');
const btn = getClass('.close-modal');
const hidden = document.querySelectorAll('.hidden')
console.log(hidden);
// only select the first element
// const btns = document.querySelector('.show-modal');
const openModal = () => {
    // modal.style.display = 'block';
    // overlay.style.display = 'block';
    // modal.classList.remove('hidden');
    // overlay.classList.remove('hidden');
    for (const iterator of hidden) {
        iterator.display = 'block';
    }
}
const closeModal = () => {
    // modal.style.display = 'none';
    // overlay.style.display = 'none';
    for (const iterator of hidden) {
        iterator.display = 'none';
    }
}
const btns = document.querySelectorAll('.show-modal');
for (const iterator of btns) iterator.addEventListener('click', openModal);

btn.addEventListener('click', closeModal);


