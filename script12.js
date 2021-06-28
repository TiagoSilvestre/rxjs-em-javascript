// ***************  OBSERVABLES - SUBJECT *************** 
//                   ** REPLAY SUBJECT **
// ReplaySubjecct: eles armazenam uma quantidade definida de valores emitidos

const { ReplaySubject, Observable } = rxjs;

// pode-se definir um valor no construtor, para dizer quantos valores emitidos ele vai propagar para
// quem se inscrever, no caso aqui 4 valores
const sub = new ReplaySubject(4);

sub.next(1);
sub.next(2);
sub.next(3);
sub.next(4);

// esse subscription vai pegar os 4 ultimos valores
const subscription1 = sub.subscribe({
    next: num => console.log('Observable1 ', num), 
    error: err => console.log('Observable1 ', err), 
    complete: () => console.log('Completed')
});

sub.next(5);
sub.next(6);

// esse subscription vai pegar os 4 ultimos valores
const subscription2 = sub.subscribe({
    next: num => console.log('Observable2 ', num), 
    error: err => console.log('Observable2 ', err), 
    complete: () => console.log('Completed')
});

// só por curiosidade, o ReplaySubject() é a mesma coisa que um BehaviorSubject com o valor 1, assim: new ReplaySubject(1);
// porem ele tem uma outra vantagem, ele pode receber um segundo paramentro que indica os milisegundos que ele vai armazenar
// essa informação