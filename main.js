'use strict'

import dataObj from "./base.js";

// оголошення змінних

const title = document.querySelector('.title__chapter');
const description = document.querySelector('.description');
const nav_items = document.querySelectorAll('.nav__item');
const btn = document.querySelector('.btn');
const buttonsDiv = document.querySelector('.buttons');
const btn__home = document.querySelector('.home__btn');
const checkboxes = document.querySelectorAll('.checkbox');
const progressDig = document.querySelector('.progress__dig');
const progressLine = document.querySelector('.progress');


let currentDesc = description.textContent;
let currentTitle = title.textContent;
let progressMax = checkboxes.length;

 
// event listeners

nav_items.forEach(item => {
    item.addEventListener('click', getCurrentContent);
});

btn__home.addEventListener('click', () => {
nav_items.forEach(item => {
    item.classList.remove('selected');
}); 
title.textContent = "Welcome to Kottans!";
description.innerHTML = "We are community of developers who love to code and help each other.The course contains basics of front-end development: HTML, CSS, JavaScript, TypeScript and front-end frameworks. We plan to decrease the amount of lectures in favor of collective discussions, team projects & collective work. Nevertheless, doing that on one's own can be challenging when it comes to continuing without support from surrounding people, such situation really beats the motivation, especially when encountering either boring or impossible to do (at first glance) task or illogical aspect of programming language you can't just grasp.";
btn.style.display = "flex";
buttonsDiv.style.display = 'none';
});

checkboxes.forEach(item => {
    item.addEventListener('click', calcProgress);
});


// functions declaration

function getCurrentContent(e) {
nav_items.forEach(item => {
item.classList.remove('selected');
}); 
console.log(e.target);

if (e.path.length == 10) {
    e.target.parentElement.classList.add('selected');    
} else {
    e.target.classList.add('selected');  
}
currentTitle = e.target.innerText;
currentDesc = dataObj[currentTitle];
changePage(currentDesc, currentTitle)
};

function changePage(currentDesc, currentTitle) {
title.textContent = currentTitle;
description.innerHTML = currentDesc;
btn.style.display = "none";
buttonsDiv.style.display = 'flex';

};

function calcProgress(event) {
    let currentProgress = 0;
    checkboxes.forEach(item => {
        if (item.checked) {
            currentProgress++;
        } 
    });

progressDig.textContent = Math.floor((currentProgress / progressMax * 100)) + "%";
progressLine.style.width = Math.floor((currentProgress / progressMax * 100)) + "%";

}

