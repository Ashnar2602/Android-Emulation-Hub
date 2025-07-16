// Dati degli emulatori organizzati per generazione
const emulatorsByGeneration = {
    '1970s': [
        { nome: 'Atari 2600', ultimaVersione: '1.0', tipologia: 'Console', prezzo: 'Gratis', paginaWeb: 'https://stella-emu.github.io/' },
        { nome: 'Magnavox Odyssey', ultimaVersione: '1.0', tipologia: 'Console', prezzo: 'Gratis', paginaWeb: 'https://odyssey-emu.com/' }
    ],
    '1980s': [
        { nome: 'Nestopia', ultimaVersione: '1.51.1', tipologia: 'Console', prezzo: 'Gratis', paginaWeb: 'https://nestopia.sourceforge.net/' },
        { nome: 'FCEUX', ultimaVersione: '2.6.4', tipologia: 'Console', prezzo: 'Gratis', paginaWeb: 'https://fceux.com/' },
        { nome: 'Mesen', ultimaVersione: '0.9.9', tipologia: 'Console', prezzo: 'Gratis', paginaWeb: 'https://mesen.ca/' },
        { nome: 'MasterEmu', ultimaVersione: '1.0', tipologia: 'Console', prezzo: 'Gratis', paginaWeb: 'https://github.com/example/masteremu' }
    ],
    '1990s': [
        { nome: 'Snes9x', ultimaVersione: '1.62.3', tipologia: 'Console', prezzo: 'Gratis', paginaWeb: 'https://snes9x.com/' },
        { nome: 'bsnes', ultimaVersione: '115', tipologia: 'Console', prezzo: 'Gratis', paginaWeb: 'https://bsnes.dev/' },
        { nome: 'Genesis Plus GX', ultimaVersione: '1.7.4', tipologia: 'Console', prezzo: 'Gratis', paginaWeb: 'https://github.com/ekeeke/Genesis-Plus-GX' },
        { nome: 'Blastem', ultimaVersione: '0.6.2', tipologia: 'Console', prezzo: 'Gratis', paginaWeb: 'https://blastem.retrodev.com/' },
        { nome: 'Mednafen', ultimaVersione: '1.29.0', tipologia: 'Console', prezzo: 'Gratis', paginaWeb: 'https://mednafen.github.io/' },
        { nome: 'Beetle PSX', ultimaVersione: '1.0', tipologia: 'Console', prezzo: 'Gratis', paginaWeb: 'https://github.com/libretro/beetle-psx-libretro' },
        { nome: 'DuckStation', ultimaVersione: '0.1-6968', tipologia: 'Console', prezzo: 'Gratis', paginaWeb: 'https://duckstation.org/' },
        { nome: 'Project64', ultimaVersione: '3.0.1', tipologia: 'Console', prezzo: 'Gratis', paginaWeb: 'https://project64.com/' },
        { nome: 'Mupen64Plus', ultimaVersione: '2.5.9', tipologia: 'Console', prezzo: 'Gratis', paginaWeb: 'https://mupen64plus.org/' }
    ],
    '2000s': [
        { nome: 'PCSX2', ultimaVersione: '1.7.5', tipologia: 'Console', prezzo: 'Gratis', paginaWeb: 'https://pcsx2.net/' },
        { nome: 'Dolphin', ultimaVersione: '5.0-20347', tipologia: 'Console', prezzo: 'Gratis', paginaWeb: 'https://dolphin-emu.org/' },
        { nome: 'Xemu', ultimaVersione: '0.7.119', tipologia: 'Console', prezzo: 'Gratis', paginaWeb: 'https://xemu.app/' },
        { nome: 'CXBX Reloaded', ultimaVersione: '1.0', tipologia: 'Console', prezzo: 'Gratis', paginaWeb: 'https://cxbx-reloaded.co.uk/' }
    ],
    '2010s': [
        { nome: 'RPCS3', ultimaVersione: '0.0.30', tipologia: 'Console', prezzo: 'Gratis', paginaWeb: 'https://rpcs3.net/' },
        { nome: 'Xenia', ultimaVersione: '1.0', tipologia: 'Console', prezzo: 'Gratis', paginaWeb: 'https://xenia.jp/' },
        { nome: 'Cemu', ultimaVersione: '2.0-88', tipologia: 'Console', prezzo: 'Gratis', paginaWeb: 'https://cemu.info/' },
        { nome: 'yuzu', ultimaVersione: '1.0', tipologia: 'Console', prezzo: 'Gratis', paginaWeb: 'https://yuzu-emu.org/' },
        { nome: 'Ryujinx', ultimaVersione: '1.1.1369', tipologia: 'Console', prezzo: 'Gratis', paginaWeb: 'https://ryujinx.org/' }
    ],
    'handheld': [
        { nome: 'VisualBoyAdvance-M', ultimaVersione: '2.1.9', tipologia: 'Portatile', prezzo: 'Gratis', paginaWeb: 'https://vba-m.com/' },
        { nome: 'mGBA', ultimaVersione: '0.10.3', tipologia: 'Portatile', prezzo: 'Gratis', paginaWeb: 'https://mgba.io/' },
        { nome: 'SameBoy', ultimaVersione: '0.16.6', tipologia: 'Portatile', prezzo: 'Gratis', paginaWeb: 'https://sameboy.github.io/' },
        { nome: 'Gambatte', ultimaVersione: '0.5.0', tipologia: 'Portatile', prezzo: 'Gratis', paginaWeb: 'https://github.com/sinamas/gambatte' },
        { nome: 'DeSmuME', ultimaVersione: '0.9.13', tipologia: 'Portatile', prezzo: 'Gratis', paginaWeb: 'https://desmume.org/' },
        { nome: 'melonDS', ultimaVersione: '0.9.5', tipologia: 'Portatile', prezzo: 'Gratis', paginaWeb: 'https://melonds.kuribo64.net/' },
        { nome: 'Citra', ultimaVersione: '1.0', tipologia: 'Portatile', prezzo: 'Gratis', paginaWeb: 'https://citra-emu.org/' },
        { nome: 'PPSSPP', ultimaVersione: '1.17.1', tipologia: 'Portatile', prezzo: 'Gratis', paginaWeb: 'https://ppsspp.org/' },
        { nome: 'Vita3K', ultimaVersione: '1.0', tipologia: 'Portatile', prezzo: 'Gratis', paginaWeb: 'https://vita3k.org/' }
    ],
    'arcade': [
        { nome: 'MAME', ultimaVersione: '0.268', tipologia: 'Arcade', prezzo: 'Gratis', paginaWeb: 'https://mamedev.org/' },
        { nome: 'FinalBurn Neo', ultimaVersione: '1.0.0.03', tipologia: 'Arcade', prezzo: 'Gratis', paginaWeb: 'https://github.com/finalburnneo/FBNeo' },
        { nome: 'Kawaks', ultimaVersione: '1.65', tipologia: 'Arcade', prezzo: 'Gratis', paginaWeb: 'https://kawaks.org/' },
        { nome: 'WinKawaks', ultimaVersione: '1.65', tipologia: 'Arcade', prezzo: 'Gratis', paginaWeb: 'https://winkawaks.org/' },
        { nome: 'Nebula', ultimaVersione: '2.25c', tipologia: 'Arcade', prezzo: 'Gratis', paginaWeb: 'https://nebula-emu.com/' }
    ]
};

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
    
    // Aggiorna tabelle
    updateTables();
    
    // Salva la lingua nel localStorage
    localStorage.setItem('preferred-language', lang);
}

// Funzione per popolare tutte le tabelle per generazione
function updateTables() {
    Object.keys(emulatorsByGeneration).forEach(generation => {
        const tbody = document.getElementById(`gen-${generation}`);
        if (tbody) {
            tbody.innerHTML = '';
            
            emulatorsByGeneration[generation].forEach(emulator => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${emulator.nome}</td>
                    <td>${emulator.ultimaVersione}</td>
                    <td>${emulator.tipologia}</td>
                    <td>${emulator.prezzo}</td>
                    <td><a href="${emulator.paginaWeb}" target="_blank">${translations[currentLanguage]['pagina_web']}</a></td>
                `;
                tbody.appendChild(row);
            });
        }
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

// Funzione per caricare la lingua (compatibilità con scripts.js)
function loadLanguage() {
    const savedLanguage = getSavedLanguage();
    changeLanguage(savedLanguage);
}
