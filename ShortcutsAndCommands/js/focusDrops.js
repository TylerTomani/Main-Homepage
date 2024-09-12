const allIdEls = document.querySelectorAll('[id]')
const sectionTitles = document.querySelectorAll('.section-title')

addEventListener('keydown', e => {
   let letter = e.key.toLowerCase()
    allIdEls.forEach(el => {
        if(letter == el.id[0]){
            el.focus()
        }
    })
});

sectionTitles.forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault()
        const section = getSection(e.target.parentElement)
        const subSection = section.querySelector('.sub-section')
        toggleShow(subSection)
    })
    // el.addEventListener('keydown', e => {
    //     let letter = e.key.toLowerCase()
    //     if(letter == 'enter'){   
    //         const section = getSection(e.target.parentElement)
    //         const subSection = section.querySelector('.sub-section')
    //         toggleShow(subSection)
    //     }
    // })
})
function toggleShow(el){
    console.log(el)
    if(!el.classList.contains('hide')){
        el.classList.add('hide')
    } else {
        el.classList.remove('hide')
    }
}

function getSection(parent){
    if(parent.classList.contains('section')){
        return parent
    } else if (parent.parentElement){
        return getSection(parent.parentElement)
    } else {
        return null
    }
}