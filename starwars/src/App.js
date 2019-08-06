import React, { useState, useEffect } from "react";
import "./App.scss";
import axios from "axios";
import PeopleCard from "./components/PeopleCard.js";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [peopleState, setPeopleState] = useState({});

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        setPeopleState(response.data.results);
      })
      .catch(error => {
        console.log("error", error);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {Object.keys(peopleState).map(cv => {
        return <PeopleCard data={peopleState[cv]} key={cv} />;
      })}
    </div>
  );
};

export default App;
