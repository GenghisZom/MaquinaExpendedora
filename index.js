console.log("Anexado");

window.onload = () => {  //Carga la pagina primero y luego ejecuta las alertas o preguntas.
    

//Maquina expendedora igual que en python pero sin usar la interfaz de la pagina web...

const Productos = 
[[`Papas`,"Mani","Salchichas","Gomitas"],
["Chocolatina","Agua","Coca-Cola","Pepsi"],
["Turron","Chicle","Avena","Cereales"]];
console.log(`Productos:`);
const ProductosDinero=[['Papas:$1700 ','Mani:$1.000 ','Salchichas:$2.000 ','Gomitas:$1.000 '],
['Chocolatina:$1.400 ','Agua:$1.200 ','Coca-cola:$2.100 ','Pepsi:$2.000 '],
['Turron:1.000 ','Chicle:$$200 ','Avena:$1.500 ','Cereales:$2.200 ']]
console.log(`${ProductosDinero}`);
const MePrecios=[[1700,1000,2000,1000],
            [1400,1200,2100,2000],
            [1000,200,1500,2200]]


const valorMinimo1= (Math.min(...MePrecios[0]));
const valorMinimo2= (Math.min(...MePrecios[1]));
const valorMinimo3= (Math.min(...MePrecios[2]));
/*
console.log(valorMinimo1);
console.log(valorMinimo2);
console.log(valorMinimo3);
*/

let dinero= parseInt(prompt("¿Cuanto dinero deseas ingresar?")),
    eleccionF,eleccionC,masDinero,otraCompra,alcanza,noMas;
const Maquina=()=>{
    if (dinero<valorMinimo1 && dinero<valorMinimo2 && dinero<valorMinimo3 ) {
        console.log("No tienes el suficiente dinero para comprar algo, Ingrese mas dinero.")
        dinero += parseInt(prompt("Ingresa mas dinero"))
        console.log(`Tu saldo: ${dinero}`);
        Maquina();
    }else{
        eleccionF= prompt("¿En que fila está?");
        eleccionC= prompt("¿En que columna está?");
        if (dinero< (MePrecios[eleccionF][eleccionC])) {
            console.log("No tienes esa cantidad de dinero.")    
            console.log("Escoge otro producto")
            noMas = prompt("¿Deseas salirte y recibir el dinero restante?");
            if (noMas === "si" || noMas === "SI" || noMas ==="Si") {
                return console.log(`Muchas gracias por preferirnos, su devolucion es de ${dinero}.`)
            }else{
                return Maquina();
            }
        }else{
        console.log(`El producto que usted selecciono es: ${Productos[eleccionF][eleccionC]} con un costo de ${MePrecios[eleccionF][eleccionC]}`)
        console.log(`Su devolucion es de ${dinero-(MePrecios[eleccionF][eleccionC])}`);
        dinero = dinero-(MePrecios[eleccionF][eleccionC]);
        otraCompra = prompt("¿Desea comprar otro producto?");
        if (otraCompra == "SI" || otraCompra === "Si" || otraCompra === "si") {
            masDinero= prompt("¿Desea ingresar más dinero?");
            if (masDinero === "SI" || masDinero === "Si" || masDinero === "si" ) {
                dinero += parseInt(prompt("Cuanto dinero desea ingresar?"));
                console.log(`Su nuevo saldo es de: ${dinero}`);
                Maquina();
            }else{
                alcanza= dinero;
                console.log(`Su saldo es de ${alcanza}`)
                if (alcanza<valorMinimo1 && alcanza<valorMinimo2 && alcanza<valorMinimo3 ) {
                    console.log("No tienes el saldo suficiente para poder comprar otro producto.")
                    return console.log(`Gracias por preferirnos, su devolucion es de ${alcanza} `)
                }else{
                    console.log(`Tienes ${alcanza}, ¿que deseas comprar?`)
                    dinero = alcanza;
                    Maquina();
                }
            }
        }else{
            alert("Muchas gracias por preferirnos, vuelva pronto")
            return console.log("Vuelva pronto")
        }
        
    }}
}
Maquina();
}














