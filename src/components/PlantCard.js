import React, { useState } from "react";

function PlantCard({id, name, image ="https://via.placeholder.com/400", price}) {

  const [inStock, setStock] = useState(true)

  function handleClick(){
    setStock((inStock) => !inStock)
  }

  return (
    <li className="card" data-testid={id}>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
