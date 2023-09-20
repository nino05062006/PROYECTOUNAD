
 //respuestas correctas
 let correctas =[4,3,2,1,3,4];

 let opcion_elegida =[]

 let cantidad_correctas=0;


function respuesta(num_pregunta, seleccionada){
    //Guardo la respuesta elegida
    opcion_elegida[num_pregunta] = seleccionada.value;


    id="p" + num_pregunta;

    labels = document.getElementById(id).childNodes;
    labels[1].style.backgroundColor = "write";
    labels[2].style.backgroundColor = "write";
    labels[2].style.backgroundColor = "write";
    labels[3].style.backgroundColor = "write";
    labels[4].style.backgroundColor = "write";
    labels[5].style.backgroundColor = "write";
    
    seleccionada.parentNodes.style.backgroundColor = "cec#0fc";
}


function corregir(){
    cantidad_correctas=0;
    for(i=0;i<correctas.length;i++){
        if(correctas[i]==opcion_elegida[i]){
            cantidad_correctas++;
        }
    }

    document.getElementById("resultado").innerHTML = cantidad_correctas;
}