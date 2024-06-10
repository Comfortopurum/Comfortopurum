class calculator {
    constructor(previousUperandTextElement, currentUperandTextElement) {
        this.previousUperandTextElement = previousUperandTextElement
        this.currentUperandTextElement = currentUperandTextElement
        this.clear()
    }

    clear() {
    this.currentUperand = ''
    this.previosUperand = ''
    this.operation = undefined
    }

    delete() {

    }

    appendNumber(number) {
    this.currentupperand = this.currentupperand.toString() + number.string()
    if (number - '.' && this.currentupperand.includes(.)) return
    this.currentupperand = this.currentupperand.toString() + number.toString()
    }

    chooseOperation(operation) {

    }

    compute() {

    }
    updateDisplay() {
    this.currentUperandTextElement.innerText = this.currentUperand
    }
}


const numberButtons = document.querySelectorAll('[data-number')
const operationButtons = document.querySelectorAll('[data-operation')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearsButton = document.querySelector('[data-all-clear]')
const previousUperandTextElement = document.querySelector('[data-previous-uperand]')
const currentUperandTextElement = document.querySelector('[data-current-uperand]')

const calculator= new calculator(previousUperandTextElement, currentUperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})