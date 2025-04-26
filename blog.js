// Simple mobile menu toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
    this.classList.toggle('active');
});

// pop up functionality
const modal = document.getElementById('articleModal');
const openModalBtn = document.getElementById('openArticleModal');
const closeModalBtn = document.getElementById('closeArticleModal');

// Open pop up
openModalBtn.addEventListener('click', function() {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
});

// Tutup pop up
closeModalBtn.addEventListener('click', function() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Re-enable scrolling
});

// Tutup pop up saat klik diluar box
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Tutup pop up pake esc keyboard
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});