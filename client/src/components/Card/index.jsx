import React from 'react';
import style from './Card.module.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
function Card(props) {
   return (
   <div className={style.card}>
<a href={`/detail/${props.id}`}>
<img src={props.image} alt='foto'/>
</a>
   <Link to={`/detail/${props.id}`}><h3 className={style.h3}>{props.name}</h3></Link>
    <p>{props.teams}</p> 
    </div>
   );
}
export default Card;