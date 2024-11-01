import { allEls } from "./letterFocus-invoice.js";
const myInvoicePage = document.getElementById('invoicePage')
const listPage = document.getElementById('listPage')
addEventListener('keydown', e => {
    let letter = e.key.toLowerCase()
    if(letter == 'i'){
        myInvoicePage.focus()
    }
    if(letter == 'l'){
        listPage.focus()
    }
    

});