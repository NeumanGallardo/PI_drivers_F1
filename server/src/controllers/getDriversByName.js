const axios = require('axios');
const URL='http://localhost:3001/drivers_F1/';
const getDriversByName = async(req, res)=>{
try{
const {name}=req.params;
console.log(name);
const response = await   axios(`${URL}`);
const drivers =[];
console.log(response.data[0]);
for(let i=0;i<response.data.length;i++)
{if(name===response.data[i].name)
{let driver = response.data[i];
drivers.push(driver);
}
if(drivers.length<15)
{return res.json(drivers);}
}
return res.json(drivers);
}
catch(error){
return res.status(500).json({message: error.message});
}
};
module.exports = getDriversByName;