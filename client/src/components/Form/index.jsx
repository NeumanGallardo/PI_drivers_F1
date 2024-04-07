import {React, useState, useEffect} from "react";
import axios from "axios";
import validation from '../../validation/Validation';
import NavBar from "../NavBar";
function Form(){

  const arrayNationality = [
        { id: 0, nationality: 'American' },
        { id: 1, nationality: 'American-Italian' },
        { id: 2, nationality: 'Argentine' },
        { id: 3, nationality: 'Australian' },
        { id: 4, nationality: 'Austrian' },
        { id: 5, nationality: 'Belgian' },
        { id: 6, nationality: 'Brazilian' },
        { id: 7, nationality: 'British' },
        { id: 8, nationality: 'Canadian' },
        { id: 9, nationality: 'Chilean' },
        { id: 10, nationality: 'Colombian' },
        { id: 11, nationality: 'Czech' },
        { id: 12, nationality: 'Danish' },
        { id: 13, nationality: 'Dutch' },
        { id: 14, nationality: 'Finnish' },
        { id: 15, nationality: 'French' },
        { id: 16, nationality: 'German' },
        { id: 17, nationality: 'Hungarian' },
        { id: 18, nationality: 'Indian' },
        { id: 19, nationality: 'Irish' },
        { id: 20, nationality: 'Italian' },
        { id: 21, nationality: 'Japanese' },
        { id: 22, nationality: 'Liechtensteiner' },
        { id: 23, nationality: 'Malaysian' },
        { id: 24, nationality: 'Mexican' },
        { id: 25, nationality: 'Monegasque' },
        { id: 26, nationality: 'New Zealander' },
        { id: 27, nationality: 'Polish' },
        { id: 28, nationality: 'Portuguese' },
        { id: 29, nationality: 'Rhodesian' },
        { id: 30, nationality: 'South African' },
        { id: 31, nationality: 'Spanish' },
        { id: 32, nationality: 'Swedish' },
        { id: 33, nationality: 'Swiss' },
        { id: 34, nationality: 'Venezuelan' }
      ]

const [DB, setDB] = useState([]);
const [opSelec, setOpSelec] = useState([]);
const [opNat,setOpNat] = useState([]);

const [newDriver,setNewDriver]=useState({});
const [errors,setErrors]=useState({});

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

  // Manejar el cambio de las opciones seleccionadas team
  const handleTeamChange = (event) => {
    event.preventDefault();
    const name = Array.from(event.target.selectedOptions, (option) =>option.value);
    const id = Array.from(event.target.selectedOptions, (option) =>option.id);
    console.log(name, id);
    let obj = {name:name[0],id:id[0]}
    console.log(obj);
    setOpSelec(obj);
    console.log(opSelec);
//let team = opSelec[0];

  };

    // Manejar el cambio de las opciones seleccionadas nationality
    const handleNatChange = (event) => {
        const opNat = Array.from(event.target.selectedOptions, (option) => option.value);
        setOpNat(opNat);
        const atrNat = opNat[0];
       setNewDriver({...newDriver, nationality:atrNat});
       setErrors(validation({...newDriver,nationality: atrNat}))
      };

  function handleChange(event){
    setErrors(validation({...newDriver,[event.target.name] : event.target.value
        })
    );
setNewDriver({...newDriver,[event.target.name]:event.target.value});
}

const [imagenURL, setImagenURL] = useState('');

const handleImagenSeleccionada = (event) => {
const image = event.target.value;
setImagenURL(image);
const atr = imagenURL
setNewDriver({...newDriver, image:image});
setErrors(validation({...newDriver,image: image}))
};

return <><NavBar/>
<form>
    <label>Nombre: </label> 
    <input type="text" name='name' value={newDriver.name} onChange={handleChange}/>
    {errors.name!==''&&<p>{errors.name}</p>}

    <label>Apellido: </label>
    <input type="text" name='lastName' value={newDriver.lastName} onChange={handleChange}/>
    {errors.lastName!==''&&<p>{errors.lastName}</p>}

    <label>Nacionalidad: </label> 
    <select value={opNat} onChange={handleNatChange}>
    {arrayNationality.map((objeto) => (
          <option key={objeto.id} value={objeto.nationality}>
            {objeto.nationality}
          </option>
        ))}
    </select>
    {errors.nationality!==''&&<p>{errors.nationality}</p>}

    <label>Imagen: </label> 
    <input type="text" name='image' value={imagenURL} onChange={handleImagenSeleccionada}/>
    {imagenURL && <img src={imagenURL} alt="Vista previa de la imagen" 
    style={{ maxWidth: '300px', maxHeight: '300px' }} />}
    {errors.image!==''&&<p>{errors.image}</p>}
     {console.log(newDriver)}

    <label>Fecha de nacimiento: </label> <input type="date" name='dob'
     value={newDriver.dob} onChange={handleChange}/>
     {errors.dob!==''&&<p>{errors.dob}</p>}

    <label>Descripcion: </label> <textarea rows="4" cols='35' name='description'
     value={newDriver.description} onChange={handleChange}/>
    {errors.description!==''&&<p>{errors.description}</p>}

    <label>Teams: </label> 
    <select multiple name="teams" value={opSelec} onChange={handleTeamChange}>
    {DB.map((objeto) => (
          <option key={objeto.id} value={objeto.name} id={objeto.id}>
            {objeto.name}
          </option>
        ))}
    </select>

    <div>
        <h2>Opciones seleccionadas:</h2>
        <ul>
          {opSelec.map((opcion) => (
            <li key={opcion.id}>{opcion.name}</li>
          ))}
        </ul>
      </div>

</form></>
 };
export default Form;

