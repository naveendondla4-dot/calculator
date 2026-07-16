const display = document.getElementById("display");
const historyList = document.getElementById("historyList");

// Add values
function append(value) {
    display.value += value;
}

// Clear display
function clearDisplay() {
    display.value = "";
}

// Delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate
function calculate() {
    try {
        let expression = display.value;
        let result = eval(expression);

        let li = document.createElement("li");
        li.textContent = expression + " = " + result;
        historyList.appendChild(li);

        display.value = result;

    } catch (e) {
        display.value = "Error";
    }
}

// Square
function square() {
    if(display.value!=""){
        display.value=Math.pow(Number(display.value),2);
    }
}

// Square Root
function squareRoot() {
    if(display.value!=""){
        display.value=Math.sqrt(Number(display.value));
    }
}

// Sin
function sinValue() {
    if(display.value!=""){
        display.value=Math.sin(Number(display.value)*Math.PI/180).toFixed(6);
    }
}

// Cos
function cosValue() {
    if(display.value!=""){
        display.value=Math.cos(Number(display.value)*Math.PI/180).toFixed(6);
    }
}

// Tan
function tanValue() {
    if(display.value!=""){
        display.value=Math.tan(Number(display.value)*Math.PI/180).toFixed(6);
    }
}

// Log
function logValue() {
    if(display.value!=""){
        display.value=Math.log10(Number(display.value)).toFixed(6);
    }
}

// Theme
function toggleTheme() {
    document.body.classList.toggle("light");
}

// Clear History
function clearHistory() {
    historyList.innerHTML = "";
}

// Keyboard Support
document.addEventListener("keydown", function(e){

    const key=e.key;

    if(!isNaN(key)||['+','-','*','/','.','%'].includes(key)){
        append(key);
    }

    if(key==="Enter"){
        e.preventDefault();
        calculate();
    }

    if(key==="Backspace"){
        deleteLast();
    }

    if(key==="Escape"){
        clearDisplay();
    }

});