export const toggleDraggable = document.querySelector('#toggleSideBtn')
import { mainTargetDiv } from "./questionsLoad.js"
const allIdEls = document.querySelectorAll('[id]')
// iLetter is index to increment up thru letterIds
let iLetter
let currentLetter
let currentEl
let currentResourceFocus = false
let letterIds = []
let lastIndex, nextIndex
let mainTargetDivFocused = false
addEventListener('DOMContentLoaded', e => {

})
mainTargetDiv.addEventListener('focus', e => {
    mainTargetDivFocused = true
})
addEventListener('keydown', e => {
    let letter = e.key.toLowerCase()
    switch (letter){
        case 'a':
            toggleDraggable.focus()
            break
        case 'm':
            mainTargetDiv.focus()
            break
    }
    /** Slight problem, when Freecodecamp is collapsed, pressing the 'f' key 
     * does not go to the next element showing which right now is FHIR
     */
    
    letterIds = []
    if(letter == 'h'){
        scrollTo(0,0)
    }
    
        
    allIdEls.forEach(el => {
        if (letter == el.id[0].toLowerCase() && !el.classList.contains('hide')) {
            letterIds.push(el)
        }
    })
    // console.log(letterIds)
    if(letterIds){
        if (currentLetter == letter ) {
            iLetter = (iLetter + 1) % letterIds.length
            if(letterIds[iLetter])
            letterIds[iLetter].focus()
            
        } else if (letterIds.length > 0) {
            iLetter = 0
            letterIds[0].focus()
        }
    }
    currentLetter = letter
    currentEl = e.target
});

