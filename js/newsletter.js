// 1. Select the elements we need to interact with
const newsletterBtn = document.getElementById('newsletter-btn');
const newsletterEmail = document.getElementById('newsletter-email');
const newsletterContainer = document.getElementById('newsletter-container');

// 2. Add an event listener to the button
newsletterBtn.addEventListener('click', function() {
    // 3. Capture the value entered by the user in a variable
    const userEmail = newsletterEmail.value;

    // 4. Check if the email is not empty (simple validation)
    if (userEmail !== "") {
        // 5. Change the DOM to show the success message
        // We use innerHTML to replace the entire contents of the container
        newsletterContainer.innerHTML = `
            <p style="color: white; font-weight: bold; padding: 10px 0;">
                Thank you! ${userEmail} has been added to our list.
            </p>
        `;
    } else {
        alert("Please enter a valid email address.");
    }
});
