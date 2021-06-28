// *************** OBSERVABLES *************** 
//       ** e comparações com promises **
//
// São encapsuladores de dados, assim como as promises também são
// Voce pode encapsular um dado em um observable para poder acessar os métodos que o 
// própio rxjs te dá
// A promise tambem funciona dessa forma, voce encapsula dados em uma promise
// pra voce ter acesso alguns dos metodos como o then() e o catch() pra depois poder
// pegar aqueles dados de volta

// essa é uma abstração pra poder usar da mesma forma que se fosse com um import
// importa a lib rxjs do cdn, no index 
const { Observable } = rxjs;

// ##### DIREFENÇAS PROMISES E OBSERVABLES #######
// promises emitem valores únicos
// observales emitem multiplos valores

// aqui eu encapsulei o valor 1 dentro de uma promise, podendo assim usar o .then() 
// Promise.resolve(1).then(num => console.log(num));

// outra forma de se criar promises
new Promise((resolve) => {
    resolve(1);
    // se tentassemos emitir dois valores dentro da promise, como outro resolve() abaixo
    // ela não emitiria
    // resolve(2);  
}).then(num => console.log('Promise', num))

// Da mesma forma como promises, podemos encapsular dados dentro dos observables, porem no observable
// podemos emitir multiplos valores. O subscribe() do Observable funciona como o then() da promise
Observable.create((observer) => {
    observer.next(1); // emite dados
    observer.next(2); // pode emitir multiplos valores    
}).subscribe(num => console.log('Observable', num));


// ##### DIREFENÇAS PROMISES E OBSERVABLES #######
// as promises tem sua execução imediata
// os observables tem sua execução sobre demanda(Lazy)

// Se não executassemos os metodos then() e subscribe() da promise e observable, ou seja,
// somente iniciar os objetos, veja abaixo as diferenças entre eles

new Promise((resolve) => {
    console.log('Iniciando a promise');
    resolve(1);
});

Observable.create((observer) => {
    console.log('Iniciando o observable');
    observer.next(1);
});

// o que o console vai imprimir vai ser somente o texto da promise por que
// somente a promise foi iniciada, mesmo sem ninguem pra consumir o seu dado(sem nenhum then()), ela já executa 
// todo o seu bloco de código, diferente do observable, que ele só será executado quando tiver algum subscribe() 

// Vamos testar com um timeout dando um subscribe no observable, pra ver ele sendo iniciado
// para ver o comportamento lazy
const obs1 = Observable.create((observer) => {
    observer.next(1);
});

setTimeout(() => {
    obs1.subscribe((data) => {
        console.log('Subscribe depois de 2 segundos no observable, dado passado: '+ data);
    });
}, 2000);



