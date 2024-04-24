// Arrays
let listaTecnologias = [];
let alfa = [];
let cursos = ['HTML', 'CSS', 'Javascript', 'React'];
//              0       1         2           3

console.log(cursos);
console.log(cursos[2]);
console.log(cursos[1]);

listaTecnologias.push('Javascript');
listaTecnologias.push('Angular');
listaTecnologias.push('React');
listaTecnologias.push('Vue-js');

console.log(listaTecnologias);
let novaLista = listaTecnologias;

console.log(novaLista.pop());
console.log(novaLista.shift());

//        0    1    2    3    4    5
alfa = [ 'a', 'b', 'c', 'd', 'e', 'f'];
alfa.splice(2,1);
console.log(alfa);

//        0    1    2    3    4    5
alfa = [ 'a', 'b', 'c', 'd', 'e', 'f'];
alfa.splice(1,3);
console.log(alfa);

let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
const resultA = numeros.find((value) => {
    return value>10
})
console.log(resultA);

const resultB = numeros.filter((value) => {
    return value>10
});
console.log(resultB);

const condicao= (value) => {
    return value<10
}

const resultC = numeros.filter(condicao);
console.log(resultC);


const resultD = listaTecnologias.find((value) => {
    return value==='Angular'
});
console.log(resultD);

const novaListaNumeros = numeros.map((value) => (
    value*100
));
console.log(novaListaNumeros);

const resultE = numeros.map((value) => {
    if (value%2 === 0) {
        return value*1000
    } else {
        return value*100
    }
});
console.log(resultE);

// callback

let total = 0;
const valores = [10, 20, 30, 40, 50];

for (idx = 0;idx<valores.length;idx++) {
    console.log(idx);
    console.log(valores[idx])
    total = total + valores[idx];
}
console.log('Continua a execução');
console.log(total);

total = 0;
valores.forEach(element => {
    total = total + element
});
console.log('Continua a execução após o forEach');
console.log(total);

total = 0;
for ( let idx in valores) {
    total = total + valores[idx]
};
console.log('Continua a execução após o for in');
console.log(total);

idx = 0;
total = 0;
while (idx<5) {
    total = total + valores[idx];
    idx++;
} 
console.log('Continua a execução após o while');
console.log(total);

idx = 0;
total = 0;
do {
    total = total + valores[idx]
    idx++
} while (idx<5);
console.log('Continua a execução após o do while');
console.log(total);





