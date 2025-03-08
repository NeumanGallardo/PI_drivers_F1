import {React, useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import validation from '../../validation/Validation';
import NavBar from "../NavBar";
import style from './Form.module.css';
import { getTeams, postNewDriver } from "../../redux/actions";

import Select from "react-select";

function Form(){
  //action getTeams
  const dispatch = useDispatch();
const teamsDB = useSelector((state)=>state.teams);

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

const [opNat,setOpNat] = useState([]);
const [opSelecTeams, setOpSelecTeams] = useState([]);
const [newDriver,setNewDriver]=useState({});
const [errors,setErrors]=useState({});

useEffect(() => {
dispatch(getTeams());
  }, [dispatch]);

  // Manejar el cambio de las opciones seleccionadas team
  const handleTeamChange = (event) => {
    event.preventDefault();
    const name = Array.from(event.target.selectedOptions, (option) =>option.value);
    const id = Array.from(event.target.selectedOptions, (option) =>option.id);
    let obj = {name:name[0],id:id[0]}
    setOpSelecTeams([...opSelecTeams, obj]);
    setErrors(validation({...newDriver,teams: opSelecTeams}))
  };

    // Manejar el cambio de las opciones seleccionadas nationality
    const handleNatChange = (event) => {
        event.preventDefault();
        const opNat = Array.from(event.target.selectedOptions, (option) => option.value);
        setOpNat(opNat);
        const atrNat = opNat[0];
       setNewDriver({...newDriver, nationality:atrNat});
       setErrors(validation({...newDriver,nationality: atrNat}))
      };
//manejador del estado principal new Driver
  function handleChange(event){
    event.preventDefault();
    setErrors(validation({...newDriver,[event.target.name] : event.target.value
        })
    );
setNewDriver({...newDriver,[event.target.name]:event.target.value});
}
//manejar la imagen
const [imagenURL, setImagenURL] = useState('');

const handleImagenSeleccionada = (event) => {
    event.preventDefault();
const image = event.target.value;
setImagenURL(image);
setNewDriver({...newDriver, image:image});
setErrors(validation({...newDriver,image: image}))
};

//submit
const handleSubmit=(event)=>{
    event.preventDefault();
    postNewDriver(newDriver, opSelecTeams);
};


return <><NavBar/>
<form onSubmit={handleSubmit}>
   <label className={style.label}>Nombre: </label> 
    <input type="text" name='name' value={newDriver.name} onChange={handleChange}/>
    {errors.name!==''&&<p className={style.p}>{errors.name}</p>}

    <label>Apellido: </label>
    <input type="text" name='lastName' value={newDriver.lastName} onChange={handleChange}/>
    {errors.lastName!==''&&<p className={style.p}>{errors.lastName}</p>}

    <label>Nacionalidad: </label> 
    <select value={opNat} onChange={handleNatChange}>
    {arrayNationality.map((objeto) => (
          <option key={objeto.id} value={objeto.nationality}>
            {objeto.nationality}
          </option>
        ))}
    </select>
    {errors.nationality!==''&&<p className={style.p}>{errors.nationality}</p>}

    <label>Imagen: </label> 
    <input type="text" name='image' value={imagenURL} onChange={handleImagenSeleccionada} placeholder="URL de imagen"/>
    {imagenURL && <img src={imagenURL} alt="Vista previa de la imagen" 
    style={{ maxWidth: '300px', maxHeight: '300px' }} />}
    {errors.image!==''&&<p className={style.p}>{errors.image}</p>}
     {console.log('Driver',newDriver)}

    <label>Fecha de nacimiento: </label> <input type="date" name='dob'
     value={newDriver.dob} onChange={handleChange}/>
     {errors.dob!==''&&<p className={style.p}>{errors.dob}</p>}

    <label>Descripcion: </label> <textarea rows="4" cols='35' name='description'
     value={newDriver.description} onChange={handleChange}/>
    {errors.description!==''&&<p className={style.p}>{errors.description}</p>}

    <label>Teams: </label> 
    <Select options={teamsDB} isMulti onChange={(opSelecTeams) => setOpSelecTeams(opSelecTeams)}
      teamsDB={(e) => e.label}/>
    {/*multiple name="teams" value={opSelecTeams} onChange={handleTeamChange}>
    {teamsDB.map((objeto) => (
          <option key={objeto.id} value={objeto.name} id={objeto.id}>
            {objeto.name}
          </option>
        ))}
    </Select>*/}
    {errors.teams!==''&&<p className={style.p}>{errors.teams}</p>}
    <div>
        <h3>Opciones seleccionadas:</h3>
        
           {opSelecTeams.map((opcion) => (
            <p key={opcion.id}>{opcion.name}</p>
          ))}
          {console.log('Teams',opSelecTeams)} 
       
      </div>
      <button type="submit">Registrar Driver</button>
</form>
</>
 };
export default Form;

