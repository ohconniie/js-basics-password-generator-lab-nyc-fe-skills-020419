window.addEventListener("load", () => {
  //start your code here
  
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
  
  function onSubmit(event) {
    event.preventDefault()
    const input = document.getElementById('passwordlength')
    const howManyCharacters = input.value
    for (let i = 0; i <howManyCharacters; i++) {
      console.log('hi')
    }
  }
  
  document.addEventListener('submit', onSubmit)
});
