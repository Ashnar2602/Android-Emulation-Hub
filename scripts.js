// Dati degli emulatori
const emulatorData = [
    { name: "RetroArch", version: "1.14.0", type: "Multi", price: "Free/Open Source", website: "https://www.retroarch.com/" },
    { name: "PPSSPP", version: "1.14.4", type: "PSP", price: "Free/Open Source", website: "https://www.ppsspp.org/" },
    { name: "Dolphin", version: "3.0", type: "GameCube/Wii", price: "Free/Open Source", website: "https://dolphin-emu.org/" },
    { name: "Citra", version: "2023", type: "Nintendo 3DS", price: "Free/Open Source", website: "https://citra-emu.org/" },
    { name: "AetherSX2", version: "1.4", type: "PlayStation 2", price: "Free", website: "https://www.aethersx2.com/" },
    { name: "Redream", version: "1.5.0", type: "Dreamcast", price: "Free/Premium", website: "https://redream.io/" }
];

// Dati dei frontend
const frontendData = [
    { name: "Daijishou", version: "0.9.0", type: "Multi", price: "Free/Open Source", website: "https://github.com/magneticchen/Daijishou" },
    { name: "Dig", version: "1.50.0", type: "Multi", price: "Free", website: "https://digdroid.com/" },
    { name: "Reset Collection", version: "2023", type: "Multi", price: "Free/Premium", website: "https://www.resetcollection.com/" },
    { name: "Pegasus", version: "Alpha 16", type: "Multi", price: "Free/Open Source", website: "https://pegasus-frontend.org/" },
    { name: "LaunchBox", version: "13.1", type: "Multi", price: "Free/Premium", website: "https://www.launchbox-app.com/" }
];

// Dati dei driver e tool
const toolsData = [
    { name: "Gamesir World", description: "it: App per configurare controller Gamesir | en: App to configure Gamesir controllers", website: "https://www.gamesir.hk/" },
    { name: "Mantis Gamepad Pro", description: "it: Mappatura universale dei controller | en: Universal controller mapping", website: "https://play.google.com/store/apps/details?id=com.mantispro.gamepadpro" },
    { name: "Octopus", description: "it: Mappatura touch per controller | en: Touch to controller mapping", website: "https://www.octopus.app/" },
    { name: "Scrcpy", description: "it: Controllo remoto dispositivi Android | en: Remote control Android devices", website: "https://github.com/Genymobile/scrcpy" }
];

// Dati delle guide
const guideData = [
    { title: "it: Come configurare RetroArch | en: How to configure RetroArch", link: "#" },
    { title: "it: Installare emulatori senza Play Store | en: Install emulators without Play Store", link: "#" },
    { title: "it: Configurare controller Bluetooth | en: Configure Bluetooth controllers", link: "#" },
    { title: "it: Ottimizzare le prestazioni | en: Performance optimization", link: "#" },
    { title: "it: Backup e restore save files | en: Backup and restore save files", link: "#" }
];

// Lingua predefinita
let currentLanguage = 'it';

// Funzione per cambiare lingua
function changeLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang;
    
    // Aggiorna titolo
    document.title = translations[lang]['title'];
    
    // Aggiorna tutti gli elementi con attributo data-key
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Salva la lingua nel localStorage
    localStorage.setItem('preferred-language', lang);
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