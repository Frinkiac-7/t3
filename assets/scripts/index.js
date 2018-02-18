'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const events = require('./events')
// const engine = require('./engine')

$(() => {
  setAPIOrigin(location, config)
})

$(() => {
  $('#sign-up-form').hide()
  $('#change-password-form').hide()
  $('#sign-out-form').hide()
  $('#acctNew').click(events.onAcctNew)
  $('#acctExists').click(events.onAcctExists)
  $('#sign-up-form').submit(events.onSignUp)
  $('#sign-in-form').submit(events.onSignIn)
  $('#change-password-form').submit(events.onChangePassword)
  $('#sign-out-form').submit(events.onSignOut)
  $('#start-new-game').submit(events.onNewGame)
  $('#get-games').submit(events.onGetGames)
  // for (let i = 0; i < engine.gameArray.length; i++) {
  //   $('#gridPos' + i).click(events.onClick)
  // }
  $('#gridPos00').click(events.onClick)
  $('#gridPos01').click(events.onClick)
  $('#gridPos02').click(events.onClick)
  $('#gridPos10').click(events.onClick)
  $('#gridPos11').click(events.onClick)
  $('#gridPos12').click(events.onClick)
  $('#gridPos20').click(events.onClick)
  $('#gridPos21').click(events.onClick)
  $('#gridPos22').click(events.onClick)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
