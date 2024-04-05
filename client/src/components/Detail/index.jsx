import React,{useState, useEffect}from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import style from './Detail.module.css';

export default function Detail()
{let { detailId } = useParams(); // { detailId: value }
const [driver, setDriver]=useState([]);
useEffect(() => {

    async function det()
    {
    try{
        const response = await axios(`http://localhost:3001/drivers_F1/${detailId}`);
        setDriver(response.data);
    }catch(error){return <p>error al obtener datos {error}</p>}  
  }
  det();        
 }, []);
return <div>{driver?.map((item)=>{return (
            <div className={style.container} key={item.id}>
              <h2>{item.id}</h2>
              <h2>{item.name}</h2>
              <h2>{item.lastName}</h2>
              <h2>{item.nationality}</h2>
              <img src={item.image} alt='foto'/>
              <h2>{item.description}</h2>
              <h2>{item.dob}</h2>
              <h2>{item.teams}</h2>
              <Link to='/home' ><button>To Home</button></Link>
            </div>
)})}
</div>
        }