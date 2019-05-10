import React from "react";
import "./Banner.css";

const Banner = () => (
  <div className="banner text-center d-flex flex-column align-items-center justify-content-center">
    <h1 className="mb-3">Game of Thrones Clicky Game</h1>
    <h2 className="my-3">
      Click on an image to earn points, but don't click on an image more than
      once!
    </h2>
  </div>
);

export default Banner;
