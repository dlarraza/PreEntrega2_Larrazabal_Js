

console.log("Por favor, abrir la consola para que funcione correctamente")
alert("Por favor, abrir la consola para que funcione correctamente")



// Objeto Constructor
class Celular{
    constructor(id, fabricante, modelo){
        this.id = id
        this.fabricante = fabricante
        this.modelo = modelo
    }
}

//------------------------------------------------------------------------------------------------
// Declaracion de array vacio
const celulares = []

// Se predefinen los celulares existentes
celulares.push(new Celular(1, "APPLE", "IPHONE 13"), new Celular(2, "APPLE", "IPHONE 14"), new Celular(3, "SAMSUNG", "GALAXY S22"), new Celular(4, "SAMSUNG", "NOTE 20"), new Celular(5, "TESLA", "PI"))


//------------------------------------------------------------------------------------------------
// funcion mostrar
function mostrar() {
    console.log("LA BASE DE DATOS DEL SISTEMA ES:")
    console.log("ID - FABRICANTE - MODELO")
    for (let cel of celulares) {
        console.log(
            cel.id + " " + cel.fabricante + " "+ cel.modelo
            );
    }
}

//------------------------------------------------------------------------------------------------
// funcion agregar

function agregar() {
    let nuevoCel = new Celular(Number(prompt("Digite el id del equipo celular a ingresar")),
    prompt("Digite el Fabricante").toUpperCase(),
    prompt("Digite el Modelo del Equipo Celular").toUpperCase()
    );
    celulares.push(nuevoCel)

    // Muestra el nuevo array
    console.log("LA BASE DE DATOS DEL SISTEMA ACTUALIZADA ES:")
    for (let cel of celulares) {
        console.log(
            cel.id + " " + cel.fabricante + " "+ cel.modelo
            );
    }
}

//------------------------------------------------------------------------------------------------
// funcion filtrar
function filtrarcfos(){
    let nombreDelFabricante = prompt("Digite el nombre del fabricante").toUpperCase();
    let nfabricante = celulares.filter(nfab => nfab.fabricante == nombreDelFabricante);
    console.log(nfabricante);
}

//------------------------------------------------------------------------------------------------
// funcion filtrar

function filtrarmv(){
    let cont = 0;
    let nombreDelFabricante = prompt("Digite el nombre del fabricante").toUpperCase();

    for (let cel of celulares) {
        if (nombreDelFabricante == cel.fabricante) {
            cont++
            console.log(cel.modelo)
        }
    } if (cont <= 0) {
        console.log("El fabricante ingresado no registra equipos celulares en nuestro sistema")
    }    
}

//------------------------------------------------------------------------------------------------
// funcion eliminar

function eliminar(){

    // Muestra el array actual
    console.log("LA BASE DE DATOS DEL SISTEMA ES:")
    for (let cel of celulares) {
        console.log(
            cel.id + " " + cel.fabricante + " "+ cel.modelo
            );
    }

    // Elimina el Objeto deseado
    let celldelete = Number(prompt("Seleccione el id del celular a liminar"))

    let o = celulares.findIndex((elemento) => {
        return elemento.id == celldelete;
            }
        );

    let removed = celulares.splice(o, 1);
    
    // Muestra el nuevo array
    console.log("LA BASE DE DATOS DEL SISTEMA ACTUALIZADA ES:")
    for (let cel of celulares) {
        console.log(
            cel.id + " " + cel.fabricante + " "+ cel.modelo
            );
    }
}

//------------------------------------------------------------------------------------------------
// Menu de Opciones
do {
    opcion = Number(prompt("Por favor Seleccione una opcion de las siguientes \n\
    1   Mostrar el listado de equipos celulares en sistema \n\
    2   Agregar un nuevo equipo celular al sistema \n\
    3   Filtrar equipos celulares por fabricante (FOS) \n\
    4   Filtrar equipos celulares por fabricante (Mostrando Valores) \n\
    5   Eliminar productos \n\ \n\
    6   Salir del sistema"
    ))

    switch (opcion) {
        case 1:
            mostrar()
            break;
        case 2:
            agregar()
            break;
        case 3:
            filtrarcfos()
            break;
        case 4:
            filtrarmv()
            break;
        case 5:
            eliminar()
            break;
        case 6:
            break;

        default:
            alert("Por favor seleccione una opcion de las enlistadas inicialmente")
            break;
    }
} while (opcion != 6);