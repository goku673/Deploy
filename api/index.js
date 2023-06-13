//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const  axios = require('axios');
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const {Country} = require('./src/db.js')
// Syncing all the models at once.
conn.sync({ force:true}).then(() => {
  server.listen(3001, async() => {
 
    console.log('%s listening at 3001'); // eslint-disable-line no-console
    const res = await Country.findAll();
    
       if(!res.length){
       
        let countries =  (await axios.get('https://rest-countries.up.railway.app/v2/all')).data;

        let allCountries = [];

        countries.map((pais)=>
            allCountries.push({
              id : pais.alpha3Code,
              name : pais.name,
              imageFlag : pais.flags.png,
              continent : pais.region,
              capital :  pais.capital || '-1',
              subRegion : pais.subregion,
              area : pais.area || '-1',
              population : pais.population || 0,
           })


        )
           Country.bulkCreate(allCountries);
       }

  });
});
