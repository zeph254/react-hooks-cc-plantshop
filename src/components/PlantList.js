import React from "react";
import PlantCard from "./PlantCard";
import { useEffect,useState } from "react";
// import Search from "./Search";

function PlantList() {
  const [plants, setPlants]=useState([]);

useEffect(()=>{
  fetch('http://localhost:6001/plants')
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
