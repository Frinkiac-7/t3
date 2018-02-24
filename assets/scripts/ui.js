const store = require('./store')

// Sign in functions
const onSignInSuccess = function (data) {
  store.user = data.user
  $('#sign-in-form').slideUp('slow')
  $('#sign-out-button').slideDown('slow')
  $('#change-password-button').slideDown('slow')
  $('#game-actions').slideDown('slow')
  $('#start-new-game').slideDown('slow')
  $('#get-open-games').slideDown('slow')
  $('#message').text('User ' + data.user.email + ' is signed in.')
  $('#sign-in-form')[0].reset()
}

const onSignInFailure = function (data) {
  $('#sign-in-form')[0].reset()
  $('#message').text('Sign in failed.  Please try again!')
}

// Sign up functions
const onSignUpSuccess = function (data) {
  store.user = data.user
  $('#sign-up-form')[0].reset()
  $('#sign-up-form').slideUp('slow')
  $('#sign-in-form')[0].reset()
  $('#sign-in-form').slideDown('slow')
  $('#message').text('User ' + data.user.email + ' successfully created!')
}

const onSignUpFailure = function (data) {
  $('#sign-in-form')[0].reset()
  $('#message').text('Sign up failed.  Please try again!')
}

// Sign out functions
const onSignOutSuccess = function (data) {
  $('#message').text('No user signed in. Sign into the game to play!')
  $('#change-password-button').slideUp('slow')
  $('#change-password-form').slideUp('slow')
  $('#sign-out-button').slideUp('slow')
  $('#game-actions').slideUp('slow')
  $('#get-open-games').slideUp('slow')
  $('#start-new-game').slideUp('slow')
  $('#game-board').slideUp('slow')
  $('#sign-in-form').slideDown('slow')
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
  $('#change-password-form').slideUp('slow')
  $('#message').text('User ' + store.user.email + ' password successful changed.')
  $('#change-password-form')[0].reset()
}

const onChangePasswordFailure = function () {
  $('#message').text('User ' + store.user.email + ' password change failed.  Please try again.')
  $('#change-password-form')[0].reset()
}

// Game functions
const onStartNewGameSuccess = function (data) {
  store.game = data.game
  $('#message').text('Game #' + store.game.id + ' started!  Good luck!')
}

const onStartNewGameFailure = function () {
  $('#message').text('Error encountered starting a new game.  Please try again.')
}

const onGetOpenGames = function (data) {
  store.history = data
  $('#game-results').text('')
  const game = store.history.games.length
  $('#game-results').text('You have played ' + game + ' games!')
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
  onStartNewGameFailure
}
