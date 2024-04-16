import { Link, useLocation } from "react-router-dom";
import style from "./Nav.module.css";
import { useSelector } from "react-redux";
export default function NavBar({handleChange, handleSubmit}){

    const allDrivers = useSelector((state)=>state.copyDrivers);
    const location = useLocation();

    return <><header className={style.container}>
<nav className={style.nav} id='nav'>
<div><Link className={style.home} to='/home' onClick={allDrivers}>Home</Link></div>
<div><Link className={style.newDriver} to='/form'>Crear Driver</Link></div>
<div onChange={event=>handleChange(event)} className={style.search}>
<input placeholder="Buscar" type="search"/>
<button type="submit" onClick={handleSubmit}>Buscar</button>
</div>
</nav>
    </header>
    </>
}