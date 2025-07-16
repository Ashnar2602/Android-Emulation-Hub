# 📋 STRUTTURA DEL SITO - Android Emulation Hub

## 📁 Struttura File

```
📁 Android-Emulation-Hub/
├── 📄 index.html              # Homepage principale
├── 📄 emulatori.html          # Pagina lista emulatori
├── 📄 frontend.html           # Pagina lista frontend
├── 📄 tools.html              # Pagina lista driver e tool
├── 📄 guide.html              # Pagina lista guide
├── 📁 css/
│   └── 📄 styles.css          # Stili CSS condivisi
├── 📁 js/
│   ├── 📄 translations.js     # File traduzioni multilingua
│   ├── 📄 scripts.js          # Script homepage
│   ├── 📄 emulatori.js        # Script pagina emulatori
│   ├── 📄 frontend.js         # Script pagina frontend
│   ├── 📄 tools.js            # Script pagina tools
│   └── 📄 guide.js            # Script pagina guide
├── 📄 README.md               # Documentazione pubblica
├── 📄 STRUTTURA.md            # Questo file (solo per sviluppatori)
└── 📄 .gitignore              # File Git ignore
```

## 🌍 Sistema Multilingua

### Lingue Supportate
- **Italiano** (it) - Lingua predefinita
- **Inglese** (en) - Lingua secondaria

### Funzionamento
1. **File traduzioni**: `translations.js` contiene tutte le stringhe tradotte
2. **Attributi HTML**: Ogni elemento traducibile ha `data-key="chiave"`
3. **Persistenza**: La lingua scelta viene salvata nel `localStorage`
4. **Sincronizzazione**: Tutte le pagine condividono la stessa lingua selezionata

### Struttura Traduzioni
```javascript
const translations = {
    it: {
        chiave: "Valore in italiano",
        // ...
    },
    en: {
        chiave: "English value",
        // ...
    }
};
```

## 📄 Pagine del Sito

### 1. Homepage (`index.html`)
- **Scopo**: Landing page principale
- **Contenuti**: 
  - Header con selettore lingua
  - Hero section con titolo e disclaimer
  - Navigation cards per le sezioni principali
  - Footer
- **Script**: `scripts.js`
- **Navigazione**: Collegamenti alle pagine secondarie

### 2. Emulatori (`emulatori.html`)
- **Scopo**: Lista completa degli emulatori Android
- **Contenuti**: Tabella con nome, versione, tipo, prezzo, link
- **Script**: `emulatori.js`
- **Dati**: Array `emulatorData` con informazioni dettagliate

### 3. Frontend (`frontend.html`)
- **Scopo**: Lista dei frontend/launcher per organizzare giochi
- **Contenuti**: Tabella con informazioni sui frontend
- **Script**: `frontend.js`
- **Dati**: Array `frontendData` con dettagli sui launcher

### 4. Tools (`tools.html`)
- **Scopo**: Lista di driver e strumenti utili
- **Contenuti**: Tabella con nome, descrizione, link
- **Script**: `tools.js`
- **Dati**: Array `toolsData` con descrizioni multilingua

### 5. Guide (`guide.html`)
- **Scopo**: Lista di tutorial e guide
- **Contenuti**: Lista con titoli, descrizioni e link
- **Script**: `guide.js`
- **Dati**: Array `guideData` con guide multilingua

## 🎨 Sistema di Styling

### Framework CSS
- **Approccio**: CSS personalizzato, nessun framework esterno
- **Tema**: Gradiente moderno (blu-viola) con effetti glassmorphism
- **Responsive**: Design adattivo per mobile e desktop

### Componenti Principali
1. **Header**: Barra superiore con titolo e selettore lingua
2. **Hero**: Sezione principale con titolo e disclaimer
3. **Navigation Cards**: Card interattive per navigazione
4. **Tabelle**: Stile uniforme per tutte le liste
5. **Footer**: Informazioni copyright

### Colori Principali
- **Primario**: `#667eea` (blu)
- **Secondario**: `#764ba2` (viola)
- **Sfondo**: Gradiente `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- **Testo**: `#333` (grigio scuro)
- **Accent**: `#666` (grigio medio)

## 📱 Funzionalità

### Navigazione
- **Homepage**: Landing page con card di navigazione
- **Pagine secondarie**: Ognuna dedicata a una categoria specifica
- **Breadcrumb**: Pulsante "Torna alla Home" in ogni pagina

### Interattività
- **Hover effects**: Animazioni su card e pulsanti
- **Responsive**: Adattamento automatico a diverse risoluzioni
- **Accessibilità**: Contrasti adeguati e focus visibili

### Persistenza Dati
- **Lingua**: Salvata nel localStorage del browser
- **Preferenze**: Mantenute tra sessioni

## 🔧 Manutenzione

### Aggiungere un Emulatore
1. Modificare `emulatorData` in `emulatori.js`
2. Formato: `{ name, version, type, price, website }`

### Aggiungere una Traduzione
1. Modificare `translations.js`
2. Aggiungere la chiave in entrambe le lingue (it, en)
3. Utilizzare `data-key="nuova_chiave"` negli elementi HTML

### Aggiungere una Pagina
1. Creare file HTML seguendo la struttura esistente
2. Creare file JS corrispondente
3. Aggiungere link nella homepage
4. Aggiornare questo file di documentazione

## 🚀 Deployment

### GitHub Pages
- **Repository**: https://github.com/Ashnar2602/Android-Emulation-Hub
- **URL Live**: https://Ashnar2602.github.io/Android-Emulation-Hub/
- **Branch**: main
- **Auto-deploy**: Attivato per ogni push sul branch main

### Aggiornamenti
1. Modificare i file localmente
2. Commit e push sul branch main
3. GitHub Pages aggiorna automaticamente il sito

## 📊 Metriche e Analisi

### Dati Attuali (Luglio 2025)
- **Emulatori**: 8 emulatori catalogati
- **Frontend**: 7 frontend disponibili
- **Tools**: 6 strumenti utili
- **Guide**: 7 guide tutorial

### Possibili Miglioramenti Futuri
- [ ] Aggiungere filtri per piattaforme
- [ ] Implementare ricerca testuale
- [ ] Aggiungere rating e recensioni
- [ ] Implementare sistema di categorie avanzato
- [ ] Aggiungere screenshot degli emulatori
- [ ] Implementare sistema di notifiche per aggiornamenti

## 📞 Contatti Sviluppo

### Sviluppatore Principale
- **Nome**: Valerio Stallone
- **Email**: stallone.valerio@gmail.com
- **GitHub**: Ashnar2602

### Tecnologie Utilizzate
- **Frontend**: HTML5, CSS3, JavaScript ES6
- **Hosting**: GitHub Pages
- **Versioning**: Git
- **Editor**: VS Code

---

*Documentazione aggiornata al 16 Luglio 2025*
