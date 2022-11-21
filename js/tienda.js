const contenido = document.querySelector('.contenedor');

console.log (contenido)

const boton = document.querySelector('.comprar');
console.log(boton);

const boton2 = document.querySelector('.comprar2');
console.log(boton2);

boton.addEventListener("click", mostrarAlerta);
function mostrarAlerta() {
    alert ('este producto se agrego al carrito')
}

boton2.addEventListener("click", mostrarAlerta2);
function mostrarAlerta2(){
    alert ('este producto se agrego al carrito')
}

boton.addEventListener('click', () => {
    console.log('este producto se agrego al carrito')
})

boton2.addEventListener('click', () => {
    console.log('este producto se agrego al carrito')
})

const colorModeButton = document.querySelector('#color-mode');
const body = document.body;

colorModeButton.addEventListener("click", cambiarColorFondo);

function cambiarColorFondo() {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")){
        colorModeButton.innerHTML = "cambiar a light mode";
    } else {
        colorModeButton.innerHTML = "cambiar a dark mode"
    }
}

const productos = [
{nombre: "airMax tn", precio: 12000},
    {nombre: "airMax tn plus", precio: 14000}
];

localStorage.setItem("productos", JSON.stringify(productos));

const productosEnLS = JSON.parse(localStorage.getItem("productos"));
console.log(productosEnLS);


