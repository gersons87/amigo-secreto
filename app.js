// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarAmigo() {
    let nombre_amigo = document.getElementById('amigo').value;

    let tieneNumeros = /\d/.test(nombre_amigo);
    
    if(nombre_amigo === ""){
        alert('Por favor inserte un nombre');
    }else if(tieneNumeros){
        alert('El nombre no puede contener números');
    }else{
        if(amigos.includes(nombre_amigo)){
            alert('ingreso otro nombre que no este en la lista')
        }else{
        amigos.push(nombre_amigo)
        document.getElementById('amigo').value = "";
        console.log(amigos)
        }
    }
    mostrar_amigos();
    limpiarCaja();
}

function mostrar_amigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    nombre = ""

    for (let i = 0; i < amigos.length; i++) {
        nombre += `<li>${i+1}.- ${amigos[i]}</li>`;
    }

    lista.innerHTML = nombre;

}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function sortearAmigo() {
    

    if(amigos.length<=1){
        alert('no hay elementos suficientes para sortear, ingresa un nombre ');
        return;
    }

    let indice_aleatorio = Math.floor(Math.random()*amigos.length);
    let amigo_sorteado = amigos[indice_aleatorio];

    document.getElementById('resultado').innerHTML = `Tu amigo secreo es: ${amigo_sorteado}`;
    
    amigos.splice(indice_aleatorio, 1);

    mostrar_amigos();

    if(amigos.length === 0) {
        setTimeout(() => {
            alert('¡Ya no quedan más amigos para sortear!');
        }, 500);
    }    
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function reiniciarJuego() {
    amigos = [];
    mostrar_amigos();
    document.getElementById('resultado').innerHTML = '';
    limpiarCaja();
}