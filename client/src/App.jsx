import React from 'react';
import { Routes,Route} from 'react-router-dom';
import Landing from './components/Landing';
import Home from './components/Home';
import Form from './components/Form';
import Detail from './components/Detail';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  return (
<div>
<Routes>
  <Route path='/' element={<Landing/>}/>
  <Route path='/home' element={<Home/>}/>
  <Route path='/detail/:detailId' element={<Detail />}/>
  <Route path='/form' element={<Form/>}/>
</Routes>
</div>
  );
}

export default App
