let show = document.getElementById('interactive')
let nav = document.querySelector('.nav')
let open = document.querySelector('#open')
let close = document.querySelector('.close')



open.addEventListener('click', () =>{
    
        nav.classList.add('mode')
    
   
})

close.addEventListener('click', () =>{
    nav.classList.remove('mode')
})