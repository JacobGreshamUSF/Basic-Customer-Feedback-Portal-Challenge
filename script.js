//U59555732
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('feedbackForm');
    const feedbackDisplay = document.getElementById('feedbackDisplay');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const rating = document.getElementById('rating').value;
        const comments = document.getElementById('comments').value.trim();
        
        if (!name || !rating || !comments) {
            alert('Please fill out all fields.');
            return;
        }
        
        const feedback = document.createElement('div');
        feedback.classList.add('feedback-entry');
        feedback.innerHTML = `<p><strong>Name:</strong> ${name}</p>
                              <p><strong>Rating:</strong> ${rating}</p>
                              <p><strong>Comments:</strong> ${comments}</p>`;
        feedbackDisplay.appendChild(feedback);
        
        form.reset();
    });
});
