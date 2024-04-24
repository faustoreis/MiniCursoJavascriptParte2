// objetos
let objCliente = {
    nome: 'Fausto',
    sobreNome: 'Vilanova',
    fone: 51991929394
};
console.log(objCliente);
console.log(objCliente.fone);
objCliente.fone = 51871727374;
console.log("Telefone alterado");
console.log(objCliente);

let objString='{"nome": "fausto","sobreNome":"Vilanova","fone":519981828384}';
console.log(objString);
console.log("**********************************")
console.log(JSON.parse(objString));
console.log('****************************')
console.log(JSON.stringify(objCliente));

// let exibirErro = true;
// if (exibirErro) {
//     throw new Error("aqui é a msg de erro")
// }
// console.log('continua a execução');


let exibirErro = false;
try {
    if (exibirErro) {
       throw new Error("aqui é a msg de erro")
    }
} catch (erro) {
    console.log(erro);
}
console.log('continua a execução');