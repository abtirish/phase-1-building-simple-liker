// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// Add a hidden Class to the DOM to hide the Error
let modal = document.querySelector('#modal');
modal.classList.add('hidden');

// Listen for a click on the heart button
document.querySelector('.like-glyph').addEventListener('click', () => {
mimicServerCall()
  .then((response) => {
    // Define where the heart is on the DOM 
  let heart = document.querySelector('.like-glyph');

  // Change the empty heart to a full heart
  heart.textContent = FULL_HEART
  // Turn the color of the hear red
  heart.classList.add("activated-heart")
  })
  .catch((error) => {
    // Define where the Error text is on the DOM
  let removeHidden = document.querySelector('#modal');

  // Remove the hidden class to show the error
  removeHidden.classList.remove('hidden');

  // Add the hidden class back in to hide the error after 3 seconds
  setTimeout(() => {
    removeHidden.classList.add('hidden');
  }, 3000);
  })
})


/*
function isRandomFailure() {
let removeHidden = document.querySelector('#modal');
removeHidden.classList.remove('hidden');
}
isRandomFailure()

function isNotFailure() {
  let heart = document.querySelector('.like-glyph');

  heart.textContent = FULL_HEART
  heart.classList.add("activated-heart")

}

//isNotFailure()
*/




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
