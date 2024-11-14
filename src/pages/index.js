import React from "react";
import Nav from "./component/nav";
import Home from "./home";
import Slider from "./component/slider";
import Card1 from "./cards/card1";
import Card2 from "./cards/card2";
import Cards from "./cards/cards";
import Footer from "./component/footer";

const HomePage = () => {
  return (
    <>  <div className="container mx-auto font-vfsans">
        <div className="mb-20">
          <Nav />
        </div>
        <div className="mt-4">
          <Home />
        </div>
        <div className="mt-10">
          <Slider />
          <div className="mt-10"></div>
        </div>{" "}
        <div className="mt-10">
          <Card1 />
          <div className="mt-10"></div>
        </div>{" "}
        <div className="mt-10">
          <Card2 />
          <div className="mt-10"></div>
        </div>{" "}
        <div className="mt-10">
          <Cards />
        </div>
      <div className="mt-10">
        <Footer />
      </div>
    </div></>
    
  );
};

export default HomePage;
