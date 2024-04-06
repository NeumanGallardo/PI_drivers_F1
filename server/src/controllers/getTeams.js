const axios = require('axios');
const URL = 'http://localhost:5000/drivers';
const {Team} = require('../db');
const getTeams = async(req, res)=>{
try{
const response = await axios(`${URL}`);  
let teams =[];
for(let i=0;i<response.data.length;i++)
{teams.push(response.data[i].teams);}

teams = teams.join('');
teams = teams.split(',');
teams = teams.filter((elemento, indice) => {
    return teams.indexOf(elemento) === indice;
});
//cargar la db en primera instancia si esta vacia
let cont = await Team.count();
if(cont===0)
{postTeams(teams,res);}
return res.json(teams);
}
catch(error){
return res.status(500).json({message: error.message});
}
};
module.exports = getTeams;

const postTeams =async (req, res)=>{
    try{
    for(let i=0;i<req.length;i++)
    {let name = req[i];
    await Team.findOrCreate({where:{name:name}});}
    }catch(error){return res.status(500).json(error.message)};
    };