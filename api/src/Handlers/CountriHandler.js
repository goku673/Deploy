const {
  
  AllCountriesDB,
  countryById,
  CountriesByName } = require('../controllers/CountriController');



const getCountryById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await countryById(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

}


const getCountriesByName = async (req, res) => {
  const { name } = req.query;


  try {

    if (name) {
      const response = await CountriesByName(name)
      return res.status(200).json(response);
    } else {
      const response = await AllCountriesDB();
      return res.status(200).json(response);

    }

  } catch (error) {
    res.status(400).json({ error: error.message });
  }

}
module.exports = {
  
  getCountryById,
  getCountriesByName,
}