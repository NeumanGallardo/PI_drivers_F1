const axios = require('axios');
const {Driver, driver_team, Team} = require('../db');
//const Team =require ('../models/Team');
const URL = 'http://localhost:3001/drivers_F1';
const postDriver =async (req, res)=>{
try{
//recibiendo datos desde el front-end
const {newDriver, opSelecTeams}=req.body;
const response = await axios(`${URL}`);
//contando datos y asignacion de id
const count = response.data.length;
const id = count + 1;
console.log('nuevo id ',id);
const {name, lastName, description, image, nationality, dob} = newDriver;
if(!name || !lastName || !description || !nationality || !dob)  
{return res.status(400).send('Faltan datos post de driver');}
const driver = await Driver.findOrCreate({
    where: {id:id, name:name, lastName:lastName, description:description, 
        image:image, nationality:nationality, dob:dob}
} );
//insertar teams
  for (const rolData of opSelecTeams) {
    try {
      const [rol, created] = await Team.findOrCreate({ where: rolData });
      await driver_team.findOrCreate({where:{DriverId:id,TeamId:rol.id}});
    } catch (error) {
      console.error('Error al procesar el rol:', error);
    }
  }
  
const mensaje = 'Driver creado exitosamente';
return res.status(200).json(mensaje);
}catch(error){return res.status(500).json(error.message)};
};

module.exports = postDriver;
