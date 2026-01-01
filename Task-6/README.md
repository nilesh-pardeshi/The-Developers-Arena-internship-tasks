# Weather Dashboard – Modern Glassmorphism UI  
Week 6 – Developers Arena Internship  
Built by **Nilesh Pardeshi**

This project is a **modern weather dashboard** built with advanced JavaScript, async/await, and the free **Open-Meteo API**.  
The UI uses a **glassmorphism design**, neon blue–purple gradients, and fully responsive layouts.

The dashboard displays:

- Current weather  
- 5-day forecast  
- City search  
- Theme toggle (light/dark)  
- User preferences (saved in LocalStorage)  

---

## 📁 Project Structure

project/
│
├── index.html
│
├── css/
│ └── styles.css
│
├── js/
│ ├── api.js
│ ├── storage.js
│ └── app.js
│
└── README.md






### 🌦 Weather Features
- Fetches current weather using async/await  
- 5-day forecast using Open-Meteo API  
- Automatic city coordinate detection  
- Weather code translated into human-readable text  

### ⚙️ JavaScript Features
- Async API integration  
- Error handling  
- DOM updates  
- Modular JS structure  
- Loading states  
- Search with Enter key  
- Clean separation of logic  

### 💾 Local Storage Features
- Saves last searched city  
- Saves theme preference  
- Saves units (metric)  

### 🎨 UI Features
- Frosted glass cards (Glassmorphism)  
- Neon blue–purple gradient background  
- Responsive search bar  
- Forecast cards in a grid  
- Dark/Light mode toggle  

---

## 🚀 How to Run

1. Download or clone the repository  
2. Open the folder  
3. Run **index.html** in any browser  
4. Search for any city (e.g., Mumbai, Delhi, London)  
5. Weather will display automatically  

No API key required!  
(Open-Meteo is 100% free 🚀)

---

## 🔌 API Used

### **Open-Meteo Geocoding API**
Used to convert city → latitude/longitude  
https://geocoding-api.open-meteo.com/v1/search?name=CITY&count=1


### **Open-Meteo Weather API**
Used to fetch current weather + 5-day forecast  
https://api.open-meteo.com/v1/forecast?latitude=LAT&longitude=LON&current_weather=true&daily=temperature_2m_max,temperature_2m_min,windspeed_10m_max,weathercode&timezone=auto




## 🧪 Testing Done
- Tested city search  
- Tested unknown-city errors  
- Tested forecast grid layout  
- Tested dark/light theme toggle  
- Tested LocalStorage saving  
- Tested responsive design on mobile & desktop  

---

## 💡 Notes
- No API key is required  
- Fully beginner-friendly  
- Follows clean modular code structure  
- Works offline for saved preferences  

---

## 👤 Author
**Nilesh Pardeshi**  
AIML Student | Web Developer | JavaScript Learner

