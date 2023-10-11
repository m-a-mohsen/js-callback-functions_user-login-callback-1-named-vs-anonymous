console.clear();

function handleUserLogin(onSuccess) {
  // You might wonder why this function is called `onSuccess`. This will become clear by the fourth challenge! 🤞
  onSuccess();
}
// create more functions
function showWelcomeMessage() {
  console.log("Welcome! You are logged in now");
}

// Call handleUserLogin below!

handleUserLogin(showWelcomeMessage)
//arrow callback function
handleUserLogin(() => {
  console.log("Welcome! You are logged in now");
})
