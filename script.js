const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

let currentInput = "0";

buttons.forEach(button => {
    button.addEventListener("click", () => {

        const value = button.textContent;

        if (value === "AC") {
            currentInput = "0";
        }

        else if (value === "⌫") {
            currentInput = currentInput.slice(0, -1);

            if (currentInput === "") {
                currentInput = "0";
            }
        }

        else if (value === "=") {
            try {
                let calculation = currentInput
                    .replaceAll("×", "*")
                    .replaceAll("÷", "/")
                    .replaceAll("−", "-");

                currentInput = eval(calculation).toString();

            } catch {
                currentInput = "Error";
            }
        }

        else {
            if (currentInput === "0") {
                currentInput = value;
            } else {
                currentInput += value;
            }
        }

        display.textContent = currentInput;
    });
});