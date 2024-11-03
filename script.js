function navigateToGamePage(gameId) {
    if (gameId === 'mlbb') {
        document.querySelector('.game-section').classList.add('hidden');
        document.querySelector('#mlbb-page').classList.remove('hidden');
    }
}

function showSection(sectionId) {
    document.getElementById('diamond-section').classList.add('hidden');
    document.getElementById('membership-section').classList.add('hidden');
    document.getElementById(sectionId).classList.remove('hidden');
}

function showPaymentButton(diamondAmount, price) {
    const button = document.getElementById('pay-now-btn');
    if (button) {
        button.textContent = `Bayar Sekarang - Rp ${price}`; // Tampilkan harga di tombol
        button.classList.remove('hidden');
        button.onclick = () => {
            const userId = prompt("Masukkan ID Pengguna (hanya angka):");
            if (userId && /^\d+$/.test(userId)) { // Validasi hanya angka
                const userZone = prompt("Masukkan Zone Pengguna (hanya angka):");
                if (userZone && /^\d+$/.test(userZone)) { // Validasi hanya angka
                    const whatsappMessage = `https://wa.me/6285158185567?text=ID: ${userId}%0AZone: ${userZone}%0AOrder: ${diamondAmount} Diamonds%0AHarga: Rp ${price}`;
                    window.open(whatsappMessage, '_blank');
                } else {
                    alert("Zone harus diisi dengan angka!");
                }
            } else {
                alert("ID harus diisi dengan angka!");
            }
        };

        // Scroll ke tombol "Bayar Sekarang"
        button.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
        console.error('Elemen tombol "Bayar Sekarang" tidak ditemukan.');
    }
}
