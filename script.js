document.querySelectorAll('a[href^="#"]').forEach(anchor => {
 anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
 });
});

document.addEventListener('DOMContentLoaded', function() {
    const educationElements = document.querySelectorAll('.education');
   
    educationElements.forEach(function(educationElement) {
       educationElement.addEventListener('click', function() {
         educationElement.classList.toggle('open');
       });
    });
   });

   document.addEventListener('DOMContentLoaded', function() {
    const experienceElements = document.querySelectorAll('.experience');
   
    experienceElements.forEach(function(experienceElement) {
       experienceElement.addEventListener('click', function() {
         experienceElement.classList.toggle('open');
       });
    });
   });

   document.querySelectorAll('.skill-section').forEach(skillSection => {
    const heading = skillSection.querySelector('h3');
    const items = skillSection.querySelectorAll('li');
    const itemsList = [...items].map(item => item.textContent);
   
    console.log(`${heading.textContent}:`, itemsList);
   });

   document.querySelectorAll('li').forEach(item => {
    item.addEventListener('click', event => {
       alert('You clicked on: ' + event.target.textContent);
    });
   });
   // Select the form by its class name
var form = document.querySelector('.contact-form');

// Add an event listener to the form to handle the submit event
form.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // for inputting values
    var name = document.querySelector('#name').value;
    var email = document.querySelector('#email').value;
    var message = document.querySelector('#message').value;

    // to display values
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Send the form data to your server or another web service here
});