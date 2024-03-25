const axios = require('axios');
const {Driver} = require('../db');
const URL = 'http://localhost:3001/drivers_F1';
const postDriver =async (req, res)=>{
try{
const response = await axios(`${URL}`);
//contando datos y asignacion de id
const count = response.data.length;
const id = count + 1;

const {name, lastName, description, image, nationality, dob} = req.body;
if(!name || !lastName || !description || !nationality || !dob)  
{return res.status(400).send('Faltan datos post de driver');}
const user = await Driver.findOrCreate({
    where: {id:id, name:name, lastName:lastName, description:description, 
        image:image, nationality:nationality, dob:dob}
});
return res.status(200).json(user);
}catch(error){return res.status(500).json(error.message)};
};

module.exports = postDriver;