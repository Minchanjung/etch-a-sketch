const container = document.getElementById("container");
let rows = document.getElementsByClassName("rows");
let columns = document.getElementsByClassName("columns");

function grid() {
    makeRows(16)
    //makeColumns(16);
}

function makeRows(rowNum) {
    for (i = 0; i < rowNum; i++) {
        let rowDiv = document.createElement("div");
        container.appendChild(rowDiv).className = "row";
    }
}

function makeColumns(colNum) {

}