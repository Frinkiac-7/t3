const getFormFields = require('../../lib/get-form-fields')
const engine = require('./engine')

// const ui = require('./ui')

const onClick = function (event) {
  event.preventDefault()
  console.log('onClick invoked')
  const gridPos = event.target.id
  engine.playerMove(gridPos)
}

const onGuess = function (event) {
  event.preventDefault()
  const userForm = getFormFields(event.target)
  console.log('Submit event invoked. userform is ', userForm)
}

module.exports = {
  onGuess,
  onClick
}
