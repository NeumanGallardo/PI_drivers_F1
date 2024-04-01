import React from 'react';
import { Routes,Route} from 'react-router-dom';
import axios from 'axios';
import Landing from './components/Landing';
import Home from './components/Home';
import Cards from './components/Cards';
import NavBar from './components/NavBar';
import Form from './components/Form';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  return (
<div>
<Routes>
  <Route path='/' element={<Landing/>}/>
  <Route path='/home' element={<Home/>}/>
  <Route path='/form' element={<Form/>}/>
</Routes>
</div>
  );
}

export default App
