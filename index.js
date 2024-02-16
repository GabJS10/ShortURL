import app from "./app.js";
import { sequelize } from "./src/database/database.js";
import "./src/models/url.js";

const port = 3000;

async function main() {
  try {
    await sequelize.sync({ force: false });
    console.log("Connection has been established successfully.");
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main();
