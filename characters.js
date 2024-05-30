document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('character-modal');
    const modalContent = document.querySelector('.modal-content');
    const span = document.getElementsByClassName('close')[0];
    
    document.querySelectorAll('.character-card').forEach(card => {
        card.addEventListener('click', function() {
            const name = this.querySelector('h2').innerText;
            const imageSrc = this.querySelector('img').src;
            const description = this.querySelector('p').innerText;

            document.getElementById('modal-character-name').innerText = name;
            document.getElementById('modal-character-image').src = imageSrc;
            document.getElementById('modal-character-description').innerText = description;

            modal.style.display = 'block';
        });
    });

    span.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});
