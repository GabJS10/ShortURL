import { Router } from "express";
import { createShortUrl, getUrl } from "../controllers/UrlController.js";
const router = Router();

router.post("/shortUrl", createShortUrl);
router.get("/:urlId", getUrl);

export default router;
