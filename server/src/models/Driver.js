const { sequelize,DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Driver', {
      id:{type: DataTypes.INTEGER, primaryKey: true, allowNull: false,
      },
    forename: {type: DataTypes.STRING, allowNull: false},
    surname: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
    image:{type: DataTypes.STRING, allowNull: false},
    nationality:{type: DataTypes.STRING, allowNull: false},
    dob:{type: DataTypes.DATE, allowNull: false}
  }, {timestamps: false});
};

sequelize.sync()
  .then(() => {
    console.log('Modelos sincronizados correctamente.');
    
    // Establecer el valor inicial de autoincrement
    return sequelize.query("ALTER TABLE Drivers AUTO_INCREMENT = 509");
  })
  .then(() => {
    console.log('Valor inicial de autoincrement establecido correctamente.');
  })
  .catch(err => {
    console.error('Error al sincronizar modelos:', err);
  });