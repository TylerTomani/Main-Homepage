const translateSentence = document.querySelector('.translate-sentence textarea')
const translation = document.querySelector('.translation textarea')



addEventListener('keydown', e => {
    let letter = e.key.toLowerCase()
    if(letter == 't'){
        console.log(translateSentence)
        translateSentence.focus()
    }
    
});
[translateSentence, translation].forEach(el => {

    el.addEventListener('focus', e => {
        scrollTo(0, 0)
    })
})