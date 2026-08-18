// function apresentar(nome){
//     console.log(`olá, ${nome}`)
// }

// apresentar("João");

function somar(a , b){
    console.log(`${a} + ${b} = ${a+b}`)
}

somar(8, 15);

function apresentar(nome = "visitante"){
    console.log(`olá, ${nome}`)
}

apresentar();
apresentar("João");