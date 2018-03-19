const getFormFields = require('../../lib/get-form-fields')
const engine = require('./engine')
const api = require('./api')
const ui = require('./ui')
const store = require('./store')

// Sign in functions
const onSignIn = function (event) {
  event.preventDefault()
  const userForm = getFormFields(this)
  if (userForm.credentials.email === '' && userForm.credentials.password === '') {
    $('#sign-in-modal-msg').text('Email address and password fields can\'t be blank.')
    $('#sign-in-form')[0].reset()
  } else if (userForm.credentials.email === '') {
    $('#sign-in-modal-msg').text('Email can\'t be blank.  Please enter an email address.')
    $('#sign-in-form')[0].reset()
  } else if (userForm.credentials.password === '') {
    $('#sign-in-modal-msg').text('Password can\'t be blank.  Please enter a password.')
    $('#sign-in-form')[0].reset()
  } else {
    api.onSignIn(userForm)
      .then(ui.onSignInSuccess)
      .catch(ui.onSignInFailure)
  }
}

const onAcctExists = function (event) {
  event.preventDefault()
  $('#sign-up-form')[0].reset()
  $('#sign-up-form').slideUp('slow')
  $('#sign-in-form')[0].reset()
  $('#sign-in-form').slideDown('slow')
}

// Sign up functions
const onSignUp = function (event) {
  event.preventDefault()
  const userForm = getFormFields(this)
  if (userForm.credentials.password !== userForm.credentials.password_confirmation) {
    $('#sign-up-modal-msg').text('Your passwords didn\'t match. Please try again')
    $('#sign-up-form')[0].reset()
  } else if (userForm.credentials.email === '') {
    $('#sign-up-modal-msg').text('The email field can\'t be blank. Please try again')
    $('#sign-up-form')[0].reset()
  } else {
    api.onSignUp(userForm)
      .then(ui.onSignUpSuccess)
      .catch(ui.onSignUpFailure)
  }
}

const onAcctNew = function (event) {
  event.preventDefault()
  $('#sign-in-form').slideUp('slow')
  $('#sign-up-form').slideDown('slow')
}

// Sign out functions
const onSignOut = function (event) {
  event.preventDefault()
  api.onSignOut()
    .then(ui.onSignOutSuccess)
}

// Password functions
const onChangePassword = function (event) {
  event.preventDefault()
  const userForm = getFormFields(this)
  if (userForm.passwords.old === '' && userForm.passwords.new === '') {
    $('#chng-pw-modal-msg').text('Password fields can\'t be blank.  Please enter your old password and new passwords.')
    $('#chng-pw-form')[0].reset()
  } else if (userForm.passwords.old === '') {
    $('#chng-pw-modal-msg').text('Old password field can\'t be blank.  Please enter your old password and new passwords.')
    $('#chng-pw-form')[0].reset()
  } else if (userForm.passwords.new === '') {
    $('#chng-pw-modal-msg').text('New password field can\'t be blank.  Please enter your old password and new passwords.')
    $('#chng-pw-form')[0].reset()
  } else {
    api.onChangePassword(userForm)
      .then(ui.onChangePasswordSuccess)
      .catch(ui.onChangePasswordFailure)
  }
}

const onCancelChangePassword = function () {
  event.preventDefault()
  $('#change-password-form')[0].reset()
  $('#message').text('Change password cancelled')
  $('#change-password-form').slideUp('slow')
}

// Game functions
const onClick = function (event) {
  event.preventDefault()
  const gridPos = event.target.id
  engine.playerMove(gridPos)
}

const onStartNewGame = function (event) {
  event.preventDefault()
  api.onStartNewGame(store.user.token)
    .then(ui.onStartNewGameSuccess)
    .then(engine.setBoard)
    .catch(ui.onStartNewGameFailure)
}

const onGetOpenGames = function (event) {
  event.preventDefault()
  console.log('events.onGetOpenGames invoked')
  api.onGetOpenGames()
    .then(ui.onGetOpenGames)
}

module.exports = {
  onAcctNew,
  onAcctExists,
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onCancelChangePassword,
  onStartNewGame,
  onGetOpenGames,
  onClick
}
