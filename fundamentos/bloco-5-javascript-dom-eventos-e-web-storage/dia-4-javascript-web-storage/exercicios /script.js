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
addOpcoes("FontFamily", "Arial", "FontFamily");
texto("Verdana", "FontFamily")
addOpcoes("FontFamily", "Verdana, sans-serif", "FontFamily");
texto("Times", "FontFamily")
addOpcoes("FontFamily", "Times, Times New Roman, serif", "FontFamily");
texto("Georgia", "FontFamily")
addOpcoes("FontFamily", "Georgia, serif", "FontFamily");
texto("Luminari", "FontFamily")
addOpcoes("FontFamily", "Luminari, fantasy", "FontFamily");


    let background = document.querySelector('#backgroundColor')
    let texto1 =document.getElementById("texto")
    let let2 = document.getElementsByName("backgroundColor")
    let let3 =let2.name
    console.log(let2)
