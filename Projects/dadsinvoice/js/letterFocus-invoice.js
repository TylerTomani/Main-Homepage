import { homelink } from "./letterfocus-index.js"

const from = document.getElementById('from')
const to = document.getElementById('to')
const invoiceNum = document.querySelector('#invoice_num > #number_label')
const itemsContainer = document.querySelector('#items-container')
const allEls = document.querySelectorAll('body *')

allEls.forEach(el => {
    el.addEventListener('focus', e => {
        // console.log(e.target)
    })
})

addEventListener('keydown', e => {
    let letter = e.key.toLowerCase()
    if(letter == 'f'){
        scrollTo(0,0)
        from.focus()
    }
    if(letter == 'h'){
        scrollTo(0,0)
        homelink.focus()
    }
    if(letter == 'i'){
        if(e.target == invoiceNum){
            console.log('invoice')
            scrollTo(0,0)
            invoiceNum.focus()
        } else if (e.target == itemsContainer){
            console.log('items')

        }
    }
    if(letter == 't'){
        scrollTo(0,0)
        to.focus()
    }
    
});