const translateSentence = document.querySelector('.translate-sentence textarea')
const translation = document.querySelector('.translation textarea')

let textareaFocus = false


addEventListener('keydown', e => {
    let letter = e.key.toLowerCase()
    if(!textareaFocus){

        if(letter == 't'){
            console.log(translateSentence)
            translateSentence.focus()
        }
    }
    
});
[translateSentence, translation].forEach(el => {
    el.addEventListener('focus', e => {
        scrollTo(0, 0)
        textareaFocus = true
    })
    el.addEventListener('focusout', e => {
        scrollTo(0, 0)
        textareaFocus = false
    })
})