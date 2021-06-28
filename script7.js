// ***************  OBSERVABLES SUBSCRIPTIONS *************** 
//                     ** continuação **
const { Observable } = rxjs;


const observer = Observable.create((observer) => {
    setInterval(()=> { observer.next(1) }, 1000);
    setTimeout(()=> { observer.complete() }, 5000); 
});

const observer2 = Observable.create((observer) => {
    setInterval(()=> { observer.next(1) }, 1000);
    setTimeout(()=> { observer.complete() }, 5000); 
});


const subscription1 = observer.subscribe(
    num => console.log('Observable1', num), 
    err => console.log('Observable1', err), 
    () => console.log('Completed1') 
)

const subscription2 = observer.subscribe(
    num => console.log('Observable2', num), 
    err => console.log('Observable2', err), 
    () => console.log('Completed2') 
)

// Permite adicionar uma subscription, isso quer dizer, que quando a primeira subscriçao
// der um unsubscribe() a segunta vai fazer o mesmo
subscription1.add(subscription2);


setTimeout(()=> { 
    subscription1.unsubscribe();
}, 2000);