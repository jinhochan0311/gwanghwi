// Accessing the button element and textarea
const speakButton = document.getElementById('speakButton');
const textInput = document.getElementById('textInput');

// Adding a click event listener to the button
speakButton.addEventListener('click', function() {
  // Get the text from the textarea
  const textToSpeak = textInput.value.trim();

  // Check if there's actually text to speak
  if (textToSpeak !== '') {
    // Using the SpeechSynthesis API to speak the text
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    speechSynthesis.speak(utterance);
  } else {
    alert('Please type something to speak.');
  }
});
