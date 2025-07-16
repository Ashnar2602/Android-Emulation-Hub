// Dati degli emulatori
const emulatorData = [
    { name: "RetroArch", version: "1.14.0", type: "Multi", price: "Free/Open Source", website: "https://www.retroarch.com/" },
    { name: "PPSSPP", version: "1.14.4", type: "PSP", price: "Free/Open Source", website: "https://www.ppsspp.org/" },
    { name: "Dolphin", version: "3.0", type: "GameCube/Wii", price: "Free/Open Source", website: "https://dolphin-emu.org/" },
    { name: "Citra", version: "2023", type: "Nintendo 3DS", price: "Free/Open Source", website: "https://citra-emu.org/" },
    { name: "Redream", version: "1.5.0", type: "Dreamcast", price: "Free/Premium", website: "https://redream.io/" }
];

// Dati dei frontend
const frontendData = [
    { name: "Daijishou", version: "0.9.0", type: "Multi", price: "Free/Open Source", website: "https://github.com/magneticchen/Daijishou" },
    { name: "Dig", version: "1.50.0", type: "Multi", price: "Free", website: "https://digdroid.com/" },
    { name: "Reset Collection", version: "2023", type: "Multi", price: "Free/Premium", website: "https://www.resetcollection.com/" },
    { name: "Pegasus", version: "Alpha 16", type: "Multi", price: "Free/Open Source", website: "https://pegasus-frontend.org/" }
];

// Dati dei driver e tool
const toolsData = [
    { name: "JoyMapping", description: "it: Tool per mappare controller Bluetooth | en: Tool for mapping Bluetooth controllers", website: "https://joymapping.com/" },
    { name: "Skyline Tools", description: "it: Strumenti per il debug degli emulatori | en: Debugging tools for emulators", website: "https://skyline-emu.org/" }
];

// Lingua predefinita
let currentLanguage = 'it';

// Funzione per cambiare lingua
function changeLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang;
    
    // Aggiorna titolo e altri elementi statici
    document.title = translations[lang]['title'];
    
    // Aggiorna tutti gli elementi con attributo data-key
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Aggiorna tabelle con dati dinamici
    updateTables();
}

// Funzione per popolare le tabelle con i dati
function updateTables() {
    // Popola tabella emulatori
    const emulatorsTable = document.querySelector('#emulatori tbody');
    emulatorsTable.innerHTML = '';
    emulatorData.forEach(emulator => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${emulator.name}</td>
            <td>${emulator.version}</td>
            <td>${emulator.type}</td>
            <td>${emulator.price}</td>
            <td><a href="${emulator.website}" target="_blank">${translations[currentLanguage]['pagina_web']}</a></td>
        `;
        emulatorsTable.appendChild(row);
    });
    
    // Popola tabella frontend
    const frontendTable = document.querySelector('#frontend tbody');
    frontendTable.innerHTML = '';
    frontendData.forEach(frontend => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${frontend.name}</td>
            <td>${frontend.version}</td>
            <td>${frontend.type}</td>
            <td>${frontend.price}</td>
            <td><a href="${frontend.website}" target="_blank">${translations[currentLanguage]['pagina_web']}</a></td>
        `;
        frontendTable.appendChild(row);
    });
    
    // Popola tabella tool
    const toolsTable = document.querySelector('#driver_tool tbody');
    toolsTable.innerHTML = '';
    toolsData.forEach(tool => {
        const desc = tool.description.split('|').find(d => d.trim().startsWith(currentLanguage + ':')).trim().substring(3);
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${tool.name}</td>
            <td>${desc}</td>
            <td><a href="${tool.website}" target="_blank">${translations[currentLanguage]['pagina_web']}</a></td>
        `;
        toolsTable.appendChild(row);
    });
}

// Inizializza la pagina quando il DOM è caricato
document.addEventListener('DOMContentLoaded', () => {
    changeLanguage(currentLanguage);
});