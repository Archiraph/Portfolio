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
import Project4 from "./pages/Project4";
import Project5 from "./pages/Project5";
import Project6 from "./pages/Project6";
import Project7 from "./pages/Project7";
import Project8 from "./pages/Project8";
import Project9 from "./pages/Project9";
import Project10 from "./pages/Project10";
import Project11 from "./pages/Project11";
import Project12 from "./pages/Project12";
import Project13 from "./pages/Project13";
import Project14 from "./pages/Project14";
import Project15 from "./pages/Project15";
import Project16 from "./pages/Project16";
import Project17 from "./pages/Project17";
import Project18 from "./pages/Project18";
import Project19 from "./pages/Project19";
import Project20 from "./pages/Project20";
import Project21 from "./pages/Project21";
import Project22 from "./pages/Project22";
import Project23 from "./pages/Project23";
import Project24 from "./pages/Project24";
import Project25 from "./pages/Project25";
import Project26 from "./pages/Project26";
import Project27 from "./pages/Project27";
import Project28 from "./pages/Project28";
import Project29 from "./pages/Project29";
import Project30 from "./pages/Project30";
import Project31 from "./pages/Project31";

const App = () => {
  return (
    <BrowserRouter id="browserRouter">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projet-1" element={<Project1 />} />
        <Route path="/projet-2" element={<Project2 />} />
        <Route path="/projet-3" element={<Project3 />} />
        <Route path="/projet-4" element={<Project4 />} />
        <Route path="/projet-5" element={<Project5 />} />
        <Route path="/projet-6" element={<Project6 />} />
        <Route path="/projet-7" element={<Project7 />} />
        <Route path="/projet-8" element={<Project8 />} />
        <Route path="/projet-9" element={<Project9 />} />
        <Route path="/projet-10" element={<Project10 />} />
        <Route path="/projet-11" element={<Project11 />} />
        <Route path="/projet-12" element={<Project12 />} />
        <Route path="/projet-13" element={<Project13 />} />
        <Route path="/projet-14" element={<Project14 />} />
        <Route path="/projet-15" element={<Project15 />} />
        <Route path="/projet-16" element={<Project16 />} />
        <Route path="/projet-17" element={<Project17 />} />
        <Route path="/projet-18" element={<Project18 />} />
        <Route path="/projet-19" element={<Project19 />} />
        <Route path="/projet-20" element={<Project20 />} />
        <Route path="/projet-21" element={<Project21 />} />
        <Route path="/projet-22" element={<Project22 />} />
        <Route path="/projet-23" element={<Project23 />} />
        <Route path="/projet-24" element={<Project24 />} />
        <Route path="/projet-25" element={<Project25 />} />
        <Route path="/projet-26" element={<Project26 />} />
        <Route path="/projet-27" element={<Project27 />} />
        <Route path="/projet-28" element={<Project28 />} />
        <Route path="/projet-29" element={<Project29 />} />
        <Route path="/projet-30" element={<Project30 />} />
        <Route path="/projet-31" element={<Project31 />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Popup />
    </BrowserRouter>
  );
};

export default App;
