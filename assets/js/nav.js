const navOpen = document.getElementById('navOpen')
const navClose = document.getElementById('navClose')
const nav = document.getElementById('nav')

//resizing bug solved
window.addEventListener('resize',()=>{
    if(window.innerWidth > 1350)
        nav.style.display = "flex"
})

navOpen.addEventListener('click',()=>{
    nav.style.display = "flex"    
})

navClose.addEventListener('click',()=>{
    nav.style.display = "none"
})




setTimeout(() => {   
    const hiddenNavIcons = document.querySelectorAll('.nav-item-hidden')    
      hiddenNavIcons.forEach(icon => {
            icon.classList.add("nav-item-show")
    })    
}, 2500);
