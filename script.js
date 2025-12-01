const colores = [
    "Rojo", "Verde", "Azul", "Amarillo", "Naranja",
    "Morado", "Rosa", "Celeste", "Turquesa", "Dorado"
];

function sortear() {
    if (colores.length === 0) {
        document.getElementById("resultado").innerHTML =
            "🎄 Todos los colores ya fueron asignados.";
        return;
    }

    const idx = Math.floor(Math.random() * colores.length);
    const color = colores.splice(idx, 1)[0];

    document.getElementById("resultado").innerHTML =
        "🎁 Color asignado: <b>" + color + "</b>";
}
