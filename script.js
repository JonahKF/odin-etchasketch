//Initialize Grid
function setGrid(size) {
  const container = document.querySelector("#container");
  for (let i = 0; i < (size * size); i++) {
    const div = document.createElement("div");
    div.setAttribute("id", "child");
    div.setAttribute("style", "flex: 0 0 " + (100 / size) + "%;");

    div.addEventListener("mouseenter", () => {
        div.style.backgroundColor = "rgb(" + Math.random() * (255 - 0) + 0 + ", " + Math.random() * (255 - 0) + 0 + ", " + Math.random() * (255 - 0) + 0 + ")";
    });

    container.appendChild(div);
  }
}

//Start Etch-a-Sketch
setGrid(16);

//When Reset Button is Pressed:
const reset = document.querySelector("#btn");
reset.addEventListener("click", () => {
    let newSize = 0;
    while(newSize === 0 || newSize > 100){
        newSize = Number(prompt());
        if(newSize > 100){
            alert("Please enter a maximum value of 100.");
        }
    }
    const divs = document.querySelectorAll("#child");
    divs.forEach(div => {
        div.remove(); 
      });
    setGrid(newSize);
  });