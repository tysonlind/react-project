import React, { useState } from "react";
import './App.css';
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home.page.jsx";
import FilmsPage from "./pages/films.page.jsx";

function App (props){

  return (
    <BrowserRouter>
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/films">Films</NavLink>
        </li>
      </ul>
    </nav>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/films" element={<FilmsPage />}></Route>
      </Routes>
    </BrowserRouter>
  );

};

export default App;