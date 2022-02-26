// se debe agregar solo codigo despues de el comentario "AQUI ABAJO VA TU CODIGO"



function guerrero(){

// Nivel 3 complejidad 1

// crea un objeto literal, el mismo es un gerrero no recibira argumentos dentro de la funcion.
// deberas darle a gerrero la propiedad/caracteristica nombre "Archival" escudo "Metal rustico" habilidad: "Cuchilla de punta", "Escape letal", "Desarme fugaz"
// al final deberas devolver el Objeto creado. (presta atencion a que debes de llamar a los nombres de las propiedades (clave) y a su contenido (valor) tal cual se pide.

    guerrero = {

        nombre: "Archival",
        escudo: "Metal rustico",
        habilidad: ["Cuchilla de punta", "Escape letal", "Desarme fugaz"]
    
    }

  return guerrero

}

function guerreroActivo(){

    // Nivel 3 complejidad 1
    
    // usa el objeto que creaste en gerrero y añadele ahora la funcion (Metodo) que haga que salude y se despida
    // estos metodos se deberan de llamar saludo y despedida, el primero dira "hola" y el segundo "chau"
    // devuelve solo el metodo de despedida. Pista (no uses console.log aqui porque no funcionara para pasar el test)
    
    guerrero = {

        nombre: "Archival",
        escudo: "Metal rustico",
        habilidad: ["Cuchilla de punta", "Escape letal", "Desarme fugaz"],
        saluda: function(){return "hola"},
        despedida: function(){return "chau"}
    }
  

 
 return guerrero.despedida();


}

function guerreroSaluda(){


 // Nivel 3 complejidad 2
    
 // usa el objeto creado el ejercicio anterior ahora solo el mismo debe de usar la funcion saluda y decirnos "Hola soy (el nombre) mi habilidad es 
 // (debes traer solo la habilidad "Escape letal" extrayendola del array) seria un placer luchar para ti";


 guerrero = {

    nombre: "Archival",
    escudo: "Metal rustico",
    habilidad: ["Cuchilla de punta", "Escape letal", "Desarme fugaz"],
    saluda: function(){return "hola soy "+this.nombre+" mi habilidad es "+this.habilidad[1]+" seria un placer luchar para ti"},
    despedida: function(){return "chau"}
}

return guerrero.saluda()

}  


function guerrerosConS(){

    // Nivel 3 complejidad 3
   
   // Debemos crear un guerrero a partir de un constructor, todos cumpliran con las mismas propiedades, tendran nombre, escudo, habilidad, y un metodo de saludo y despedida.
   // crea un constructor que al pasarle los arguentos los fabrique y devuelva el objeto creado.
   // los valores de ese nuevo objeto seran nombre "Arrow", escudo "null", habilidad "sigilo nocturno", "onda de choque", "flechas rastreadoras"
   // ATENCION los metodos saludo ("hola") y despedida ("chau") deberan ser pasados como prototipo dentro del objeto.
   // el nombre del objeto creado debe de ser guerrero1
   
  class Guerrero{
      constructor(nombre,escudo,habilidad){

       this.nombre = nombre,
       this.escudo = escudo,
       this.habilidad = habilidad
       
      }

      saludo(){
   
       return "hola"

   }


       despedida(){
   
       return "chau"

   }


  }

 const guerrero1 = new Guerrero("Arrow",null,["sigilo nocturno", "onda de choque", "flechas rastreadoras"])
 
 return guerrero1
 

}


function leageOfJava(){

    // Nivel 3 complejidad 4 (sera quizas el mas dificil pero con este terminamos objetos y clases)
   
   // Debemos crear una clase Personaje la que tendra un constructor para datos comunes a todos los personas estos son:
   // identidad (nombre,apellido); clan (); elemento () dios:()
   
   
   // ahora crearemos un constructor que creara las Hadas tomando como todas las propiedades de la classe Personaje y agregandole 
   // escudo, habilidad, puntaje

   // por ultimo crea un "hada1" a partir de la clase Hada que se llame nombre "Daenerys" apellido "Stormborn" del clan de las "Hadas" cuyo elemento es "tierra" y su dios es "Dios dragon"
   // escudo: "tejido de telaraña" habilidad: "canto de atraccion", "Dracarys", "enredadera envenenada" puntaje de poder (1320)
   
    // si te animas aunque no se evaluara pasale luego de creadas las clases, al prototipo de Personaje el saludo de bienvenida "Hola soy (identidad) pertenezco a los (clan) junto con (dios) confio en que te ayudaremos a ganar la guerra"

    // ahora esta todo listo devuelve el personaje de esta hada que se llamara "hada1"

  class Personaje{
      constructor(nombre, apellido,clan,elemento,dios){

       this.identidad = [nombre, apellido]
       this.clan = clan,
       this.elemento = elemento,
       this.dios = dios
       
      }

  }
  
  class Hada extends Personaje {
      constructor(nombre,apellido,clan,elemento,dios,escudo,habilidad,puntaje){
				
        super(nombre,apellido,clan,elemento,dios,),
       this.escudo = escudo,
       this.habilidad = habilidad, 
       this.puntaje = puntaje
       
       
      }

  }
  
  Personaje.prototype.saludo = function(){console.log("Hola soy "+this.identidad+" pertenezco al clan "+this.clan+" junto con nuestro "+this.dios+" confio en que te ayudaremos a ganar la guerra")}


 const hada1 = new Hada ("Daeneris","Stormborn","Hadas","Tierra","Dios dragon","tejido de telaraña",["canto de atraccion", "Dracarys", "enredadera envenenada"],1320)
 
 

 return hada1
 

}











module.exports = {
    guerrero,
    guerreroActivo,
    guerreroSaluda,
    guerrerosConS,
    leageOfJava
};