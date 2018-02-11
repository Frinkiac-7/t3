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

// array.forEach(gameObject.arrayToObject)

const checkForWin = function () {
  checkColumn(array, 3, 1)
}

const checkColumn = function () {
  // Fill new code
}

const playerMove = function (gridPos) {
  // Sets who is currently playing and invokes the recordMove function to
  // update the gameArray and gameObject
  console.log('playerMove function executed')
  console.log('engine.moveCount is', moveCount)
  // Checks to make sure there are still available moves
  while (gameArray.includes('!')) {
    console.log('playerMove while loop invoked')
    if (isEven(moveCount)) {
      // Even moveCounts are player X
      console.log('engine.moveCount is' + moveCount + 'which is EVEN')
      const player = 'X'
      recordMove(player, gridPos)
      moveCount++
      return
    } else {
      // Odd moveCounts are player O
      console.log('engine.moveCount is' + moveCount + 'which is ODD')
      const player = 'O'
      recordMove(player, gridPos)
      moveCount++
      return
    }
  }
}

const isEven = function (num) {
  // Pretty self explanatory.  Checks to see if moveCount is odd or even
  console.log('isEven function invoked')
  if (num % 2 === 0) {
    return true
  } else {
    return false
  }
}

const recordMove = function (player, gridPos) {
  console.log('recordMove function invoked')
  console.log('player is', player)
  console.log('event.target.id is', event.target.id)
  console.log('grisPos is', gridPos)
  console.log('gameObject started as', gameObject)
  console.log('gameArray started as', gameArray)
  // Check if the selected grid position is available ("!" means available)
  if (gameObject[gridPos].value === '!') {
    console.log('IF invoked')
    console.log('INSIDE IF: player is', player)
    // Update the gameObject value and player properties with current player info
    gameObject[gridPos].value = player
    console.log('gameObject[gridPos].value = player is', gameObject[gridPos].value)
    gameObject[gridPos].player = player
    console.log('gameObject[gridPos].player = player is', gameObject[gridPos].player)
    // Update the gameArray (see playerMove while loop comment)
    gameArray[gameObject[gridPos].arrayIndex] = player
    console.log('gameArray[gameObject[gridPos].arrayIndex] = player has been set to', gameArray[gameObject[gridPos].arrayIndex])
    console.log('gameObject is now', gameObject)
    console.log('gameArray is now', gameArray)
    // Update the DOM to indicate the space has been selected
    $('#' + gridPos).text(player + ' takes the square')
  } else { // Will only execute if grid position is anything but "!"
    // Reduce moveCount to allow current player to try again
    --moveCount
    console.log('ELSE condition invoked')
    console.log('player is', player)
    console.log('gameObject[gridPos].player is', gameObject[gridPos].player)
    // Update the DOM to let current player know who already owns that square
    $('#' + gridPos).text('Sorry Player ' + player + '! ' + gameObject[gridPos].player + ' ALREADY TOOK THIS SQUARE')
  }
}

// const checkForWin = function (gameArray) {

module.exports = {
  checkColumn,
  checkForWin,
  recordMove,
  isEven,
  playerMove,
  gameObject,
  gameArray
}
