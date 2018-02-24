const store = require('./store')
const api = require('./api')
// const events = require('./events')

// Sole purpose is for the while loop in playerMove to determine if there are
// any moves available
// let gameArray = ['!', '!', '!', '!', '!', '!', '!', '!', '!']

// Keep track of whose turn it is.  Even numbers are X, odd numbers are O
let moveCount = 0

// Main game logic repository
const setBoard = function () {
  $('#game-board').slideDown('slow')
  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
      $('#gridPos' + x + y).text('PICK ME')
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
  checkRow()
  checkCol()
  // if (store.game.over === 'false') {
  // } else if (store.game.over === 'false') {
  // } else if (store.game.over === 'false') {
  // } else {
  if (moveCount > 8) {
    $('#message').text('LINE 65: A DRAW!?!?!  BOOOOO!!! You better click the "Start New Game" to try again!')
    $('#game-board').slideUp('slow')
    moveCount = 0
    const index = 0
    const player = store.game.cells[0]
    const data = {
      'game': {
        'cell': {
          'index': index,
          'value': player
        },
        'over': true
      }
    }
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
  let testArray = [store.game.cells[0], store.game.cells[4], store.game.cells[8]]
  if (store.game.cells[0] === 'X' && store.game.cells[4] === 'X' && store.game.cells[8] === 'X') {
    $('#message').text('LINE 99: X WINS!!! Click the "Start New Game" to play again!')
    $('#game-board').slideUp('slow')
    moveCount = 0
    const index = 0
    const player = store.game.cells[0]
    const data = {
      'game': {
        'cell': {
          'index': index,
          'value': player
        },
        'over': true
      }
    }
    api.updateGameAPI(data)
  }
  testArray = [store.game.cells[6], store.game.cells[4], store.game.cells[2]]
  if (store.game.cells[6] === 'X' && store.game.cells[4] === 'X' && store.game.cells[2] === 'X') {
    $('#message').text('LINE 117: X WINS!!! Click the "Start New Game" to play again!')
    $('#game-board').slideUp('slow')
    moveCount = 0
    const index = 0
    const player = store.game.cells[0]
    const data = {
      'game': {
        'cell': {
          'index': index,
          'value': player
        },
        'over': true
      }
    }
    api.updateGameAPI(data)
  }
  testArray = [store.game.cells[0], store.game.cells[4], store.game.cells[8]]
  if (store.game.cells[0] === 'O' && store.game.cells[4] === 'O' && store.game.cells[8] === 'O') {
    $('#message').text('LINE 135: O WINS!!! Click the "Start New Game" to play again!')
    $('#game-board').slideUp('slow')
    moveCount = 0
    const index = 0
    const player = store.game.cells[0]
    const data = {
      'game': {
        'cell': {
          'index': index,
          'value': player
        },
        'over': true
      }
    }
    api.updateGameAPI(data)
  }
  testArray = [store.game.cells[6], store.game.cells[4], store.game.cells[2]]
  if (store.game.cells[6] === 'O' && store.game.cells[4] === 'O' && store.game.cells[2] === 'O') {
    $('#message').text('LINE 153: O WINS!!! Click the "Start New Game" to play again!')
    $('#game-board').slideUp('slow')
    moveCount = 0
    const index = 0
    const player = store.game.cells[0]
    const data = {
      'game': {
        'cell': {
          'index': index,
          'value': player
        },
        'over': true
      }
    }
    api.updateGameAPI(data)
  }
}

// Check the rows for win by X or O
const checkRow = function () {
  // testArray simply stores the values of each row
  let testArray = [store.game.cells[0], store.game.cells[1], store.game.cells[2]]
  if (store.game.cells[0] === 'X' && store.game.cells[1] === 'X' && store.game.cells[2] === 'X') {
    $('#message').text('LINE 176: X WINS!!! Click the "Start New Game" to play again!')
    $('#game-board').slideUp('slow')
    moveCount = 0
    const index = 0
    const player = store.game.cells[0]
    const data = {
      'game': {
        'cell': {
          'index': index,
          'value': player
        },
        'over': true
      }
    }
    api.updateGameAPI(data)
  }
  testArray = [store.game.cells[3], store.game.cells[4], store.game.cells[5]]
  if (store.game.cells[3] === 'X' && store.game.cells[4] === 'X' && store.game.cells[5] === 'X') {
    $('#message').text('LINE 194: X WINS!!! Click the "Start New Game" to play again!')
    $('#game-board').slideUp('slow')
    moveCount = 0
    const index = 0
    const player = store.game.cells[0]
    const data = {
      'game': {
        'cell': {
          'index': index,
          'value': player
        },
        'over': true
      }
    }
    api.updateGameAPI(data)
  }
  testArray = [store.game.cells[6], store.game.cells[7], store.game.cells[8]]
  if (store.game.cells[6] === 'X' && store.game.cells[7] === 'X' && store.game.cells[8] === 'X') {
    $('#message').text('LINE 212: X WINS!!! Click the "Start New Game" to play again!')
    $('#game-board').slideUp('slow')
    moveCount = 0
    const index = 0
    const player = store.game.cells[0]
    const data = {
      'game': {
        'cell': {
          'index': index,
          'value': player
        },
        'over': true
      }
    }
    api.updateGameAPI(data)
  }
  testArray = [store.game.cells[0], store.game.cells[1], store.game.cells[2]]
  if (store.game.cells[0] === 'O' && store.game.cells[1] === 'O' && store.game.cells[2] === 'O') {
    $('#message').text('LINE 230: O WINS!!! Click the "Start New Game" to play again!')
    $('#game-board').slideUp('slow')
    moveCount = 0
    const index = 0
    const player = store.game.cells[0]
    const data = {
      'game': {
        'cell': {
          'index': index,
          'value': player
        },
        'over': true
      }
    }
    api.updateGameAPI(data)
  }
  testArray = [store.game.cells[3], store.game.cells[4], store.game.cells[5]]
  if (store.game.cells[3] === 'O' && store.game.cells[4] === 'O' && store.game.cells[5] === 'O') {
    $('#message').text('LINE 248: O WINS!!! Click the "Start New Game" to play again!')
    $('#game-board').slideUp('slow')
    moveCount = 0
    const index = 0
    const player = store.game.cells[0]
    const data = {
      'game': {
        'cell': {
          'index': index,
          'value': player
        },
        'over': true
      }
    }
    api.updateGameAPI(data)
  }
  testArray = [store.game.cells[6], store.game.cells[7], store.game.cells[8]]
  if (store.game.cells[6] === 'O' && store.game.cells[7] === 'O' && store.game.cells[8] === 'O') {
    $('#message').text('LINE 266: O WINS!!! Click the "Start New Game" to play again!')
    $('#game-board').slideUp('slow')
    moveCount = 0
    const index = 0
    const player = store.game.cells[0]
    const data = {
      'game': {
        'cell': {
          'index': index,
          'value': player
        },
        'over': true
      }
    }
    api.updateGameAPI(data)
  }
}

// Check the columns for win by X or O
const checkCol = function () {
  // testArray simply stores the values of each row
  let testArray = [store.game.cells[0], store.game.cells[3], store.game.cells[6]]
  if (store.game.cells[0] === 'X' && store.game.cells[3] === 'X' && store.game.cells[6] === 'X') {
    $('#message').text('LINE 289: X WINS!!! Click the "Start New Game" to play again!')
    $('#game-board').slideUp('slow')
    moveCount = 0
    const index = 0
    const player = store.game.cells[0]
    const data = {
      'game': {
        'cell': {
          'index': index,
          'value': player
        },
        'over': true
      }
    }
    api.updateGameAPI(data)
  }
  testArray = [store.game.cells[1], store.game.cells[4], store.game.cells[7]]
  if (store.game.cells[1] === 'X' && store.game.cells[4] === 'X' && store.game.cells[7] === 'X') {
    $('#message').text('LINE 307: X WINS!!! Click the "Start New Game" to play again!')
    $('#game-board').slideUp('slow')
    moveCount = 0
    const index = 0
    const player = store.game.cells[0]
    const data = {
      'game': {
        'cell': {
          'index': index,
          'value': player
        },
        'over': true
      }
    }
    api.updateGameAPI(data)
  }
  testArray = [store.game.cells[2], store.game.cells[5], store.game.cells[8]]
  if (store.game.cells[2] === 'X' && store.game.cells[5] === 'X' && store.game.cells[8] === 'X') {
    $('#message').text('LINE 325: X WINS!!! Click the "Start New Game" to play again!')
    $('#game-board').slideUp('slow')
    moveCount = 0
    const index = 0
    const player = store.game.cells[0]
    const data = {
      'game': {
        'cell': {
          'index': index,
          'value': player
        },
        'over': true
      }
    }
    api.updateGameAPI(data)
  }
  testArray = [store.game.cells[0], store.game.cells[3], store.game.cells[6]]
  if (store.game.cells[0] === 'O' && store.game.cells[3] === 'O' && store.game.cells[6] === 'O') {
    $('#message').text('LINE 343: O WINS!!! Click the "Start New Game" to play again!')
    $('#game-board').slideUp('slow')
    moveCount = 0
    const index = 0
    const player = store.game.cells[0]
    const data = {
      'game': {
        'cell': {
          'index': index,
          'value': player
        },
        'over': true
      }
    }
    api.updateGameAPI(data)
  }
  testArray = [store.game.cells[1], store.game.cells[4], store.game.cells[7]]
  if (store.game.cells[1] === 'O' && store.game.cells[4] === 'O' && store.game.cells[7] === 'O') {
    $('#message').text('LINE 361: O WINS!!! Click the "Start New Game" to play again!')
    $('#game-board').slideUp('slow')
    moveCount = 0
    const index = 0
    const player = store.game.cells[0]
    const data = {
      'game': {
        'cell': {
          'index': index,
          'value': player
        },
        'over': true
      }
    }
    api.updateGameAPI(data)
  }
  testArray = [store.game.cells[2], store.game.cells[5], store.game.cells[8]]
  if (store.game.cells[2] === 'O' && store.game.cells[5] === 'O' && store.game.cells[8] === 'O') {
    $('#message').text('LINE 379: O WINS!!! Click the "Start New Game" to play again!')
    $('#game-board').slideUp('slow')
    moveCount = 0
    const index = 0
    const player = store.game.cells[0]
    const data = {
      'game': {
        'cell': {
          'index': index,
          'value': player
        },
        'over': true
      }
    }
    api.updateGameAPI(data)
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
  checkCol,
  checkRow,
  checkForWin,
  recordMove,
  isEven,
  playerMove,
  // gameObject,
  setBoard
  // gameArray
}
