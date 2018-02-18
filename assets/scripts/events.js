const getFormFields = require('../../lib/get-form-fields')
const engine = require('./engine')
const api = require('./api')
const ui = require('./ui')
const store = require('./store')

const onAcctNew = function (event) {
  event.preventDefault()
  console.log('onAcctNew invoked')
  $('#sign-in-form').slideUp('slow')
  $('#sign-up-form').slideDown('slow')
}

const onAcctExists = function (event) {
  event.preventDefault()
  $('#sign-up-form').slideUp('slow')
  $('#sign-in-form').slideDown('slow')
}

const onClick = function (event) {
  event.preventDefault()
  console.log('onClick invoked')
  const gridPos = event.target.id
  engine.playerMove(gridPos)
}

const onSignUp = function (event) {
  event.preventDefault()
  console.log('onSignUp invoked')
  const userForm = getFormFields(this)
  console.log('userForm is', userForm)
  api.onSignUp(userForm)
    .then(ui.onSignUpSuccess)
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('onSignIn invoked')
  const userForm = getFormFields(this)
  console.log('userForm is', userForm)
  api.onSignIn(userForm)
    .then(ui.onSignInSuccess)
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('onChangePassword invoked')
  const userForm = getFormFields(this)
  console.log('userForm is', userForm)
  api.onChangePassword(userForm)
    .then(ui.onChangePasswordSuccess)
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('onSignOut invoked')
  const userForm = getFormFields(this)
  console.log('userForm is', userForm)
  api.onSignOut(userForm)
    .then(ui.onSignOutSuccess)
}

const onGuess = function (event) {
  event.preventDefault()
  const userForm = getFormFields(event.target)
  console.log('Submit event invoked. userform is ', userForm)
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
  onGuess,
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onNewGame,
  onGetGames,
  onClick
}
