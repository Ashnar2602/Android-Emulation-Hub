// Dati dei driver e tool
const toolsData = [
    { name: "Gamesir World", description: "it: App per configurare controller Gamesir | en: App to configure Gamesir controllers", website: "https://www.gamesir.hk/" },
    { name: "Mantis Gamepad Pro", description: "it: Mappatura universale dei controller | en: Universal controller mapping", website: "https://play.google.com/store/apps/details?id=com.mantispro.gamepadpro" },
    { name: "Octopus", description: "it: Mappatura touch per controller | en: Touch to controller mapping", website: "https://www.octopus.app/" },
    { name: "Scrcpy", description: "it: Controllo remoto dispositivi Android | en: Remote control Android devices", website: "https://github.com/Genymobile/scrcpy" },
    { name: "Input Redirection Client", description: "it: Redirezione input per emulatori | en: Input redirection for emulators", website: "https://github.com/Genymobile/scrcpy" },
    { name: "GameSir Connect", description: "it: Connessione controller wireless | en: Wireless controller connection", website: "https://www.gamesir.hk/pages/connect" }
];

// Lingua predefinita
let currentLanguage = 'it';

// Funzione per cambiare lingua
function changeLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang;
    
    // Aggiorna titolo
    document.title = translations[lang]['driver_tool_title'] + ' - ' + translations[lang]['title'];
    
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
    
    toolsData.forEach(tool => {
        const desc = tool.description.split('|').find(d => d.trim().startsWith(currentLanguage + ':')).trim().substring(3);
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${tool.name}</td>
            <td>${desc}</td>
            <td><a href="${tool.website}" target="_blank">${translations[currentLanguage]['pagina_web']}</a></td>
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
