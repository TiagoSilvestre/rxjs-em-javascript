// ***************  OBSERVABLES *************** 
//               ** continuação **
const { Observable } = rxjs;

// ##### DIREFENÇAS PROMISES E OBSERVABLES #######

// As promises sao compartilhadas(multicast)
// Os observables são compartilhados ou não(multicast/unicast)

const promise1 = new Promise((resolve) => {
    console.log('Iniciando a promise');
    setTimeout(() => resolve(1), 3000);
});

const observable1 = Observable.create((observer) => {
    console.log('Iniciando o observable');
    setTimeout(() => observer.next(1), 3000);
});

promise1.then(num => console.log('Promise Then1', num))
observable1.subscribe(num => console.log('Observable subs1', num));

setTimeout(() => {
    promise1.then(num => console.log('Promise Then2', num));
    observable1.subscribe(num => console.log('Observable subs2', num));
}, 2000);

// o resumo da execução desses códigos acima é que a promise, o bloco de execução, vai ser executada apenas uma única vez
// e todo mundo que 'se inscrever', fazendo o  .then(), vai recever somente aquele valor
// que foi emitido uma unica vez, e o bloco não é reexecutado, tendo o comportamento de estado compartilhado.
// Diferente do observable que executa o bloco toda vez que tem uma inscrição, ele tem um comportamento de estado
// não compartilhado.
// porem isso pode ser alterado, veja no próximo script