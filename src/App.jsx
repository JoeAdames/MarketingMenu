import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import business from "./details.json";
import Address from "./components/Address";

function App() {
  const { name, statement, address, hours, services } = business;
  return (
    <div className="font-sans text-gray-800">
      <Header name={name} />
      <Address address={address} />
      <Hero statement={statement} hours={hours} address={address}></Hero>
      <Services services={services} />
      <About />
      <Contact />
      <Footer />
      {/* <pre>{JSON.stringify(business, null, 2)}</pre> */}
    </div>
  );
}

export default App;
