let progress = document.getElementById("progress-text");
let count = 0;

setInterval(() => {
    if(count == 65) {
        clearInterval();
    } else {
    count++;
    progress.innerText = count + "%";
    }
},30);