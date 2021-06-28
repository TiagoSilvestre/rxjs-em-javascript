// ***************  OBSERVABLES - SUBJECT *************** 
// Subjects sao um tipo especial de observable
// Enquanto os observables sao unicast por padrão, podendo ser multicast, os subjects sempre serão multicast,
// sempre terão o estado compartilhado. E os subjects ao mesmo tempo que são observable eles também são observers.
// Subjects emitem valores independente de ter subscribers
const { Subject } = rxjs;

// iniciando um subject
const sub = new Subject();

const subscription1 = sub.subscribe({
    next: num => console.log('Observable1 ', num), 
    error: err => console.log('Observable1 ', err), 
    complete: () => console.log('Completed')
});

const subscription2 = sub.subscribe({
    next: num => console.log('Observable2 ', num), 
    error: err => console.log('Observable2 ', err), 
    complete: () => console.log('Completed')
});

// eles podem emitir valores, cada emissao vai para todos os subscritos
sub.next(1);
sub.next(2);
sub.next(3);
// tambem tem os metodos error e complete
sub.error('Error message');
sub.complete();

// os subjects sao parecidos com o event emmiter do proprio node


// Agora se vc observar o objeto que entra como parametro para a função subscribe() tem os mesmos métodos
// que o subject(next(), error(), complete), então é possível

