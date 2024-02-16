import makeQrCode from "../helpers/makeQrCode.js";
import validateUrl from "../helpers/validateUrl.js";
import { nanoid } from "nanoid";
import { Url } from "../models/url.js";

const baseUrl = "http://localhost:3000";
const createShortUrl = async (req, res) => {
  const { url } = req.body;

  if (!validateUrl(url)) {
    return res.status(400).json({ error: "Invalid URL" });
  }

  try {
    const id = nanoid();

    const urlExist = await Url.findOne({ where: { urlOriginal: url } });

    if (urlExist) {
      return res.status(200).json(urlExist);
    }

    const shortUrl = baseUrl + "/" + id;

    const qrImage = await makeQrCode(url, id);

    const newUrl = await Url.create({
      urlId: id,
      urlOriginal: url,
      urlShort: shortUrl,
      qrImage: baseUrl + "/" + qrImage,
    });

    return res.status(201).json(newUrl);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Internal server error", error: error.message });
  }
};

const getUrl = async (req, res) => {
  const { urlId } = req.params;

  try {
    const url = await Url.findOne({ where: { urlId: urlId } });
    if (url) {
      url.set({ clickCount: url.clickCount + 1 });
      await url.save();
      return res.redirect(url.urlOriginal);
    }

    return res.status(404).json({ error: "URL not found" });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Internal server error", error: error.message });
  }
};

export { createShortUrl, getUrl };
