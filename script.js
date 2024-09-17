//Initialize Grid
function setGrid(){
    const container = document.querySelector("#container");
    for(let i = 0; i < 16; i++){
        for(let e = 0; e < 16; e++){
            const div = document.createElement("div");
            div.setAttribute("id", "child");
            container.appendChild(div);
        }
    }
}



//Start Etch-a-Sketch
setGrid();