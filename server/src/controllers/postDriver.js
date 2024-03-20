const {Driver} = require('../db');
const postDriver =async (req, res)=>{
try{
const {forename, surname, description, image, nationality, dob} = req.body;
if(!forename || !surname || !description || !nationality || !dob)  
{return res.status(400).send('Faltan datos post de driver');}
const user = await Driver.findOrCreate({
    where: {forename:forename, surname:surname, description:description, 
        image:image, nationality:nationality, dob:dob}
});
return res.status(200).json(user);
}catch(error){return res.status(500).json(error.message)};
};

module.exports = postDriver;