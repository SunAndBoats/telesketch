document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    const gridSize = 30;
    const totalCells = gridSize * gridSize;

    // Generar celdas
    for (let i = 0; i < totalCells; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell"); // Añadir la clase CSS
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "black";
        });
        container.appendChild(cell);
    }
});

