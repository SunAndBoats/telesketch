const gridSize = 30; // Tamaño de la cuadrícula (30x30)
const pixelSize = 15; // Tamaño de cada píxel en píxeles
const container = document.querySelector(".container");
let currentColor = "black";
let eraserMode = false;
let surpriseMode = false;

// Matriz de colores para el perrito (simplificada)
const dogPattern = [
    ["white", "white", "black", "black", "black", "white", "white"],
    ["white", "black", "brown", "brown", "black", "black", "white"],
    ["black", "brown", "brown", "brown", "brown", "black", "black"],
    ["black", "brown", "black", "black", "brown", "brown", "black"],
    ["black", "brown", "brown", "brown", "brown", "black", "black"],
    ["white", "black", "brown", "brown", "black", "white", "white"],
    ["white", "white", "black", "black", "white", "white", "white"]
];

// Crear la cuadrícula
function createGrid() {
    container.innerHTML = "";
    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
            const pixel = document.createElement("div");
            pixel.classList.add("pixel");
            pixel.style.width = `${pixelSize}px`;
            pixel.style.height = `${pixelSize}px`;
            pixel.dataset.row = row;
            pixel.dataset.col = col;
            
            pixel.addEventListener("mouseover", () => {
                if (surpriseMode) {
                    const patternRow = row % dogPattern.length;
                    const patternCol = col % dogPattern[0].length;
                    pixel.style.backgroundColor = dogPattern[patternRow][patternCol];
                } else {
                    pixel.style.backgroundColor = eraserMode ? "white" : currentColor;
                }
            });
            
            container.appendChild(pixel);
        }
    }
}

// Botones
document.getElementById("colorPicker").addEventListener("input", (e) => {
    currentColor = e.target.value;
});

document.getElementById("eraser").addEventListener("click", () => {
    eraserMode = !eraserMode;
    surpriseMode = false;
});

document.getElementById("clear").addEventListener("click", createGrid);

document.getElementById("surprise").addEventListener("click", () => {
    surpriseMode = !surpriseMode;
    eraserMode = false;
});

// Iniciar cuadrícula
createGrid();
