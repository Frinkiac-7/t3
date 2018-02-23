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

let gameObject = {
  'gridPos00': {
    'name': 'gridPos00',
    'player': 'unassigned', // identify player X or O (same as value)
    'arrayIndex': 0, // currently unused.  DELETE BEFORE SUBMISSION IF UNNECESSARY
    'row': 0, // grid coord of name attribute
    'column': 0, // grid coord of name attribute
    'value': '' // X or O at position identified by name attribute
  },
  'gridPos01': {
    'name': 'gridPos01',
    'player': 'unassigned',
    'arrayIndex': 1,
    'row': 0,
    'column': 1,
    'value': ''
  },
  'gridPos02': {
    'name': 'gridPos02',
    'player': 'unassigned',
    'arrayIndex': 2,
    'row': 0,
    'column': 2,
    'value': ''
  },
  'gridPos10': {
    'name': 'gridPos10',
    'player': 'unassigned',
    'arrayIndex': 3,
    'row': 1,
    'column': 0,
    'value': ''
  },
  'gridPos11': {
    'name': 'gridPos11',
    'player': 'unassigned',
    'arrayIndex': 4,
    'row': 1,
    'column': 1,
    'value': ''
  },
  'gridPos12': {
    'name': 'gridPos12',
    'player': 'unassigned',
    'arrayIndex': 5,
    'row': 1,
    'column': 2,
    'value': ''
  },
  'gridPos20': {
    'name': 'gridPos20',
    'player': 'unassigned',
    'arrayIndex': 6,
    'row': 2,
    'column': 0,
    'value': ''
  },
  'gridPos21': {
    'name': 'gridPos21',
    'player': 'unassigned',
    'arrayIndex': 7,
    'row': 2,
    'column': 1,
    'value': ''
  },
  'gridPos22': {
    'name': 'gridPos22',
    'player': 'unassigned',
    'arrayIndex': 8,
    'row': 2,
    'column': 2,
    'value': ''
  }
}

