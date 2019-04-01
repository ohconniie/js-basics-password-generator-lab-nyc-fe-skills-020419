window.addEventListener("load", () => {
  //start your code here
  
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
  
  function onSubmit(event) {
    event.preventDefault()
    const input = document.getElementById('passwordlength')
    const howManyCharacters = input.value
    let startingString = ""
    for (let i = 0; i < howManyCharacters; i++) {
      const randomIndex = (Math.floor(Math.random() * 26))
      startingString += (lowerCaseLetters[randomIndex])
    }
    console.log(startingString)
  }
  
  document.addEventListener('submit', onSubmit)
});
