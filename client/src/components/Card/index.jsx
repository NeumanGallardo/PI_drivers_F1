import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
function Card(props) {
   return (
   <div>
{/*    <img src={props.image} alt='foto'/>
   <Link to={`/detail/${props.id}`} ><h3 className="card-name">{props.name}</h3></Link>
    <h2>{props.teams}</h2> */}
    <p>hola soy card</p>
    </div>
   );
}
export default Card;