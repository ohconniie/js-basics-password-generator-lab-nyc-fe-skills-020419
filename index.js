window.addEventListener("load", () => {
  //start your code here
  
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const numbers = "012345678"
  const specialCharacters = "!#$%&()*+,-./:;<=>?@[\]^_{|}~"
  
  function onSubmit(event) {
    event.preventDefault()
    const input = document.getElementById('passwordlength')
    let howManyCharacters = input.value
    if (input.value < 4) {
      howManyCharacters = 4
    }
    
    let startingString = ""
    for (let i = 0; i < howManyCharacters; i++) {
      if (startingString.length < howManyCharacters) {
      let randomIndex = (Math.floor(Math.random() * lowerCaseLetters.length))
      startingString += (lowerCaseLetters[randomIndex])
      }
      
      if (startingString.length < howManyCharacters) {
      randomIndex = (Math.floor(Math.random() * upperCaseLetters.length))
      startingString += (upperCaseLetters[randomIndex])
      }
      
      if (startingString.length < howManyCharacters) {
      randomIndex = (Math.floor(Math.random() * numbers.length))
      startingString += (numbers[randomIndex])
      }
      
      if (startingString.length < howManyCharacters) {
      randomIndex = (Math.floor(Math.random() * specialCharacters.length))
      startingString += (specialCharacters[randomIndex])
      }
    }
    console.log(startingString)
    const output = document.getElementById('result')
    output.innerHTML = startingString
  }
  
  document.addEventListener('submit', onSubmit)
});
