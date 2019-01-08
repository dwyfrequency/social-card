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
    API.fetchCardData().then(data => {
      console.log("setCardData");
      console.log(data);
      setCardData(data);
    });
    return () => console.log("finished fetch");
    // using [] b/c https://www.robinwieruch.de/react-hooks/
  }, []);
  console.log("log before render", userData, cardData);
  return (
    <div className="App">
      {cardData.map((cardObj, index) => (
        <SocialCard {...userData} {...cardObj} key={index} />
      ))}
    </div>
  );
};

export default App;
