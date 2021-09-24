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
            cell.style.width = `${500/dimension}px`;
            cell.style.height = `${500/dimension}px`;
        }
    }
}

function hover() {
    let div = document.querySelectorAll(".gridColumn");
    console.log(div);
    for (i = 0; i < div.length; i++) {
        div[i].addEventListener('mouseover', function (e) {
            e.target.style.background = "white";
        })
    }
}

function clearBoard() {
    let div = document.querySelectorAll(".gridColumn");
    let clearBtn = document.querySelector("#clear");
    console.log(clearBtn);
    clearBtn.addEventListener('click', () => {
        for (i = 0; i < div.length; i++) {
            div[i].style.background = "black";
        }
    })
}

let size = prompt("Choose size of drawing board:");

makeGrid(size);
hover();
clearBoard();