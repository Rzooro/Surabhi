import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Arogya,
  Ashraya,
  Grama,
  Hasiru,
  Hongirana,
  Saniha,
  Vidya,
} from "./Pages/Projects";
import { Footer, Navbar } from "./Components/Home";
import { VolunteerOrIntern } from "./Pages/VolunteerOrInternship";
import { Home, Donate, IndOrCorporate, ContactUs } from "./Pages";
import {
  AboutUs,
  OurApproach,
  OurImpact,
  Resources,
} from "./Pages/TheFoundation";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="how-we-work" element={<OurApproach />} />
        <Route path="our-impact" element={<OurImpact />} />
        <Route path="resources" element={<Resources />} />
        <Route path="donate" element={<Donate />} />
        <Route path="hongirana" element={<Hongirana />} />
        <Route path="vidya" element={<Vidya />} />
        <Route path="ashraya" element={<Ashraya />} />
        <Route path="arogya" element={<Arogya />} />
        <Route path="hasiru" element={<Hasiru />} />
        <Route path="grama" element={<Grama />} />
        <Route path="saniha" element={<Saniha />} />
        <Route path="volunteer-or-intern" element={<VolunteerOrIntern />} />
        <Route path="individual-0r-corporate" element={<IndOrCorporate />} />
        <Route path="contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
