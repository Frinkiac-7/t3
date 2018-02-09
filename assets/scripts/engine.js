/* TODO LIST
Create Empty Board in JS
Add to Board
Turn rotates between x and o
Can not choose already occupied spots
Check Board for Winner
*/

let gameBoard = ['!', '!', '!', '!', '!', '!', '!', '!', '!']

const coord = {
  'row': 0,
  'column': 2
}

const convertCoord = function (coord) {
  // Convert coordinate pair to single number in order to locate it in the
  // gameBoard array
  // First, find the multiplier needed to convert coordinated pair to array value

  const multiplier = Math.sqrt(gameBoard.length)

  // Next, multiply the row object property by multiplier, then add the column property

  const arrayPosition = (coord.row * multiplier) + coord.column
  console.log(arrayPosition)
}

module.exports = {
  convertCoord,
  gameBoard
}

// PUT LINTER SHUTTER UPPER CODE HERE

convertCoord(coord)
