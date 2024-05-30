document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.image-clickable');
    const modal = document.getElementById('myModal');
    const modalImage = document.getElementById('modal-image');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex;

    images.forEach((image, index) => {
        image.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImage.src = this.src;
            currentIndex = index;
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        modalImage.src = images[currentIndex].src;
    });

    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        modalImage.src = images[currentIndex].src;
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
