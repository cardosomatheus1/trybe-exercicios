window.onload = function(){
const forms = document.getElementById("forms");
function addForms() {
  const forms = document.getElementById("forms");
  const form = document.createElement("form");
  form.name = "formulario";
  form.id = "form";
  forms.appendChild(form);
}
addForms();

function criarDiv(divisoria) {
  const forms3 = document.getElementById("form");
  const divi = document.createElement("div");
  divi.style.display = "block";
  divi.id = divisoria
  forms3.appendChild(divi);
}
criarDiv("backgroundColor")
criarDiv("color")
criarDiv("fontSize")
criarDiv("lineHeight")
criarDiv("FontFamily")

function addLabel(texto,valor1) {
  const formu = document.getElementById(valor1);
  const label = document.createElement("label");
  label.className = "lab";
  label.innerText = texto;
  label.style.display = "block";
  label.style.fontWeight = "bold"
  label.style.fontSize = "20px"
  formu.appendChild(label);
}

function texto(corTexto,valor2) {
  const forms2 = document.getElementById(valor2);
  const text = document.createElement("p");
  text.style.display = "inline-block";
  text.innerText = corTexto;
  forms2.appendChild(text);
}


function addOpcoes(tipo, cor, valor) {
  const formu1 = document.getElementById(valor);
  const checkbox = document.createElement("input");
  checkbox.type = "radio";
  checkbox.name = tipo;
  checkbox.value = cor;
  checkbox.className = "bola"
  checkbox.style.display = "inline-block";
  checkbox.style.marginRight = "10px"
  formu1.appendChild(checkbox);
}
addLabel("Cor de fundo", "backgroundColor");
texto("Branco", "backgroundColor" )
addOpcoes("backgroundColor", "white","backgroundColor" );
texto("Preto", "backgroundColor")
addOpcoes("backgroundColor", "black","backgroundColor");
texto("Azul", "backgroundColor")
addOpcoes("backgroundColor", "blue","backgroundColor");
texto("Vermelho", "backgroundColor")
addOpcoes("backgroundColor", "red","backgroundColor");
texto("Amarelo", "backgroundColor")
addOpcoes("backgroundColor", "yellow","backgroundColor");

addLabel("Cor de texto", "color");
texto("Branco", "color")
addOpcoes("color", "white", "color");
texto("Preto", "color")
addOpcoes("color", "black", "color");
texto("Azul", "color")
addOpcoes("color", "blue", "color");
texto("Vermelho", "color")
addOpcoes("color", "red", "color");
texto("Amarelo", "color")
addOpcoes("color", "yellow", "color");

addLabel("Tamanho da fonte", "fontSize");
texto("10px", "fontSize")
addOpcoes("fontSize", "10px", "fontSize");
texto("15px", "fontSize")
addOpcoes("fontSize", "15px", "fontSize");
texto("20px", "fontSize")
addOpcoes("fontSize", "20px", "fontSize");
texto("25px", "fontSize")
addOpcoes("font-size", "25px", "fontSize");
texto("30px", "fontSize")
addOpcoes("fontSize", "30px", "fontSize");

addLabel("Espaçamento entre linhas", "lineHeight");
texto("10px", "lineHeight")
addOpcoes("lineHeight", "10px", "lineHeight");
texto("15px", "lineHeight")
addOpcoes("lineHeight", "15px", "lineHeight");
texto("20px", "lineHeight")
addOpcoes("lineHeight", "20px", "lineHeight");
texto("25px", "lineHeight")
addOpcoes("lineHeight", "25px", "lineHeight");
texto("30px", "lineHeight")
addOpcoes("lineHeight", "30px", "lineHeight");

addLabel("Tipo da fonte", "FontFamily");
texto("Arial", "FontFamily")
addOpcoes("fontFamily", "arial", "FontFamily");
texto("Verdana", "FontFamily")
addOpcoes("fontFamily", "verdana, sans-serif", "FontFamily");
texto("Times", "FontFamily")
addOpcoes("fontFamily", "times, times new roman, serif", "FontFamily");
texto("Georgia", "FontFamily")
addOpcoes("fontFamily", "georgia, serif", "FontFamily");
texto("Luminari", "FontFamily")
addOpcoes("fontFamily", "luminari, fantasy", "FontFamily");

  
  
let texto1 =document.getElementById("texto") 

function elementChange(numero){
let background0 = document.querySelectorAll("input")[numero]
let valorPropriedade = background0.value
let nomePropriedade = background0.name
if(nomePropriedade === "backgroundColor")
background0.addEventListener('click', function(){
  texto1.style.backgroundColor = valorPropriedade
  localStorage.setItem("background-color",valorPropriedade)
})
else if(nomePropriedade === "color"){
  background0.addEventListener('click', function(){
  texto1.style.color = valorPropriedade
  localStorage.setItem("color",valorPropriedade)
})
}
else if(nomePropriedade === "fontSize"){
  background0.addEventListener('click', function(){
  texto1.style.fontSize = valorPropriedade
  localStorage.setItem("font-size",valorPropriedade)
})
}
else if(nomePropriedade === "lineHeight"){
  background0.addEventListener('click', function(){
  texto1.style.lineHeight = valorPropriedade
  localStorage.setItem("line-height",valorPropriedade)
})
}
else if(nomePropriedade === "fontFamily"){
  background0.addEventListener('click', function(){
  texto1.style.fontFamily = valorPropriedade
  localStorage.setItem("font-family",valorPropriedade)
})
}
}
let background4 = document.getElementsByTagName("input")
let quantidade = background4.length
for(i=0;i<quantidade;i++){
  elementChange(i)
}

let savedBackgroundColor = localStorage.getItem("background-color")
let savedColor = localStorage.getItem("color")
let savedFontSize = localStorage.getItem("font-size")
let savedLineHeight = localStorage.getItem("line-height")
let savedFontFamily = localStorage.getItem("font-family")

texto1.style.backgroundColor =savedBackgroundColor
texto1.style.color = savedColor
texto1.style.fontSize = savedFontSize
texto1.style.lineHeight = savedLineHeight
texto1.style.fontFamily = savedFontFamily

}

