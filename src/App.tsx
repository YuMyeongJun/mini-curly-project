import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainBody from './components/MainBody';
import './css/App.css';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/components/MainBody/" />
    </Routes>
    </BrowserRouter>
  );
}

export default App;