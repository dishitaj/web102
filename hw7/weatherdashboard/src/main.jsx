import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './routes/Layout';
import Dashboard from './components/Dashboard';
import LocationDetail from './components/LocationDetail';

import './index.css'; // optional if you have global styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="location/:name" element={<LocationDetail />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
