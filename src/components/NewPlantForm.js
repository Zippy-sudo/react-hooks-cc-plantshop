import React from "react";

function NewPlantForm({handleFormNameChange, handleFormImageChange, handleFormPriceChange, handleFormSubmit}) {
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form >
        <input type="text" name="name" placeholder="Plant name" onChange={(event) => handleFormNameChange(event)}/>
        <input type="text" name="image" placeholder="Image URL" onChange={(event) => handleFormImageChange(event)} />
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={(event) => handleFormPriceChange(event)}/>
        <button type="submit"  onClick={handleFormSubmit} >Add Plant</button>
      </form >
    </div>
  );
}

export default NewPlantForm;
