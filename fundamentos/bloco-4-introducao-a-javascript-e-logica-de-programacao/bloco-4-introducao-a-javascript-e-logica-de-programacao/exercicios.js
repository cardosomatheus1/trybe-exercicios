const n = 15;
const numeroDeLinhas = (n + 1) / 2;
let asteriscos = '*';
let espaços = '';
let aux = numeroDeLinhas - 1;
for (let i = 1; i <= n; i += 2) {
    for (let z = aux; z > 0; z -= 1) {
        espaços += ' ';
    }
    console.log(espaços + asteriscos);
    asteriscos += '**';
    espaços = '';
    aux -= 1;
} 