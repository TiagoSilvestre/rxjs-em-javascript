// ***************  OBSERVABLES *************** 
const { Observable } = rxjs;

// ##### DIREFENÇAS PROMISES E OBSERVABLES #######
// promises não é cancelável
// observable é cancelável, com unsubscribe()

const promise1 = new Promise((resolve) => {
    resolve(1)
});

const observable1 = Observable.create((observer) => {
    let i = 0;

    const interval = setInterval(()=> { 
        // se comentasse-mos o retorno da funçao abaixo, e descomentassemos esse console log
        // veriamos que mesmo após o unsubscribe() no final do arquivo acontecer, o setInterval ainda estaria ativo
        // console.log('teste', i)
        observer.next(i++)
    }, 1000);

    return () => clearInterval(interval) // essa é uma forma de executar uma função quando o unsubscribe() acontecer
});


promise1.then(num => console.log('Promise Then1', num))
// apartir do momento que voce retorna um subscribe, voce pode cancelar a sua inscrição
const subscriber = observable1.subscribe(num => console.log('Observable subs1', num));

// depois de 3 segundos cancelamos a inscrição
setTimeout(() => {
    subscriber.unsubscribe() // cancelamos a inscrição, esse metodo vem do observable
}, 3000)
