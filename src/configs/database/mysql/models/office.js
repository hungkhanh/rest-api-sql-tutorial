const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Office extends Model {}

  Office.init(
    {
      id: {
        primaryKey: true,
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
      createBy: DataTypes.UUID,
      updateBy: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: 'Office',
      timestamps: true,
    }
  );

  return Office;
};
