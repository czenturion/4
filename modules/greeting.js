let myName

do {
  myName = prompt('Введите ваше имя:')
} while (myName.trim() === '')

const greet = () => {
  alert('Добро пожаловать ' + myName)
}

greet()