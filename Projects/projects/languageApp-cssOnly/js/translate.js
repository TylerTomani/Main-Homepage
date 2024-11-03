const translateSentence = document.querySelector('.translate-sentence')
const translation = document.querySelector('.translation')
import { translateSentenceTextArea } from "./letterFocus.js";
import { translationTextArea } from "./letterFocus.js";
import { keys } from "./letterFocus.js";
const translateBtn = document.getElementById('translateBtn')
const pasteBtn = document.getElementById('pasteBtn')
addEventListener('keydown', e => {
    let letter = e.key.toLowerCase()
    if (letter == 'meta') {
        keys.cmd.pressed = true
    }
})

let lastTextArea,lastPlayBtn,lastLanguageBtn
translateSentenceTextArea.addEventListener('input', e => {
    console.log(e.target.value)
    if(e.target.value == ''){
        console.log(e.target)
        pasteBtn.classList.add('active')
    }
    else{
        console.log(e.target)
        pasteBtn.classList.remove('active')
    }
})
translateSentenceTextArea.addEventListener('focus', e => {
    if (e.target.value == '') {
        console.log(e.target)
        pasteBtn.classList.add('active')
    }
})
translateSentenceTextArea.addEventListener('focusout', e => {
    pasteBtn.classList.remove('active')
    
})
translateSentence.addEventListener('focusin', e => {
    translateBtn.classList.add('active')
})
translation.addEventListener('focusin', e => {
    translateBtn.classList.remove('active')
})
translateSentence.addEventListener('focusout', e => {
    // translateBtn.classList.remove('active')
})
translateSentenceTextArea.addEventListener('keyup', e => {
    keys.cmd.pressed = false
})
translateSentenceTextArea.addEventListener('keydown', e => {
    let letter = e.key.toLowerCase()
    if(keys.cmd.pressed && letter == 'enter'){
        translationTextArea.classList.add('active')      
        translationTextArea.focus()
    }
})
translationTextArea.addEventListener('keydown', e => {
    let letter = e.key.toLowerCase()
    if(keys.cmd.pressed && letter == 'enter'){
        translateSentenceTextArea.focus()
    }
})
translateBtn.addEventListener('click', e => {
    translationTextArea.classList.add('active')
    translationTextArea.focus()
    translateBtn.classList.remove('active')
})