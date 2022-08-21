const form = document.querySelector("#generate-form");
const qr = document.querySelector("#qrcode");

const generateQR = (url, size) => {
  const qrcode = new QRCode("qrcode", {
    text: url,
    width: size,
    height: size,
  });
};

const clearUI = () => {
  qr.innerHTML = "";
};

const onGenerateHandler = (e) => {
  e.preventDefault();

  clearUI();

  const url = document.getElementById("url").value;
  const size = document.getElementById("size").value;

  generateQR(url, size);
};

form.addEventListener("submit", onGenerateHandler);
