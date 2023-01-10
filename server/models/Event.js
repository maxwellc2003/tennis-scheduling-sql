//import sequelize library
const { Model, DataTypes } = require("sequelize");
//database conection from config
const sequelize = require("../config/connection");

class Event extends Model {}

Event.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    time: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [15],
    },
    min: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      validate: {
        isDecimal: true,
        len: [0,2],
      },
    },
    max: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      validate: {
        isDecimal: true,
        len: [0,2],
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "event",
  }
);

module.exports = Event;
