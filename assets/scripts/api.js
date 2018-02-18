const config = require('./config')
const store = require('./store')

// Sign in functions
const onSignIn = function (data) {
  console.log('api.onSignIn invoked')
  console.log('data parameter is', data)
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    headers: {
      contentType: 'application/json'
    },
    data
  })
}

// Sign up functions
const onSignUp = function (data) {
  console.log('api.onSignUp invoked')
  console.log('data parameter is', data)
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    headers: {
      contentType: 'application/json'
    },
    data
  })
}

// Sign out functions
const onSignOut = function (data) {
  console.log('data is', data)
  console.log('store.user.id is', store.user.id)
  console.log('store.user.token is', store.user.token)
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// Password functions
const onChangePassword = function (data) {
  console.log('data is', data)
  console.log('store.user.token is', store.user.token)
  console.log('data.passwords.old is', data.passwords.old)
  console.log('data.passwords.new is', data.passwords.new)
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// Game functions
const onNewGame = function (token) {
  console.log('api.onNewGame invoked')
  console.log('token is', token)
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGameAPI = function (data) {
  console.log('api.updateGameAPI invoked')
  console.log('data is', data)
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const onGetGames = function (data) {
  console.log('api.onGetGames invoked')
  return $.ajax({
    url: config.apiOrigin + '/games/',
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onNewGame,
  updateGameAPI,
  onGetGames,
  onSignOut
}
