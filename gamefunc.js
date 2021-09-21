const container = document.getElementById("container");
let rows;
let cell;

function makeGrid(dimension) {
    for (i = 0; i < dimension; i++) {
        rows = document.createElement("div");
        container.appendChild(rows).className = "gridRow";

        for (j = 0; j < dimension; j++) {
            cell = document.createElement("div");
            rows.appendChild(cell).className = "gridColumn";
        }
    }
}

makeGrid(16)
