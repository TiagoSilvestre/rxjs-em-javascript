// ***************  OBSERVABLES - SUBJECT *************** 
//                     ** continuação **
// Agora se vc observar o objeto que entra como parametro para a função subscribe() tem os mesmos métodos
// que o subject(next(), error(), complete), então é possível criar um observable que emite valores

const { Subject, Observable } = rxjs;

const sub = new Subject();


const observable = Observable.create((observer) => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.next(4);
    observer.next(5);
});


const subscription2 = sub.subscribe({
    next: num => console.log('Observable2 ', num), 
    error: err => console.log('Observable2 ', err), 
    complete: () => console.log('Completed')
});

// Aqui voce poderia se inscrever no observable, e poderia passar o subject, pois as interfaces são compatíveis,
// isso faria com que as emissões do observable fossem transmitidas para o subject
// acredito que ele encadearia as emissoes, pois o subscription2 irá receber as emissoes do subject, que vem do observable.
// Foi nessecário dar um subscribe() no subject antes para o subscription poder pegar as emissoes, pois os subjects 
// emitem independente de ter subscritos
const subscription1 = observable.subscribe(sub);



