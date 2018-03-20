const store = require('./store')

// Sign in functions
const onSignInSuccess = function (data) {
  store.user = data.user
  resetForms()
  hidePreLogin()
  showPostLogin()
  $('#game-actions').slideDown('slow')
  $('#start-new-game').slideDown('slow')
  $('#get-open-games').slideDown('slow')
  $('#sign-in-modal').modal('toggle')
  $('#sign-in-button').slideUp('slow')
}

const onSignInFailure = function (data) {
  resetForms()
  $('#sign-in-modal-msg').text('Sign in failed.  Please try again!')
}

// Sign up functions
const onSignUpFailure = function (data) {
  resetForms()
  $('#sign-up-modal-msg').text('Sign up failed.  Please try again!')
}

const onSignUpSuccess = function (data) {
  store.user = data.user
  resetForms()
  $('#sign-up-modal').modal('toggle')
  $('#sign-in-modal').modal('toggle')
  $('#sign-in-modal-msg').text('User ' + data.user.email + ' successfully created. Please sign in to play!')
}

// Sign out functions
const onSignOutSuccess = function (data) {
  hideGameBoard()
  hidePostLogin()
  showPreLogin()
}

const hidePreLogin = function () {
  $('#pre-login').slideUp('slow')
}

const showPreLogin = function () {
  $('#pre-login').slideDown('slow')
}

const hidePostLogin = function () {
  $('#post-login').slideUp('slow')
}

const showPostLogin = function () {
  $('#post-login').slideDown('slow')
}

// Password functions
const showChangePasswordButton = function () {
  event.preventDefault()
  $('#showChangePassword').slideDown('slow')
}

const showChangePasswordForm = function () {
  event.preventDefault()
  $('#message').text('Enter your old password and your new password')
  $('#change-password-form').slideDown('slow')
}

const onChangePasswordSuccess = function () {
  $('#chng-pw-modal').modal('toggle')
  $('#chng-pw-modal-msg').text('User ' + store.user.email + ' password successful changed.')
  $('#chng-pw-form')[0].reset()
}

const onChangePasswordFailure = function () {
  $('#chng-pw-modal-msg').text('User ' + store.user.email + ' password change failed.  Please try again.')
  $('#chng-pw-form')[0].reset()
}

// Game functions
const showGameBoard = function () {
  $('#game-board').slideDown('slow')
}

const onStartNewGameSuccess = function (data) {
  store.game = data.game
  showGameBoard()
  $('#change-password-button').hide('slow')
  $('#sign-out-button').hide('slow')
  $('#start-new-game').hide('slow')
  $('#get-open-games').hide('slow')
  $('#message').text('Game #' + store.game.id + ' started!  Good luck!')
}

const onStartNewGameFailure = function () {
  $('#message').text('Error encountered starting a new game.  Please try again.')
}

const onGetOpenGames = function (data) {
  store.history = data
  $('#get-open-gms-msg').text('')
  const game = store.history.games.length
  $('#get-open-gms-msg').text('You have played ' + game + ' games!')
  $('#myModalLabel').text('Previous Game Stats')
}
const declareWinner = function (player) {
  $('#get-open-gms-modal').modal('toggle')
  $('#get-open-gms-msg').text(player + ' WINS!!! Click "Start Game" to play again!')
  $('#myModalLabel').text('WHOO!!!  Victory!!!')
  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
      // $('#gridPos' + x + y).off('click')
      // $('#gridPos' + x + y).attr('id', 'gridPos')
      $('.box').css('pointer-events', 'none')
    }
  }
  // $('#game-board').slideUp('slow')
  $('#change-password-button').slideDown('slow')
  $('#sign-out-button').slideDown('slow')
  $('#start-new-game').slideDown('slow')
  $('#get-open-games').slideDown('slow')
}

const resetForms = function () {
  $('#sign-in-form')[0].reset()
  $('#sign-up-form')[0].reset()
}

const hideGameBoard = function () {
  $('#game-board').hide()
}

module.exports = {
  showChangePasswordForm,
  showChangePasswordButton,
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onGetOpenGames,
  onStartNewGameSuccess,
  onStartNewGameFailure,
  hidePreLogin,
  showPreLogin,
  hidePostLogin,
  showPostLogin,
  hideGameBoard,
  showGameBoard,
  declareWinner
}
