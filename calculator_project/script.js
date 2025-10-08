let expression = "";

function press(num) {
    expression += num;
    const display = document.getElementById("display");
    display.value = expression;
    display.scrollLeft = display.scrollWidth; // Scroll if too long
}

function clearDisplay() {
    expression = "";
    document.getElementById("display").value = "";
}

function calculate() {
    const display = document.getElementById("display");
    try {
        expression = eval(expression);
        display.value = expression;
        display.scrollLeft = display.scrollWidth;
    } catch {
        display.value = "Error";
        expression = "";
    }
}
