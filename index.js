const bodyElm = document.querySelector('body');
bodyElm.style.backgroundColor = '#e9e9e9';

const news = document.querySelector('.news');
news.style.backgroundColor = 'white';
news.style.maxWidth = '60rem';


const title = document.querySelector('h1');
title.classList.add('news__title')
title.textContent = "Aktuální novinky";


const zprava = document.querySelector('#zprava1');
zprava.classList.add('post--main');

const imgLastPost = document.querySelector('#zprava3 img');
imgLastPost.src = 'img/zprava3-novy.jpg'




