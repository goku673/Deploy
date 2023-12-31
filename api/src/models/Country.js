const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id:{
      
                 type : DataTypes.STRING(3),
                 primaryKey:true,
                 allowNull : false , 
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageFlag : {
       type :  DataTypes.STRING ,
       allowNull : false, 
    },
    
    continent : {
       type :  DataTypes.STRING, 
       allowNull : false  ,
    },
    capital : {
       type : DataTypes.STRING , 
       allowNull: false,
       
       
    },
    subRegion: {
           type : DataTypes.STRING,
           allowNull:false,

    },
   area : {
          type :  DataTypes.STRING , 
          allowNull : false ,
   },
population : {
     type : DataTypes.INTEGER,
     allowNull : false,
}
},{timestamps : false });
};
