const { sequelize,DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Driver', {
      id:{type: DataTypes.INTEGER, primaryKey: true, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false},
    lastName: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
    image:{type: DataTypes.STRING, allowNull: true},
    nationality:{type: DataTypes.STRING, allowNull: false},
    dob:{type: DataTypes.DATE, allowNull: false}
  }, {timestamps: false});
};
