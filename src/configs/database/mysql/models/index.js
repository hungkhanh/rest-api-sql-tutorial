'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//   })
//   .forEach(file => {
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//     db[model.name] = model;
//   });

db.Office = require('./office')(sequelize, Sequelize.DataTypes);
db.Employee = require('./employee')(sequelize, Sequelize.DataTypes);


Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// FK_employee_office
db.Office.hasMany(db.Employee, {
  foreignKey: 'officeId',
  as: 'employee',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});
db.Employee.belongsTo(db.Office, {
  foreignKey: 'officeId',
  as: 'employee',
});

// FK_employee_employee
db.Employee.hasMany(db.Employee, {
  foreignKey: 'reportsTo',
  as: 'staff',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
