const axios = require('axios');
const URL='http://localhost:3001/drivers_F1/';
const getDriversByName = async (req, res)=>{
try{
const NAME=req.query;
console.log(NAME);
/* const response = await   axios(`${URL}`);
const drivers =[];
console.log(response);
for(let i=0;response.data.length<i;i++)
{if(NAME===response.data[i].name.surename)
{let driver = response.data[i];
drivers.push(driver);
}
if(drivers.length<15)
{return res.json(drivers);}
}
return res.json(drivers); */
}
catch(error){
return res.status(404).json({message: error.message});
}
};
module.exports = getDriversByName; 
