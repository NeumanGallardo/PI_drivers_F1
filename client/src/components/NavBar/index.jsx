import { Link, useLocation } from "react-router-dom";
import style from "./Nav.module.css";
import { useSelector } from "react-redux";
export default function NavBar({handleChange, handleSubmit}){

    const allDrivers = useSelector((state)=>state.copyDrivers);
    const location = useLocation();

    return <><header className={style.container}>
<nav>
<Link className={style.link} to='/home' onClick={allDrivers}><h2>Home</h2></Link>
<Link className={style.link} to='/form'><h2>Crear Driver</h2></Link>
{location.pathname === '/home' && 
<form onChange={event=>handleChange(event)}>
<input placeholder="Buscar" type="search"/>
<button type="submit" onClick={handleSubmit}>Buscar</button>
</form>
}
</nav>
    </header>
    </>
}