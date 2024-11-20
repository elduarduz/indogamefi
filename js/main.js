function addWelcomeSectionToMain() {
    const mainElement = document.querySelector('main');

    if (!mainElement) {
        console.error('Elemen <main> tidak ditemukan. Pastikan HTML memiliki elemen <main>.');
        return;
    }

    // Buat elemen container sambutan
    const welcomeContainer = document.createElement('div');
    welcomeContainer.style.display = 'flex'; // Gunakan flex untuk membuat dua kolom
    welcomeContainer.style.gap = '20px'; // Jarak antar elemen di dalam flex container

    // Elemen pertama (bagian besar) di kiri
    const largeSection = document.createElement('section');
    largeSection.style.flex = '1 1 55%';  // Membuat elemen besar mengambil 70% lebar
    largeSection.style.padding = '20px';
    largeSection.style.backgroundColor = '#f9f9f9';
    largeSection.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    largeSection.style.marginBottom = '20px';
    largeSection.innerHTML = `
        <h2 style="margin-bottom: 10px; font-size: 1.5rem; color: #007bff;">Welcome to SCN Community!</h2>
        <p style="margin-bottom: 10px; font-size: 1rem; color: #333;">
            We are thrilled to have you here! SCN Community is your go-to hub for the latest updates in Airdrop and GameFi. 
        </p>
        <p style="margin-bottom: 10px; font-size: 1rem; color: #333;">
            Join us for exclusive airdrop opportunities, GameFi news, and exciting events that connect you with the Web3 gaming world!
        </p>
        <a href="#" style="color: #28a745; text-decoration: none; font-size: 1rem;">Learn More</a>
    `;

    // Container untuk elemen-elemen kecil di kanan
    const smallSectionsContainer = document.createElement('div');
    smallSectionsContainer.style.flex = '1 1 30%'; // Membuat kontainer sebelah kanan mengambil 30% lebar
    smallSectionsContainer.style.display = 'flex';
    smallSectionsContainer.style.flexDirection = 'column'; // Elemen-elemen kecil akan ditata secara vertikal
    smallSectionsContainer.style.gap = '20px'; // Jarak antar elemen kecil

    // Elemen kedua, ketiga, dan keempat (bagian kecil)
    for (let i = 0; i < 3; i++) {
        const smallSection = document.createElement('section');
        smallSection.style.padding = '20px';
        smallSection.style.backgroundColor = '#f9f9f9';
        smallSection.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        smallSection.style.marginBottom = '20px';
        smallSection.innerHTML = `
            <h3 style="margin-bottom: 10px; font-size: 1.2rem; color: #007bff;">Section ${i + 1}</h3>
            <p style="margin-bottom: 10px; font-size: 1rem; color: #333;">
                This is a smaller section.
            </p>
        `;
        smallSectionsContainer.appendChild(smallSection);
    }

    // Menambahkan elemen besar dan elemen kecil ke dalam container sambutan
    welcomeContainer.appendChild(largeSection);
    welcomeContainer.appendChild(smallSectionsContainer);

    // Tambahkan elemen ke dalam elemen <main>
    mainElement.prepend(welcomeContainer);
}

// Panggil fungsi untuk menambahkan sambutan
addWelcomeSectionToMain();
