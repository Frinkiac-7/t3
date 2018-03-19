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
  // ui.hidePostLogin()
  // $('#sign-up-form').hide()
  // $('#change-password-form').hide()
  // $('#sign-out-button').hide()
  // $('#change-password-button').hide()
  // $('#game-actions').hide()
  // $('#start-new-game').hide()
  // $('#get-open-games').hide()
  // $('#game-board').hide()

  // Click event handlers
  $('#change-password-button').click(ui.showChangePasswordForm)
  $('#cancel-password-change').click(events.onCancelChangePassword)
  $('#acctNew').click(events.onAcctNew)
  $('#acctExists').click(events.onAcctExists)
  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
      $('#gridPos' + x + y).click(events.onClick)
    }
  }

  // Submit handlers
  $('#sign-up-form').submit(events.onSignUp)
  $('#sign-in-form').submit(events.onSignIn)
  $('#chng-pw-form').submit(events.onChangePassword)
  $('#sign-out-button').submit(events.onSignOut)
  $('#start-new-game').submit(events.onStartNewGame)
  $('#get-open-games').submit(events.onGetOpenGames)
})
