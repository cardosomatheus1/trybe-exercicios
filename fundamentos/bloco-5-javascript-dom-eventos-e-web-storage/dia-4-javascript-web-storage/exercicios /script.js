const forms = document.getElementById("forms");
function addForms() {
  const forms = document.getElementById("forms");
  const form = document.createElement("form");
  form.name = "formulario";
  form.id = "form";
  forms.appendChild(form);
}
addForms();
function addLabel(texto) {
  const formu = document.getElementById("form");
  const label = document.createElement("label");
  label.className = "lab";
  label.innerText = texto;
  label.style.display = "block";
  label.style.fontWeight = "bold"
  label.style.fontSize = "20px"
  formu.appendChild(label);
}

function texto(corTexto) {
  const forms2 = document.getElementById("form");
  const text = document.createElement("p");
  text.style.display = "inline-block";
  text.innerText = corTexto;
  forms2.appendChild(text);
}

function addOpcoes(tipo, cor, classe) {
  const formu1 = document.getElementById("form");
  const checkbox = document.createElement("input");
  checkbox.className = classe;
  checkbox.type = "radio";
  checkbox.name = tipo;
  checkbox.value = cor;
  checkbox.style.display = "inline-block";
  checkbox.style.marginRight = "10px"
  formu1.appendChild(checkbox);
}
addLabel("Cor de fundo");
texto("Branco")
addOpcoes("backgroundColor", "white","backgroundColor" );
texto("Preto")
addOpcoes("backgroundColor", "black","backgroundColor");
texto("Azul")
addOpcoes("backgroundColor", "blue","backgroundColor");
texto("Vermelho")
addOpcoes("backgroundColor", "red","backgroundColor");
texto("Amarelo")
addOpcoes("backgroundColor", "yellow","backgroundColor");

addLabel("Cor de texto");
texto("Branco")
addOpcoes("color", "white", "color");
texto("Preto")
addOpcoes("color", "black", "color");
texto("Azul")
addOpcoes("color", "blue", "color");
texto("Vermelho")
addOpcoes("color", "red", "color");
texto("Amarelo")
addOpcoes("color", "yellow", "color");

addLabel("Tamanho da fonte");
texto("10px")
addOpcoes("fontSize", "10px", "fontSize");
texto("15px")
addOpcoes("fontSize", "15px", "fontSize");
texto("20px")
addOpcoes("fontSize", "20px", "fontSize");
texto("25px")
addOpcoes("font-size", "25px", "fontSize");
texto("30px")
addOpcoes("fontSize", "30px", "fontSize");

addLabel("Espaçamento entre linhas");
texto("10px")
addOpcoes("lineHeight", "10px", "lineHeight");
texto("15px")
addOpcoes("lineHeight", "15px", "lineHeight");
texto("20px")
addOpcoes("lineHeight", "20px", "lineHeight");
texto("25px")
addOpcoes("lineHeight", "25px", "lineHeight");
texto("30px")
addOpcoes("lineHeight", "30px", "lineHeight");

addLabel("Tipo da fonte");
texto("Arial")
addOpcoes("FontFamily", "Arial", "FontFamily");
texto("Verdana")
addOpcoes("FontFamily", "Verdana, sans-serif");
texto("Times")
addOpcoes("FontFamily", "Times, Times New Roman, serif", "FontFamily");
texto("Georgia")
addOpcoes("FontFamily", "Georgia, serif", "FontFamily");
texto("Luminari")
addOpcoes("FontFamily", "Luminari, fantasy", "FontFamily");


    let background = document.querySelector('.backgroundColor')
    let texto1 =document.getElementById("texto")
    background.addEventListener('change',function(){
    let corBackground = background.value
    console.log(corBackground)
    texto1.style.backgroundColor = corBackground

    })

