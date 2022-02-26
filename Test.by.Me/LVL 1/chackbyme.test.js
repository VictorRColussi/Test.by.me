const { sumaSimple,
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
 } = require('./checkbyme.js');

 

    describe('sumaSimple', function(){

        it('debio devolver 8',function(){
            expect(sumaSimple(5,3)).toBe(8)
        })

    })   ;


    describe('restoModulo', function(){

        it('debio devolver 2',function(){
            expect(restoModulo(17,5)).toBe(2)
        })

    })   ;

    describe('asignada', function(){

        it('debio devolver 150',function(){
            expect(asignada(15)).toBe(150)
        })

    })   ;

    describe('casaDeCambio', function(){

        it('debio devolver 30240',function(){
            expect(casaDeCambio(110)).toBe(16632)
        })

    })   ;

    describe('misterioMayor', function(){

        it('debio devolver 322',function(){
            expect(misterioMayor(7,54,322,100,123)).toBe(322)
        })

    })   ;

    describe('supermercado', function(){

        it('debio devolver 13',function(){
            expect(supermercado(12.16)).toBe(13)
        })

    })   ;

    describe('encadenado', function(){

        it('debio devolver pedro romualdo gomez',function(){
            expect(encadenado('pedro','romualdo','gomez')).toBe('pedro romualdo gomez')
        })

    })   ;

    describe('migraciones', function(){

        it('debio devolver Pedro R. GOMEZ',function(){
            expect(migraciones('peDRo','romualdo','gomez')).toBe('Pedro R. GOMEZ')
        })

    })   ;

    describe('migracionesV2', function(){

        it('debio devolver Pedro _ GOMEZ',function(){
            expect(migracionesV2('peDRo',undefined,'gomez')).toBe('Pedro _ GOMEZ')
        })
        it('debio devolver Pedro R. GOMEZ',function(){
            expect(migraciones('peDRo','romualdo','gomez')).toBe('Pedro R. GOMEZ')
        })

    })   ;

    
    
    describe('estadoCelular', function(){

        it('debio devolver false',function(){
            expect(estadoCelular("apagado")).toBe(false)
        })
        it('debio devolver true',function(){
            expect(estadoCelular("prendido")).toBe(true)
        })
       
        

    })   ;
    
    
    describe('estadoCelularV2', function(){

        it('debio devolver carga completa',function(){
            expect(estadoCelularV2(100)).toBe('carga completa')
        })
        it('debio devolver modo ahorro de bateria',function(){
            expect(estadoCelularV2(15)).toBe('modo ahorro de bateria')
        })
        it('debio devolver amarillo',function(){
            expect(estadoCelularV2(49)).toBe('amarillo')
        })
        it('debio devolver verde',function(){
            expect(estadoCelularV2(50)).toBe('verde')
        })

    })   ;

    // describe('sumaTodo', function(){

    //     it('debio devolver 50', function(){
    //         expect(sumaTodo([12,8,20,5,5])).toBe(50)            
    //     })        

    // });

    // describe('logueo', function(){

    //     it('debio devolver "El usuario ya existe"', function(){
    //         expect(logueo('victor',['juan','pedro','victor','facundo'])).toEqual("El usuario ya existe")                       
    //     });
    //     it('debio devolver "El usuario a sido agregado existosamente"', function(){
    //         expect(logueo('facundo',['juan','pedro','gonzalo','victor'])).toEqual(["juan", "pedro", "gonzalo", "victor", "facundo"])                       
    //     })          

    // });