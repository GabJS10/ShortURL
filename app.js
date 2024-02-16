import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import UrlRoutes from "./src/routes/UrlShort.routes.js";
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//YOU NEED TO CREATE MEDIA FOLDER
app.use("/media", express.static(path.resolve(__dirname, "./media")));

app.use(UrlRoutes);

export default app;
