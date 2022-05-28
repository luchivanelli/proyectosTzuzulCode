counter = 0
counter2 = 0

alert("Bienvenidos a Acertijos TzuzulCode");

do {
    alert("Para empezar, elija el color de su personaje");
    var color = prompt("rojo-azul-verde");
    if (color == "rojo" || color == "azul" || color == "verde") {
        alert(`El color de su personaje ("${color}"), se ha seleccionado correctamente`);
    } else {
        alert("El color seleccionado no es correcto");
    }
} while (color != "rojo" && color != "azul" && color != "verde")

alert("Cada acertijo vale 20 puntos. Al finalizar, se mostrará la cantidad de puntos total");
alert("EMPECEMOS..");

alert("ACERTIJO 1")
var opcion1 = prompt("Si REPOSTA= 1234567 y SAPO= 5734, entonces ROSA=\n 1- 1234\n 2- 3754\n 3- 1457");
if (opcion1 == "3" || opcion1 == "1457") {
    counter += 20;
    counter2 +=1;
}

alert("ACERTIJO 2")
var opcion2 = prompt("¿Cuál es el próximo número de la secuencia? 4-6-9-6-14-6-\n 1- 19\n 2- 17\n 3- 6");
if (opcion2 == "1" || opcion2 == "19") {
    counter += 20;
    counter2 +=1;
}

alert("ACERTIJO 3")
var opcion3 = prompt("Encuentra los operadores para conseguir que el resultado sea correcto: 5 ? 3 ? 2 = 4\n 1- + y x (suma y multiplicación)\n 2- - y + (resta y suma)\n 3- + y - (suma y resta)");
if (opcion3 == "2" || opcion3 == "- y + (resta y suma)") {
    counter += 20;
    counter2 +=1;
}

alert("ACERTIJO 4")
var opcion4 = prompt("Completa la secuencia: 30-20-27-17-24-\n 1- 34\n 2- 30\n 3- 14");
if (opcion4 == "3" || opcion4 == "14") {
    counter += 20;
    counter2 +=1;
}

alert("ACERTIJO 5")
var opcion5 = prompt("¿Cuál de los siguientes números completa la secuencia correctamente?: 111-107,5-104-?-97-93,5\n 1- 99\n 2- 101,5\n 3- 100,5");
if (opcion5 == "2" || opcion5 == "101,5") {
    counter += 20;
    counter2 +=1;
}

alert(`Cantidad de acertijos aprobados: ${counter2}\nPuntaje total: ${counter}`)
alert("Fin del juego")


