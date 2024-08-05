const bar = document.getElementById('menu-btn');
const close = document.getElementById('close-btn');
const nav = document.getElementById('navbar');
const searchIcon = document.querySelector(".fa-multiply");
const searchBtn = document.querySelector('.searchBtn');
const closeSearch = document.querySelector('.search-toggle');
const searchBox = document.querySelector('.search-box');

if (bar) {
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
}

// if (searchIcon) {
//     searchIcon.addEventListener('click', () =>{
//         searchBox.classList.add('active');
//     })
// }

// if (closeSearch) {
//     closeSearch.addEventListener('click', () =>{
//         searchBox.classList.ee('active');
//     })
// }

// searchIcon.addEventListener("mouseover", function () {
//     searchIcon.classList.replace("fa-multiply", "fa-minus");
// });

// searchIcon.addEventListener("mouseout", function () {
//     searchIcon.classList.replace("fa-minus", "fa-multiply");
// });

// searchBtn.onclick = function(){
//       searchBox.classList.add('active');
// }

// closeSearch.onclick = function(){
//       searchBox.classList.remove('active');
// }
