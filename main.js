const scrollBtn = document.querySelector('.scroll-btn');

scrollBtn.addEventListener('click', () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
});



 // Scroll to the Certificates section when the "Certificates" button is clicked
var certificatesBtn = document.getElementById("certificates-btn");
certificatesBtn.addEventListener("click", function() {
  var certificatesSection = document.getElementById("certificates");
  certificatesSection.scrollIntoView({ behavior: "smooth" });
});

// Scroll to the Education section when the "Education" button is clicked
//var educationBtn = document.getElementById("education-btn");
//educationBtn.addEventListener("click)


const questionForm = document.getElementById('question-form');
const questionInput = document.getElementById('question-input');
const questionResponse = document.getElementById('question-response');

questionForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const question = questionInput.value;
  questionResponse.textContent = `Your question has been sent: ${question}`;
  questionInput.value = '';
});




  


    






        
        
        
        
        





