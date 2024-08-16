let container = document.querySelector(".container");
let box;
for (let i=0; i<256; i++) {
    box = document.createElement("div");
    box.classList.add("box");
    container.appendChild(box);
}