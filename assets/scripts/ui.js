const store = require('./store')

// Sign in functions
const onSignInSuccess = function (data) {
  console.log('onSignInSuccess invoked')
  console.log('data in ui.onSignInSuccess is', data)
  console.log('assigning store.user = data.user')
  store.user = data.user
  console.log('store.user is', store.user)
  $('#sign-in-form').slideUp('slow')
  $('#sign-out-button').slideDown('slow')
  $('#change-password-button').slideDown('slow')
  $('#game-actions').slideDown('slow')
  $('#start-new-game').slideDown('slow')
  $('#get-open-games').slideDown('slow')
  console.log('Setting the message text in the div')
  $('#message').text('User ' + data.user.email + ' is signed in.')
  $('#sign-in-form')[0].reset()
}

const onSignInFailure = function (data) {
  console.log('onSignInFailure invoked')
  console.log('data is', data)
  $('#sign-in-form')[0].reset()
  $('#message').text('Sign in failed.  Please try again!')
}

// Sign up functions
const onSignUpSuccess = function (data) {
  console.log('onSignUpSuccess invoked')
  console.log('data is', data)
  console.log('assigning store.user = data.user')
  store.user = data.user
  console.log('data.user is', store.user)
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
  console.log('onSignOutSuccess invoked')
  $('#message').text(store.user.email + ' signed out. Sign into the game to play!')
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
  console.log('onChangePasswordSuccess invoked')
  console.log('assigning store.user = data.user')
  console.log('store.user is', store.user)
  $('#change-password-form').slideUp('slow')
  $('#message').text('User ' + store.user.email + ' password successful changed.')
  $('#change-password-form')[0].reset()
}

const onChangePasswordFailure = function () {
  console.log('onChangePasswordFailure invoked')
  console.log('assigning store.user = data.user')
  console.log('store.user is', store.user)
  $('#message').text('User ' + store.user.email + ' password change failed.  Please try again.')
  $('#change-password-form')[0].reset()
}

// Game functions
const onNewGameSuccess = function (data) {
  console.log('onNewGameSuccess invoked')
  console.log('return game object data is', data)
  console.log('Value of store.game BEFORE assignment is', store.game)
  store.game = data.game
  console.log('Value of store.game AFTER assignment is', store.game)
}

const onGetOpenGames = function (data) {
  console.log('api.onGetOpenGames invoked')
  console.log('data is', data)
  store.history = data
  console.log('store.history: ', store.history)
  console.log('store.history.games[0]: ', store.history.games[0])
  $('#game-results').text('')
  const game = store.history.games.length
  $('#game-results').text('Store.history.games.length should print here ' + game)
  // $('#game-results').text('Store.game length is ', store.game.games.length)
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
  onNewGameSuccess
}
