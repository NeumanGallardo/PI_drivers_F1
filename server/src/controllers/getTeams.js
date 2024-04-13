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


//ordenar teams alfabeticamente
teams = teams.slice().sort((a, b) => {
    const nombreA = a.toLowerCase(); 
    const nombreB = b.toLowerCase();
    if (nombreA < nombreB) {
        return -1;
    }
    if (nombreA > nombreB) {
        return 1;
    }
    return 0; // Si los nombres son iguales
 });
 
//cargar la db en primera instancia si esta vacia
let cont = await Team.count();
if(cont===0)
{postTeams(teams,res);
console.log('db cargado');}
//importar teams de DB
let teamsDB=[];
teamsDB = await Team.findAll();

return res.json(teamsDB);
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