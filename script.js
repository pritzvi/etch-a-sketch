const container = document.querySelector(".main-container");


function makeRows(rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c=0; c < (rows*cols); c++) {
        let cell = document.createElement("div");
        // cell.innerText = (c + 1);
        cell.setAttribute("id", (c + 1));
        container.appendChild(cell).className = "grid-item";
    };
};

makeRows(6, 6);


const change = document.getElementById("change-size");
change.addEventListener("click", () => {
    let size = prompt("Enter new grid size: ", 5);
    let removing = getComputedStyle(container).getPropertyValue("--grid-rows");
    for (c=0; c < removing**2; c++){
    let cell = document.getElementById((c+1));
    cell.remove(); 
    };
    makeRows(size, size);
});

/*
let removing = getComputedStyle(container).getPropertyValue("--grid-rows");
for (c=0; c < removing**2; c++){
  let cell = document.getElementById((c+1));
  cell.remove(); 
};
*/