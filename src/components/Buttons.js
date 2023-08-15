import styling from './styling.css';
import satData from './satData';
import displaySats from '../App';
import filterByType from '../App';
import {useState} from 'react';


const Buttons = ({filterByType, setSat, displaySats}) => {
 
      
  return(

    <div className="flex-container">
        {displaySats.map((sat, id) => {// Create only three button

  return (
    
        <button onClick={() => filterByType(sat)} key={id}>
        {sat} Orbit           
        </button>      
  );
})} 

      <button onClick={() => setSat(satData)}>All Orbits</button>
      
      {/* <button onChange={handleChange}> Show Me More Option</button> */}

          </div>

   );
};

export default Buttons;