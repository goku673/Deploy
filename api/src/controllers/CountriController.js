
const axios = require("axios");

const {Country,Activity} = require('../db');

const AllCountriesDB = async ()=>{
   const allCountries =  await  Country.findAll({
    include: {
      model: Activity,
     attributes: ["name", "difficulty", "duration", "season"],
     through : { attributes:[]},
}
   });
      return allCountries;
}

const countryById = async (id) => {
   id = id.toUpperCase();
   const country = await Country.findByPk(id, {
      
     include: {
       model: Activity,
       attributes: ['name', 'difficulty', 'duration', 'season'],
       through : {attributes:[]} // que parametros quiero atrevez de la tabla intermedia

     }
   });
 
   return country;
 };


const CountriesByName = async  (name) => {
   const databaseCountries = await Country.findAll({
       
       attributes : ["id","name","imageFlag","continent","capital","population"],

         include: {
            model: Activity,
           attributes: ["name", "difficulty", "duration", "season"],
           through : { attributes:[]},
     }
   });
  
    if(name ){
      let paises =  databaseCountries.filter( 
         (pais) =>{ return pais.name.toUpperCase().includes(name.toUpperCase())}
         );
         if(paises.length){
             return paises;
         }else {
              return databaseCountries;
         }
    }
     return databaseCountries;
}

module.exports = {
     AllCountriesDB,
     countryById,
     CountriesByName,
}