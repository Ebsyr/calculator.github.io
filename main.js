const result = document.querySelector('.result__span')
const numbers = document.querySelectorAll('.buttons__numbers-button')
const ac = document.querySelector('.buttons__ac')
const percent = document.querySelector('.buttons__per-cent')
const plus_minus = document.querySelector('.buttons__plus-minus')
const calculations = document.querySelectorAll('.calculations')
const equally = document.querySelector('.buttons__equally')
const comma = document.querySelector('.buttons__comma')

for(let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', () => {
        if (result.innerText.includes('+')) {
            result.innerText = ''
        }
        if (result.innerText.includes('-')) {
            result.innerText = ''
        }
        if (result.innerText.includes('×')) {
            result.innerText = ''
        }
        if (result.innerText.includes('÷')) {
            result.innerText = ''
        }
        if (result.getBoundingClientRect().width <= 336 && !(result.innerHTML == 0)) {
            result.innerText += numbers[i].innerHTML
        } else if (result.innerHTML == '-0.') {
            result.innerText = result.innerHTML + numbers[i].innerHTML
        } else if (result.innerHTML == '0.') {
            result.innerText = result.innerHTML + numbers[i].innerHTML
        } else if (result.innerHTML == '-0') {
            result.innerText = '-' + numbers[i].innerHTML
        } else if (result.innerHTML == 0) {
            result.innerText = numbers[i].innerHTML
        }
    })
}

percent.addEventListener('click', percentFunction)
function percentFunction() {
    result.innerText = result.innerHTML / 100
}

ac.addEventListener('click', clean)
function clean() {
    result.innerText = 0
    resultOfCalculations = ''
}

comma.addEventListener('click', () => {
    result.innerText = result.innerHTML + '.'
})

let resultOfCalculations = ''
for(let i = 0; i < calculations.length; i++) {
    calculations[i].addEventListener('click', () => {
        resultOfCalculations += result.innerHTML
        resultOfCalculations += calculations[i].value
        result.innerText = calculations[i].innerHTML
    })
}

equally.addEventListener('click', () => {
    resultOfCalculations += result.innerHTML
    result.innerText = eval(`${resultOfCalculations}`)
    resultOfCalculations = ''
})

plus_minus.addEventListener('click', plusMinusFunction)
let resultSpan
let resultWithoutMinus
function plusMinusFunction() {
    resultSpan = result.innerHTML
    if(resultSpan[0] != '-') {
        result.innerText = '-' + String(result.innerHTML)
    } else if(resultSpan[0] == '-') {
        for(let i = 1; i <= resultSpan.length - 1; i++) {
            resultWithoutMinus += resultSpan[i]
        }
        
        result.innerText = resultWithoutMinus
    }
    resultSpan = ''
    resultWithoutMinus = ''
}