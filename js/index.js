const btnGuardar = document.getElementById("buttonText");
const entradaTxt = document.getElementById("inputText");

btnGuardar.addEventListener("click", () => {
    const valueText = entradaTxt.value;
    if (valueText !== "") {
        localStorage.setItem("datoUsuario", valueText);
        entradaTxt.value = "";
    }
})