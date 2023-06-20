const projects = document.querySelectorAll('.project')

projects.forEach(project => {
    project.addEventListener('mouseenter',()=>{
        const text = project.querySelector('.cardText')
        text.classList.add('showCard')
    })
    project.addEventListener('mouseleave',()=>{
        const text = project.querySelector('.cardText')
        text.classList.remove('showCard')
    })
})