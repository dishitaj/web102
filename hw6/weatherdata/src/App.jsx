import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [locationsData, setLocationsData] = useState([]);
  const [filter, setFilter] = useState('');
  
  const locations = [
    { name: 'Berlin', latitude: 52.52, longitude: 13.405 },
    { name: 'New York', latitude: 40.7128, longitude: -74.0060 },
    { name: 'Tokyo', latitude: 35.6762, longitude: 139.6503 },
    { name: 'London', latitude: 51.5074, longitude: -0.1278 },
    { name: 'Paris', latitude: 48.8566, longitude: 2.3522 },
    { name: 'Sydney', latitude: -33.8688, longitude: 151.2093 },
    { name: 'Moscow', latitude: 55.7558, longitude: 37.6176 },
    { name: 'Rio de Janeiro', latitude: -22.9068, longitude: -43.1729 },
    { name: 'Dubai', latitude: 25.276987, longitude: 55.296249 },
    { name: 'Cape Town', latitude: -33.9249, longitude: 18.4241 },
    { name: 'Los Angeles', latitude: 34.0522, longitude: -118.2437 },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataPromises = locations.map(async (location) => {
          const response = await axios.get('https://api.open-meteo.com/v1/forecast', {
            params: {
              latitude: location.latitude,
              longitude: location.longitude,
              hourly: 'temperature_2m',
              start: '2025-04-01T00:00:00Z',
              end: '2025-04-02T00:00:00Z',
              timezone: 'auto',
            },
          });
          const weatherData = response.data.hourly.temperature_2m;
          return { location: location.name, weatherData };
        });

        const allData = await Promise.all(dataPromises);
        const locationsStats = allData.map(({ location, weatherData }) => {
          const temperatures = weatherData.map(item => item);
          const totalItems = temperatures.length;
          const mean = temperatures.reduce((sum, value) => sum + value, 0) / totalItems;
          const min = Math.min(...temperatures);
          const max = Math.max(...temperatures);
          return {
            location,
            mean,
            min,
            max,
          };
        });

        setLocationsData(locationsStats);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredLocationsData = locationsData.filter(location =>
    location.location.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Weather Dashboard</h1>

      <div>
        <input
          type="text"
          placeholder="Filter locations..."
          value={filter}
          onChange={handleFilterChange}
        />
      </div>

      <div className="stats-table">
        <table>
          <thead>
            <tr>
              <th>Location</th>
              <th>Mean Temperature</th>
              <th>Min Temperature</th>
              <th>Max Temperature</th>
            </tr>
          </thead>
          <tbody>
            {filteredLocationsData.map((data, index) => (
              <tr key={index}>
                <td>{data.location}</td>
                <td>{data.mean ? data.mean.toFixed(2) : 'N/A'}</td>
                <td>{data.min}</td>
                <td>{data.max}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
