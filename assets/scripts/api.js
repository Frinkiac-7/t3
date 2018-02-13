const config = require('./config')
const store = require('./store')

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

const onChangePassword = function (data) {
  console.log('data is', data)
  console.log('store.user.token is', store.user.token)
  console.log('data.credentials.old is', data.passwords.old)
  console.log('data.credentials.new is', data.passwords.new)
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

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
