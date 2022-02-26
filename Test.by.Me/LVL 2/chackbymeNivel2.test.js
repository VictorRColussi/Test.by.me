const { elFamosoArray,
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
 } = require('./checkbymeNivel2.js');

 

    describe('elFamosoArray', function(){

        it('debio devolver la cadena del array',function(){
            expect(elFamosoArray([1,12,16,18])).toEqual([1,12,16,18]);
        })

    })   ;

    describe('descubre', function(){

        it('debio devolver la cantidad de elementos que son 4',function(){
            expect(descubre([1,12,16,18])).toEqual(4);
        })

    })   ;

    describe('extrae', function(){

        it('debio devolver el elemento de indice 0 que es 777',function(){
            expect(extrae([777,12,16,18])).toEqual(777);
        })

    })   ;

    describe('agrega', function(){

        it('debio devolver al final del array Favaloro',function(){
            expect(agrega(["Colussi", "Marcico", "Millei", "Prato"])).toEqual(["Colussi", "Marcico", "Millei", "Prato", "Favaloro"]);
        })

    })   ;

    describe('quita', function(){

        it('debio devolver almorzar, dormir, deberia de haber quitado estudiar',function(){
            expect(quita(["almorzar","estudiar","dormir"],"estudiar")).toEqual(["almorzar","dormir"]);
        })

    })   ;

    describe('sumaTon', function(){

        it('debio de devolver 20,30,40,50,60',function(){
            expect(sumaTon([10,20,30,40,50])).toEqual([20,30,40,50,60]);
        })

    })   ;


    describe('logueo', function(){

        it('debio devolver "El usuario ya existe"', function(){
            expect(logueo('victor',['juan','pedro','victor','facundo'])).toEqual("El usuario ya existe")                       
        });
        it('debio devolver "El usuario a sido agregado existosamente"', function(){
            expect(logueo('facundo',['juan','pedro','gonzalo','victor'])).toEqual(["juan", "pedro", "gonzalo", "victor", "facundo"])                       
        })          

    });

    describe('elTildador', function(){

        it('debe devolver un array del 1 al 100"', function(){
            expect(elTildador([])).toEqual([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100 ])                       
        });
                 

    });

    describe('estadisticaMundial', function(){

        it('debe de devolver Argentina, Venezuela, Peru', function(){
            expect(estadisticaMundial(["Argentina","Venezuela","Argentina","Peru"])).toEqual(["Argentina","Venezuela","Peru"])                       
        });
       
        

    });

    describe('doWhile', function(){

        it('debio devolver 0', function(){
            expect(doWhile([undefined,'casa','pato'])).toEqual(0)                       
        });
        it('debio devolver 0', function(){
            expect(doWhile(['facundo',undefined,'pato'])).toEqual(["facundo",undefined,"pato"])                       
        });  
        it('debio devolver facundo, pato, mono', function(){
            expect(doWhile(['facundo','pato','mono'])).toEqual(["facundo", "pato", "mono",])                       
        });          
        

    });

    describe('asistente', function(){


        it('debio devolver Hola Juan que tengas un hermoso lunes', function(){
            expect(asistente("lunes","Juan")).toEqual("Hola Juan que tengas un hermoso lunes")                       
        });
        it('debio devolver Hola Juan que tengas un buen fin de semana', function(){
            expect(asistente("viernes","Juan")).toEqual("Hola Juan que tengas un buen fin de semana")                       
        });  
        it('debio devolver Hola Juan descansa en tu domingo', function(){
            expect(asistente("domingo","Juan")).toEqual("Hola Juan descansa en tu domingo")                       
        });          
        

    });