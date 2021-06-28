// ***************  OBSERVABLES - SUBJECT *************** 
//                     ** continuação **
// Subjects emitem valores independente de alguem estar ouvindo ou não,
// existem outros tipos de subject como: BehaviorSubjects, AsyncSubjects e ReplaySubjects,
// que possuem o comportamento um pouco diferente, mas serao vistos nos próximos scripts.
const { Subject, Observable } = rxjs;

const sub = new Subject();
// Emitindo os valores antes de ter um subscribe
sub.next(1);
sub.next(2);
sub.next(3);
sub.next(4);

// os valores já emitidos pelo subject nao serao capturados aqui, pois já foram emitidos
const subscription1 = sub.subscribe({
    next: num => console.log('Observable1 ', num), 
    error: err => console.log('Observable1 ', err), 
    complete: () => console.log('Completed')
});

setTimeout(() => {subscription1.unsubscribe()}, 3000);
