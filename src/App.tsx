import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Menus, Footer, MainBody, SignUp, SignIn } from './pages';
import './css/App.css';



function App() {

  return (
    <BrowserRouter>
      <Header />
      <Menus />
      <Routes>
        <Route path="/" element={<MainBody />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}
export default App;