import React from 'react';
import Card from '../Card/index';
import style from './Cards.module.css';
const Cards = ({characters})=>{
   return(
<div className={style.cards}> {/* {characters.map((item)=>{   
   return (
   <div className={style.container}key={item.id}>
      <Card
      image={item.image}
      name={item.name}
      teams={item.teams}
      />
   </div>
   );
   }
   )} */}
<Card/>
<Card/>
<Card/>
<Card/>
</div>
);
};

export default Cards;