let container = document.querySelector(".container");
let btn = document.querySelector(".btn");

function etch(squares) {
    let area = squares * squares;
    let basis = (1/squares) * 100;
    for (let i = 0; i < area; i++) {
        let box = document.createElement("div");
        box.classList.add("box");
        box.style.flexBasis = `${basis}%`;
        let opacity = 0;
        box.addEventListener('mouseover', () => {
            function randomValue() {
                return Math.floor(Math.random() * 255);
            }
            opacity += 0.1
            let red = randomValue();
            let green = randomValue();
            let blue = randomValue();
            let randomColor = `rgb(${red}, ${green}, ${blue}, ${opacity})`;
            box.style.backgroundColor = `${randomColor}`;
        });
        container.appendChild(box);
    }
}

btn.addEventListener('click', ()=> {
    let input = prompt("How many squares per side? (Max:100)");
    if (input === null) {
        return;
    }
    while (input > 100 || input < 1) {
        input = prompt("Please choose a number between 1 and 100. Try again.");
        if (input === null) {
            return;
        }
    }
    while (isNaN(input)) {
        input = prompt("Please choose a number. Try again.")
        if (input === null) {
            return;
        }
        while (input > 100 || input < 1) {
            input = prompt("Please choose a number between 1 and 100. Try again.");
            if (input === null) {
                return;
            }
        }
    }

    container.replaceChildren();
    etch(input);
});

etch(16);