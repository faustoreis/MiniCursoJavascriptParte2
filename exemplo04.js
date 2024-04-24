const promessa = new Promise((resolve,reject) => {
    const condicao = false;

    if (condicao) {
        resolve('Tudo esta OK');
    } else {
        reject('algo deu errado');
    }
});

promessa.then((msg) => {
    console.log(msg);
}).catch((erro) => {
    console.log(erro);
});

async function getDados () {
    const rs = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("******** dados recebidos ********")
        }, 3000);
    });
    const data = await rs;
    console.log(data);
};

getDados();
console.log("Continou a execução");