import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const locations = [
  { name: 'Berlin', latitude: 52.52, longitude: 13.405 },
  { name: 'New York', latitude: 40.7128, longitude: -74.006 },
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

const Dashboard = () => {
  const [locationsData, setLocationsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const dataPromises = locations.map(async (location) => {
        const res = await axios.get('https://api.open-meteo.com/v1/forecast', {
          params: {
            latitude: location.latitude,
            longitude: location.longitude,
            hourly: 'temperature_2m',
            start: '2025-04-01T00:00:00Z',
            end: '2025-04-02T00:00:00Z',
            timezone: 'auto',
          },
        });

        const temps = res.data.hourly.temperature_2m;
        const mean = temps.reduce((a, b) => a + b, 0) / temps.length;
        const min = Math.min(...temps);
        const max = Math.max(...temps);

        return { ...location, mean, min, max };
      });

      const allData = await Promise.all(dataPromises);
      setLocationsData(allData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Weather Dashboard</h2>
      <table border="1" cellPadding="10" style={{ width: '100%', marginTop: '20px' }}>
        <thead>
          <tr>
            <th>Location</th>
            <th>Mean Temp</th>
            <th>Min Temp</th>
            <th>Max Temp</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {locationsData.map((loc) => (
            <tr key={loc.name}>
              <td>{loc.name}</td>
              <td>{loc.mean.toFixed(2)}</td>
              <td>{loc.min}</td>
              <td>{loc.max}</td>
              <td>
                <Link to={`/location/${encodeURIComponent(loc.name)}`}>View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
