const wraper = document.querySelector(".wraper"),
  qrinput = wraper.querySelector(".form input"),
  generabtn = wraper.querySelector(".form button"),
  qrimg = wraper.querySelector(".qr-code img");

generabtn.addEventListener("click", () => {
  let qrvalue = qrinput.value;
  if (!qrvalue) return;
  generabtn.innerText = "Generating QR Code....";

  // qr code id generate
  qrimg.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${qrvalue}";

  // img is loding
  qrimg.addEventListener("load", () => {
    wraper.classList.add("active");
    generabtn.innerText = "Generate QR Code";
  });
  // input value change
  qrinput.addEventListener("keyup", () => {
    if (!qrinput.value) {
      wraper.classList.remove("active");
    }
  });
});
