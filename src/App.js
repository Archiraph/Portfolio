import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Project1 from "./pages/Project1";
import Contact from "./pages/Contact";
import Cv from "./pages/Cv";
import NotFound from "./pages/NotFound";
import Popup from "./components/Popup";
import Project2 from "./pages/Project2";
import Project3 from "./pages/Project3";

const App = () => {
  return (
    <BrowserRouter id="browserRouter">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projet-1" element={<Project1 />} />
        <Route path="/projet-2" element={<Project2 />} />
        <Route path="/projet-3" element={<Project3 />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Popup />
    </BrowserRouter>
  );
};

export default App;
