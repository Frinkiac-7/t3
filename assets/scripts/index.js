'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const events = require('./events')
const engine = require('./engine')

$(() => {
  setAPIOrigin(location, config)
})

$(() => {
  $('#userGuess').submit(events.onGuess)
  for (let i = 0; i < engine.gameBoard.length; i++) {
    $('#gridPos' + i).click(events.onClick)
  }
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
