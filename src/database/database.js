import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  "urlshortenerDB",
  "postgres",
  "password",
  {
    dialect: "postgres",
    host: "localhost",
  }
);
