let main = document.querySelector('main')
let cursor = document.querySelector('.cursor')


for (let index = 0; index < 150; index++) {
    let span = document.createElement('span')
    main.appendChild(span)

    
}

main.addEventListener('mousemove',(e)=>{

    cursor.style.left = e.clientX+'px '
    cursor.style.top = e.clientY+'px '

})