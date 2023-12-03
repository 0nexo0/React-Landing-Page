import React from "react";
import Analytics from "./Components/Analytics";
import CardJs from "./Components/CardJs";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Newsletter from "./Components/Newsletter";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <CardJs />
      <Footer />
    </div>
  );
}

export default App;
