const config = require('./config')
const store = require('./store')

// Sign in functions
const onSignIn = function (data) {
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
const onSignOut = function () {
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// Password functions
const onChangePassword = function (data) {
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
const onStartNewGame = function (token) {
  console.log('api.onStartNewGame invoked')
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

const onGetOpenGames = function (data) {
  console.log('api.onGetOpenGames invoked')
  return $.ajax({
    url: config.apiOrigin + '/games/',
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const prepAPIData = function () {
  const index = 0
  const player = store.game.cells[0]
  const data = {
    'game': {
      'cell': {
        'index': index,
        'value': player
      },
      'over': true
    }
  }
  return data
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onStartNewGame,
  updateGameAPI,
  onGetOpenGames,
  onSignOut,
  prepAPIData
}
