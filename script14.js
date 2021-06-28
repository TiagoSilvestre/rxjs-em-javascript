// ***************  OBSERVABLES - OPERADORES *************** 
// Até agora vimos que é possível criar um observable através do método .create() do Observable
// Mas existem alguns operadores que servem para criar observables a partir de algum dado ou um tipo de conjunto

const { from, of } = rxjs;
const { take } = rxjs.operators;

// ***************  OPERADORES - OF *************** 
// Pode receber valores separados por virgula como argumento, mas devem ser valores finais
/* 
const { of } = rxjs;
of('titulo', 4 , true, [1,2,3]).subscribe(
   v => console.log(v)
);
*/ 

// ***************  OPERADORES - FROM *************** 
// Recebe estrutra de dados e através disso ele transforma em observable
// from([1,2,3]).subscribe(
//    v => console.log(v)
// );

// passando uma Promise
// from(Promise.resolve(1)).subscribe(
//    v => console.log(v)
// );

// passando uma estrutura de dados iteravel

// funçao generator para emitir valores infinitos
function* g() {
    while(true) {
        yield 1; // esse yield é analogo ao return 
    }
}
// como a função acima vai emitir valores infinitos usamos o take() para parar, 
// neste caso após emitir 10 valores
from(g()).pipe(take(10)).subscribe(v => console.log(v));

// tambem emite a partir de outro observable
from(of(1,2,3)).subscribe(v => console.log(v));


