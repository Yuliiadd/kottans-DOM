'use strict'

import dataObj from "./base.js";

// оголошення змінних

const parent = document.querySelector('.main');
const title = document.querySelector('.title__chapter');
const description = document.querySelector('.description');
const nav_items = document.querySelectorAll('.nav__item');
const section = document.querySelector('.section');
const btn_kottans = document.querySelector('.btn');

let currentDesc = description.textContent;
let currentTitle = title.textContent;
 
// Функції

nav_items.forEach(item => {
    item.addEventListener('click', getCurrentContent);
});

function getCurrentContent(e) {
console.log(e);
currentTitle = e.target.innerText;
currentDesc = dataObj[currentTitle];
console.log(currentDesc);
changePage(currentDesc, currentTitle)
};

function changePage(currentDesc, currentTitle) {

title.textContent = currentTitle;
description.innerHTML = currentDesc;
// btn_kottans.classList.add('hidden');
btn_kottans.innerHTML = `<a class="btn" href="#">На головну</a>`;

// const checkArea = document.createElement('div');
// checkArea.innerHTML = `
//     <label>
//         <input type="checkbox" />
//             <span class="checkbox">
//             </span>
//     </label>
//     <span class="done">Пройдено</span>`;
//     section.append(checkArea);
//     checkArea.style.display = 'grid';
//     checkArea.style.justifyItems = 'center';

};

