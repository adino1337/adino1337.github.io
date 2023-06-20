const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
        if(entry.isIntersecting)
            entry.target.classList.add("show")
    })
})

const barObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
        if(entry.isIntersecting)
            entry.target.classList.add("show-bar")
    })
})



setTimeout(() => {
    const hiddenElements = document.querySelectorAll('.hidden')
    hiddenElements.forEach(element => {
        observer.observe(element)
    });  

    const hiddenProjects = document.querySelectorAll('.project')
    hiddenProjects.forEach(element => {
        observer.observe(element)
    });  

    setTimeout(() => {
        const hiddenLink = document.querySelectorAll('.hidden-link')
        hiddenLink.forEach(element => {
        observer.observe(element)
    });
    }, 1500); 

}, 1500);

setTimeout(() => {
    const hiddenBars = document.querySelectorAll('.progress-bar')
    hiddenBars.forEach(element => {
        barObserver.observe(element)
    });
}, 3000);

