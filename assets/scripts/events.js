const getFormFields = require('../../lib/get-form-fields')
const engine = require('./engine')

// const ui = require('./ui')

const onGuess = function (event) {
  event.preventDefault()
  const userForm = getFormFields(event.target)
  console.log('Submit event invoked. userform is ', userForm)
}

const playerMove = function () {
  console.log('playerMove function executed')
  for (let i = 0; i < 9; i++) {
    const gridPos = 'gridPos' + i
    console.log('engine.gameBoard is', engine.gameBoard)
    if (event.target.id === gridPos) {
      if (engine.gameBoard[i] === '!') {
        engine.gameBoard[i] = 'X'
        $('#' + gridPos).text('NOT AVAILABLE')
      } else {
        $('#' + gridPos).text('I SAID IT IS NOT AVAILABLE')
        // Consider a modal warning if legit by project rules
        console.log('ERROR:  engine.gameBoard[' + i + '] is already set to', engine.gameBoard[i])
      }
    }
  }
}

const onClick = function (event) {
  event.preventDefault()
  let i = 0
  while (i < 9) {
    console.log('i is', i)
    i++
    playerMove()
  }
}

module.exports = {
  onGuess,
  onClick
}
