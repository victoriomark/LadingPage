import { useState } from "react";

const Hero = () => {
  return (
    <>
      <div className="container-fluid  costume_css p-4  text-center">
        <h1 className="heroText">
          Better <span className="text-warning">Design</span>Experience
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo,
          mollitia!
        </p>
        <div className="d-flex gap-3 justify-content-center align-items-center ">
          <div className="btn btn-warning  fw-bold ">BUY NOW!</div>
          <div className="btn btn-light  fw-bold">LEARN MORE</div>
        </div>
      </div>
    </>
  );
};

export default Hero;
