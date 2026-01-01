

document.addEventListener("DOMContentLoaded", () => {
    const prefs = loadPreferences();

    // Apply saved theme
    initializeTheme();

    // Show saved city in UI
    document.getElementById("savedCity").textContent = prefs.city;
    document.getElementById("savedUnits").textContent = prefs.units;

    // Load weather for saved city
    loadWeather(prefs.city);

    // Event: Search button
    document.getElementById("searchBtn").addEventListener("click", () => {
        const city = document.getElementById("cityInput").value.trim();
        if (city) {
            loadWeather(city);
        }
    });

    // Event: Enter key inside search box
    document.getElementById("cityInput").addEventListener("keydown", e => {
        if (e.key === "Enter") {
            const city = e.target.value.trim();
            if (city) {
                loadWeather(city);
            }
        }
    });

    // Event: Theme toggle
    document.getElementById("themeToggle").addEventListener("click", () => {
        toggleThemePreference();
        updateThemeIcon();
    });

    updateThemeIcon();
});



async function loadWeather(city) {
    const currentWeatherEl = document.getElementById("currentWeather");
    const forecastGrid = document.getElementById("forecastGrid");

    currentWeatherEl.innerHTML = `<p class="loading">Loading weather...</p>`;
    forecastGrid.innerHTML = "";

    try {
        // 1. Get city coordinates
        const { name, latitude, longitude } = await getCityCoordinates(city);

        // 2. Fetch weather data
        const weatherData = await getWeatherData(latitude, longitude);

        // 3. Update UI
        renderCurrentWeather(name, weatherData.current);
        renderForecast(weatherData.daily);

        // 4. Save as default city
        updatePreference("city", name);
        document.getElementById("savedCity").textContent = name;

    } catch (err) {
        currentWeatherEl.innerHTML = `
            <p style="color: #ffb3b3;">
                Error: ${err.message || "Unable to load weather data."}
            </p>
        `;
        console.error(err);
    }
}


function renderCurrentWeather(city, current) {
    const el = document.getElementById("currentWeather");

    el.innerHTML = `
        <h2>Current Weather — ${city}</h2>
        <p><strong>Temperature:</strong> ${current.temp}°C</p>
        <p><strong>Wind Speed:</strong> ${current.wind} km/h</p>
        <p><strong>Condition:</strong> ${weatherCodeToText(current.code)}</p>
    `;
}



function renderForecast(daily) {
    const grid = document.getElementById("forecastGrid");
    grid.innerHTML = "";

    const days = daily.time.length;

    for (let i = 0; i < days; i++) {
        const card = document.createElement("div");
        card.className = "forecast-card";

        card.innerHTML = `
            <h3>${daily.time[i]}</h3>
            <p><strong>Max Temp:</strong> ${daily.temperature_2m_max[i]}°C</p>
            <p><strong>Min Temp:</strong> ${daily.temperature_2m_min[i]}°C</p>
            <p><strong>Wind:</strong> ${daily.windspeed_10m_max[i]} km/h</p>
            <p><strong>Condition:</strong> ${weatherCodeToText(daily.weathercode[i])}</p>
        `;

        grid.appendChild(card);
    }
}



function updateThemeIcon() {
    const btn = document.getElementById("themeToggle");
    const prefs = loadPreferences();

    btn.textContent = prefs.theme === "dark" ? "☀️" : "🌙";
}
