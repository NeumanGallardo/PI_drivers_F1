const axios = require('axios');
const URL = 'http://localhost:3001/drivers_F1/';
const getDriverById = async (req, res)=>{
const {id}=req.params;
try{
const response = await   axios(`${URL}`)
let driver=[response.data[id-1]];
if(response.data.length<id)
{driver =[];}
return res.json(driver);
}
catch(error){
return res.status(500).json({message: error.message});
}
};
module.exports = getDriverById; 