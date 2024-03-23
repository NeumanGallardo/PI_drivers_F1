const axios = require('axios');
const URL = 'http://localhost:3001/drivers_F1';
const getTeams = async(req, res)=>{
try{
const response = await axios(`${URL}`);  
let teams =[];
console.log('aqui llego');
for(let i=0;i<response.data.length;i++)
{teams.push(response.data[i].teams);}
teams = teams.join('');
teams = teams.split(',');
console.log(teams.length);
teams = teams.filter((elemento, indice) => {
    return teams.indexOf(elemento) === indice;
});
console.log(teams.length);
return res.json(teams);
}
catch(error){
return res.status(500).json({message: error.message});
}
};
module.exports = getTeams;