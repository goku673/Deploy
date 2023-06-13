const { postActivityCreate } = require('../controllers/ActivityController');
const { getActivityDB } = require('../controllers/ActivityController');

const postActivity = async (req, res) => {
  const { name, difficulty, duration, season, pais} = req.body;
 
  try {
    
    const response = await postActivityCreate(name, difficulty, duration, season, pais);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  };
}

const getActivity = async (req, res) => {
  try {
    const response = await getActivityDB();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  postActivity,
  getActivity,
}
