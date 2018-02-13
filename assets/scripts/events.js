const getFormFields = require('../../lib/get-form-fields')
const engine = require('./engine')
const api = require('./api')
const ui = require('./ui')

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

module.exports = {
  onGuess,
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onClick
}
