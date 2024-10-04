import React from "react";

//import rigoImage from "../../img/rigo-baby.jpg";
import Card from "./Card";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="container-fluid m-0 p-0">
      <Navbar />
      <div className="container py-3">
        <Jumbotron />
        <div className="row justify-content-center">
          <div className="col-lg-3 col-sm-12 py-3"><Card img="a.jpg" /></div>
          <div className="col-lg-3 col-sm-12 py-3"><Card img="b.jpg" /></div>
          <div className="col-lg-3 col-sm-12 py-3"><Card img="c.jpg" /></div>
          <div className="col-lg-3 col-sm-12 py-3"><Card img="d.jpg" /></div>
        </div>
      </div>
      <Footer />
    </div>

  );
};

export default Home;