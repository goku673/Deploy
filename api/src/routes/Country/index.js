const {Router} = require('express');

const {
 ///    getCountries,
///     getAllCountriesDB ,
     getCountryById,
     getCountriesByName} = require('../../Handlers/CountriHandler');
 
const countryRouter  = Router();


//countryRouter.get("/",getCountries);
countryRouter.get("/",getCountriesByName);
//countryRouter.get("/",getAllCountriesDB);

countryRouter.get("/:id",getCountryById);

module.exports = countryRouter;