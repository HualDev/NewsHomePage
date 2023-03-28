let menu = document.getElementById('menu')
let showMenu = document.getElementById('showMenu')
let body = document.getElementById('body')
let close = document.getElementById('close')


showMenu.addEventListener('click',()=>{
    menu.style.display='block'
    body.style.backgroundColor='hsl(236, 13%, 42%)'
})

close.addEventListener('click',()=>{
    menu.style.display='none'
    body.style.backgroundColor='hsl(36, 100%, 99%)'
})