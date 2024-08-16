let container = document.querySelector(".container");
for (let i=0; i<256; i++) {
    let box = document.createElement("div");
    box.classList.add("box");
    //box.addEventListener('mouseover', ()=> {
    //   box.style.backgroundColor = "black";
    //});
    container.appendChild(box);
}
let boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
    box.addEventListener('mouseover', ()=> {
        box.style.backgroundColor = "black";
    });
});