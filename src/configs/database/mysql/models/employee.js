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
      createdBy: DataTypes.UUID,
      updatedBy: DataTypes.UUID,
    },
    {
      sequelize,
      paranoid: true,
      freezeTableName: true,
      modelName: 'employee',
      timestamps: true,
      createdAt: true,
      updatedAt: true,
      deletedAt: true,
    }
  );

  return Employee;
};
