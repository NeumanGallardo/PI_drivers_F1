const axios = require('axios');
const URL='http://localhost:3001/drivers_F1/';
const getDriversByName = async(req, res)=>{
try{
const {name}=req.query;
const response = await   axios(`${URL}`);
let drivers=[];

for(let i=0;i<response.data.length;i++)
{if(name.toLowerCase()===response.data[i].name.toLowerCase())
{let driver = response.data[i];
drivers.push(driver);}
if(drivers.length===15)
{return res.json(drivers);}
}

if(drivers.length===0)
{drivers='driver no encontrado';}

return res.json(drivers);
}
catch(error){
return res.status(500).json({message: error.message});
}
};
module.exports = getDriversByName;