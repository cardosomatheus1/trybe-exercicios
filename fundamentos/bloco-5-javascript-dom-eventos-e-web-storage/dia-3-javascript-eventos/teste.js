console.log(document.getElementById("elementoOndeVoceEsta").parentNode)
document.getElementById("elementoOndeVoceEsta").parentNode.style.backgroundColor = "red"
document.querySelector("#primeiroFilhoDoFilho").innerText = "texto"
console.log(document.getElementById("pai").firstElementChild)
console.log(document.getElementById("elementoOndeVoceEsta").parentNode.firstElementChild)
console.log(document.getElementById("elementoOndeVoceEsta").nextSibling)
console.log(document.getElementById("elementoOndeVoceEsta").nextElementSibling)
console.log(document.getElementById("pai").lastElementChild.previousElementSibling)


// let pai = document.getElementById("pai");
// let irmaoElemento = document.createElement('section');
// irmaoElemento.id="irmaoElemento";
// pai.appendChild(irmaoElemento)

console.log(document.getElementById("irmaoElemento"))

let ondeEsta = document.getElementById("elementoOndeVoceEsta");
let filhoElemento = document.createElement('section');
filhoElemento.id="filhoElemento";
ondeEsta.appendChild(filhoElemento)

console.log(document.getElementById("filhoElemento"))

let primeiroFilhoFilho = document.getElementById("primeiroFilhoDoFilho");
let netoFilho = document.createElement('section');
netoFilho.id="netoFilho";
primeiroFilhoFilho.appendChild(netoFilho)

console.log(document.querySelectorAll("netoFilho"))

console.log(document.getElementById("netoFilho").parentNode.parentNode.parentNode.lastElementChild.previousElementSibling.previousElementSibling)

const pai = document.getElementById('pai');

for (let index = pai.childNodes.length - 1; index >= 0; index -= 1) {
  const ondeVoceEsta = pai.childNodes[index];
  if (ondeVoceEsta.id !== 'elementoOndeVoceEsta') {
    pai.removeChild(ondeVoceEsta);
  }
}
console.log(pai.childNodes)