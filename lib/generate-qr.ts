import QRCode from "qrcode";

const url = "https://www.qrcodesmenusredirects.codes/menu";

QRCode.toFile("menu-qr.png", url, {
  width: 2000,
  margin: 2,
})
  .then(() => {
    console.log("QR code generated");
  })
  .catch((err) => {
    console.error("Error generating QR code:", err);
  });
