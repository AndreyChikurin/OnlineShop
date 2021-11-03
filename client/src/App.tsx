import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouter from "./components/AppRouter"
import { Footer } from './components/Footer';
import UpperPanel from './components/UpperPanel';

export default function App() {
   return (
      <BrowserRouter>
         <UpperPanel />
         <Footer /> 
         <AppRouter />
      </BrowserRouter>
   )
}