// Invoke the game result determining functions
const checkForWin = function (index, player) {
  console.log('checkForWin invoked')
  let winStatus = false
  checkDiagonal(winStatus)
  checkRow(winStatus)
  checkCol(winStatus)
  // if (winStatus === false) {
  //   $('#message').text('It was a DRAW!!!  BOOOOO!!! Click the "Start New Game" to play again!')
  //   $('#game-board').slideUp('slow')
  // }

  // store.game.over = true
//  console.log('game status is (store.game.over)', store.game.over)
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
const checkDiagonal = function (winStatus) {
  console.log('checkDiagonal invoked')
  let testArray = [store.game.cells[0], store.game.cells[4], store.game.cells[8]]
  if (store.game.cells[0] === 'X' && store.game.cells[4] === 'X' && store.game.cells[8] === 'X') {
    console.log('X WINS!!!!')
    console.log('testArray is', testArray)
    $('#message').text('X WINS!!! Click the "Start New Game" to play again!')
    // $('#game-board').slideUp('slow')
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
    winStatus = true
    return winStatus
  }
  testArray = [store.game.cells[6], store.game.cells[4], store.game.cells[2]]
  if (store.game.cells[6] === 'X' && store.game.cells[4] === 'X' && store.game.cells[2] === 'X') {
    console.log('X WINS!!!!')
    console.log('testArray is', testArray)
    $('#message').text('X WINS!!! Click the "Start New Game" to play again!')
    // $('#game-board').slideUp('slow')
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
  console.log('checkDiagonal invoked')
  testArray = [store.game.cells[0], store.game.cells[4], store.game.cells[8]]
  if (store.game.cells[0] === 'O' && store.game.cells[4] === 'O' && store.game.cells[8] === 'O') {
    console.log('O WINS!!!!')
    console.log('testArray is', testArray)
    $('#message').text('O WINS!!! Click the "Start New Game" to play again!')
    // $('#game-board').slideUp('slow')
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
    console.log('O WINS!!!!')
    console.log('testArray is', testArray)
    $('#message').text('O WINS!!! Click the "Start New Game" to play again!')
    // $('#game-board').slideUp('slow')
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
const checkRow = function (winStatus) {
  // testArray simply stores the values of each row
  console.log('checkRow invoked')
  let testArray = [store.game.cells[0], store.game.cells[1], store.game.cells[2]]
  if (store.game.cells[0] === 'X' && store.game.cells[1] === 'X' && store.game.cells[2] === 'X') {
    console.log('X WINS!!!!')
    console.log('testArray is', testArray)
    $('#message').text('X WINS!!! Click the "Start New Game" to play again!')
    // $('#game-board').slideUp('slow')
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
    console.log('X WINS!!!!')
    console.log('testArray is', testArray)
    $('#message').text('X WINS!!! Click the "Start New Game" to play again!')
    // $('#game-board').slideUp('slow')
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
    console.log('X WINS!!!!')
    console.log('testArray is', testArray)
    $('#message').text('X WINS!!! Click the "Start New Game" to play again!')
    // $('#game-board').slideUp('slow')
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
    console.log('O WINS!!!!')
    console.log('testArray is', testArray)
    $('#message').text('X WINS!!! Click the "Start New Game" to play again!')
    // $('#game-board').slideUp('slow')
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
    console.log('O WINS!!!!')
    console.log('testArray is', testArray)
    $('#message').text('O WINS!!! Click the "Start New Game" to play again!')
    // $('#game-board').slideUp('slow')
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
    console.log('O WINS!!!!')
    console.log('testArray is', testArray)
    $('#message').text('X WINS!!! Click the "Start New Game" to play again!')
    // $('#game-board').slideUp('slow')
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
const checkCol = function (winStatus) {
  // testArray simply stores the values of each row
  console.log('checkCol invoked')
  let testArray = [store.game.cells[0], store.game.cells[3], store.game.cells[6]]
  if (store.game.cells[0] === 'X' && store.game.cells[3] === 'X' && store.game.cells[6] === 'X') {
    console.log('X WINS!!!!')
    console.log('testArray is', testArray)
    $('#message').text('X WINS!!! Click the "Start New Game" to play again!')
    // $('#game-board').slideUp('slow')
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
    console.log('X WINS!!!!')
    console.log('testArray is', testArray)
    $('#message').text('X WINS!!! Click the "Start New Game" to play again!')
    // $('#game-board').slideUp('slow')
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
    console.log('X WINS!!!!')
    console.log('testArray is', testArray)
    $('#message').text('X WINS!!! Click the "Start New Game" to play again!')
    // $('#game-board').slideUp('slow')
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
    console.log('O WINS!!!!')
    console.log('testArray is', testArray)
    $('#message').text('X WINS!!! Click the "Start New Game" to play again!')
    // $('#game-board').slideUp('slow')
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
    console.log('O WINS!!!!')
    console.log('testArray is', testArray)
    $('#message').text('O WINS!!! Click the "Start New Game" to play again!')
    // $('#game-board').slideUp('slow')
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
    console.log('O WINS!!!!')
    console.log('testArray is', testArray)
    $('#message').text('O WINS!!! Click the "Start New Game" to play again!')
    // $('#game-board').slideUp('slow')
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
  console.log('moveCount is', moveCount)
  console.log('isEven(moveCount) evaluates to', isEven(moveCount))
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
    console.log('store.game.cells[index] is', store.game.cells[index])
    // $('#' + gridPos).text('D\'OH! Space is taken by', store.game.cells[index])
    $('#' + gridPos).text(`D'OH! Space is taken by ${store.game.cells[index]}`)
  }
  if (moveCount > 4) {
    checkForWin()
  }
  if (moveCount > 8) {
    moveCount = 0
    $('#message').text('THE GAME IS OVER! Setting a new board!')
    setBoard()
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
  console.log('recordMove invoked')
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
    console.log('invoking api.updateGameAPI from recordMove')
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
    // $('#' + gridPos).text(gameObject[gridPos].player + ' ALREADY TOOK THIS SQUARE')
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
  gameObject,
  setBoard
  // gameArray
}
