import React, { useState, useEffect } from "react";
import SocialCard from "../Components/SocialCard";
import "./App.css";

const App = props => {
  const [userData, setUserData] = useState({});
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    fetch("../Data/userData.json")
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(data => {
        console.log(data);
        setUserData(data);
      });
    // fetch("../Data/cardData.json")
    //   .then(response => response.json())
    //   .then(data => setCardData(data));
  });

  return (
    <div className="App">
      <SocialCard />
    </div>
  );
};

export default App;
