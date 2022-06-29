const { Model } = require("sequelize");
const employee = require("./employee");

module.exports = (sequelize, DataTypes) => {
  class Office extends Model {}

  Office.init(
    {
      id: {
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        type: DataTypes.UUID,
      },
      city: DataTypes.STRING,
      phone: DataTypes.STRING,
      addressLine1: DataTypes.STRING,
      addressLine2: DataTypes.STRING,
      state: DataTypes.STRING,
      country: DataTypes.STRING,
      postalCode: DataTypes.STRING,
      territory: DataTypes.STRING,
      createdBy: DataTypes.UUID,
      updatedBy: DataTypes.UUID,
    },
    {
      sequelize,
      paranoid: true,
      freezeTableName: true,
      modelName: 'office',
      timestamps: true,
      createdAt: true,
      updatedAt: true,
      deletedAt: true,
    }
  );

  
  return Office;
};
