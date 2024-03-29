import {useState} from 'react';
import { Routes,Route, useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';
import Landing from './components/Landing';
import Cards from './components/Cards';
import NavBar from './components/NavBar';
import Form from './components/Form';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
//crando estado local
const [characters, setCharacters]=useState([]);
const location=useLocation();

//se guarda por referencia                                                     
async function drivers(){
   //llamada a la API
   try {
      const response = await axios.get(`http://localhost:3001/drivers_F1`);
      console.log(response.data);
      for(let i=0;i<response.data.length;i++)
      {setCharacters((oldChars) => [...oldChars, response.data[i]]);}
   } catch (error) {
      window.alert('Error logeado');
      console.log(error);}}


  return (
<div>
{location.pathname !== '/landing' && location.pathname !== '/'  && <NavBar/>}
{location.pathname === '/' && <Landing/>}
<Routes>
  <Route path='/landing' element={<Landing/>}/>
  <Route path='/home' element={<Cards drivers={drivers}/>}/>
  <Route path='/form' element={<Form/>}/>

</Routes>
</div>
  );
}

export default App
