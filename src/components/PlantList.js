import React from "react";
import PlantCard from "./PlantCard";
import { useEffect,useState } from "react";
// import Search from "./Search";

function PlantList() {
  const [plants, setPlants]=useState([]);

useEffect(()=>{
  fetch('https://react-hooks-cc-plantshop-r4mp.onrender.com/plants')
  .then(response => response.json())
  .then((data) => setPlants(data))
} ,[]);

return (
  <ul className="cards">
    {plants.map((plant) => (
      <PlantCard key={plant.id} plant={plant} />
      
    ))}
  </ul>
 
);
}

export default PlantList;
