console.log(`\nTrabalhando com loops`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 15;
const estaAcompanhado = true;
let temPassagemComprada = false;
const destino = "São Paulo";

console.log("\nDestinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhado;

let contador = 0;
while (contador < 3) {
    if (listaDeDestinos[contador] == destino) {
        console.log("Destino existe")
    } else {
        console.log("Destino não existe");
    }
    contador += 1;
}
