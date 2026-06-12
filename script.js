
const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const value = btn.textContent;
        if (value == "C") {
            display.textContent = "";
        }
        else if (value == "⌫") {
            display.textContent = display.textContent.slice(0, -1);
        }
        else if (value == "=") {
            try {
                display.textContent = eval(display.textContent);
            }
            catch (err) {
                display.textContent = "Error";
            }
        }
        else if (value == "x&sup2;") {
            display.textContent = eval(display.textContent) ** 2;
        }
        else if (value == "√x") {
            display.textContent = Math.sqrt(eval(display.textContent));
        }
        else {
            display.textContent += value;
        }
    })
});
