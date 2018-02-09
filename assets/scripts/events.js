const getFormFields = require('../../lib/get-form-fields')
// const engine = require('./engine')

// const ui = require('./ui')

const onGuess = function (event) {
  event.preventDefault()
  const userForm = getFormFields(event.target)
  console.log('Submit event invoked. userform is ', userForm)
}

const onClick = function (event) {
  event.preventDefault()
  for (let i = 0; i < 9; i++) {
    const gridPos = 'gridPos' + i
    console.log('event.target.id is', event.target.id + '.')
    console.log('gridPos is', gridPos + '.')
    console.log('event.target.id is a', typeof (event.target.id) + ' ')
    console.log('gridPos is a', typeof (gridPos))
    if (event.target.id === gridPos) {
      console.log('We have a match')
      console.log('and array index (i) would be', i + '.')
      return
    } else if (i === 9) {
      console.log('No match found')
    }
  }
}

module.exports = {
  onGuess,
  onClick
}
