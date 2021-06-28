// ***************  OBSERVABLES - SUBJECT *************** 
//                   ** BEHAVIOR SUBJECT **
//                     ** continuação **

// BehaviorSubject: ele inicia com um valor e ele sempre mantem o ultimo valor para ser emitido 
// para qualquer novo subscriber

const { BehaviorSubject, Observable } = rxjs;
// valor inicial, apartir do momento que alguem se subscrever, ele vai receber o valor inicial
const sub = new BehaviorSubject(0);

// captura o valor inicial
const subscription1 = sub.subscribe({
    next: num => console.log('Observable1 ', num), 
    error: err => console.log('Observable1 ', err), 
    complete: () => console.log('Completed')
});


// neste exemplo ele emite valores antes de ter um subscribe
const sub2 = new BehaviorSubject(0);
sub2.next(1);
sub2.next(2);
sub2.next(3);
sub2.next(4);
// como o BehaviorSubject armazena o ultimo valor, aqui ele vai emitir esse ultimo valor
const subscription2 = sub2.subscribe({
    next: num => console.log('Observable2 ', num), 
    error: err => console.log('Observable2 ', err), 
    complete: () => console.log('Completed')
});

// aqui emitimos mais dois valores
sub2.next(5);
sub2.next(6);
// o mesmo comportamento da subscription anterior
const subscription3 = sub2.subscribe({
    next: num => console.log('Observable3 ', num), 
    error: err => console.log('Observable3 ', err), 
    complete: () => console.log('Completed')
});