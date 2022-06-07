import React, { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import Home from "./pages/Home";

const App = () => {
  const [activePage, setActivePage] = useState(0);

  const changeActivePage = (index) => {
    setActivePage(index);
  };

  return (
    <>
      <Header changeActivePage={changeActivePage} />
      <Slider activeIndex={activePage} changeActiveSlide={changeActivePage}>
        <Home changeActivePage={changeActivePage} />
        <div>item 2</div>
        <div>item 3</div>
        <div>item 4</div>
      </Slider>
      <Footer />
    </>
  );
};

export default App;
