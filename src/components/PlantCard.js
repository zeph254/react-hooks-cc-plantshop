import React from "react";
import { useState } from "react";
import Delete from "./Delete";
// import PlantList from "./PlantList";

function PlantCard({plant}) {
  const [soldOut, setSoldOut] = useState(false); 

  const HandleSoldOut = () => {  
    setSoldOut(!soldOut);  
  }; 
  // const filteredPlants = plants.filter(plant => plant.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
<div  className={soldOut ? 'sold-out' : ''}>
      
    <li className="card" data-testid="plant-item">
      <img src=  { plant.image} alt={ plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <button className={soldOut ? "" : "primary"} onClick={HandleSoldOut}>
          {soldOut ? "Out of Stock" : "In Stock"}
        </button>
      {/* <button onClick={HandleSoldOut}>{soldOut ? 'Available' : 'Sold Out'}</button>  
     */}
     <Delete plant={plant} />
    </li>

</div>   
  );
}

export default PlantCard;
