import React, { useState, useEffect } from "react";
import SocialCard from "../Components/SocialCard";
import "./App.css";
import API from "../Data/API";

const App = props => {
  const [userData, setUserData] = useState({});
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    API.fetchUserData().then(data => {
      console.log("setUserDat");
      setUserData(data);
    });
    API.fetchCardData().then(data => setCardData(data));
  });

  return (
    <div className="App">
      <SocialCard />
    </div>
  );
};

export default App;
