const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {}

  Employee.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
      },
      lastName: DataTypes.STRING,
      firstName: DataTypes.STRING,
      extension: DataTypes.STRING,
      email: DataTypes.STRING,
      officeId: DataTypes.UUID,
      reportsTo: DataTypes.UUID,
      jobTitle: DataTypes.STRING,
      createBy: DataTypes.UUID,
      updateBy: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: 'Employee',
      timestamps: true,
    }
  );

  return Employee;
};
