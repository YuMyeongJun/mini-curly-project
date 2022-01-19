import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Menus, Footer, MainBody, SignUp } from './pages';
import './css/App.css';

function App() {
  return (

    <BrowserRouter>
      <Header />
      <Menus />
      <Routes>
        <Route path="/" element={<MainBody />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;