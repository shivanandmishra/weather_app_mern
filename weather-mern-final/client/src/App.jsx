// import { useState } from "react";
// import axios from "axios";
// import "./App.css";
// export default function App() {
//   const [city, setCity] = useState("");
//   const [weather, setWeather] = useState(null);
//   const getWeather = async () => {
//     if (!city) return;
//     try {
//       const res = await axios.get(`http://localhost:5000/api/weather/${city}`);
//       setWeather(res.data);
//     } catch {
//       alert("City not found or API error");
//     }
//   };
//   return (
//     <div className="app">
//       <h1 className="main-heading">🌤 Mausam App</h1>
//       <input placeholder="Enter city..." value={city} onChange={(e) => setCity(e.target.value)} />
//       <button onClick={getWeather}>Search</button>
//       {weather && (
//         <div className="weather-card">
//           <h2>{weather.name}</h2>
//           <p>🌡 Temp: {weather.main.temp}°C</p>
//           <p>💧 Humidity: {weather.main.humidity}%</p>
//           <p>🌥 {weather.weather[0].main}</p>
//         </div>
//       )}
//     </div>
//   );
// }


import { useState } from "react";
import axios from "axios";
import "./App.css";

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    if (!city) return;
    try {
      const res = await axios.get(`http://localhost:5000/api/weather/${city}`);
      setWeather(res.data);
    } catch {
      alert("City not found or API error");
    }
  };

  return (
    <div className="app">
      <h1 className="main-heading">🌤 Mausam App</h1>

      <div className="search-box">
        <input
          placeholder="🔍 Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={getWeather}>Get Weather</button>
      </div>

      {weather && (
        <div className="weather-card">
          <h2>{weather.name}</h2>
          <p>🌡 Temperature: <strong>{weather.main.temp}°C</strong></p>
          <p>💧 Humidity: <strong>{weather.main.humidity}%</strong></p>
          <p>🌥 Condition: <strong>{weather.weather[0].main}</strong></p>
        </div>
      )}
    </div>
  );
}

