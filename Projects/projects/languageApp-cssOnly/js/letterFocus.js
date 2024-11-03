export const translateSentenceTextArea = document.querySelector('.translate-sentence textarea');
export const translationTextArea = document.querySelector('.translation textarea');
const changeLangItems = document.querySelectorAll('.change-lang-container > *');
const playBtn = document.querySelector('#playBtn');
const playItems = document.querySelectorAll('.play-container > *');
const homelink = document.querySelector('#homelink');
let iChangeLangItems = 0;
let iPlayItems = 1 /** index of the playBtn */;
let textareaFocus = false;
let firstPress = true;  // Track first press of 'L'

export const keys = {
    cmd: { pressed: false },
    shift: { pressed: false },
};
let debounceTimeout;

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
        ////////////  The below focus is not working properly for 'p' and 'l'
        if(letter == 'p'){
            if (keys.shift.pressed) {
                // Navigate backward
                iPlayItems = (iPlayItems + playItems.length - 1) % playItems.length;
            } else {
                // Navigate forward
                iPlayItems = (iPlayItems + 1) % playItems.length;
            }
            playItems[iPlayItems].focus();
            console.log(iPlayItems);
        }
        if (letter === 'l') {
            if (firstPress) {
                iChangeLangItems = 0;  // Start at the first item
                firstPress = false;     // Disable first press tracking
            } else if (keys.shift.pressed) {
                // Navigate backward
                iChangeLangItems = (iChangeLangItems + changeLangItems.length - 1) % changeLangItems.length;
            } else {
                // Navigate forward
                iChangeLangItems = (iChangeLangItems + 1) % changeLangItems.length;
            }
            changeLangItems[iChangeLangItems].focus();
            console.log(iChangeLangItems);
        }
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