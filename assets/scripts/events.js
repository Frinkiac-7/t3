const getFormFields = require('../../lib/get-form-fields')
const engine = require('./engine')
const api = require('./api')
const ui = require('./ui')
const store = require('./store')

// Sign in functions
const onSignIn = function (event) {
  event.preventDefault()
  console.log('onSignIn invoked')
  const userForm = getFormFields(this)
  console.log('userForm is', userForm)
  if (userForm.credentials.email === '' && userForm.credentials.password === '') {
    console.log('Login fields are blank')
    $('#message').text('Login fields can\'t be blank.  Please enter an email address and password.')
    $('#sign-in-form')[0].reset()
  } else if (userForm.credentials.email === '') {
    console.log('Email field is blank')
    $('#message').text('Email can\'t be blank.  Please enter an email address.')
    $('#sign-in-form')[0].reset()
  } else if (userForm.credentials.password === '') {
    console.log('Password field is blank')
    $('#message').text('Password can\'t be blank.  Please enter a password.')
    $('#sign-in-form')[0].reset()
  } else {
    api.onSignIn(userForm)
      .then(ui.onSignInSuccess)
      .catch(ui.onSignInFailure)
  }
}

const onAcctExists = function (event) {
  event.preventDefault()
  $('#sign-up-form').slideUp('slow')
  $('#sign-in-form').slideDown('slow')
}

// Sign up functions
const onSignUp = function (event) {
  event.preventDefault()
  console.log('onSignUp invoked')
  const userForm = getFormFields(this)
  console.log('userForm is', userForm)
  if (userForm.credentials.password !== userForm.credentials.password_confirmation) {
    console.log('password mismatch IF invoked')
    $('#message').text('Your passwords didn\'t match. Please try again')
    $('#sign-up-form')[0].reset()
  } else if (userForm.credentials.email === '') {
    console.log('email missing ELSE IF invoked')
    $('#message').text('The email field can\'t be blank. Please try again')
    $('#sign-up-form')[0].reset()
  // } else if (userForm.credentials.password || userForm.credentials.password_confirmation === '') {
  //   console.log('password(s) are blank ELSE IF invoked')
  //   $('#message').text('One or more passwords was blank. Please try again')
  //   $('#sign-up-form')[0].reset()
  } else {
    api.onSignUp(userForm)
      .then(ui.onSignUpSuccess)
      .catch(ui.onSignUpFailure)
  }
}

const onAcctNew = function (event) {
  event.preventDefault()
  console.log('onAcctNew invoked')
  $('#sign-in-form').slideUp('slow')
  $('#sign-up-form').slideDown('slow')
}

// Sign out functions
const onSignOut = function (event) {
  event.preventDefault()
  console.log('onSignOut invoked')
  const userForm = getFormFields(this)
  console.log('userForm is', userForm)
  api.onSignOut(userForm)
    .then(ui.onSignOutSuccess)
}

// Password functions
const onChangePassword = function (event) {
  event.preventDefault()
  console.log('onChangePassword invoked')
  const userForm = getFormFields(this)
  console.log('userForm is', userForm)
  if (userForm.passwords.old === '' && userForm.passwords.new === '') {
    console.log('onChangePassword if old and new are blank invoked')
    console.log('Form fields are blank')
    $('#message').text('Password fields can\'t be blank.  Please enter your old password and new passwords.')
    $('#change-password-form')[0].reset()
  } else if (userForm.passwords.old === '') {
    console.log('onChangePassword if old password is blank invoked')
    console.log('Old password field is blank')
    $('#message').text('Old password field can\'t be blank.  Please enter your old password and new passwords.')
    $('#change-password-form')[0].reset()
  } else if (userForm.passwords.new === '') {
    console.log('onChangePassword if new password is blank invoked')
    console.log('New password field is blank')
    $('#message').text('New password field can\'t be blank.  Please enter your old password and new passwords.')
    $('#change-password-form')[0].reset()
  } else {
    api.onChangePassword(userForm)
      .then(ui.onChangePasswordSuccess)
      .catch(ui.onChangePasswordFailure)
  }
}

const onCancelChangePassword = function () {
  $('#message').text('Change password cancelled')
  $('#change-password-form').slideUp('slow')
}
// Game functions
const onClick = function (event) {
  event.preventDefault()
  console.log('onClick invoked')
  const gridPos = event.target.id
  engine.playerMove(gridPos)
}

const onNewGame = function (event) {
  event.preventDefault()
  console.log('onNewGame invoked')
  api.onNewGame(store.user.token)
    .then(ui.onNewGameSuccess)
    .then(console.log('store.game is', store.game))
}

const onGetGames = function (event) {
  event.preventDefault()
  console.log('events.onGetGames invoked')
  api.onGetGames()
    .then(ui.onGetGames)
}

module.exports = {
  onAcctNew,
  onAcctExists,
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onCancelChangePassword,
  onNewGame,
  onGetGames,
  onClick
}
