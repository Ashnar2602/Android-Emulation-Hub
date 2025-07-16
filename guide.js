// Dati delle guide
const guideData = [
    { title: "it: Come configurare RetroArch su Android | en: How to configure RetroArch on Android", link: "#", description: "it: Guida completa per configurare RetroArch | en: Complete guide to configure RetroArch" },
    { title: "it: Installare emulatori senza Play Store | en: Install emulators without Play Store", link: "#", description: "it: Sideloading di emulatori Android | en: Sideloading Android emulators" },
    { title: "it: Configurare controller Bluetooth | en: Configure Bluetooth controllers", link: "#", description: "it: Setup controller wireless per emulatori | en: Wireless controller setup for emulators" },
    { title: "it: Ottimizzare le prestazioni degli emulatori | en: Optimize emulator performance", link: "#", description: "it: Migliorare FPS e stabilità | en: Improve FPS and stability" },
    { title: "it: Backup e restore dei save files | en: Backup and restore save files", link: "#", description: "it: Salvare e ripristinare i progressi | en: Save and restore game progress" },
    { title: "it: Configurare shader e filtri grafici | en: Configure shaders and graphical filters", link: "#", description: "it: Migliorare la qualità visiva | en: Improve visual quality" },
    { title: "it: Mappatura dei controlli touch | en: Touch control mapping", link: "#", description: "it: Personalizzare i controlli su schermo | en: Customize on-screen controls" }
];

// Lingua predefinita
let currentLanguage = 'it';

// Funzione per cambiare lingua
function changeLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang;
    
    // Aggiorna titolo
    document.title = translations[lang]['guide_title'] + ' - ' + translations[lang]['title'];
    
    // Aggiorna tutti gli elementi con attributo data-key
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Aggiorna lista guide
    updateGuideList();
    
    // Salva la lingua nel localStorage
    localStorage.setItem('preferred-language', lang);
}

// Funzione per popolare la lista delle guide
function updateGuideList() {
    const guideList = document.querySelector('ul');
    guideList.innerHTML = '';
    
    guideData.forEach(guide => {
        const title = guide.title.split('|').find(t => t.trim().startsWith(currentLanguage + ':')).trim().substring(3);
        const description = guide.description.split('|').find(d => d.trim().startsWith(currentLanguage + ':')).trim().substring(3);
        
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong><a href="${guide.link}">${title}</a></strong>
            <p>${description}</p>
        `;
        guideList.appendChild(listItem);
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
