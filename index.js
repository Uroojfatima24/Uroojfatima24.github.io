/* This code makes images clickable to open them in a modal, allows navigation between images, and provides 
functionality to close the modal.*/

/* Runs the enclosed code after the HTML document is fully loaded. */
document.addEventListener('DOMContentLoaded', function() {
/* Selects all elements with the class image-clickable and stores them in the images variable. */
    const images = document.querySelectorAll('.image-clickable');
/* Selects the modal element by its ID myModal and stores it in the modal variable. */
    const modal = document.getElementById('myModal');
/* Selects the image element inside the modal by its ID modal-image and stores it in the modalImage variable. */
    const modalImage = document.getElementById('modal-image');
/* Selects the close button inside the modal by its class close and stores it in the closeBtn variable. */
    const closeBtn = document.querySelector('.close');
/* Selects the previous button inside the modal by its class prev and stores it in the prevBtn variable. */
    const prevBtn = document.querySelector('.prev');
/* Selects the next button inside the modal by its class next and stores it in the nextBtn variable. */
    const nextBtn = document.querySelector('.next');
/* Declares a variable currentIndex to keep track of the currently displayed image's index. */
    let currentIndex;

/* Loops through each image element. */
    images.forEach((image, index) => {
/* Adds a click event listener to each image. */
        image.addEventListener('click', function() {
/* When an image is clicked, it shows the modal. */
            modal.style.display = 'block';
/* Sets the modal image's source to the clicked image's source. */
            modalImage.src = this.src;
/* Updates currentIndex to the clicked image's index. */
            currentIndex = index;
        });
    });

/* Adds a click event listener to the close button. */ 
    closeBtn.addEventListener('click', function() {
/* When the close button is clicked, it hides the modal. */
        modal.style.display = 'none';
    });

/* Adds a click event listener to the previous button. */
    prevBtn.addEventListener('click', function() {
/* Updates currentIndex to the previous image's index or loops to the last image if the current image is the first one. */
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
/* Sets the modal image's source to the previous image's source. */
        modalImage.src = images[currentIndex].src;
    });

/* Adds a click event listener to the next button. */
    nextBtn.addEventListener('click', function() {
/* Updates currentIndex to the next image's index or loops to the first image if the current image is the last one. */
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
/* Sets the modal image's source to the next image's source. */
        modalImage.src = images[currentIndex].src;
    });

/* Adds a click event listener to the whole window. */
    window.addEventListener('click', function(event) {
/* Checks if the click was outside the modal content. */
        if (event.target == modal) {
/* If true, hides the modal. */
            modal.style.display = 'none'; 
        }
    });
});
