let amigos = [];

function agregarAmigo() {
    let input = document.getElementById('amigo');
    let nombreAmigo = input.value;

    if (nombreAmigo === '') {
        alert('Por favor ingrese un nombre.');
        return;
    }

    amigos.push(nombreAmigo);
    actualizarLista();
    input.value = '';
}

function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay nombres para sortear.');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    document.getElementById('resultado').innerHTML = `<li>Tu amigo secreto es ${amigoSorteado}</li>`;
}
