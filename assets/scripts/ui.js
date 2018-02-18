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
  console.log('Setting the message text in the div')
  $('#message').text('User ' + data.user.email + ' is signed in.')
}

// Sign up functions
const onSignUpSuccess = function (data) {
  console.log('onSignUpSuccess invoked')
  console.log('data is', data)
  console.log('assigning store.user = data.user')
  store.user = data.user
  console.log('data.user is', store.user)
  $('#sign-up-form').slideUp('slow')
  $('#sign-in-form').slideDown('slow')
  $('#message').text('User ' + data.user.email + ' successfully created!')
}

// Sign out functions
const onSignOutSuccess = function (data) {
  console.log('onSignOutSuccess invoked')
  console.log('data is', data)
}

// Password functions
const showChangePasswordButton = function () {
  $('#showChangePassword').slideDown('slow')
}

const showChangePasswordForm = function () {
  $('#change-password-form').slideDown('slow')
}

const onChangePasswordSuccess = function () {
  console.log('onChangePasswordSuccess invoked')
  console.log('assigning store.user = data.user')
  console.log('store.user is', store.user)
  $('#change-password-form').slideUp('slow')
  $('#message').text('User ' + store.user.email + ' password successful changed.')
}

// Game functions
const onNewGameSuccess = function (data) {
  console.log('onNewGameSuccess invoked')
  console.log('return game object data is', data)
  console.log('Value of store.game BEFORE assignment is', store.game)
  store.game = data.game
  console.log('Value of store.game AFTER assignment is', store.game)
}

const onGetGames = function (data) {
  console.log('api.onGetGames invoked')
  console.log('data is', data)
  store.game = data
  console.log('store.game: ', store.game)
}

module.exports = {
  showChangePasswordForm,
  showChangePasswordButton,
  onSignUpSuccess,
  onSignInSuccess,
  onChangePasswordSuccess,
  onSignOutSuccess,
  onGetGames,
  onNewGameSuccess
}
