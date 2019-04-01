window.addEventListener("load", () => {
  //start your code here
  
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
  
  function onSubmit(event) {
    event.preventDefault()
    const input = document.getElementById('passwordlength')
    const howManyCharacters = input.value
    
  }
  
  document.addEventListener('submit', onSubmit)
});
