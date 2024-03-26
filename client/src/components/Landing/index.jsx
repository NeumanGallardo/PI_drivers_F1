import React from 'react';
import { useNavigate } from 'react-router-dom';

import style from './Landing.module.css';
function Landing() {
      const navigate = useNavigate();
    
      const redirigirARuta = () => {
        navigate('/home');
      };

   return (
      <div className={style.background}>
      <br/>
<h1 className={style.titulo}>FORMULA 1</h1>
<button className={style.button} onClick={redirigirARuta}>Ir a Home</button>
      </div>
   );
}
export default Landing;