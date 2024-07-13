let men = document.querySelector('.men')
let close = document.querySelector('.close')
let open = document.querySelector('.menu')
let body = document.querySelector('body')

open.addEventListener('click' , function ()  {
    men.classList.add("hey");
    body.style.background = 'hsl(233, 8%, 79%)'
})
close.addEventListener('click' , function () {
    men.classList.remove("hey");
    body.style.background ='hsl(36, 100%, 99%)'
  });