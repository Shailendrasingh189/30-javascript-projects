let btns = document.querySelectorAll("button");
const display = document.querySelector("input");

let string = "";

let match = () => {
    let symbols = `-+/.*`;

    if(symbols.indexOf(string[1]) !== -1) {
        string = 0;
        display.value = string;
    }
}

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.innerHTML == "=") {
        if(string === "0" || string === "") {
            string = "0";
            display.value = string;
            
        } else {
            try {
                string = eval(string);
                display.value = string;
                match();
            }
            catch (e) {
                string = "";
                display.value = string;
            }
            
        }
    }
    else if(e.target.innerHTML == "AC") {
        string = "0"
        display.value = string;
    }
    else if(e.target.innerHTML == "DE") {
        string = string.toString().slice(0,-1);
        display.value = string;
    }
    else {
        console.log(e.target.innerHTML)
        string = string + e.target.innerHTML;
        
        // match();
        display.value = string;
        
    }
  });
});


