import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Header />
      <Slider>
        <Home />
        <div>item 2</div>
        <div>item 3</div>
        <div>item 4</div>
      </Slider>
      <Footer />
    </>
  );
};

export default App;
