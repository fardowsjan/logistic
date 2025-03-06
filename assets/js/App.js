const toggle=document.getElementById('toggle')
const top=document.querySelector('.top>.horizintal')
toggle.addEventListener('click' , ()=>{
    top.classlist.add('active')
})