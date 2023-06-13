const {DataTypes}  =  require('sequelize');

module.exports  = (sequelize )=>{
 
      sequelize.define("activity", {
        id : {
            type: DataTypes.UUID,
            defaultValue : DataTypes.UUIDV4,
            primaryKey: true,
         },
         name : { 
             type : DataTypes.STRING,
             allowNull :  false,
             unique : true
         },
         difficulty : {
             type : DataTypes.ENUM("1","2","3","4","5"),
             allowNull : false,
         },
         duration : { 
             type : DataTypes.INTEGER ,
             allowNull : false  
         },
      season : { 
        type : DataTypes.ENUM("spring","winter","summer","autumn") , 
        allowNull : false ,
     }
      },{timestamps : false} );
}
