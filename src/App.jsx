import React from "react";
import Navbar from "./components/Navbar";
import LandingSection from "./components/LandingSection";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Collaboration from "./components/Collaboraation";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className=" px-10 md:px-32 font-nunito bg-[#0E0E0E]">
        <Navbar />
        <LandingSection />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Collaboration />
      </div>
      <Footer />
    </>
  );
};

export default App;
