import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({selectPlantData, handleFormNameChange, handleFormImageChange, handleFormPriceChange, handleFormSubmit, handleSearchChange, handlePriceUpdate, handleDeleteClick}) {
  return (
    <main>
      <NewPlantForm handleFormNameChange={handleFormNameChange} handleFormImageChange={handleFormImageChange} handleFormPriceChange={handleFormPriceChange} handleFormSubmit={handleFormSubmit}/>
      <Search handleSearchChange={handleSearchChange}/>
      <PlantList selectPlantData={selectPlantData} handlePriceUpdate={handlePriceUpdate} handleDeleteClick={handleDeleteClick}/>
    </main>
  );
}

export default PlantPage;
