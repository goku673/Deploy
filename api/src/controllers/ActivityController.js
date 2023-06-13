const { Activity,} = require('../db');

const postActivityCreate = async (name, difficulty, duration, season,pais) => {

const existeNameActivity =  await Activity.findOne({where : {name}});

if(existeNameActivity){
  return {
    success: false,
    message: 'Ya existe esa actividad'
  };
}
  const activity = await Activity.create({name, difficulty, duration, season});
 
   await activity.addCountries(pais);
  
  return activity;
};

const  getActivityDB  =  async ()=>{
 
  const actividadDB = Activity.findAll({
      attibutes : ["name"],

  });

  return actividadDB;
 
}
module.exports = {
  postActivityCreate,
  getActivityDB,
}

