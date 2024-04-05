import React from "react";
import NavBar from "../NavBar";
function Form(){

return <><NavBar/>
<form>
    <label>Nombre: </label> <input type="text" name='name'/>
    <label>Apellido: </label> <input type="text" name='lastName'/>
    <label>Nacionalidad: </label> <input type="text" name='nationality'/>
    <label>Imagen: </label> <input type="text" />
    <label>Fecha de nacimiento: </label> <input type="date" name='dob'/>
    <label>Descripcion: </label> <input type="text" name='description'/>
    
</form></>
 };
export default Form;