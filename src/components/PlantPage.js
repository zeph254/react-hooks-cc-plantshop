import React, { useEffect , useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
const [plants, setPlants]=useState ([]);
const [searchTerm, setSearchTerm]= useState('');


const handleSearch=(z)=>{
  setSearchTerm(z);
}

const plantFilter=plants.filter((plant)=>plant.name.toLowerCase().includes(searchTerm.toLowerCase()))
useEffect(()=>{
  fetch('https://react-hooks-cc-plantshop-r4mp.onrender.com/plants')
  .then((response) => response.json())
  .then((data) => setPlants(data))
},[])



  return (
    <main>
      <NewPlantForm />
      <Search search={searchTerm} onSearchTerm={handleSearch}/>
      <PlantList plant={plantFilter}/>
    </main>
  );
}

export default PlantPage;
