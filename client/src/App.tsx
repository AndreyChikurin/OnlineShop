import React from 'react';
import './App.css';
import CardsGrid from "./components/CardsGrid"
import UpperPanel from "./components/UpperPanel"

export default function App() {
   return (
      <>
         <UpperPanel />
           <style>
              margin-top: 5px;
           </style>
         <CardsGrid margin-top/>
      </>
   )
}
