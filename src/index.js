import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Players from "./pages/players";
import Nextgame from "./pages/nextgame";
import Nextgame2 from "./pages/nextgame2";
import Record from "./pages/record";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


    
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="players" element={<Players />} />
            <Route path="nextgame" element={<Nextgame />} />
            <Route path="nextgame2" element={<Nextgame2 />} />
            <Route path="record" element={<Record />} />         
            <Route path="jrue_holiday" element={<Record />} />
            
            </Route>
        </Routes>
      </BrowserRouter>
    );
    