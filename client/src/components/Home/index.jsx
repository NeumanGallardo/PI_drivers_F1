import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getByName, getDrivers } from "../../redux/actions";

import Cards from "../Cards";
import NavBar from "../NavBar";
import style from './Home.module.css';

function Home(){
const dispatch = useDispatch();
const allDrivers = useSelector((state)=>state.allDrivers);
const [searchString, setSearchString] = useState('');

function handleChange(event)
{event.preventDefault();
setSearchString(event.target.value);}

function handleSubmit(event) {
  event.preventDefault();
  dispatch(getByName(searchString));  
}

useEffect(()=>{
  dispatch(getDrivers());  
},[dispatch]);

return (
    <div className={style.home}>
        <h2 className={style.titulo}>HOME</h2>
        <NavBar handleChange={handleChange} handleSubmit={handleSubmit}/>
        <Cards allDrivers={allDrivers}/>
    </div>
)
};
 
export default Home;
