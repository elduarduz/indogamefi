// Fungsi untuk menambahkan sambutan di halaman
function addWelcomeSectionToMain() {
    // Cari elemen <main> di dalam HTML
    const mainElement = document.querySelector('main');

    if (!mainElement) {
        console.error('Elemen <main> tidak ditemukan. Pastikan HTML memiliki elemen <main>.');
        return;
    }

    // Buat elemen container sambutan
    const welcomeSection = document.createElement('section');
    welcomeSection.id = 'welcome-section';
    welcomeSection.style.padding = '20px';
    welcomeSection.style.backgroundColor = '#f9f9f9';
    welcomeSection.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    welcomeSection.style.borderRadius = '8px';
    welcomeSection.style.marginBottom = '20px';
    welcomeSection.style.marginLeft = '5%';  // Menambahkan margin-left 20%
    welcomeSection.style.marginRight = '10%'; // Menambahkan margin-right 20%

    // Isi konten sambutan
    welcomeSection.innerHTML = `
        <h2 style="margin-bottom: 10px; font-size: 1.5rem; color: #007bff;">Welcome to SCN Community!</h2>
        <p style="margin-bottom: 10px; font-size: 1rem; color: #333;">
            We are thrilled to have you here! SCN Community is your go-to hub for the latest updates in Airdrop and GameFi. 
        </p>
        <p style="margin-bottom: 10px; font-size: 1rem; color: #333;">
            Join us for exclusive airdrop opportunities, GameFi news, and exciting events that connect you with the Web3 gaming world!
        </p>
        <a href="#" style="color: #28a745; text-decoration: none; font-size: 1rem;">Learn More</a>
    `;

    // Tambahkan elemen ke dalam elemen <main>
    mainElement.prepend(welcomeSection);
}

// Panggil fungsi untuk menambahkan sambutan
addWelcomeSectionToMain();
addWelcomeSectionToMain();
addWelcomeSectionToMain();
addWelcomeSectionToMain();
addWelcomeSectionToMain();
addWelcomeSectionToMain();
