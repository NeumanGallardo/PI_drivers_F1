const axios = require('axios');
const URL='http://localhost:5000/drivers/';
const getDriverById = async (req, res)=>{
const ID=req.params.id;
try{
const response = await   axios(`${URL}${ID}`);
const name = response.data.name.forename;
let image = response.data.image.url;
if(!image)
{image = "https://cdn-4.motorsport.com/images/mgl/2Gzrxzo0/s700/sergio-perez-red-bull-racing-1.jpg";}
const { id, nationality, teams} = response.data;
const driver = {id, name, nationality, teams, image};
return res.json(driver);
}
catch(error){
return res.status(500).json({message: error.message});
}
};
module.exports = getDriverById; 