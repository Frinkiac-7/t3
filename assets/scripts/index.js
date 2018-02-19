'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const events = require('./events')
const ui = require('./ui')
// const engine = require('./engine')

$(() => {
  setAPIOrigin(location, config)
})

$(() => {
  // Form hide statements
  $('#sign-up-form').hide()
  $('#change-password-form').hide()
  $('#sign-out-button').hide()
  $('#change-password-button').hide()
  $('#game-actions').hide()
  $('#start-new-game').hide()
  $('#get-open-games').hide()

  // Click event handlers
  $('#change-password-button').click(ui.showChangePasswordForm)
  $('#cancel-password-change').click(events.onCancelChangePassword)
  $('#acctNew').click(events.onAcctNew)
  $('#acctExists').click(events.onAcctExists)
  // for (let x = 0; x < 3; x++) {
  //   for (let y = 0; y < 3; y++) {
  //     console.log('gridPosXY is: ' + 'gridPos' + x + y)
  //     $('#gridPos' + x + y).click(events.onClick)
  //   }
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

  // Submit handlers
  $('#sign-up-form').submit(events.onSignUp)
  $('#sign-in-form').submit(events.onSignIn)
  $('#change-password-form').submit(events.onChangePassword)
  $('#sign-out-button').submit(events.onSignOut)
  $('#start-new-game').submit(events.onNewGame)
  $('#get-open-games').submit(events.onGetOpenGames)
})
