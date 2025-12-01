const ninos = [
    "ZOE","SOFIA","JUAN DIEGO","ALBA ROJAS","CATALINA",
    "DANIELA","ALBA RINCON","LEONARDO","MATEO","GAEL"
];

const colores = [
    "Rojo", "Verde", "Azul", "Amarillo", "Naranja",
    "Morado", "Rosa", "Celeste", "Turquesa", "Dorado"
];

function sortear() {
    if (ninos.length === 0) {
        document.getElementById("resultado").innerHTML =
            "🎄 Todos los colores ya fueron asignados.";
        return;
    }

    const idx = Math.floor(Math.random() * ninos.length);
    const nombre = ninos.splice(idx, 1)[0];
    const color = colores.splice(idx, 1)[0];

    document.getElementById("resultado").innerHTML =
        "🎁 " + nombre + " → " + color;
}
