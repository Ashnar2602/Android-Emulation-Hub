// Dati dei frontend
const frontendData = [
    { name: "Daijishou", version: "0.9.0", type: "Multi", price: "Free/Open Source", website: "https://github.com/magneticchen/Daijishou" },
    { name: "Dig", version: "1.50.0", type: "Multi", price: "Free", website: "https://digdroid.com/" },
    { name: "Reset Collection", version: "2023", type: "Multi", price: "Free/Premium", website: "https://www.resetcollection.com/" },
    { name: "Pegasus", version: "Alpha 16", type: "Multi", price: "Free/Open Source", website: "https://pegasus-frontend.org/" },
    { name: "LaunchBox", version: "13.1", type: "Multi", price: "Free/Premium", website: "https://www.launchbox-app.com/" },
    { name: "HyperSpin", version: "1.5.1", type: "Multi", price: "Free", website: "http://hyperspin-fe.com/" },
    { name: "EmulationStation", version: "2.10", type: "Multi", price: "Free/Open Source", website: "https://emulationstation.org/" }
];

// Lingua predefinita
let currentLanguage = 'it';

// Funzione per cambiare lingua
function changeLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang;
    
    // Aggiorna titolo
    document.title = translations[lang]['frontend_title'] + ' - ' + translations[lang]['title'];
    
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
    
    frontendData.forEach(frontend => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${frontend.name}</td>
            <td>${frontend.version}</td>
            <td>${frontend.type}</td>
            <td>${frontend.price}</td>
            <td><a href="${frontend.website}" target="_blank">${translations[currentLanguage]['pagina_web']}</a></td>
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
