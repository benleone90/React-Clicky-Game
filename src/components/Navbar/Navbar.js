import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <div className="navbar">
    <div>Game of Thrones Clicky Game</div>
    <div>
      Score: <span className="pipe">|</span> High Score:{" "}
    </div>
  </div>
);

export default Navbar;
