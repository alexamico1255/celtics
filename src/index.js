import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Players from "./pages/players";
import Nextgame from "./pages/nextgame";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="players" element={<Players />} />
            <Route path="nextgame" element={<Nextgame />} />
            
          </Route>
        </Routes>
      </BrowserRouter>
    );
    