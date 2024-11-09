import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {

  const baseURL = "http://localhost:6001/plants"

  const [plantData, setPlantData] = useState([]);
  const [formName, setFormName] = useState("");
  const [formImage, setFormImage] = useState("");
  const [formPrice, setFormPrice] = useState(0);
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch(baseURL)
      .then(resp => resp.json())
      .then(data => setPlantData(data))
  }, [])

  function handleFormNameChange(event) {
    setFormName(event.target.value);
  }

  function handleFormImageChange(event) {
    setFormImage(event.target.value);
  }

  function handleFormPriceChange(event) {
    setFormPrice(event.target.value);
  }

  function handleFormSubmit() {
    fetch(baseURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: formName,
        image: formImage,
        price: formPrice
      })
    })
    .then(resp => resp.json())
    .then(newPostedPlant => {
      console.log("POST success", newPostedPlant);
      setPlantData([...plantData],newPostedPlant);
    })
    .catch(error => {
      alert("POST failed")
      console.log((error))
    })
  }

  function handleSearchChange(event) {
    setSearch(event.target.value)
  }

  const selectPlantData = plantData.filter(plantObj => {
    if(search === ""){
      return true;
    } else {
    return plantObj.name.includes(search)
    }
  })

  console.log(selectPlantData, search)
  return (
    <div className="app">
      <Header />
      <PlantPage selectPlantData={selectPlantData} handleFormNameChange={handleFormNameChange} handleFormImageChange={handleFormImageChange} handleFormPriceChange={handleFormPriceChange} handleFormSubmit={handleFormSubmit} handleSearchChange={handleSearchChange}/>
    </div>
  );
}

export default App;
