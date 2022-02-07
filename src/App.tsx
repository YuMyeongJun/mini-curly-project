import React from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Menus, Footer, MainBody, SignUp } from './pages';
import './css/App.css';

const param = new URLSearchParams();
param.append('memberId', 'sion1234');
param.append('password', 'Aa123!12311#');

axios.post('/api/login', param)
  .then((res) => {
    console.log(res)
  })
  .catch((e) => {
    console.log(e);
  })

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