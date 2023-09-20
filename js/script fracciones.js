//cargo en un arreglo las imganes de las fracciones. Este sera el orden que se mostrarán
let banderas = ["a.png", "b.png", "c.png", "d.png", "e.png","f.png","g.png","h.png","i.png","j.png","k.png","l.png","m.png","n.png","ñ.png",];

//arreglo que guardara la opcion correcta
let correcta = [1,2,0,1,2,0,     0,2,2,1,2,0,   2,1,0];

//arreglo que guardara las fracciones a mostrar en cada jugada
let opciones = [];
//cargo en el arreglo opciones las opciones a mostrar en cada jugada
opciones.push(["1/3", "3/3", "4/6"]);

opciones.push(["5/8", "2/9", "1/7"]);

opciones.push(["4/4", "1/2", "2/2"]);

opciones.push(["3/9", "7/10", "3/8"]);

opciones.push(["2/7", "1/6", "6/9"]);

opciones.push(["4/5", "4/6", "4/7"]);



opciones.push(["1/3", "5/10", "8/2"]);

opciones.push(["5/1", "3/9", "4/7"]);

opciones.push(["1/2", "3/5", "5/5"]);

opciones.push(["8/8", "4/9", "2/6"]);

opciones.push(["5/9", "2/4", "9/9"]);

opciones.push(["3/5", "4/6", "6/8"]);


opciones.push(["1/1", "1/8", "2/7"]);

opciones.push(["8/2", "3/9", "5/9"]);

opciones.push(["4/12", "7/12", "10/12"]);



//variable que guarda la posicion actual
let posActual = 0;
//variable que guarda la cantidad acertadas hasta el moemento
let cantidadAcertadas = 0;

function comenzarJuego(){
    //reseteamos las variables
    posActual = 0;
    cantidadAcertadas = 0;
    //activamos las pantallas necesarias
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarBandera();

}

//funcion que carga la siguiente bandera y sus opciones
function cargarBandera(){
    //controlo sis se acabaron las banderas
    if(banderas.length <= posActual){
        terminarJuego();
    }
    else{//cargo las opciones
        //limpiamos las clases que se asignaron
        limpiarOpciones();

        document.getElementById("imgBandera").src = "images/" + banderas[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
    }
}

function limpiarOpciones(){
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";

    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
}

function comprobarRespuesta(opElegida){
    if(opElegida==correcta[posActual]){//acertó
        //agregamos las clases para colocar el color verde a la opcion elegida
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidadAcertadas++;
    }else{//no acerto
        //agramos las clases para colocar en rojo la opcion elegida
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";

        //opcion que era correcta
        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    posActual++;
    //Esperamos 1 segundo y pasamos mostrar la siguiente bandera y sus opciones
    setTimeout(cargarBandera,1000);
}
function terminarJuego(){
    //ocultamos las pantallas y mostramos la pantalla final
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    //agreamos los resultados
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = banderas.length - cantidadAcertadas;
}

function volverAlInicio(){
    //ocultamos las pantallas y activamos la inicial
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
}