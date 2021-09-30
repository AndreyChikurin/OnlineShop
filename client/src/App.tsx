import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouter from "./components/AppRouter"
import UpperPanel from './components/UpperPanel';

export default function App() {
   return (
      <BrowserRouter>
         <UpperPanel />
         <AppRouter /> 
      </BrowserRouter>
   )
}
