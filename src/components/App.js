import React, { useEffect, useState} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {

  const baseURL = "http://localhost:6001/plants"

  const [plantData, setPlantData] = useState([]);
  const [formName, setFormName] = useState("");
  const [formImage, setFormImage] = useState("");
  const [formPrice, setFormPrice] = useState(0);
  const [search, setSearch] = useState("");


  useEffect(() => {
    fetch(baseURL)
      .then(resp => resp.json())
      .then(data => setPlantData(data))
      .catch(error => alert("GET Error"))
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

    const newPlantObj = { name: formName, image: formImage, price: formPrice }

    fetch(baseURL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON"
      },
      body: JSON.stringify(newPlantObj)
    })
      .then(resp => resp.json())
      .then(newPostedPlant => {
        setPlantData([[...plantData], {newPostedPlant}])
        console.log("POST success", newPostedPlant);
      })
      .catch(error => {
        alert("POST failed")
        console.log((error.message))
      })
  }

  function handleSearchChange(event) {
    setSearch(event.target.value)
  }

  function handlePriceUpdate(event, updateState) {
    console.log(updateState);
    fetch(`${baseURL}/${event.target.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        price: updateState
      })
    })
      .then(resp => resp.json())
      .then(updatedPlantObject => {
        console.log("PATCH success", updatedPlantObject)
        const updatedPlantObjectsList = plantData.map(plantObj => {
          if (plantObj.id === parseInt(event.target.id, 10)) {
            return {
              id: plantObj.id,
              name: plantObj.name,
              image: plantObj.image,
              price: updateState
            }
          }
          return plantObj
        })
        console.log(updatedPlantObjectsList)
        setPlantData(updatedPlantObjectsList)
      })
  }

  function handleDeleteClick(id) {
    fetch(`${baseURL}/${id}`, {
      method: "DELETE",
    })
      .then(resp => resp.json())
      .then(deletedPlantObj => {
        console.log("DELETE success", deletedPlantObj)
        const updatedPlantObjectsList = plantData.filter(plantObj => {
          return plantObj.id !== parseInt(id, 10)
        })
        console.log(updatedPlantObjectsList)
        setPlantData(updatedPlantObjectsList);
      })
      .catch(error => {
        alert("DELETE failed")
        console.log(error)
      })
  }

  console.log(plantData)
  const selectPlantData = plantData.filter(plantObj => {
    if (search === "") {
      return true;
    } else {
      return plantObj.name.toUpperCase().includes(search.toUpperCase())
    }
  })

  return (
    <div className="app">
      <Header />
      <PlantPage selectPlantData={selectPlantData} handleFormNameChange={handleFormNameChange} handleFormImageChange={handleFormImageChange} handleFormPriceChange={handleFormPriceChange} handleFormSubmit={handleFormSubmit} handleSearchChange={handleSearchChange} handlePriceUpdate={handlePriceUpdate} handleDeleteClick={handleDeleteClick} />
    </div>
  );
}

export default App;
