// Simple mobile menu toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
    this.classList.toggle('active');
});

document.querySelector('.contact-form form').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form submit biasa

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Cek kalau ada field yang kosong
    if (name === '' || email === '' || message === '') {
        alert('Harap isi semua data terlebih dahulu!');
        return; // Stop proses kalo ada yang kosong
    }

    const phoneNumber = '6281818220405'; 
    const whatsappMessage = `Halo Seroet!%0A%0ASaya ingin bertanya.%0A%0A* Nama: ${name}%0A* Email: ${email}%0A* Pesan: ${message}%0A%0ATerima kasih!`;

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    window.open(whatsappLink, '_blank'); 
});
