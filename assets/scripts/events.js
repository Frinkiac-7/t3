const getFormFields = require('../../lib/get-form-fields')
const engine = require('./engine')

// const ui = require('./ui')

const onClick = function (event) {
  event.preventDefault()
  console.log('onClick invoked')
  playerMove()
}

const playerMove = function () {
  console.log('playerMove function executed')
  console.log('engine.moveCount is', engine.moveCount)
  while (engine.moveCount < 9) {
    console.log('playerMove while loop invoked')
    if (isEven(engine.moveCount)) {
      console.log('engine.moveCount is EVEN')
      const player = 'X'
      recordMove(player)
      engine.moveCount++
      return
    } else {
      console.log('engine.moveCount is ODD')
      const player = 'O'
      recordMove(player)
      engine.moveCount++
      return
    }
  }
}

const isEven = function (num) {
  console.log('isEven function invoked')
  if (num % 2 === 0) {
    return true
  } else {
    return false
  }
}

const recordMove = function (player) {
  console.log('recordMove function invoked')
  console.log('player is', player)
  for (let i = 0; i < 9; i++) {
    console.log('i is', i)
    const gridPos = 'gridPos' + i
    console.log('gridPos is', gridPos)
    console.log('gameBoard is AT START is', engine.gameBoard)
    if (event.target.id === gridPos) {
      console.log('event.target.id ' + event.target.id + ' matches ' + gridPos)
      if (engine.gameBoard[i] === '!') {
        console.log('engine.gameBoard[' + i + '] is ' + engine.gameBoard[i])
        engine.gameBoard[i] = player
        console.log('engine.gameBoard[' + i + '] has been changed to ' + engine.gameBoard[i])
        console.log('player ' + player + ' chose ' + gridPos)
        console.log('gameBoard is NOW', engine.gameBoard)
        $('#' + gridPos).text('NOT AVAILABLE - taken by', player)
        return
      } /* else {
        $('#' + gridPos).text('THIS SQUARE WAS TAKEN BY PLAYER', player)
      } */
      return
    }
  }
}

const onGuess = function (event) {
  event.preventDefault()
  const userForm = getFormFields(event.target)
  console.log('Submit event invoked. userform is ', userForm)
}

module.exports = {
  onGuess,
  onClick,
  isEven
}
