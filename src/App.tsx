import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, MainBody, SignUp } from './pages';
import './css/App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainBody />}/>
        <Route path="/signUp" element={<SignUp />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;