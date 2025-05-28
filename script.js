// Toggle navbar menu
const navbarToggle = document.querySelector('.navbar-toggle');
const navLinks = document.querySelector('.nav-links');

navbarToggle.addEventListener('click', toggleNavbar);

function toggleNavbar() {
    navbarToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
}

// Form Validation
const form = document.querySelector('form');

form.addEventListener('submit', validateForm);

function validateForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill in all fields');
        return;
    }

    if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // If all validation passes, you can submit the form
    form.submit();
}

// Function to validate email format
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
// JavaScript for animated text
const words = ["Hi, my name is Dorcus Adich Alier Malony"];
let wordIndex = 0;
const animatedText = document.getElementById("animated-text");

function animateText() {
  animatedText.textContent = words[wordIndex];
  wordIndex = (wordIndex + 1) % words.length;
  setTimeout(animateText, 2000);
}

animateText();

function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

// JavaScript for animated description with dynamic words
const descriptionWords = ["I am a full-stack developer", "Problem solver", "Web developer"];
let descriptionIndex = 0;
// Reuse the existing animatedDescription variable

function animateDescription() {
  animatedDescription.textContent = descriptionWords[descriptionIndex];
  descriptionIndex = (descriptionIndex + 1) % descriptionWords.length;
  setTimeout(animateDescription, 2000); // Switch words every 2 seconds
}

animateDescription();

// JavaScript for animated introduction text with waving hand
const introText = [
  "Welcome to my portfolio!",
  "I am a software engineer 👩‍💻",
  "I am a problem solver 🧠",
  "I am a full-stack developer 💻"
];
let introIndex = 0;
let charIndex = 0;
const animatedIntro = document.getElementById("animated-description");

function typeIntroText() {
  if (charIndex < introText[introIndex].length) {
    animatedIntro.textContent += introText[introIndex][charIndex];
    charIndex++;
    setTimeout(typeIntroText, 100); // Typing speed
  } else {
    setTimeout(() => {
      charIndex = 0;
      introIndex = (introIndex + 1) % introText.length;
      animatedIntro.textContent = ""; // Clear text for next animation
      typeIntroText();
    }, 2000); // Pause before switching to the next text
  }
}

typeIntroText();

// JavaScript for sequentially displaying phrases
const phrases = [
  "I am a developer",
  "Welcome to my portfolio!",
  "I am a software engineer 👩‍💻",
  "I am a problem solver 🧠",
  "I am a full-stack developer 💻"
];
let phraseIndex = 0;
const animatedDescription = document.getElementById("animated-description");

function displayPhrases() {
  animatedDescription.textContent = phrases[phraseIndex];
  phraseIndex = (phraseIndex + 1) % phrases.length;
  setTimeout(displayPhrases, 2000); // Switch phrases every 2 seconds
}

displayPhrases();