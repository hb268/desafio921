const dataSpan = document.getElementById("data");
const datoLocalStorage = localStorage.getItem("datoUsuario")

if (datoLocalStorage) {
    dataSpan.innerHTML = datoLocalStorage;
} else {
    dataSpan.innerHTML = "No hay datos"
}

const returnIndex = document.getElementById("volverIndex");

returnIndex.addEventListener("click", () => {
    localStorage.removeItem("datoUsuario");
})
