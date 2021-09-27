import React from 'react';
import './App.css';
import CardsGrid from "./components/CardsGrid"
import UpperPanel from "./components/UpperPanel"

export default function App() {
   return (
      <>
         <UpperPanel />
         <div className="box example2">
              <CardsGrid /> 
         </div>
            
      </>
   )
}
