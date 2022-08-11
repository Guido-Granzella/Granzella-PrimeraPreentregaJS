alert ("Bienvenidos al nuevo bar NoEatLikeAnts")
alert ("Toque F12 en su teclado para abrir la consola")

cliente ()

    function cliente () {
        let nombre = prompt ("Ingrese su nombre").toUpperCase();
        while (nombre === "" || nombre === null) {
        nombre = prompt ("Ingrese su nombre");
        }
        let mesa = prompt ("Ingrese su N° de mesa").toUpperCase();
        while (mesa === "" || mesa === null) {
        mesa = prompt ("Ingrese su N° de mesa");
        }
    console.log ("Bienvenido " + nombre + " Mesa N° "+ mesa);
    }

console.warn ("Le presentamos para elegir bebida, comida, postre y salsa")



function creoID() {
    return parseInt(Math.random() * 100000)
}

const bebida = ["COCA COLA", "AGUA", "SPRITE", "STELLA", "QUILMES", "VINO TORO", "ALMA MORA", "AGUA SABORIZADA"]
const bebidas = []

function listarBebida() {
    for (let bebida of bebidas) {
        console.table(bebida)
    }
}
class Bebida {
    constructor(id, nombre, importe) {
        this.id = id
        this.nombre = nombre
        this.importe = importe
    }
}

function agregarBebidas() {
    let id = creoID();
    let descripcion = prompt("Ingresa el nombre de la bebida:").toUpperCase();
    let importe = parseInt(prompt("Ingresa el importe:"));
    bebidas.push(new Bebida(id, descripcion, importe));
    console.table(bebidas);
}

function generadorAutomaticoBebida() {
    bebidas.push(new Bebida(1234, "COCA COLA", 250))
    bebidas.push(new Bebida(2345, "AGUA", 200))
    bebidas.push(new Bebida(3456, "SPRITE", 250))
    bebidas.push(new Bebida(4567, "STELLA", 500))
    bebidas.push(new Bebida(5678, "QUILMES", 400))
    bebidas.push(new Bebida(6789, "VINO TORO", 350))
    bebidas.push(new Bebida(7890, "ALMA MORA", 600))
    bebidas.push(new Bebida(8901, "AGUA SABORIZADA", 200))
    console.table(bebidas)
}


const comida = ["MILANESA", "HAMBURGUESA SIMPLE", "HAMBURGUESA COMPLETA", "SANGUCHE LOMITO", "RAVIOLES RICOTA", "ÑOQUIS", "SPAGUETTI", "PASTA CASERA CALABAZA"];
const comidas = []

function listarComida() {
    for (let comida of comidas) {
        console.table(comida)
    }
}
class Comida {
    constructor(id, nombre, importe) {
        this.id = id
        this.nombre = nombre
        this.importe = importe
    }
}
function generadorAutomaticoComida() {
    comidas.push(new Comida(1234, "MILANESA", 1000))
    comidas.push(new Comida(2345, "HAMBURGUESA SIMPLE", 800))
    comidas.push(new Comida(3456, "HAMBURGUESA COMPLETA", 1000))
    comidas.push(new Comida(4567, "SANGUCHE LOMITO", 1200))
    comidas.push(new Comida(5678, "RAVIOLES RICOTA", 800))
    comidas.push(new Comida(6789, "ÑOQUIS", 700))
    comidas.push(new Comida(7890, "SPAGUETTI", 750))
    comidas.push(new Comida(8901, "PASTA CASERA CALABAZA", 850))
    console.table(comidas)
}
function agregarComidas() {
    let id = creoID()
    let descripcion = prompt("Ingresa el nombre de la comida:").toUpperCase()
    let importe = parseInt(prompt("Ingresa el importe:"))
    comidas.push(new Comida(id, descripcion, importe))
    console.table(comidas)
}



const postre = ["HELADO", "VOLCAN CHOCOLATE", "FONDEU QUESOS", "FLAN", "FLAN MIXTO", "BUDIN PAN", "ALMENDRADO", "SIN POSTRE"]
const postres =[]

function listarPostre() {
    for (let postre of postres) {
        console.table(postre)
    }
}

class Postre {
    constructor(id, nombre, importe) {
        this.id = id
        this.nombre = nombre
        this.importe = importe
    }
}
function agregarPostres() {
    let id = creoID()
    let descripcion = prompt("Ingresa el nombre del postre:").toUpperCase()
    let importe = parseInt(prompt("Ingresa el importe:"))
    postres.push(new Postre(id, descripcion, importe))
    console.table(postres)
}

