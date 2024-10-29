const answers = document.querySelectorAll('.answer')
const dropQuestions = document.querySelectorAll('.dropQuestion')
export function handleQuestions(){
    
    console.log('kjsdkf')
    answers.forEach(el => {
        el.classList.add('hide')
        console.log(el)
    })
}

handleQuestions()