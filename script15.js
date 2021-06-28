// ***************  OBSERVABLES - OPERADORES *************** 
//                     ** continuação **
const { interval, range, generate, fromEvent, defer, of, bindCallback  } = rxjs;

// ***************  OPERADORES - INTERVAL  *************** 
// Interval: esse operador define uma quantidade de tempo que vai ser emitido um valor, um valor por vez, 
// com valores numericos, no caso 5000 milisegundos: a cada 5 segundo ele emite um valor

// interval(5000).subscribe(v => console.log(v));


// ***************  OPERADORES - RANGE  *************** 
// Range: possibilita definir o valor inicial, e quantos valores ele irá emitir
// neste caso começa em 10, e emite 5 valores

// range(10, 5).subscribe(v => console.log(v));


// ***************  OPERADORES - GENERATE  *************** 
// é parecido com o for

//generate(0, x => x <10, x => x + 1).subscribe(v => console.log(v));


// ***************  OPERADORES - FROM EVENT  *************** 
// Da mesma forma que dá pra transformar promises em observables, é possivel transformar eventos do javascript
// em observables
const btn = document.querySelector('button');
// no caso abaixo teria o proprio evento sendo emitido no observable

// fromEvent(btn, 'click').subscribe(v => console.log(v))


// ***************  OPERADORES - DEFER  *************** 
// Encapsula alguma funçaõ, qualquer que seja, ela só vai ser executada quando tiver um subscribe()

defer(() => {
    return of(1);
}).subscribe(v => console.log(v))


// ***************  OPERADORES - BIND CALLBACK  *************** 
// També é possivel criar observables a partir de funções que retornam callbacks

// tem uma função que recebe

const a = (a, cb) => {
    cb(a)
}
bindCallback(a)(10).subscribe(e => console.log(e))



