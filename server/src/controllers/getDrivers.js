const axios = require('axios');
const {Driver} = require('../db');
const URL='http://localhost:5000/drivers/';
const getDrivers = async (req, res)=>{
try{
const response = await   axios(`${URL}`)
let drivers = [];
for(let i=0;i<response.data.length;i++)
{let name = response.data[i].name.forename;
let lastName = response.data[i].name.surname;
let { id, nationality, teams, dob, description} = response.data[i];
let image = response.data[i].image.url;
if(!image)
{image = "https://cdn-4.motorsport.com/images/mgl/2Gzrxzo0/s700/sergio-perez-red-bull-racing-1.jpg";}
const driver ={id, name, lastName, nationality, teams, image, dob, description};
drivers.push(driver);
}
//importando datos de la DB
let resDB = await getDrivesDB();
drivers = drivers.concat(resDB);
 
return res.json(drivers);
}
catch(error){
return res.status(500).json({message: error.message});
}
};
module.exports = getDrivers;
//function
const getDrivesDB =async ()=>{
    let driversDB=[];
    try{
const DB = await Driver.findAll();
for(let i=0; i<DB.length;i++)
    {
    let {id, name, lastName, nationality, image, description, dob}=DB[i];
    dob = dob.getFullYear() + '-' + (dob.getMonth() + 1) + '-' + dob.getDate();
    
    if(!image)
{image = "https://cdn-4.motorsport.com/images/mgl/2Gzrxzo0/s700/sergio-perez-red-bull-racing-1.jpg";}
    let driverDB = {id, name, lastName, nationality, image, description, dob};
    driversDB.push(driverDB);
    }
    return driversDB;
    }catch(error){return res.status(500).json(error.message)};
    };

