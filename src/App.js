import React from "react";
import Hero from "./components/Hero";
import Snippets from "./components/Snippets";
import Features from "./components/Features";
import SuperCharge from "./components/SuperCharge";
import References from "./components/References";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <Hero />
      <Snippets />
      <Features />
      <SuperCharge />
      <References />
      <Footer />
    </React.Fragment>
  );
}

export default App;
