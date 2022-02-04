import React from 'react';
import axios from 'axios';
import cors from 'cors';
import { Express } from 'express';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Menus, Footer, MainBody, SignUp } from './pages';
import './css/App.css';
axios.defaults.baseURL = 'ec2-52-78-116-115.ap-northeast-2.compute.amazonaws.com:8080';
axios.defaults.withCredentials = true;

function App() {
  let param = new URLSearchParams();
  param.append('memberId', 'sion1234');
  param.append('password', 'Aa123!12311#');
  axios.post('/login', null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    params: param
  })
    .then((res) => {
      console.log(res)
    })
    .catch((e) => {

    })


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