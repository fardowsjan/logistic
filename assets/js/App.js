const toggle=document.getElementById('toggle')
const menu=document.querySelector('.top>ul')
toggle.addEventListener('click' , ()=>{
    menu.classList.add('active')
})

const btnclose=document.getElementById('close')
btnclose.addEventListener('click' , ()=>{
    menu.classList.remove('active')
})