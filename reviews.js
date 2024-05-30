document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star-rating-input i');
    const ratingInput = document.getElementById('rating');

    stars.forEach((star, index) => {
        star.addEventListener('click', function() {
            ratingInput.value = index + 1;
            stars.forEach((s, i) => {
                if (i <= index) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
        });
    });

    const reviewForm = document.getElementById('review-form');
    reviewForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const rating = document.getElementById('rating').value;
        const review = document.getElementById('review').value;

        const newReviewCard = document.createElement('div');
        newReviewCard.className = 'review-card';
        newReviewCard.innerHTML = `
            <h2>${name}</h2>
            <div class="star-rating">${getStarRatingHTML(rating)}</div>
            <p>${review}</p>
        `;

        document.querySelector('.reviews-container').appendChild(newReviewCard);
        reviewForm.reset();
        stars.forEach(star => star.classList.remove('active'));
    });

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
