const mode = document.getElementById("mode");


let localData = localStorage.getItem("theme");

if(localData == 'light') {
    mode.src = "icon/moon.png";
    document.body.classList.remove("dark-theme");
    
}
else if(localData == "dark") {
    mode.src = "icon/sun.png";
    document.body.classList.add("dark-theme");

}

mode.onclick = () => {
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")) {
        mode.src = "icon/sun.png";
        localStorage.setItem("theme", "dark");
    } else {
        mode.src = "icon/moon.png"
        localStorage.setItem("theme", "light");
    }
}
