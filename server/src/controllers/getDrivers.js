const axios = require('axios');
const URL='http://localhost:5000/drivers';
const getDrivers = async (req, res)=>{
try{
const response = await   axios(`${URL}`)
const drivers = [];
for(let i=0;i<response.data.length;i++)
{const { id, driverRef, nationality, teams} = response.data[i];
let image = response.data[i].image.url;
if(!image)
{image = "https://cdn-4.motorsport.com/images/mgl/2Gzrxzo0/s700/sergio-perez-red-bull-racing-1.jpg";}
const driver ={id, driverRef, nationality, teams, image};
drivers.push(driver);
}
return res.json(drivers);
}
catch(error){
return res.status(500).json({message: error.message});
}
};
module.exports = getDrivers; 