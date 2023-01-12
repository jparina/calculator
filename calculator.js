let display = document.getElementById('display')
let lastPressedEqual = false

let operators = ['+', '-', '/', '*']
let buttons = Array.from(document.getElementsByClassName('button'))

buttons.map(button => {
  button.addEventListener("click", (e) => {
    switch(e.target.innerText) {
      case 'C':
        display.innerText = ''
        break
      case '=':
        lastPressedEqual = true
        try {
          display.innerText = eval(display.innerText)
          ans = display.innerText
        }
        catch {
          display.innerText = 'Error'
        }
        break
      default:
        if (display.innerText == 'Error' || lastPressedEqual == true) {
          display.innerText = ''
          lastPressedEqual = false
        }
        
        display.innerText += e.target.innerText
    }
  })
})