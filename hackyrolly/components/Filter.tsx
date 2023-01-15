import React, { useEffect, useState } from "react";

export default function Filter() {
    // const [filter, setFilter] = useState(["Electronics", "Wallet", "Cards", "Clothing", "Others"])




    // const Fil = filter.map (Fil => Fil)
    // // const value = e.target.value;
    // // const handleClick = (e: ChangeEvent<HTMLSelectElement>) => console.log((filter[value])) 
  
    // const handleClick = (event: Event) => {console.clear(), console.log((filter[event.AT_TARGET ]))}
  return (
    <div>
        <h1></h1>
        <select>
        <option disabled selected>Filter</option>
            <option>Electronics</option>
            <option>Wallet</option>
            <option>Cards</option>
            <option>Clothing</option>
            <option>Others</option>
        </select>
    </div>

  );
}