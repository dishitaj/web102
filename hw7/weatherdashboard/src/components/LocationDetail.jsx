import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const locationMap = {
  'Berlin': { latitude: 52.52, longitude: 13.405 },
  'New York': { latitude: 40.7128, longitude: -74.006 },
  'Tokyo': { latitude: 35.6762, longitude: 139.6503 },
  'London': { latitude: 51.5074, longitude: -0.1278 },
  'Paris': { latitude: 48.8566, longitude: 2.3522 },
  'Sydney': { latitude: -33.8688, longitude: 151.2093 },
  'Moscow': { latitude: 55.7558, longitude: 37.6176 },
  'Rio de Janeiro': { latitude: -22.9068, longitude: -43.1729 },
  'Dubai': { latitude: 25.276987, longitude: 55.296249 },
  'Cape Town': { latitude: -33.9249, longitude: 18.4241 },
  'Los Angeles': { latitude: 34.0522, longitude: -118.2437 },
};

const LocationDetail = () => {
  const { name } = useParams();
  const location = locationMap[name];
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      if (!location) return;

      const response = await axios.get('https://api.open-meteo.com/v1/forecast', {
        params: {
          latitude: location.latitude,
          longitude: location.longitude,
          hourly: 'temperature_2m,relative_humidity_2m,cloudcover',
          start: '2025-04-01T00:00:00Z',
          end: '2025-04-02T00:00:00Z',
          timezone: 'auto',
        },
      });

      setDetails(response.data);
    };

    fetchDetails();
  }, [location]);

  if (!details) return <p>Loading details for {name}...</p>;

  return (
    <div>
      <h2>Details for {name}</h2>
      <p><strong>Time Range:</strong> {details.hourly.time[0]} to {details.hourly.time[details.hourly.time.length - 1]}</p>
      <p><strong>Cloud Cover (avg):</strong> {(
        details.hourly.cloudcover.reduce((a, b) => a + b, 0) / details.hourly.cloudcover.length
      ).toFixed(2)}%</p>
      <p><strong>Humidity (avg):</strong> {(
        details.hourly.relative_humidity_2m.reduce((a, b) => a + b, 0) / details.hourly.relative_humidity_2m.length
      ).toFixed(2)}%</p>
      <p><strong>Hourly Temps Available:</strong> {details.hourly.temperature_2m.length}</p>
    </div>
  );
};

export default LocationDetail;
