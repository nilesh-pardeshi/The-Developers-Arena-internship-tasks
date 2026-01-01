

const STORAGE_KEY = "weather_prefs";


const defaultPrefs = {
    city: "London",
    units: "metric",
    theme: "light"
};



function loadPreferences() {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) {
        savePreferences(defaultPrefs);
        return defaultPrefs;
    }

    try {
        return JSON.parse(saved);
    } catch (error) {
        console.error("Error parsing LocalStorage data:", error);
        return defaultPrefs;
    }
}



function savePreferences(prefs) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
}



function updatePreference(key, value) {
    const prefs = loadPreferences();
    prefs[key] = value;
    savePreferences(prefs);
}

function initializeTheme() {
    const prefs = loadPreferences();

    if (prefs.theme === "dark") {
        document.body.classList.add("dark-mode");
    }
}

function toggleThemePreference() {
    const body = document.body;
    const isDark = body.classList.toggle("dark-mode");

    updatePreference("theme", isDark ? "dark" : "light");
}
