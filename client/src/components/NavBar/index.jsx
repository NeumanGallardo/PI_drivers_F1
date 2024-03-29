import { Link } from "react-router-dom";
import style from "./Nav.module.css";
export default function NavBar({onSearch}){
    return <><header className={style.container}>
<nav>
<Link className={style.link} to='/home'><h2>Home</h2></Link>
<Link className={style.link} to='/form'><h2>Crear Driver</h2></Link>
</nav>
    </header>
    </>
}