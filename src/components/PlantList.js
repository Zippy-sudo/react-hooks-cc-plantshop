import React from "react";
import PlantCard from "./PlantCard";
import { v4 as uuidv4 } from "uuid"

function PlantList({ selectPlantData, handlePriceUpdate, handleDeleteClick }) {

  const plantsToDisplay = selectPlantData.map(plant => <PlantCard key={uuidv4()} id={plant.id} name={plant.name} image={plant.image} price={plant.price} handlePriceUpdate={handlePriceUpdate} handleDeleteClick={handleDeleteClick}/>)

  return (
    <ul className="cards">{plantsToDisplay}</ul>
  );
}

export default PlantList;
