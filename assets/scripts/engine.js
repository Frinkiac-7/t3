let gameBoard = ['!', '!', '!', '!', '!', '!', '!', '!', '!']
let moveCount = 0

const playerMove = function () {
  console.log('playerMove function executed')
  console.log('engine.moveCount is', moveCount)
  while (gameBoard.includes('!')) {
    console.log('playerMove while loop invoked')
    if (isEven(moveCount)) {
      console.log('engine.moveCount is EVEN')
      const player = 'X'
      recordMove(player)
      moveCount++
      return
    } else {
      console.log('engine.moveCount is ODD')
      const player = 'O'
      recordMove(player)
      moveCount++
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
  for (let i = 0; i < gameBoard.length; i++) {
    console.log('i is', i)
    const gridPos = 'gridPos' + i
    console.log('gridPos is', gridPos)
    console.log('gameBoard is AT START is', gameBoard)
    if (event.target.id === gridPos) {
      console.log('event.target.id ' + event.target.id + ' matches ' + gridPos)
      if (gameBoard[i] === '!') {
        console.log('engine.gameBoard[' + i + '] is ' + gameBoard[i])
        gameBoard[i] = player
        console.log('engine.gameBoard[' + i + '] has been changed to ' + gameBoard[i])
        console.log('player ' + player + ' chose ' + gridPos)
        console.log('gameBoard is NOW', gameBoard)
        $('#' + gridPos).text(player + ' takes the square')
        return
      } else if (gameBoard[i] === 'X' || 'O') {
        let strLength = gridPos.length
        const owner = gridPos.slice(--strLength)
        const square = gameBoard[owner]
        // $('#' + gridPos).text('I said it\'s NOT AVAILABLE - taken by', owner)
        $('#' + gridPos).text(`I said it's NOT AVAILABLE - taken by ${square}`)
        $('h2').text('Try again, dingbat!')
        --moveCount
        return
      }
    }
  }
}

const checkForWin = function () {

}

module.exports = {
  checkForWin,
  recordMove,
  isEven,
  playerMove,
  gameBoard
}
