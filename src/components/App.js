import React from "react";
import { useState,useEffect } from "react";

function App() {
    //this will hold the url for the random dog image
  const [dogImage, setDogImage] = useState(null);
  // this we set it to true to indicate the data is loading
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogImage(data.message);
        //here we set loadin to false to indicate the data has loaded 
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching dog image:", error));
  }, []);

  return (
    <div className="App">
      <h1>Random Dog Image</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;
