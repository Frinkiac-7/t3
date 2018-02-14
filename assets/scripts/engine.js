const store = require('./store')
const api = require('./api')

// Sole purpose is for the while loop in playerMove to determine if there are
// any moves available
let gameArray = ['!', '!', '!', '!', '!', '!', '!', '!', '!']

// Keep track of whose turn it is.  Even numbers are X, odd numbers are O
let moveCount = 0

// Main game logic repository
let gameObject = {
  'gridPos00': {
    'name': 'gridPos00',
    'player': 'unassigned', // identify player X or O (same as value)
    'arrayIndex': 0, // currently unused.  DELETE BEFORE SUBMISSION IF UNNECESSARY
    'row': 0, // grid coord of name attribute
    'column': 0, // grid coord of name attribute
    'value': '!' // X or O at position identified by name attribute
  },
  'gridPos01': {
    'name': 'gridPos01',
    'player': 'unassigned',
    'arrayIndex': 1,
    'row': 0,
    'column': 1,
    'value': '!'
  },
  'gridPos02': {
    'name': 'gridPos02',
    'player': 'unassigned',
    'arrayIndex': 2,
    'row': 0,
    'column': 2,
    'value': '!'
  },
  'gridPos10': {
    'name': 'gridPos10',
    'player': 'unassigned',
    'arrayIndex': 3,
    'row': 1,
    'column': 0,
    'value': '!'
  },
  'gridPos11': {
    'name': 'gridPos11',
    'player': 'unassigned',
    'arrayIndex': 4,
    'row': 1,
    'column': 1,
    'value': '!'
  },
  'gridPos12': {
    'name': 'gridPos12',
    'player': 'unassigned',
    'arrayIndex': 5,
    'row': 1,
    'column': 2,
    'value': '!'
  },
  'gridPos20': {
    'name': 'gridPos20',
    'player': 'unassigned',
    'arrayIndex': 6,
    'row': 2,
    'column': 0,
    'value': '!'
  },
  'gridPos21': {
    'name': 'gridPos21',
    'player': 'unassigned',
    'arrayIndex': 7,
    'row': 2,
    'column': 1,
    'value': '!'
  },
  'gridPos22': {
    'name': 'gridPos22',
    'player': 'unassigned',
    'arrayIndex': 8,
    'row': 2,
    'column': 2,
    'value': '!'
  }
}

// Invoke the game result determining functions
const checkForWin = function () {
  checkRow()
  checkDiagonal()
  store.game.over = true
  console.log('game status is (store.game.over)', store.game.over)
}

// call back function for the game result checking functions
const isX = function (element) {
  if (element === 'X') {
    return true
  }
}

// call back function for the game result checking functions
const isO = function (element) {
  if (element === 'O') {
    return true
  }
}

// Check the diagonals for win by X or O
const checkDiagonal = function () {
  console.log('checkDiagonal invoke')
  let testArray = [gameObject['gridPos00'].value, gameObject['gridPos11'].value, gameObject['gridPos22'].value]
  if (testArray.every(isX) === true) {
    console.log('checkDiagonal first array')
    console.log('HURRAY!!! X WON!!!')
    // return
  } else if (testArray.every(isO) === true) {
    // testing first for O
    console.log('HURRAY!!! O WON!!!')
    // return
  } else {
    testArray = [gameObject['gridPos02'].value, gameObject['gridPos11'].value, gameObject['gridPos20'].value]
    if (testArray.every(isX) === true) {
      console.log('checkDiagonal second array')
      console.log('HURRAY!!! X WON!!!')
      // return
    } else if (testArray.every(isO) === true) {
      // testing first for O
      console.log('HURRAY!!! O WON!!!')
      // return
    } else {
      // if no player wins across the row then reset array for next row
      console.log('Neither X nor O won.  Resetting array')
      testArray = []
    }
  }
}

// Check the rows for win by X or O
const checkRow = function () {
  // testArray simply stores the values of each row
  let testArray = []
  // for loop to generate the row (x axis) coordinate of the gridPos ID
  for (let x = 0; x < 3; x++) {
    // for loop to generate the second (y axis) coordinate of the gridPos ID
    for (let y = 0; y < 3; y++) {
      // concat x and y values to create gridPosXY variable
      const gridPos = 'gridPos' + x + y
      // push gameObject[gridPosXY].value to testArray
      testArray.push(gameObject[gridPos].value)
      // if the array has 3 elements check to see if that row is all X or O
      if (testArray.length === 3) {
        // testing first for X
        if (testArray.every(isX) === true) {
          console.log('HURRAY!!! X WON!!!')
          return
        } else if (testArray.every(isO) === true) {
          // testing first for O
          console.log('HURRAY!!! O WON!!!')
          return
        } else {
          // if no player wins across the row then reset array for next row
          console.log('Neither X nor O won.  Resetting array')
          testArray = []
        }
      }
    }
  }
}

const playerMove = function (gridPos) {
  // Sets who is currently playing and invokes the recordMove function to
  // update the gameArray and gameObject
  // Checks to make sure there are still available moves
  console.log('store.game is', store.game)
  console.log('store.game.cells[0] is', store.game.cells[0])
  console.log('gridPos is', gridPos)
  console.log('store.game.cells[gameObject.gridPos.arrayIndex] is', store.game.cells[gameObject[gridPos].arrayIndex])
//  while (gameArray.includes('!')) {
  while (store.game.cells.includes('')) {
    if (isEven(moveCount)) {
      // Even moveCounts are player X
      const player = 'X'
      recordMove(player, gridPos)
      moveCount++
      return
    } else {
      // Odd moveCounts are player O
      const player = 'O'
      recordMove(player, gridPos)
      moveCount++
      return
    }
  }
  checkForWin()
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

const recordMove = function (player, gridPos) {
  // Check if the selected grid position is available ("!" means available)
  console.log('gameObject[gridPos].arrayIndex is', gameObject[gridPos].arrayIndex)
  const index = gameObject[gridPos].arrayIndex
  console.log('index is', index)
//  store.game.cells[index] = player
  console.log('store.game.cells is', store.game.cells)
  console.log('store.game.cells[' + index + '] is', store.game.cells[index])
//  if (gameObject[gridPos].value === '!') {
  if (store.game.cells[index] === '') {
    const indexString = index.toString()
    if (indexString === 8) {
      console.log('indexString if invoked')
      const over = true
    }
    // Update the gameObject value and player properties with current player info
    const data = {
      'game': {
        'cell': {
          'index': index,
          'value': player
        },
        over: false
      }
    }
    store.game.cells[index] = player
    gameObject[gridPos].value = player
    gameObject[gridPos].player = player
    api.updateGameAPI(data)
    // Update the gameArray (see playerMove while loop comment)
    gameArray[gameObject[gridPos].arrayIndex] = player
    // Update the DOM to indicate the space has been selected
    // $('#' + gridPos).text(player + ' takes the square')
    $('#' + gridPos).attr('src', 'https://imgur.com/PYVoMNB')
  } else { // Will only execute if grid position is anything but "!"
    // Reduce moveCount to allow current player to try again
    --moveCount
    // Update the DOM to let current player know who already owns that square
    // $('#' + gridPos).text(gameObject[gridPos].player + ' ALREADY TOOK THIS SQUARE')
    $('#' + gridPos).attr('src', 'https://imgur.com/0eXPHuG')
  }
}

// const checkForWin = function (gameArray) {

module.exports = {
  isX,
  checkRow,
  checkForWin,
  recordMove,
  isEven,
  playerMove,
  gameObject,
  gameArray
}
