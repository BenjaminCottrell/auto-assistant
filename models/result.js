const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Result extends Model {}

Result.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    make: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    drive: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    trans: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cylinders: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    mpg: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
  hooks: {
    beforeCreate: async (newResultData) => {
      newResultData.make = newResultData.make.charAt(0).toUpperCase() + newResultData.make.slice(1);
      newResultData.model = newResultData.model.charAt(0).toUpperCase() + newResultData.model.slice(1);
      return newResultData;
    },
  },

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'result',
  }
);

module.exports = Result;
