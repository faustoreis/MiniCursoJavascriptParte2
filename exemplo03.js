const exibirMsg = (txt) => {
    console.log(txt);
};

exibirMsg('esta é uma msg de teste');

setTimeout(() => {
    exibirMsg('um texto qualquer 1')
}, 3000);

setTimeout(function () {
    console.log("texto qualquer 2")
}, 2000);


const percentual = (value, percent) => {
    return value * percent / 100;
}

const calcInss = (salBase, callBack) => {
    console.log(callBack(salBase, 9));
}

const calcValeTransporte = (salBase, callBack) => {
    console.log(callBack(salBase, 6));
}

calcInss(2500,percentual);
calcValeTransporte(2500,percentual);