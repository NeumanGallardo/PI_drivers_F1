import {React, useState, useEffect} from "react";
import axios from "axios";
import NavBar from "../NavBar";
function Form(){

const [DB, setDB] = useState([]);
const [opSelec, setOpSelec] = useState([]);

useEffect(() => {
    async function getDB()
    {
    try{
        const response = await axios(`http://localhost:3001/drivers_F1_teams`);
        setDB(response.data);
    }catch(error){return <p>error al obtener datos {error}</p>}  
    }
getDB();
  }, []);

  // Manejar el cambio de las opciones seleccionadas
  const handleSeleccionChange = (event) => {
    const opSelec = Array.from(event.target.selectedOptions, (option) => option.value);
    setOpSelec(opSelec);
  };
return <><NavBar/>
<form>
    <label>Nombre: </label> <input type="text" name='name'/>
    <label>Apellido: </label> <input type="text" name='lastName'/>
    <label>Nacionalidad: </label> <input type="text" name='nationality'/>
    <label>Imagen: </label> <input type="text" />
    <label>Fecha de nacimiento: </label> <input type="date" name='dob'/>
    <label>Descripcion: </label> <input type="text" name='description'/>
    <label>Teams: </label> 
    <select multiple value={opSelec} onChange={handleSeleccionChange}>
    {DB.map((opcion, index) => (
          <option key={index} value={opcion}>
            {opcion}
          </option>
        ))}
    </select>

    <div>
        <h2>Opciones seleccionadas:</h2>
        <ul>
          {opSelec.map((opcion, index) => (
            <li key={index}>{opcion}</li>
          ))}
        </ul>
      </div>

</form></>
 };
export default Form;