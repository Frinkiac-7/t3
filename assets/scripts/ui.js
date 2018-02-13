const store = require('./store')

const onSignUpSuccess = function (data) {
  console.log('onSignUpSuccess invoked')
  console.log('data is', data)
  console.log('assigning store.user = data.user')
  store.user = data.user
  console.log('data.user is', store.user)
}

const onSignInSuccess = function (data) {
  console.log('onSignInSuccess invoked')
  console.log('data is', data)
  console.log('assigning store.user = data.user')
  store.user = data.user
  console.log('store.user is', store.user)
}

const onChangePasswordSuccess = function (data) {
  console.log('onChangePasswordSuccess invoked')
  console.log('data is', data)
  console.log('assigning store.user = data.user')
  store.user = data.user
  console.log('data.user is', store.user)
}

const onSignOutSuccess = function (data) {
  console.log('onSignOutSuccess invoked')
  console.log('data is', data)
  console.log('assigning store.user = data.user')
  store.user = data.user
  console.log('store.user is', store.user)
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onChangePasswordSuccess,
  onSignOutSuccess
}
