import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ThemeProvider from '@context/ThemeContext';

import Header from '@components/Header';
import Home from '@pages/Home';
import Builder from '@pages/Builder';

import './app.scss';

const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/builder" element={<Builder />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
