export const translateSentenceTextArea = document.querySelector('.translate-sentence textarea');
export const translationTextArea = document.querySelector('.translation textarea');
// import { translateBtn } from "./translate.js";
const changeLangItems = document.querySelectorAll('.change-lang-container > *');
const playBtn = document.querySelector('#playBtn');
const playItems = document.querySelectorAll('.play-container > *');
const homelink = document.querySelector('#homelink');
let iChangeLangItems = 0;
let iPlayItems = 1 /** index of the playBtn */;
let textareaFocus = false;
let firstPress = true;  // Track first press of 'L'

let lastTextArea, lastPlayBtn, lastLanguageBtn

export const keys = {
    cmd: { pressed: false },
    shift: { pressed: false },
};
// Reset shift key on keyup
addEventListener('keyup', (e) => {
    if (e.key.toLowerCase() === 'shift') {
        keys.shift.pressed = false;
    }
});

// Navigation logic on keydown
addEventListener('keydown', (e) => {
    let letter = e.key.toLowerCase();
    if (letter === 'shift') {
        keys.shift.pressed = true;
    }
    if (!textareaFocus) {
        if (letter === 'h') {
            homelink.focus()
        }
        if (letter === 't') {
            scrollTo(0, 0);
            translateSentenceTextArea.focus();
        }
        ////////////  This below code could be cleaner
        
        
        ////////////////////////////////////////////////
    }
        
});

[translateSentenceTextArea,translationTextArea].forEach(el => {
    el.addEventListener('focus', e => {
        textareaFocus = true
    })
    el.addEventListener('focusout', e => {
        textareaFocus = false
    })
})
changeLangItems.forEach(el => {
    el.addEventListener('focus', e => {
        lastLanguageBtn = e.target
    })
})
playItems.forEach(el => {
    el.addEventListener('focus', e => {
        lastPlayBtn = e.target
    })
})

