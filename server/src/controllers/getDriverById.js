const axios = require('axios');
//const URL='http://localhost:5000/drivers/';
const URL = 'http://localhost:3001/drivers_F1/';
const getDriverById = async (req, res)=>{
const ID=req.params.id-1;
try{
const response = await   axios(`${URL}`);
//if(!image)
//{image = "https://cdn-4.motorsport.com/images/mgl/2Gzrxzo0/s700/sergio-perez-red-bull-racing-1.jpg";}
const { id, name, nationality, teams, image} = response.data[ID];
const driver = {id, name, nationality, teams, image};
return res.json(driver);
}
catch(error){
return res.status(500).json({message: error.message});
}
};
//module.exports = getDriverById; 