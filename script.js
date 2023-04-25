let contenedorCuadriculas;
let divCuadriculas;
let tamañoCuadricula = 16;
let tamañoNuevo;
contenedorCuadriculas = document.querySelector("#contenedorCuadriculas");


function dibujarCuadricula(){
    
    for (let i = 0; i < tamañoCuadricula * tamañoCuadricula; i++) {
        divCuadriculas = document.createElement("div");
        divCuadriculas.classList.add("cuadriculas");
        divCuadriculas.setAttribute("id", "cuadriculasId");
        contenedorCuadriculas.appendChild(divCuadriculas);
    }
    contenedorCuadriculas.style.gridTemplateColumns = `repeat(${tamañoCuadricula}, auto)`;
    contenedorCuadriculas.style.gridTemplateRows = `repeat(${tamañoCuadricula}, auto)`;
}

dibujarCuadricula();

function borrarCuadricula(){
    const divs = contenedorCuadriculas.querySelectorAll(".cuadriculas");
    divs.forEach(cuadricula => cuadricula.remove())
}

function elejirDimension(){
    document.getElementById("dimension").onclick = function (){
        tamañoNuevo = prompt("Indique el tamaño de la cuadriculas entre 5 y 100");
        if(tamañoNuevo < 5 || tamañoNuevo > 100){
            alert("Debes ingresar un numero mayor o igual a 5 y menor o igual a 100");
        }else{
            borrarCuadricula();
            tamañoCuadricula = tamañoNuevo;
            dibujarCuadricula();  
            const mostrarDimension = document.getElementById("mostrarDimension");
            mostrarDimension.innerHTML = (tamañoNuevo + " * " + tamañoNuevo);
            cambiarColorNegro();
            cambiarColorRojo();
            cambiarColorAzul();
            colorArcoiris();
            reiniciarCuadricula();
        }
    }
}
elejirDimension();

function cambiarColorNegro(){
    let cuadriculasNegras = contenedorCuadriculas.querySelectorAll(".cuadriculas");
    const botonColorNegro = document.getElementById("negro");
    botonColorNegro.addEventListener('click', () => {
        cuadriculasNegras.forEach(cuadriculas => cuadriculas.addEventListener('mouseover', () => {
            cuadriculas.style.background = "black";
        }));
    });

}
cambiarColorNegro();

function cambiarColorRojo(){
    let cuadriculasRojas = contenedorCuadriculas.querySelectorAll(".cuadriculas");
    const botonColorRojo = document.getElementById("rojo");
    botonColorRojo.addEventListener('click', () => {
        cuadriculasRojas.forEach(cuadriculas => cuadriculas.addEventListener('mouseover', () => {
            cuadriculas.style.background = "red";
        }));
    });
}
cambiarColorRojo();

function cambiarColorAzul(){
    let cuadriculasAzules = document.querySelectorAll(".cuadriculas");
    const botonColorAzul = document.getElementById("azul");
    botonColorAzul.addEventListener('click', () => {
        cuadriculasAzules.forEach(cuadriculas => cuadriculas.addEventListener('mouseover', () =>{
            cuadriculas.style.background = "blue";
        }));
    });
}
cambiarColorAzul();

function colorArcoiris(){
    let cuadriculasArcoiris = document.querySelectorAll(".cuadriculas");
    const botonArcoiris = document.getElementById("arcoiris");
    botonArcoiris.addEventListener('click', () => {
        cuadriculasArcoiris.forEach(cuadriculas => cuadriculas.addEventListener('mouseover', () => {
            let r = Math.floor(Math.random() * 255);
            let g = Math.floor(Math.random() * 255);
            let b = Math.floor(Math.random() * 255);
            cuadriculas.style.background = `rgb(${r}, ${g}, ${b})`;
        }));
    });
}
colorArcoiris();

function reiniciarCuadricula(){
    let cuadriculasColores = document.querySelectorAll(".cuadriculas");
    const botonReiniciar = document.getElementById("reiniciar");
    botonReiniciar.addEventListener('click', () => {
        cuadriculasColores.forEach(cuadriculas => cuadriculas.style.background = "white");
    });
}
reiniciarCuadricula();