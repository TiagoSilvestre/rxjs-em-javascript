// ***************  OBSERVABLES SUBSCRIPTIONS *************** 
// Subscriptions: é a forma que você tem, de poder de se inscrever em um canal, um observable, um stream de dados,
// tudo isso é a mesma coisa, um observable é um stream de dados. A forma que você tem de receber esses dados do stream
// é através do subscribe()
const { Observable } = rxjs;

const observer = Observable.create((observer) => {
    setInterval(()=> { observer.next(1) }, 1000);
    setTimeout(()=> { observer.complete() }, 5000); // depois de 5 segundo o observable é completado

});

// o método subscribe pode receber 3 parametros, que são 3 callbacks
const subscription1 = observer.subscribe(
    num => console.log('Observable1', num), // o primeiro é o proprio valor emitido pelo observable
    err => console.log('Observable1', err), // callback de erro
    () => console.log('Completed') // complete, para observables finitos ele é executado ao final, dando erro ou nao
)

// Outra forma é se passar um objeto literal com as propriedades, next, error e complete
const subscription2 = observer.subscribe({
    next: num => console.log('Observable2', num), 
    error: err => console.log('Observable2', err), 
    complete: () => console.log('Completed')
});

// Ai podemos nos desinscrever da inscrição, ele simplesmente interrompe o fluxo, nao executa error nem complete
setTimeout(()=> { 
    subscription1.unsubscribe();
    subscription2.unsubscribe();
}, 2000);