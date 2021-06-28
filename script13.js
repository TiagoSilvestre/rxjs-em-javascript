// ***************  OBSERVABLES - SUBJECT *************** 
//                   ** ASYNC SUBJECT **
// AsyncSubject: Tem um comportamento peculiar, ele só recebe a última emissão do subject e somente
// quando o subject for completado

const { AsyncSubject, Observable } = rxjs;

const sub = new AsyncSubject();

sub.next(1);
sub.next(2);
sub.next(3);
sub.next(4);


const subscription1 = sub.subscribe({
    next: num => console.log('Observable1 ', num), 
    error: err => console.log('Observable1 ', err), 
    complete: () => console.log('Completed')
});

sub.next(5);
sub.next(6);
sub.complete(); 

const subscription2 = sub.subscribe({
    next: num => console.log('Observable2 ', num), 
    error: err => console.log('Observable2 ', err), 
    complete: () => console.log('Completed')
});
