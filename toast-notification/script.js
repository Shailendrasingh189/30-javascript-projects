let toastBox = document.getElementById("toast-box");

const successMsg = `<i class="fa-solid fa-circle-check"></i> Successfully submitted`;
const errorMsg = `<i class="fa-solid fa-xmark"></i> Please fix the error!`;
const invalidMsg = `<i class="fa-solid fa-circle-exclamation"></i> Invalid input check again`;

const showToast = (msg) => {
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if(msg.includes('error')) {
        toast.classList.add('error');
    }
    if(msg.includes('Invalid')) {
        console.log("invalid")
        toast.classList.add('invalid');
    }

    setTimeout(() => {
        toast.remove();
    },6000);
}