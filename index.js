// let userFirst = document.querySelector('#alex')
let userFirst = document.getElementById('alex')
console.log(userFirst);
let userSecond = document.querySelector('.amal')
// let userSecond = document.querySelectorAll('.amal')
// let userSecond = document.getElementsByClassName('amal')
console.log(userSecond);

userFirst.style.fontSize = 32 + 'px'

userSecond.innerText = 'Roma'

let wrapper = document.querySelector('.wrapper')
console.log(wrapper.innerHTML);
// wrapper.outerHTML = `<div class="wrapper">
// <h1 class="amal">Amal</h1>
// </div>`
console.log(wrapper);

let btn = document.querySelector('.btn')
console.log(wrapper.getAttribute('class'));
btn.setAttribute('id', 123)
btn.onclick = () => {
    let et = event.currentTarget
    console.log(et.getAttribute('id'));
    btn.style.backgroundColor = 'red'
    wrapper.classList.toggle('wrapper1') // добавляет если класса нет и убирает класс если он есть
}

// console.log(wrapper.firstElementChild.nextElementSibling);

// wrapper.classList.add('wrapper1') добавляет класс
// wrapper.classList.remove('wrapper1')  убирает класс
// wrapper.classList.toggle('wrapper1')  добавляет если класса нет и убирает класс если он есть
var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });