import React from "react";

import a from "../../img/a.jpg";
import b from "../../img/b.jpg";
import c from "../../img/c.jpg";
import d from "../../img/d.jpg";

const Card = (props) => {
  return (
    <div className="card text-center">
      <img src={props.img} className="card-img-top mx-auto" alt="..." style={{ width: "100%" }} />
      <div className="card-body d-flex flex-column align-items-center">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

      </div>
      <div className="bg-light w-100 d-flex justify-content-center rounded-bottom-2" style={{ height: '70px' }}>
        <a href="#" className="btn btn-primary my-3 ">Go somewhere</a>
      </div>
    </div>
  );
};

export default Card;