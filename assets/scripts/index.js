'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const events = require('./events')

$(() => {
  setAPIOrigin(location, config)
})

$(() => {
  $('#userGuess').submit(events.onGuess)
  $('#gridPos0').click(events.onClick)
  $('#gridPos1').click(events.onClick)
  $('#gridPos2').click(events.onClick)
  $('#gridPos3').click(events.onClick)
  $('#gridPos4').click(events.onClick)
  $('#gridPos5').click(events.onClick)
  $('#gridPos6').click(events.onClick)
  $('#gridPos7').click(events.onClick)
  $('#gridPos8').click(events.onClick)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
