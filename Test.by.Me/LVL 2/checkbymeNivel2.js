// se debe agregar solo codigo despues de el comentario "AQUI ABAJO VA TU CODIGO"



function elFamosoArray(cadena){

    // Nivel 2 complejidad 1
    
    // muestra los elementos de la cadena
    
        return cadena
    
    }
    
    function descubre(cadena){
    
        // Nivel 2 complejidad 1
        
        // muestra el numero de elementos que tiene la cadena.
        
        return cadena.length
        
        }
    
    function extrae(cadena){
    
        // Nivel 2 complejidad 2
        
        // devuelve el primer elemento del array, 
        // Requisito: usa la propiedad length te en cuenta que esta propiedad no te da la cantidad de indices sino la cantidad de elementos.
        // no useas el nombre del array y el numero 0 directamente, no es para eso el ejercicio aunque igual pasara el test.
        
        return cadena [cadena.length - cadena.length];
        
        }    
    
    function agrega(medicos){
    
         // Nivel 2 complejidad 3
        
        // medico es un array de apellido de medicos ingresa a "Favaloro" a el array en ultima posición (respeta la mayuscula del apellido).
        
       medicos.push("Favaloro")
    
       return medicos
    
    
    }
    
    function quita(tareas, tareaRealizada){
    
        // Nivel 2 complejidad 3
       
       // nuestro Team Leader nos pide que agreguemos una funcion que segun el argumento que pase por 
       // tareaRealizada si existe en la lista de tareas que es un array de tareas, lo borre.
       // y devuelva el array con la tarea eliminada.
       // evita usar for, tenes que intentar solucionarlo con los metodos de instancia de Array.
       
       
    tareas.splice(tareas.indexOf(tareaRealizada),1)
    
      return tareas
    
    }
    
    
    function sumaTon(cajita){
    
        // Nivel 2 complejidad 4
       
       // la funcion sumaTon sumara 10 a cada elemento que tiene el Array cajita y devolvera el Array cajita con los elementos sumados
       // pista (deberas recorrer el array) y si ademas te acuerdas de los simbolos de asignacion estara mas limpio tu codigo.
       
       
    for (i = 0; i < cajita.length; i++ ) {
    
    cajita[i] += 10;
    
    }
    
    return cajita
    
    }
    
    function logueo(usuario,baseDeDatos){
    
    
        // Nivel 2 complejidad 5
    
    // usuario es un string (el nombre del usuario), la funcion logueo debe de buscar ese usuario en
    // baseDeDatos que es un array con usuarios y traer "El usuario ya existe" si ya esta en la baseDeDatos
    // de lo contrario debera ingresarlo al la baseDeDatos y por ultimo si lo agrega debera de traer el array de la base de datos modificado.
    
    for (i=0 ; i < baseDeDatos.length;i++){
      
        if(baseDeDatos[i]=== usuario){
            return "El usuario ya existe";
            
        } else if (i === baseDeDatos.length-1){
            baseDeDatos.push(usuario);
            
            return baseDeDatos;
          
        }
    }
    
    }
    
    
    
    function elTildador(cajita){
    
    
        // Nivel 2 complejidad 3
    
    // cajita es un array vacio que debera de contener numeros del 1 al 100
    // estos deben de ser pasados por el iterador while. al final debera de devolver el array con los 100 numeros
    
    iterador = 0  
    
      
      
    while (iterador < 100) {
    iterador++  
    cajita.push(iterador)  
      
      }
    
    return cajita  
    
    }
    
    function estadisticaMundial(paises){
    
    
        // Nivel 2 complejidad 5
    
    // paises contiene aquellos paises top 5 con mayor devaluacion y el top 10 de gobiernos mas corruptos, el problema es que "Argentina"
    // es un string que aparece repetido pues esta en las dos tablas, la funcion debe de traer el array paises pero que solo diga "Argentina" una vez y el resto de los paises.
    // para ello debes de usar do while o while y los demas metodos de instancia si corresponde. se puede resolver de otras maneras pero el fin es practicar estos.
    
    listaLimpia = []
    iterador = 0
    
    
    while (iterador < paises.length-1){
      
            if (iterador == 0 && paises.includes("Argentina") == true){
      listaLimpia.push("Argentina");
    }
      
    iterador++
    
     if (paises[iterador]!== "Argentina"){
      
      listaLimpia.push(paises[iterador])
    
    }
    }  
       return listaLimpia 
    }
    
    
    function doWhile(tabla){
    
        // Nivel 2 complejidad 4
       
       // la funcion doWhile tiene por argumento un Array llamado tabla la funcion debe de traer 0 si no tiene datos en su primer elemento y detenerse. 
      // o bien si hay elementos traerlos todos en un nuevo array llamado listaDeTabla y devolverlos al final con un return.
      //usar doWhile para ello.
      
      listaDeTabla = []
      iterador = 0
      
      do {
                 
        
        if(tabla[0] == undefined){
          
          return tabla.indexOf()
        
         } else {
           
           listaDeTabla.push(tabla[iterador])
           
         }
        
        iterador++
        
      }
      
       while (iterador < tabla.length)
        
    
      
         return listaDeTabla 
    }
      
    
    
    function asistente(calendario,nombre){
    
    
        // Nivel 2 complejidad 5
    
    // la funcion asistente debe de tomar el dia (string de nombre de dia), que sera pasado como argumento dentro de calendario,
    // y el nombre de la persona que sera pasado en el nombre para generar un saludo final que devolvera:
    // de lunes a jueves "Hola nombre que tengas un hermoso calendario" ej "Hola Juan que tengas un hermoso lunes"
    // si es viernes "Hola nombre que tengas un buen fin de semana" ej "Hola Juan que tengas un buen fin de semana"
    // si es sabado o domingo "Hola nombre descansa en tu calendario" ej "Hola Juan descansa en tu sabado"
    // Intenta usar switch para eso, asi lo practicas. 
    //tambien si quieres para el texto puedes usar el simbolo ` donde podrias meter las variables con ${} asi te ahorras tantas "" y tantos + , ese simbolo lo puedes hacer con alta + 96 o te lo dejo para que lo copies `````````
    
    switch (calendario){
    
    case 'lunes': return `Hola ${nombre} que tengas un hermoso ${calendario}`; 
    break;
    
    case 'martes': return `Hola ${nombre} que tengas un hermoso ${calendario}`; 
    break;
    
    case 'miercoles': return `Hola ${nombre} que tengas un hermoso ${calendario}`; 
    break;
    
    case 'jueves': return `Hola ${nombre} que tengas un hermoso ${calendario}`; 
    break;
    
    case 'viernes': return `Hola ${nombre} que tengas un buen fin de semana`; 
    break;
    
    case 'sabado': return `Hola ${nombre} descansa en tu ${calendario}`; 
    break;
    
    case 'domingo': return `Hola ${nombre} descansa en tu ${calendario}`; 
    break;
    
    }
    
    }
    
    
    
    module.exports = {
        elFamosoArray,
        descubre,
        extrae,
        agrega,
        quita,
        sumaTon,
        logueo,
        elTildador,
        estadisticaMundial,
        doWhile,
        asistente,
    };