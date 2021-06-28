// ***************  OBSERVABLES *************** 

const { Observable } = rxjs;

// ##### DIREFENÇAS PROMISES E OBSERVABLES #######
// promises sempre são assíncronas
// observable podem ser sincrono ou assincrono


const promise1 = new Promise((resolve) => {
    resolve(1)
});

const observable1 = Observable.create((observer) => {
    observer.next(1), // esse valor vai ser emitido de forma síncrona
    observer.next(2), // Todos os valores resolvidos de cara, ele vai fazer de forma síncrona
    observer.next(3),
    observer.next(4),
    setTimeout(()=> { // como está dentro de um setTimeout esse valor ele irá resolver de forma assinincrona
        observer.next(5)
    }, 1500);
});

promise1.then(num => console.log('Promise Then1', num))
console.log('Depois da Promise')
observable1.subscribe(num => console.log('Observable subs1', num));
console.log('Depois do Observable')

// no exemplo acima mesmo a promise sendo executada primeiro, ela é exibida depois do observable
// porque ela é assincrona e o observeble já esta emitindo um valor de forma sincrona


// OBSERVABLES ASSINCRONOIS