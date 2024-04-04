import React from 'react';
import Card from '../Card/index';
import style from './Cards.module.css';
const Cards = ({allDrivers})=>{
   const driversList = allDrivers;
   if(driversList.length === 0) return (<p>driver no encontrado</p>);
   return(<div className={style.cards}> 
{driversList?.map((item)=>{ return(<div key={item.id}><Card name={item.name} 
image={item.image} teams={item.teams}/></div>)})}
</div>
);
};

export default Cards;
