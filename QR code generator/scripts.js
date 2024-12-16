const qrText = document.querySelector(".input-box");
const qrImg = document.getElementById("qr-image");
const qrBox = document.getElementById("qr-box");

const api = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

const generateQR = async () => {
    let inputValue = qrText.value;
    if(inputValue.length > 0) {
        let url = api + inputValue;
        let response = await fetch(url);
        qrImg.src = response.url;
        qrBox.classList.add("img-show");
    } else {
        qrText.classList.add("error");
        setTimeout(() => {
        qrText.classList.remove("error");
        }, 1000)

    }

}
