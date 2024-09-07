document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('userForm');
    const resultDiv = document.getElementById('result');
    const displayName = document.getElementById('displayName');
    const displayEmail = document.getElementById('displayEmail');
    const displayPhone = document.getElementById('displayPhone');
    const displayEducation = document.getElementById('displayEducation');
    const displaySkills = document.getElementById('displaySkills');

    form.addEventListener('submit', (event) => {
        event.preventDefault();  // Prevent form submission

        // Get the form input values
        const nameInput = document.getElementById('name').value;
        const emailInput = document.getElementById('email').value;
        const phoneInput = document.getElementById('phone').value;
        const educationInput = document.getElementById('education').value;
        const skillsInput = document.getElementById('skills').value;

        // Display input values on the page
        displayName.textContent = `Name: ${nameInput}`;
        displayEmail.textContent = `Email: ${emailInput}`;
        displayPhone.textContent = `Phone: ${phoneInput}`;
        displayEducation.textContent = `Education: ${educationInput}`;
        displaySkills.textContent = `Skills: ${skillsInput}`;

        // Show the result section
        resultDiv.classList.remove('hidden');

        // Reset form
        form.reset();
    });
});
