window.addEventListener("load", () => {
  //start your code here
  
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const numbers = "012345678"
  const specialCharacters = "!#$%&()*+,-./:;<=>?@[\]^_{|}~"
  
  function onSubmit(event) {
    event.preventDefault()
    const input = document.getElementById('passwordlength')
    const howManyCharacters = input.value
    let startingString = ""
    for (let i = 0; i < howManyCharacters; i++) {
      const randomIndex = (Math.floor(Math.random() * lowerCaseLetters.length))
      startingString += (lowerCaseLetters[randomIndex])
      
      const randomIndex = (Math.floor(Math.random() * upperCaseLetters.length))
      startingString += (upperCaseLetters[randomIndex])
      
      const randomIndex = (Math.floor(Math.random() * numbers.length))
      startingString += (numbers[randomIndex])
    }
    console.log(startingString)
    const output = document.getElementById('result')
    output.innerHTML = startingString
  }
  
  document.addEventListener('submit', onSubmit)
});
