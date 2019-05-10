import React, { Component } from "react";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Character from "./Character";
import images from "../images";

class App extends Component {
  state = {
    score: 0,
    highScore: 0,

    allCharacters: this.suffleArray()
  };

  shuffleArray() {
    const newArr = images.slice();
    const shuffleArr = [];

    while (newArr.length > 0) {
      shuffleArr.push(
        newArr.splice(Math.floor(Math.random() * newArr.length), 1)[0]
      );
    }
    return shuffleArr;
  }

  render() {
    return (
      <div>
        <Navbar />
        <Banner />
      </div>
    );
  }
}
export default App;
