import React, { useState } from "react";

function PlantCard({ id, name, image = "https://via.placeholder.com/400", price, handlePriceUpdate, handleDeleteClick}) {

  const [inStock, setStock] = useState(true)
  const [updating, setUpdating] = useState(false)
  const [updateState, setUpdateState] = useState(0);

  function handleStockClick() {
    setStock((inStock) => !inStock)
  }

  function handleUpdateClick() {
    setUpdating((updating) => !updating)
  }

  return (
    <li className="card" data-testid={id}>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary" onClick={handleStockClick}>In Stock</button>
      ) : (
        <button className="secondary" onClick={handleStockClick}>Out of Stock</button>
      )}
      <button className="updating" value={updating} onClick={handleUpdateClick} >Update Price</button>
      {updating ? 
      (<form id={id} onSubmit={event => {
        event.preventDefault();
        handlePriceUpdate(event,updateState);
      }
      }>
        <input type="number" step={.01} placeholder="Enter New Price..." onChange={(event) => setUpdateState(event.target.value)}/>
      </form>): null}
      <button id={id} onClick={(event) => handleDeleteClick(event.target.id)} className="delete">DELETE</button>
    </li>
  );
}

export default PlantCard;
