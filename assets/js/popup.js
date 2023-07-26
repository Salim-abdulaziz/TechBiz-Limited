
/*===============Pop up contact form=====================*/
// Get the elements
const popupButton = document.getElementById('popupButton');
const popupContact = document.getElementById('popupContact');
const closeButton = document.getElementById('closeButton');

// Show the popup when the button is pressed
popupButton.addEventListener('click', () => {
  popupContact.classList.remove('hidden');
});

// Close the popup when the close button is pressed
closeButton.addEventListener('click', () => {
  popupContact.classList.add('hidden');
});
/*--------------------------------------------------------*/
