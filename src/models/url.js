import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Url = sequelize.define("urls", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  urlId: {
    type: DataTypes.STRING,
    required: true,
  },
  urlOriginal: {
    type: DataTypes.STRING,
    required: true,
    allowNull: false,
  },
  urlShort: {
    type: DataTypes.STRING,
    required: true,
    allowNull: false,
  },
  clickCount: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  qrImage: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
  },
});