function generadorAutomaticoPostre() {
    postres.push(new Postre(1234, "HELADO", 400))
    postres.push(new Postre(2345, "VOLVAN CHOCOLATE", 500))
    postres.push(new Postre(3456, "FONDEU QUESOS", 600))
    postres.push(new Postre(4567, "FLAN", 450))
    postres.push(new Postre(5678, "FLAN MIXTO", 550))
    postres.push(new Postre(6789, "BUDIN PAN", 400))
    postres.push(new Postre(7890, "ALMENDRADO", 450))
    postres.push(new Postre(8901, "SIN POSTRE", 0))
    console.table(postres)
}

const salsa = ["BOLOGNESA", "PORTUGUESA", "FILETO", "BLANCA", "MIXTA", "CHAMPIGNONES", "MOLUSCOS", "SIN SALSA"]
const salsas =[]

function listarSalsa() {
    for (let salsa of salsas) {
        console.table(salsa)
    }
}
class Salsa {
    constructor(id, nombre, importe) {
        this.id = id
        this.nombre = nombre
        this.importe = importe
    }
}
function generadorAutomaticoSalsa() {
    salsas.push(new Salsa(1234, "BOLOGNESA", 500))
    salsas.push(new Salsa(2345, "PORTUGUESA", 400))
    salsas.push(new Salsa(3456, "FILETO", 300))
    salsas.push(new Salsa(4567, "BLANCA", 300))
    salsas.push(new Salsa(5678, "MIXTA", 400))
    salsas.push(new Salsa(6789, "CHAMPIGNONES", 550))
    salsas.push(new Salsa(7890, "MOLUSCOS", 600))
    salsas.push(new Salsa(8901, "SIN SALSA", 0))
    console.table(salsas)
}

function agregarSalsas() {
    let id = creoID()
    let descripcion = prompt("Ingresa el nombre de la salsa:").toUpperCase()
    let importe = parseInt(prompt("Ingresa el importe:"))
    salsas.push(new Salsa(id, descripcion, importe))
    console.table(salsas)
}

console.log(bebida)
console.log(comida)
console.log(postre)
console.log(salsa)
generadorAutomaticoBebida()
generadorAutomaticoComida()
generadorAutomaticoPostre()
generadorAutomaticoSalsa()

const resultado = [""]


function filtrarBebida (){
    let prod = prompt ("ingresa producto que desea filtrar:").toUpperCase()
    const resultado = bebidas.filter (bebida =>bebida.nombre.includes(prod))
    console.table(resultado)
}
function filtrarComida (){
    let prod = prompt ("ingresa producto que desea filtrar:").toUpperCase()
    const resultado = comidas.filter (comida =>comida.nombre.includes(prod))
    console.table(resultado)
}
function filtrarPostre (){
    let prod = prompt ("ingresa producto que desea filtrar:").toUpperCase()
    const resultado = postres.filter (postre =>postre.nombre.includes(prod))
    console.table(resultado)
}
function filtrarSalsa (){
    let prod = prompt ("ingresa producto que desea filtrar: ").toUpperCase()
    const resultado = salsas.filter (salsa =>salsa.nombre.includes(prod))
    console.table(resultado)
}


function buscar (){
    let prod = prompt ("ingresa producto que desea buscar:").toUpperCase()
    const resultado = [
        bebidas.find (bebida =>bebida.nombre.includes(prod))||
        comidas.find (comida =>comida.nombre.includes(prod))||
        postres.find (postre =>postre.nombre.includes(prod))||
        salsas.find (salsa =>salsa.nombre.includes(prod))
    ]
    console.table(resultado)
}


alert("Teniendo en cuenta las tablas de: Bebida, Comida, Postre, Salsa:\nIndique el nombre y el importe de lo que desea llevar")

const carritos=[]

function listarCarrito() {
    for (let carrito of carritos) {
        console.table(carrito)
    }
}
class Carrito {
    constructor(nombre, importe) {
        this.nombre = nombre
        this.importe = importe
    }
}
function generadorAutomaticoCarrito() {
    console.table(carritos)
}

function agregarCarrito() {
    let descripcion = prompt("Ingresa el nombre:").toUpperCase()
    let importe = parseInt(prompt("Ingresa el importe:"))
    carritos.push(new Carrito(descripcion, importe))

}


function calcular(){
    let total = carritos.reduce((acumulador,producto)=>acumulador+producto.importe,0)
console.table(carritos)
console.log("Total a pagar: $",total)
alert("Total a pagar: $" + total)
}

agregarCarrito()

let agregar = false

while (agregar === false) {
    if (confirm("¿Desea cerrar el carrito?\nSi desea seguir agregando, indique cancelar")===false) {
        agregarCarrito()
        agregar = false
    } else {
        calcular() 
        agregar=true
    }
}

console.log ("Se generó la oreden N°: " + creoID())

