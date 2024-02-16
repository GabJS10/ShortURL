import qr from "qr-image";
import fs from "fs";
export default function makeQrCode(url, id) {
  const qrCode = qr.image(url, { type: "png" });
  const ph = `./media/${id}.png`;
  // Crea un stream de escritura
  const outputStream = fs.createWriteStream(ph);

  qrCode.pipe(outputStream);

  return new Promise((resolve, reject) => {
    outputStream.on("finish", () => {
      resolve(ph.slice(2));
    });
    outputStream.on("error", (err) => {
      reject(err);
    });
  });
}
