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
}

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
  onSignUpSuccess,
  onSignInSuccess,
  onChangePasswordSuccess,
  onSignOutSuccess,
  onGetGames,
  onNewGameSuccess
}
