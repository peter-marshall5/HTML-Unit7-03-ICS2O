const input = document.getElementById('age')
const button = document.getElementById('check')

function onclick () {
  if (input.value === '') {
    alert('Please enter your age.')
    return
  }
  const age = parseFloat(input.value)
  if (isNaN(age)) {
    alert('You entered an invalid number.')
    return
  }
  if (age % 1 > 0) {
    alert('Your age must not contain any decimals.')
    return
  }
  if (age < 0) {
    alert('Your age can not be negative.')
    return
  }
  if (age > 150) {
    alert('Please enter your real age.')
  } else if (age >= 17) {
    alert('You can watch R rated movies.')
  } else if (age >= 13) {
    alert('You can watch PG-13 rated movies.')
  } else if (age >= 5) {
    alert('You can watch G or PG rated movies.')
  } else {
    alert('You\'re too young for most movies.')
  }
}

button.addEventListener('click', onclick)
