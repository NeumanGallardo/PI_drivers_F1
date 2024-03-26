import React from 'react';
import { Routes,Route, useLocation, useNavigate} from 'react-router-dom';
import Landing from './components/Landing/Landing';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
<div>
  <h1>my app</h1>
<Routes>
  <Route path='/landing' element={<Landing/>}/>
</Routes>
</div>
  );
}

export default App
