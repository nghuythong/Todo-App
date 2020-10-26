import React from "react";
import './App.css';
import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";

function App() {
  return (
    <div className="App">
      {/*Header*/}
      <Header></Header>
      {/*Tinder Card*/}
      <TinderCards></TinderCards>
      {/*SwipeButtons*/}
      <SwipeButtons></SwipeButtons>
    </div>
  );
}

export default App;
