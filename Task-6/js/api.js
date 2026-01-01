


const API_BASE = "https://api.open-meteo.com/v1/forecast";
const GEOCODE_API = "https://geocoding-api.open-meteo.com/v1/search";



async function getCityCoordinates(city) {
    try {
        const url = `${GEOCODE_API}?name=${encodeURIComponent(city)}&count=1&language=en`;

        const res = await fetch(url);

        if (!res.ok) throw new Error("Unable to fetch city coordinates");

        const data = await res.json();

        if (!data.results || data.results.length === 0) {
            throw new Error("City not found");
        }

        const cityData = data.results[0];

        return {
            name: cityData.name,
            latitude: cityData.latitude,
            longitude: cityData.longitude
        };

    } catch (err) {
        console.error("Geocoding Error:", err.message);
        throw err;
    }
}


async function getWeatherData(lat, lon) {
    try {
        const url = `${API_BASE}?latitude=${lat}&longitude=${lon}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,windspeed_10m_max,weathercode&timezone=auto`;

        const res = await fetch(url);

        if (!res.ok) throw new Error("Weather data unavailable");

        const data = await res.json();

        return {
            current: {
                temp: data.current_weather.temperature,
                wind: data.current_weather.windspeed,
                code: data.current_weather.weathercode
            },
            daily: data.daily
        };

    } catch (err) {
        console.error("Weather API Error:", err.message);
        throw err;
    }
}


function weatherCodeToText(code) {
    const codes = {
        0: "Clear Sky",
        1: "Mostly Clear",
        2: "Partly Cloudy",
        3: "Overcast",
        45: "Fog",
        48: "Rime Fog",
        51: "Light Drizzle",
        61: "Light Rain",
        63: "Moderate Rain",
        65: "Heavy Rain",
        71: "Light Snow",
        73: "Moderate Snow",
        95: "Thunderstorm"
    };

    return codes[code] || "Unknown Condition";
}
