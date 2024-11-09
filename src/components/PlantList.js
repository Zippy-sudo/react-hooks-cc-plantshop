import React from "react";
import PlantCard from "./PlantCard";
import {v4 as uuidv4} from "uuid"

function PlantList({selectPlantData}) {

  const plantsToDisplay = selectPlantData.map(plant => <PlantCard key={uuidv4()} id={plant.id} name={plant.name} image={plant.image} price={plant.price}/>)
  
  return (
    <ul className="cards">{plantsToDisplay}</ul>
  );
}

export default PlantList;
