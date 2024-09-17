//Initialize Grid
function setGrid(size) {
  const container = document.querySelector("#container");
  for (let i = 0; i < (size * size); i++) {
    const div = document.createElement("div");
    div.setAttribute("id", "child");
    div.setAttribute("style", "flex: 0 0 " + (100 / size) + "%;");

    div.addEventListener("mouseenter", () => {
        div.style.backgroundColor = "black";
    });

    container.appendChild(div);
  }
}

//Start Etch-a-Sketch
setGrid(16);

//When Reset Button is Pressed:
const reset = document.querySelector("#btn");
reset.addEventListener("click", () => {
    let newSize = prompt();
    const divs = document.querySelectorAll("#child");
    divs.forEach(div => {
        div.remove(); 
      });
    setGrid(newSize);
  });