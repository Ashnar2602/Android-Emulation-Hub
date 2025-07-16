// Dati degli emulatori
const emulatorData = [
    { name: "RetroArch", version: "1.14.0", type: "Multi", price: "Free/Open Source", website: "https://www.retroarch.com/" },
    { name: "PPSSPP", version: "1.14.4", type: "PSP", price: "Free/Open Source", website: "https://www.ppsspp.org/" },
    { name: "Dolphin", version: "3.0", type: "GameCube/Wii", price: "Free/Open Source", website: "https://dolphin-emu.org/" },
    { name: "Citra", version: "2023", type: "Nintendo 3DS", price: "Free/Open Source", website: "https://citra-emu.org/" },
    { name: "AetherSX2", version: "1.4", type: "PlayStation 2", price: "Free", website: "https://www.aethersx2.com/" },
    { name: "Redream", version: "1.5.0", type: "Dreamcast", price: "Free/Premium", website: "https://redream.io/" },
    { name: "DuckStation", version: "0.1", type: "PlayStation 1", price: "Free/Open Source", website: "https://github.com/stenzek/duckstation" },
    { name: "Mupen64Plus FZ", version: "3.0.309", type: "Nintendo 64", price: "Free/Open Source", website: "https://github.com/mupen64plus/mupen64plus-core" }
];

// Lingua predefinita
let currentLanguage = 'it';

// Funzione per cambiare lingua
function changeLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang;
    
    // Aggiorna titolo
    document.title = translations[lang]['emulatori_title'] + ' - ' + translations[lang]['title'];
    
    // Aggiorna tutti gli elementi con attributo data-key
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Aggiorna tabella
    updateTable();
    
    // Salva la lingua nel localStorage
    localStorage.setItem('preferred-language', lang);
}

// Funzione per popolare la tabella
function updateTable() {
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = '';
    
    emulatorData.forEach(emulator => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${emulator.name}</td>
            <td>${emulator.version}</td>
            <td>${emulator.type}</td>
            <td>${emulator.price}</td>
            <td><a href="${emulator.website}" target="_blank">${translations[currentLanguage]['pagina_web']}</a></td>
        `;
        tableBody.appendChild(row);
    });
}

// Funzione per ottenere la lingua salvata
function getSavedLanguage() {
    return localStorage.getItem('preferred-language') || 'it';
}

// Inizializza la pagina quando il DOM è caricato
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = getSavedLanguage();
    changeLanguage(savedLanguage);
});
