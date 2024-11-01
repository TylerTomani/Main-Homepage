const homelink = document.getElementById('homelink')
const from = document.getElementById('from')
const to = document.getElementById('to')
const invoiceNum = document.querySelector('#invoice_num > #number_label')
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
        scrollTo(0,0)
        invoiceNum.focus()
    }
    if(letter == 't'){
        scrollTo(0,0)
        to.focus()
    }
    
});