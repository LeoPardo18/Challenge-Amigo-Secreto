document.addEventListener("DOMContentLoaded", function () {
    const inputNombre = document.getElementById("amigo");
    const listaAmigos = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado"); // Donde se mostrará el amigo sorteado

    let amigos = [];

    window.agregarAmigo = function () {
        const nombre = inputNombre.value.trim();

        if (nombre === "") {
            alert("Por favor, ingresa un nombre válido.");
            return;
        }

        amigos.push(nombre);
        actualizarLista();
        inputNombre.value = ""; // Limpiar el input después de agregar el nombre
    };

    function actualizarLista() {
        listaAmigos.innerHTML = ""; // Limpiar la lista antes de actualizarla

        amigos.forEach(function (amigo) {
            const li = document.createElement("li");
            li.textContent = amigo;
            listaAmigos.appendChild(li);
        });
    }

    // Función para sortear un amigo
    window.sortearAmigo = function () {
        if (amigos.length === 0) {
            alert("La lista está vacía. Agrega amigos antes de sortear.");
            return;
        }

        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSorteado = amigos[indiceAleatorio];

        // Mostrar el resultado en la lista de resultados
        resultado.innerHTML = `<li><strong>Amigo Sorteado:</strong> ${amigoSorteado}</li>`;
    };
});