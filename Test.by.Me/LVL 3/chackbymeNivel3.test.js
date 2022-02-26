const { guerrero,
    guerreroActivo,
    guerreroSaluda,
    guerrerosConS,
    leageOfJava       
 } = require('./checkbymeNivel3.js');

 

    describe('guerrero', function(){

        it('debio devolver la cadena del array',function(){
            expect(guerrero()).toEqual({
            nombre: 'Archival',
            escudo: 'Metal rustico',
            habilidad: [
              'Cuchilla de punta',
              'Escape letal',
              'Desarme fugaz'
            ]});
        })

    })   ;

    describe('guerreroActivo', function(){

        it('debio devolver la cadena del array',function(){
            expect(guerreroActivo()).toEqual('chau')
        })

    })   ;

    describe('guerreroSaluda', function(){

        it('debio devolver la cadena del array',function(){
            expect(guerreroSaluda()).toEqual('hola soy Archival mi habilidad es Escape letal seria un placer luchar para ti')
        })

    })   ;

    describe('guerrerosConS', function(){

        it('debio devolver la cadena del array',function(){
            expect(guerrerosConS()).toEqual({
                    nombre: 'Arrow',
                    escudo: null,
                    habilidad: [
                      'sigilo nocturno',
                      'onda de choque',
                      'flechas rastreadoras'
                    ],
                    }

            )
        })

    })   ;


    describe('leageOfJava ', function(){

        it('debio devolver la cadena del array',function(){
            expect(leageOfJava()).toEqual({
                identidad: [ 'Daeneris', 'Stormborn' ],
                clan: 'Hadas',
                elemento: 'Tierra',
                dios: 'Dios dragon',
                escudo: 'tejido de telaraña',
                habilidad: [
                  'canto de atraccion',
                  'Dracarys',
                  'enredadera envenenada'
                ],
                puntaje: 1320,
                }
              )
        })

    })   ;