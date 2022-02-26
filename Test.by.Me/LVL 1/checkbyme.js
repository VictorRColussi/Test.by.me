// se debe agregar solo codigo despues de el comentario "AQUI ABAJO VA TU CODIGO"

//const { variableDeclaration } = require("babel-types");

function sumaSimple(y,x){

// Nivel 1

// x e y seran cargadas con numero enteros, solo debes de 
// sumarlos
//"AQUI ABAJO VA TU CODIGO"

return y+x

}

function restoModulo(x,y){

// Nivel 1

// x e y seran cargadas con numero enteros, solo debes de 
// sacar el resto de x sobre y.
//"AQUI ABAJO VA TU CODIGO"

return x % y

}

function asignada(x){

    // Nivel 1
    
    // la funcion trae el valor de multiplicado por la variable operando 
    // debe retornar el resultado dentro de la variable operando
    // puedes llegar por varias formar, la idea es que uses la variable de asignacion como son += *= -=, etc...
    
    nombre = 10

return nombre *=x
    
    }

function casaDeCambio(dolar){

    // Nivel 1
    
    // la funcion casaDeCambio debera conseguir convertir el valor pasado por arguemento "dolar" a pesos argentinos.
    // siendo que 1 dolar es = a 112 pesos argentino, luego debera al resultado agregarle un 35% sobre su valor de impuestos
    // por ultimo devera devolver el valor final con impuestos incluidos.
    // ejemplo 10 dolares es igual a 1120 pesos argentino, el impuesto (35%) en ese caso es de 392 pesos lo que da un total con impuestos de 1512
    // dato: la funcion solo deve devolver el numero final sin simbolos ni letras
     
      //"AQUI ABAJO VA TU CODIGO"
    
     pesoArg = dolar * 112
    
        return pesoArg * 1.35
    
    }

function misterioMayor(a,b,c,d,e){

    // Nivel 1
        
    // cada argumento contendra un numero la funcion debera traer el numero mas grande.
    // usar funciones del tipo Math 
        //"AQUI ABAJO VA TU CODIGO"
    
    return Math.max(a,b,c,d,e);

         
        
    }    

function supermercado(numeroDecimal){

        // Nivel 1
            
        // Esta funcion hace que los supermercados dejen de darte caramelos por el vuelto, la funcion toma el valor que se le pase por argumento
        // el cual va a ser con decimales ej: 12.30 y redondea PERO lo hace al mayor mas ALTO (porque el supermercado no quiere perder).
        // al final la funcion debera de devolver el valor redondeado a su entero proximo mayor.
        // usar funciones del tipo Math 
            //"AQUI ABAJO VA TU CODIGO"
        
    return Math.ceil(numeroDecimal)
    
             
            
        }    
    

function encadenado(nombre,segundoNombre,apellido){

    // Nivel 1
    
    // los argumentos pasados a encadenado seran lo correspondiente al nombre de la variable
    // la funcion debera devolver el encadenado con el nombre completo separado por un espacio ejemplo
    // nombre: juan segundoNombre: alberto Apellido: perez = juan alberto perez.
    //"AQUI ABAJO VA TU CODIGO"
  
    
    return `${nombre} ${segundoNombre} ${apellido}`;
    
    }

function migraciones(nombre,segundoNombre,apellido){

    // Nivel 1 --->(es el mas dificil)<---
    
    // los argumentos pasados a encadenado seran lo correspondiente al nombre de la variable
    // la funcion pedida por el Departamento de Migraciones debera devolver el nombre con la primer letra en mayuscula y lo demas en minuscula,
    // el segundo nombre debera de tener solo la letra inicial acompañada de un . Ej: Raul sera R. OJO LA LETRA INCIAL DEBE ESTAR EN MAYUSUCULA.
    // el apellido sera siempre todo en mayuscula.
    // ejemplo nombre: jUAn segundoNombre: alBERto Apellido: perez = Juan A. PEREZ.
    // recorda que el objeto string tienen sus propios metodos de instancia. (charAt, toUpperCase, slice, toLowerCase)
     //"AQUI ABAJO VA TU CODIGO"

    nom = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
    ap = apellido.toUpperCase();
    seg = segundoNombre.slice(0,1).toUpperCase() + "."
    
  return nom + " " + seg + " " + ap
  
    
    
    
    }

 function migracionesV2(nombre,segundoNombre,apellido){

    // Nivel 2
    
    // Migraciones pidio una actualizacion del sistema ya que hay personas que no cuentan con un segundo nombre
    // la funcion debera de hacer lo mismo que la funcion anterior de migraciones pero para el caso de que no se ingrese ningun argumento en segundoNombre
    // debera de devolver "_" en su lugar Ej. nombre: peDRo apellido: gimenez = Pedro _ GIMENEZ
    // Pista: usa la funcion SI ;-) || tambien tene en cuenta que como el valor no viene por argumento no es "" ya que hay si ahi un string vacio, 
    // tampoco es null porque intencionalemnte no se lo pasa en blanco, sino que no esta >definido< ;) por el usuario
    //"AQUI ABAJO VA TU CODIGO"

    if (segundoNombre == undefined){
  
    nom = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
    ap = apellido.toUpperCase();
   
    
  return nom + " " + "_" + " " + ap
  } else {

    nom = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
    ap = apellido.toUpperCase();
    seg = segundoNombre.slice(0,1).toUpperCase() + "."
    
  return nom + " " + seg + " " + ap

  }
    
    } 




  function estadoCelular(interruptor){

    // Nivel 1
    
    // Phone.inc nos pide que la funcion devuelva el valor booleano true si esta prendido y false si esta apagado,
    // podes usar SI pero tambien podes hacer el codigo mucho mas chico y limpio.
    
    //"AQUI ABAJO VA TU CODIGO"

    // if (interruptor === "apagado"){
    //     return false;     
    // } else if (interruptor === "prendido"){
    //     return true;
    // } else {
    //   return interruptor
    // }
    
    return (interruptor !== "apagado")

    
    }   




 function estadoCelularV2(bateria){

    // Nivel 2
    
    // Phone.inc nos pide que la funcion devuelva el nivel de carga del celular en un numero entero de 1 a 100,
    // la funcion debe del 1 al 15 devolver "modo ahorro de bateria", del 16 y menos de 50 "amarillo" superior a esto "verde"
    // y si dice 100 debe devolver "carga completa".
    // pista: si tienes problemas, en programacion "EL ORDEN DE LOS FACTORES SI ALTERA EL PRODUCTO" ;) anda de mayor a menor.
    // pista2: < > = <= >= && ||
    //"AQUI ABAJO VA TU CODIGO"

    if (bateria === 100){
        return"carga completa";     
    } else if (bateria >= 50 && bateria < 99){
        return "verde";
    } else if (bateria > 16 && bateria < 50){
        return "amarillo";
    } else if ( bateria <= 15){
        return "modo ahorro de bateria";
    }
  
          
    }         



module.exports = {
    sumaSimple,
    restoModulo,
    asignada,
    casaDeCambio,
    misterioMayor,
    supermercado,
    encadenado,
    migraciones,
    migracionesV2,
    estadoCelular,
    estadoCelularV2,
};