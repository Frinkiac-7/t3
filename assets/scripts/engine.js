const store = require('./store')
const api = require('./api')
const ui = require('./ui')
// const events = require('./events')

// Sole purpose is for the while loop in playerMove to determine if there are
// any moves available
// let gameArray = ['!', '!', '!', '!', '!', '!', '!', '!', '!']

// Keep track of whose turn it is.  Even numbers are X, odd numbers are O
let moveCount = 0

// Main game logic repository
const setBoard = function () {
  console.log('engine.setBoard invoked')
  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
      $('#gridPos').attr('id', '#gridPos' + x + y)
      $('.box').text('PICK ME')
      $('.box').css('pointer-events', 'auto')
    }
  }
}

// Originally designed when game API wasn't clear during project.  Remains as a
// useful tool for the win checking functions and translation between div id
// and API array index
const gameObject = {
  'gridPos00': {
    'arrayIndex': 0
  },
  'gridPos01': {
    'arrayIndex': 1
  },
  'gridPos02': {
    'arrayIndex': 2
  },
  'gridPos10': {
    'arrayIndex': 3
  },
  'gridPos11': {
    'arrayIndex': 4
  },
  'gridPos12': {
    'arrayIndex': 5
  },
  'gridPos20': {
    'arrayIndex': 6
  },
  'gridPos21': {
    'arrayIndex': 7
  },
  'gridPos22': {
    'arrayIndex': 8
  }
}

// Invoke the game result determining functions
const checkForWin = function (index, player) {
  checkDiagonal()
  checkHorizontalGrid()
  checkVerticalGrid()
  if (moveCount > 8) {
    $('#message').text('A DRAW!?!?!  BOOOOO!!! You better click the "Start New Game" to try again!')
    $('#game-board').slideUp('slow')
    moveCount = 0
    const data = api.prepAPIData()
    api.updateGameAPI(data)
  }
}

// call back function for the game result checking functions
const isX = function (str) {
  str = 'X'
}

// call back function for the game result checking functions
const isO = function (element) {
  if (element === 'O') {
    return true
  }
}

// Check the diagonals for win by X or O
const checkDiagonal = function () {
  if (store.game.cells[0] === 'X' && store.game.cells[4] === 'X' && store.game.cells[8] === 'X') {
    ui.declareWinner('X')
    moveCount = 0
    const data = api.prepAPIData()
    api.updateGameAPI(data)
  }
  if (store.game.cells[6] === 'X' && store.game.cells[4] === 'X' && store.game.cells[2] === 'X') {
    ui.declareWinner('X')
    moveCount = 0
    const data = api.prepAPIData()
    api.updateGameAPI(data)
  }
  if (store.game.cells[0] === 'O' && store.game.cells[4] === 'O' && store.game.cells[8] === 'O') {
    ui.declareWinner('O')
    moveCount = 0
    const data = api.prepAPIData()
    api.updateGameAPI(data)
  }
  if (store.game.cells[6] === 'O' && store.game.cells[4] === 'O' && store.game.cells[2] === 'O') {
    ui.declareWinner('O')
    moveCount = 0
    const data = api.prepAPIData()
    api.updateGameAPI(data)
  }
}

// Check the rows for win by X or O
const checkHorizontalGrid = function () {
  let row = ''
  for (let i = 0; i < 9; i += 3) {
    for (let a = i; a < i + 3; a++) {
      row += store.game.cells[a]
    }
    if (row === 'XXX') {
      ui.declareWinner('X')
      moveCount = 0
      const data = api.prepAPIData()
      api.updateGameAPI(data)
      row = ''
      return
    } else if (row === 'OOO') {
      ui.declareWinner('O')
      moveCount = 0
      const data = api.prepAPIData()
      api.updateGameAPI(data)
      row = ''
      return
    } else {
      row = ''
    }
  }
}

// Check the columns for win by X or O
const checkVerticalGrid = function () {
  let row = ''
  for (let i = 0; i < 9; i++) {
    for (let a = i; a < i + 7; a += 3) {
      row += store.game.cells[a]
    }
    if (row === 'XXX') {
      ui.declareWinner('X')
      moveCount = 0
      const data = api.prepAPIData()
      api.updateGameAPI(data)
      row = ''
      return
    } else if (row === 'OOO') {
      ui.declareWinner('O')
      moveCount = 0
      const data = api.prepAPIData()
      api.updateGameAPI(data)
      row = ''
      return
    } else {
      row = ''
    }
  }
}

const playerMove = function (gridPos) {
  const index = gameObject[gridPos].arrayIndex
  if (store.game.cells[index] === '') {
    if (isEven(moveCount)) {
      const player = 'X'
      store.game.cells[index] = player
      const data = {
        'game': {
          'cell': {
            'index': index,
            'value': player,
            'over': false
          }
        }
      }
      moveCount++
      api.updateGameAPI(data)
        .then($('#' + gridPos).text(player))
    } else {
      const player = 'O'
      if (store.game.cells[index] === '') {
        store.game.cells[index] = player
        const data = {
          'game': {
            'cell': {
              'index': index,
              'value': player,
              'over': false
            }
          }
        }
        moveCount++
        api.updateGameAPI(data)
        $('#' + gridPos).text(player)
      }
    }
  } else {
    $('#' + gridPos).text(`D'OH! Space is taken by ${store.game.cells[index]}`)
  }
  if (moveCount > 4) {
    checkForWin()
  }
}

const isEven = function (num) {
  // Pretty self explanatory.  Checks to see if moveCount is odd or even
  // Even moveCounts identify X, odd moveCount identify O
  if (num % 2 === 0) {
    return true
  } else {
    return false
  }
}

const recordMove = function (index, player, gridPos) {
  // Check if the selected grid position is available ('' means available)
  if (store.game.cells[index] === '') {
    store.game.cells[index] = player
    const data = {
      'game': {
        'cell': {
          'index': index,
          'value': player,
          'over': false
        }
      }
    }
    api.updateGameAPI(data)
    $('#' + gridPos).text(player)
  } else { // Will only execute if grid position is anything but "!"
    // Reduce moveCount to allow current player to try again
    if (isEven(moveCount)) {
      player = 'O'
    } else {
      player = 'X'
    }
    --moveCount
    // Update the DOM to let current player know who already owns that square
    $('#' + gridPos).text('D\'OH!!! Player ' + player + ' already picked this square!')
  }
}

// const checkForWin = function (gameArray) {

module.exports = {
  isX,
  isO,
  checkDiagonal,
  checkVerticalGrid,
  checkHorizontalGrid,
  checkForWin,
  recordMove,
  isEven,
  playerMove,
  setBoard
}
