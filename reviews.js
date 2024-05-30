/* Listens for the DOMContentLoaded event before executing the JavaScript code. */
document.addEventListener('DOMContentLoaded', function() {
/* Selects all star icons. */
    const stars = document.querySelectorAll('.star-rating-input i');
/* Selects the hidden input field for the rating. */
    const ratingInput = document.getElementById('rating');

/* Loops through each star icon and adds a click event listener. */
    stars.forEach((star, index) => {
/* Listens for clicks on star icons. */
        star.addEventListener('click', function() {
/* Sets the value of the hidden input field to the index of the clicked star plus one. */
            ratingInput.value = index + 1;
/* Loops through all star icons again to update their active state based on the clicked star. */
            stars.forEach((s, i) => {
                if (i <= index) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
        });
    });

/* Selects the review submission form. */
    const reviewForm = document.getElementById('review-form');
/* Listens for form submissions. */
    reviewForm.addEventListener('submit', function(event) {
/* Prevents the default form submission behavior. */
        event.preventDefault();
/* Retrieves the name entered in the form. */
        const name = document.getElementById('name').value;
/* Retrieves the rating entered in the form. */
        const rating = document.getElementById('rating').value;
/* Retrieves the review text entered in the form. */
        const review = document.getElementById('review').value;

/* Creates a new div element for the review card. */
        const newReviewCard = document.createElement('div');
        newReviewCard.className = 'review-card';
/* Sets the inner HTML of the new review card with the submitted name, rating, and review. */
        newReviewCard.innerHTML = `
            <h2>${name}</h2>
            <div class="star-rating">${getStarRatingHTML(rating)}</div>
            <p>${review}</p>
        `;

/* Appends the new review card to the reviews container. */
        document.querySelector('.reviews-container').appendChild(newReviewCard);
/* Resets the form fields after submission. */
        reviewForm.reset();
/*  Removes the 'active' class from all star icons after form submission. */
        stars.forEach(star => star.classList.remove('active'));
    });

/* Defines a function to generate HTML for star ratings based on the provided rating. */
    function getStarRatingHTML(rating) {
        let starHTML = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                starHTML += '<i class="fas fa-star"></i>';
            } else {
                starHTML += '<i class="far fa-star"></i>';
            }
        }
        return starHTML;
    }
});
