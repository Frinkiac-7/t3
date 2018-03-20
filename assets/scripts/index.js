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
  ui.hidePostLogin()
  ui.hideGameBoard()

  // Click event handlers
  $('#change-password-button').click(ui.showChangePasswordForm)
  $('#cancel-password-change').click(events.onCancelChangePassword)
  $('#acctNew').click(events.onAcctNew)
  $('#acctExists').click(events.onAcctExists)
  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
      $('#gridPos' + x + y).on('click', events.onClick)
    }
  }

  // Submit handlers
  $('#sign-up-form').submit(events.onSignUp)
  $('#sign-in-form').submit(events.onSignIn)
  $('#chng-pw-form').submit(events.onChangePassword)
  $('#sign-out-btn').click('submit', events.onSignOut)
  $('#get-open-gms').click('submit', events.onGetOpenGames)
  $('#strt-gms-btn').click('submit', events.onStartNewGame)
  $('#get-open-games').submit(events.onGetOpenGames)
})
