import React from 'react';
import Card from '../Card/index';
import style from './Cards.module.css';
const Cards = ({drivers})=>{return(
<div>{drivers.map((item)=>{   
   return (
   <div className={style.container}key={item.id}>
      <Card
      image={item.image}
      name={item.name}
      teams={item.tams}
      />
      <p>hola soy cards</p>
   </div>
   );
   }
   )}
</div>
);
};

export default Cards;