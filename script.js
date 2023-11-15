// DOM Elements
const modalEl = document.getElementById('modal'); // Modal container
const modalCloseBtnEl = document.getElementById('modal-close-btn'); // Close button in the modal
const consentForm = document.getElementById('consent-form'); // Consent form
const modalText = document.getElementById('modal-text'); // Text content in the modal
const declineBtn = document.getElementById('decline-btn'); // Decline button
const modalChoiceBtn = document.getElementById('modal-choice-btn');// Choice button in the modal

// Displays Modal 1.5s after page load
setTimeout(function () {
    modalEl.style.display = 'inline';
}, 1500);

// Event listener for closing the modal when the close button is clicked
modalCloseBtnEl.addEventListener('click', function() {
    modalEl.style.display = 'none';
});

// Event listener for changing the appearance of the choice button on mouse enter
declineBtn.addEventListener('mouseenter', function () {
    modalChoiceBtn.classList.toggle('modal-choice-btn-reverse');
});

// Prevents Default input field displaying in Browser URL field
consentForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form data
    const consentFormData = new FormData(consentForm);
    const fullName = consentFormData.get('fullName');

    // Update modal text with loading message
    modalText.innerHTML = `
        <div class="modal-inner-loading">
            <img src="images/loading.svg" class="loading" alt="loader image">
            <p id="upload-text">Uploading your data to the dark web...</p>
        </div>`;

    // Simulate a delay and update upload text
    setTimeout(function(){
        document.getElementById('upload-text').innerText = `Making the sale...`;
    }, 1500);

    // Simulate a delay and update modal content
    setTimeout(function () {
        document.getElementById('modal-inner').innerHTML = `
            <h2>Thanks <span class="modal-display-name">${fullName}</span>, you sucker!</h2>
                <p>We just sold the rights to your eternal soul.</p>
            <div class="idiot-gif">
                <img src="images/pirate.gif" alt="gif of a pirate laughing">
            </div>`;
        modalCloseBtnEl.disabled = false; // Enable the close button
    }, 3000);
});
