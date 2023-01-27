import './App.css';
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import {HomePage, FilmsPage, SingleFilmPage } from './pages/index.js';

function App (props){

  return (
    <BrowserRouter>
    <div className="d-flex justify-content-center align-items-center">
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
    </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/films" element={<FilmsPage />} />
        <Route path="films/film/:id" element={<SingleFilmPage />} />
      </Routes>
    </BrowserRouter>
  );

};

export default App;