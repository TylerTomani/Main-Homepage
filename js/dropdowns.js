const allEls = document.querySelectorAll('body *') 
const dropResources = document.querySelectorAll('.dropResource')
const topics = document.querySelectorAll('.topic')
const topicsContainers = document.querySelectorAll('.topics-container')
const dropSections = document.querySelectorAll('.drop-section')
let allIdEls = []
let sorted = [] 
function hideShowTopicsContainers(){
    topicsContainers.forEach(el =>{
        if(!el.classList.contains('show')){
            el.classList.add('hide')
            const topics = el.querySelectorAll('.topic')
            topics.forEach(el =>{
                el.classList.add('hide')
            })
        }
    })
}
hideShowTopicsContainers()
function hideTopicsContainers(){
    topicsContainers.forEach(el =>{
        if(el.classList.contains('show')){
            el.classList.remove('show')
            el.classList.add('hide')

        }
        el.classList.add('hide')
    })
}
dropResources.forEach(el =>{
    el.addEventListener('click', e =>{
        e.preventDefault()
        const resourcesContainer = getResourcesContainer(e.target.parentElement)
        const rContainer = getResourceContainer(e.target.parentElement)
        const tContainer = rContainer.querySelector('.topics-container')
        const topics = tContainer.querySelectorAll('.topic')
        toggleTopicsContainer(e)
    })
    el.addEventListener('keydown', e =>{
        let key = e.keyCode
        // if(key === 13){   
        //     toggleTopicsContainer(e)
        // }
    })
})
function toggleTopicsContainer(e){
    const resourcesContainer = getResourcesContainer(e.target.parentElement)
    const rContainer = getResourceContainer(e.target.parentElement)
    const tContainer = rContainer.querySelector('.topics-container')
    const topics = tContainer.querySelectorAll('.topic')
    if(tContainer.classList.contains('hide')){
        resourcesContainer.classList.add('fcol')
        // hideTopicsContainers()
        topics.forEach(el =>{
            el.classList.remove('hide')
        })
        tContainer.classList.remove('hide')
    } else {
        tContainer.classList.add('hide')
        topics.forEach(el =>{
            el.classList.add('hide')
        })
        resourcesContainer.classList.remove('fcol')
    }
}
dropSections.forEach(el => {
    el.addEventListener('click', e => {
        const section = getSection(e.target.parentElement)
        const resourcesContainer = section.querySelector('.resources-container')
        resourcesContainer.classList.toggle('hide')

    })
})
function getSection(parent){
    if(parent.classList.contains('section')){
        return parent
    } else if (parent.parentElement){
        return getSection(parent.parentElement)
    } else {
        return null
    }
}
function getResourcesContainer(parent){
    if(parent.classList.contains('resources-container')){
        return parent
    } else if (parent.parentElement){
        return getResourcesContainer(parent.parentElement)
    } else {
        return null
    }
}
function getResourceContainer(parent){
    if(parent.classList.contains('resource-container')){
        return parent
    } else if (parent.parentElement){
        return getResourceContainer(parent.parentElement)
    } else {
        return null
    }
}
