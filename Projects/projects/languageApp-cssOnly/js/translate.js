const translateSentence = document.querySelector('.translate-sentence')
import { translateSentenceTextArea } from "./letterFocus.js";
import { translationTextArea } from "./letterFocus.js";
import { keys } from "./letterFocus.js";
const translateBtn = document.getElementById('translateBtn')
addEventListener('keydown', e => {
    let letter = e.key.toLowerCase()
    if (letter == 'meta') {
        keys.cmd.pressed = true
    }
})
translateSentence.addEventListener('focusin', e => {
    translateBtn.classList.add('active')
})
translateSentence.addEventListener('focusout', e => {
    // translateBtn.classList.remove('active')
})
translateSentenceTextArea.addEventListener('keyup', e => {
    keys.cmd.pressed = false
})
translateSentenceTextArea.addEventListener('keydown', e => {
    let letter = e.key.toLowerCase()
    // console.log(letter)

    if(keys.cmd.pressed && letter == 'enter'){
        console.log('yes')
        translationTextArea.classList.add('active')      
        translationTextArea.focus()
    }
    
})
translationTextArea.addEventListener('keydown', e => {
    let letter = e.key.toLowerCase()
    // console.log(letter)
    
    if(keys.cmd.pressed && letter == 'enter'){
        console.log('yes')
        translateSentenceTextArea.focus()
    }
    
})
translateBtn.addEventListener('click', e => {
    // e.preventDefault()
    console.log('clicked')
    translationTextArea.classList.add('active')
    translationTextArea.focus()
    translateBtn.classList.remove('active')
})