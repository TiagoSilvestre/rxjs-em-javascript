// ***************  OBSERVABLES *************** 
//               ** continuação **

const { Observable } = rxjs;
// como vimos no script anterior o observable tem o comportamento de estado não compartilhado,
// porém podemos deixar ele com o comportamento como o da promise usando o share()
const { share } = rxjs.operators;


const promise1 = new Promise((resolve) => {
    console.log('Iniciando a promise');
    setTimeout(() => resolve(1), 3000);
});

const observable1 = Observable.create((observer) => {
    console.log('Iniciando o observable');
    setTimeout(() => observer.next(1), 3000);
}).pipe(
    share() // aplicamos aqui o share()
)

promise1.then(num => console.log('Promise Then1', num))
observable1.subscribe(num => console.log('Observable subs1', num));

setTimeout(() => {
    promise1.then(num => console.log('Promise Then2', num));
    observable1.subscribe(num => console.log('Observable subs2', num));
}, 2000);